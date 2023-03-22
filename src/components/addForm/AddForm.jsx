import { Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { addList, addTask } from "../../storage/actions";
import useAPI from "../../services/useAPI";

import './addForm.scss';

export default function AddForm({ essense, essenceStyles, listId }) {

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    const { addTaskEssense, addListEssense } = useAPI();

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (inputValue.trim()) {

            async function fetchData(essence, action, fetchAction) {
                if (essence === 'tasks') {
                    const data = await fetchAction(inputValue, listId);
                    if (data.length === 1) dispatch(action(data[0]));
                }
                if (essence === 'lists') {
                    const data = await fetchAction(inputValue);
                    if (data.length > 1) dispatch(action(data[data.length - 1]));
                    if (data.length === 1) dispatch(action(data[0]));
                }
            }

            if (essense === 'tasks') {
                fetchData('tasks', addTask, addTaskEssense);
            } else {
                fetchData('lists', addList, addListEssense);
            }

            setInputValue('');
        }
    }

    return (
        <Form className={essenceStyles} onSubmit={handleSubmit}>
            <input className="form-control"
                type="text"
                id="disabledTextInput"
                placeholder={`Enter a ${essense.slice(0, essense.length - 1)} name`}
                value={inputValue}
                onChange={handleInputChange} />
            <button type="submit" className="add-button">Add</button>
        </Form>
    )
}