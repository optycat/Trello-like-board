export const addList = (list) => ({ type: "ADDLIST", payload: list });
export const initList = (initialList) => ({ type: "INITLIST", payload: initialList });
export const deleteList = (deleteId) => ({ type: "DELETELIST", payload: deleteId });

export const addTask = (task) => ({ type: "ADDTASK", payload: task });
export const initTask = (initialTask) => ({ type: "INITTASK", payload: initialTask });
export const deleteTask = (deleteId) => ({ type: "DELETETASK", payload: deleteId });

export const updateInputValue = (value) => ({ type: "INPUTCHANGE", payload: value });