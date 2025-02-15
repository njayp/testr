import Checkbox from '@mui/material/Checkbox';
import { Box, FormControlLabel } from '@mui/material';
import { Item } from './models';

interface ChecklistItemProps {
    item: Item;
    recursiveParentCheck: () => void;
    triggerRefresh: () => void;
}

const ChecklistItem = ({ item, recursiveParentCheck, triggerRefresh }: ChecklistItemProps): JSX.Element => {
    const selfAndParentCheck = () => {
        item.checked = true
        recursiveParentCheck();
    }

    const recursiveChildUncheck = () => {
        const checkSelfAndChildren = (item: Item): void => {
            item.checked = false
            item.children?.forEach(child => {
                checkSelfAndChildren(child)
            })
        }

        checkSelfAndChildren(item)
        triggerRefresh()
    }

    return (
        <>
            <FormControlLabel control={<Checkbox
                checked={item.checked}
                onChange={(event) => {
                    const checked = event.target.checked
                    if (checked) {
                        selfAndParentCheck()
                    } else {
                        recursiveChildUncheck()
                    }
                }}
            />} label={item.text} />
            <Box textAlign="left" ml={2}>
                {item.children?.map(item => ChecklistItem({
                    item,
                    triggerRefresh,
                    recursiveParentCheck: selfAndParentCheck,
                }))}
            </Box>
        </>
    );
};

export default ChecklistItem;
