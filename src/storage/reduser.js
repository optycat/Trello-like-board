const initialState = { lists: [], tasks: [], inputValue: '' };

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case "INITLIST":
            return {
                ...state,
                lists: [...action.payload],
            };
        case "ADDLIST":
            return {
                ...state,
                lists: [...state.lists, action.payload],
            };
        case "DELETELIST":
            return {
                ...state,
                lists: state.lists.filter(item => item._id !== action.payload),
            };
        case "INITTASK":
            return {
                ...state,
                tasks: [...action.payload],
            };
        case "ADDTASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case "DELETETASK":
            return {
                ...state,
                tasks: state.tasks.filter(item => item._id !== action.payload),
            };
        case "INPUTCHANGE":
            return {
                ...state,
                inputValue: action.payload,
            };
        default:
            return state;
    }
}

export default reduser;