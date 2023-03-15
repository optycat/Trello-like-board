import { Col } from "react-bootstrap";
import { deleteList } from "../../storage/actions";
import useAPI from "../../services/useAPI";
import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";

import Task from "../task/Task";
import AddForm from "../addForm/AddForm";

import './list.scss'

const List = ({ title, id, listId }) => {

    const tasks = useSelector(state => state.tasks);

    // useEffect(() => { console.log(tasks)}, []);

    const dispatch = useDispatch();
    const { deleteEssence } = useAPI();

    const handleDeleteList = (id) => {
        if (!tasks.filter(item => +item.listId === listId).length) {
            deleteEssence('lists', id);
            dispatch(deleteList(id));
        }
    };

    return (
        <Col className="d-flex justify-content-center" lg={4}>
            <ul className="list">
                <div className="list-header">
                    <h3>{title}</h3>
                    <button className="btn btn-outline-danger list-delete" onClick={() => handleDeleteList(id)}></button>
                </div>
                <ul>
                    {tasks.filter(item => +item.listId === listId).map(({ _id, taskTitle }) => <Task key={_id} taskTitle={taskTitle} id={_id} />)}
                </ul>
                <AddForm essense={'tasks'} essenceStyles={"list-add list-footer"} listId={listId} />
            </ul>
        </Col>
    )
};

export default List;