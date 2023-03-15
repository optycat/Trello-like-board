import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';

import { initList, initTask } from "../../storage/actions";
import useAPI from "../../services/useAPI";
import List from "../list/List";
import AddForm from "../addForm/AddForm";

import './board.scss';

const Board = () => {

    const lists = useSelector(state => state.lists);
    const dispatch = useDispatch();

    const { getAll } = useAPI();

    useEffect(() => {
        async function fetchData(essence, action) {
            const data = await getAll(essence);
            dispatch(action(data));
        }

        fetchData('lists', initList);
        fetchData('tasks', initTask);
    }, []);

    return (
        <Container className="board">
            <Row>
                <Col>
                    <div className="board-header">
                        <h1>Board!</h1>
                        <AddForm essense={'lists'} essenceStyles={"board-header-add"} />
                    </div>
                </Col>
            </Row>
            <Row>
                {lists.map(({ _id, title }, i) => {
                    return <List key={_id} id={_id} title={title} listId={i} />;
                })}
            </Row>
        </Container>
    )
};

export default Board;