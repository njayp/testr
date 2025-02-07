import { useState } from 'react'
import { FormGroup } from '@mui/material';
import { DefaultChecklist } from './types';
import ChecklistItem from './ChecklistItem';

const ChecklistPage = () => {
    const [items, setItems] = useState(DefaultChecklist);

    const triggerRefresh = () => {
        console.log(items);
        setItems([...items]);
    }

    return (
        <div>
            <h1>Checklist</h1>
            <FormGroup>
                {DefaultChecklist.map(item => ChecklistItem(item, triggerRefresh, triggerRefresh))}
            </FormGroup>
        </div>
    );
};

export default ChecklistPage;
