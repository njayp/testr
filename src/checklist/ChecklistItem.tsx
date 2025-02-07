import Checkbox from '@mui/material/Checkbox';
import { Box, FormControlLabel } from '@mui/material';
import { Item } from './types';

const ChecklistItem = (item: Item, setParentChecked: (checked: boolean) => void, triggerRefresh: () => void): JSX.Element => {
    const setSelfAndParentChecked = (checked: boolean) => {
        item.checked = checked
        setParentChecked(checked);
    }

    const setSelfAndChildrenChecked = (checked: boolean) => {
        const checkSelfAndChildren = (item: Item): void => {
            item.checked = checked
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
                        setSelfAndParentChecked(checked)
                    } else {
                        setSelfAndChildrenChecked(checked)
                    }
                }}
            />} label={item.text} />
            <Box textAlign="left" ml={2}>
                {item.children?.map(child => ChecklistItem(child, setSelfAndParentChecked, triggerRefresh))}
            </Box>
        </>
    );
};

export default ChecklistItem;
