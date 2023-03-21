import { Col } from "react-bootstrap";
import { deleteList } from "../../storage/actions";
import useAPI from "../../services/useAPI";
import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
import TitlePretier from "../titlePretier/TitlePretier";

import Task from "../task/Task";
import AddForm from "../addForm/AddForm";

import './list.scss'

const List = ({ title, id }) => {

    const tasks = useSelector(state => state.tasks);

    const dispatch = useDispatch();
    const { deleteEssence } = useAPI();

    const handleDeleteList = (id) => {
        if (tasks.filter(item => item.listId === id).length === 0) {
            deleteEssence('lists', id);
            dispatch(deleteList(id));
        }
    };

    return (
        <Col className="d-flex justify-content-center" lg={4}>
            <ul className="list">
                <div className="list-header">
                    {/* <h3>{title}</h3> */}
                    <TitlePretier content={title} limit={25} />
                    <button className={`btn btn-outline-danger list-delete ${tasks.filter(item => item.listId === id).length > 0 ? 'disabled' : ''}`}
                        onClick={() => handleDeleteList(id)}></button>
                </div>
                <ul>
                    {tasks.filter(item => item.listId === id).map(({ _id, taskTitle, postedDate }) => <Task key={_id} taskTitle={taskTitle} id={_id} postedDate={postedDate} />)}
                </ul>
                <AddForm essense={'tasks'} essenceStyles={"list-add list-footer"} listId={id} />
            </ul>
        </Col>
    )
};

export default List;