import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../storage/actions";
import TitlePretier from "../titlePretier/TitlePretier";

import useAPI from "../../services/useAPI";

import './task.scss';

const Task = ({ taskTitle, id, postedDate }) => {

    const dispatch = useDispatch();
    const { deleteEssence } = useAPI();
    const [timeFired, setTimeFired] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeFired(!timeFired);
        }, 60000);
        return () => clearTimeout(timer);
    }, [timeFired]);

    const handleDeleteTask = (id) => {
        deleteEssence('tasks', id);
        dispatch(deleteTask(id));
    };

    const getPostTime = () => {
        const postedMinutes = postedDate / 60000;
        const minutesLocal = new Date().getTime() / 60000;
        return Math.round(minutesLocal - postedMinutes);
    };

    return (
        <Toast onClose={() => handleDeleteTask(id)}>
            <Toast.Header>
                <TitlePretier className="me-auto" content={taskTitle} limit={12} tagName={'strong'} />
                {/* <strong className="me-auto">{taskTitle}</strong> */}
                <small>{getPostTime() > 60 ? 'more then hour ' : `${getPostTime()} mins `} ago</small>
            </Toast.Header>
            <Toast.Body />
        </Toast>
    )
};

export default Task;