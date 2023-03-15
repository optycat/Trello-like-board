const useAPI = () => {

    const _ApiBase = 'https://test-app-backene-node.herokuapp.com';

    const _querryHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    const getAll = async (getEssence = 'tasks') => {
        return await fetch(`${_ApiBase}/${getEssence}/getAll`)
            .then(res => res.json());
    };

    const addTaskEssense = (addBody = []) => {
        fetch(`${_ApiBase}/tasks/add`, {
            method: 'POST',
            headers: _querryHeaders,
            body: `{"taskTitle": "${addBody[0]}", "listId": "${addBody[1]}"}`
        });
    };

    const addListEssense = (addBody = '') => {
        fetch(`${_ApiBase}/lists/add`, {
            method: 'POST',
            headers: _querryHeaders,
            body: `{"title": "${addBody}"}`
        });
    };

    const deleteEssence = (deleteEssence = 'tasks', deleteId) => {
        fetch(`${_ApiBase}/${deleteEssence}/delete`, {
            method: 'DELETE',
            headers: _querryHeaders,
            body: `{"_id": "${deleteId}"}`
        });
    };

    return { getAll, addTaskEssense, addListEssense, deleteEssence };
}

export default useAPI;