import { Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { addList, addTask } from "../../storage/actions";
import useAPI from "../../services/useAPI";

import './addForm.scss';

export default function AddForm({ essense, essenceStyles, listId }) {

    const dispatch = useDispatch();

    const { addTaskEssense, addListEssense, getAll } = useAPI();

    const [inputValue, setInputValue] = useState();

    const handleInputChange = e => {
        setInputValue(e.target.value);
    };
    const tasks = useSelector(state => state.tasks);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim()) {

            const mongoObjectId = function () {
                var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
                return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
                    return (Math.random() * 16 | 0).toString(16);
                }).toLowerCase();
            };

            async function fetchData(essence, action) {
                const data = await getAll(essence);
                dispatch(action(data));
            }

            if (essense === 'tasks') {
                if (inputValue) {
                    addTaskEssense(inputValue, listId);
                    fetchData('tasks', () => addTask({ taskTitle: inputValue, listId: listId, _id: mongoObjectId() }));
                }
            } else {
                addListEssense(inputValue);
                fetchData('lists', () => addList({ title: inputValue, _id: mongoObjectId() }));
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