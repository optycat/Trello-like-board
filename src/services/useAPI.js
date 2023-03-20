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

    const addTaskEssense = (taskTitle = 'empty task', listId = 0) => {
        fetch(`${_ApiBase}/tasks/add`, {
            method: 'POST',
            headers: _querryHeaders,
            body: `{"taskTitle": "${taskTitle}", "listId": "${listId}", "postedDate": "${new Date().getTime()}"}`
        });
    };

    const addListEssense = (addBody = 'empty list') => {
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