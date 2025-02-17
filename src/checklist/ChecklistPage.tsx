import { useState } from 'react'
import { FormGroup } from '@mui/material';
import { DefaultChecklist, Item } from './models';
import ChecklistItem from './ChecklistItem';

interface ChecklistPageProps {
    items: Item[];
}

const ChecklistPage = ({ items: defaultItems }: ChecklistPageProps) => {
    const [items, setItems] = useState(defaultItems);

    const triggerRefresh = () => {
        setItems([...items]);
    }

    return (
        <div>
            <h1>Checklist</h1>
            <FormGroup>
                {DefaultChecklist.map(item => ChecklistItem({
                    item,
                    recursiveParentCheck: triggerRefresh,
                    triggerRefresh
                }))}
            </FormGroup>
        </div>
    );
};

export default ChecklistPage;
