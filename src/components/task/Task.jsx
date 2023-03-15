import { Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../storage/actions";

import useAPI from "../../services/useAPI";

import './task.scss';

const Task = ({ taskTitle, id }) => {

    const dispatch = useDispatch();
    const {deleteEssence} = useAPI();

    const handleDeleteTask = (id) => {
        deleteEssence('tasks', id);
        dispatch(deleteTask(id));
    };

    return (
        <Toast onClose={() => handleDeleteTask(id)}>
            <Toast.Header>
                <strong className="me-auto">{taskTitle}</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body />
        </Toast>
    )
};

export default Task;