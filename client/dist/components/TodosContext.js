"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosProvider = exports.TodosContext = void 0;
const react_1 = __importStar(require("react"));
const react_2 = require("react");
const dummy_data_1 = require("../dummy-data");
const initialContext = {
    addTodo: () => undefined,
    toggleTodo: () => undefined,
    deleteTodo: () => undefined,
    setTodos: () => dummy_data_1.todoList,
    todos: [],
};
exports.TodosContext = react_2.createContext(initialContext);
exports.TodosProvider = ({ children }) => {
    const [todos, setTodos] = react_1.useState([...dummy_data_1.todoList]);
    const deleteTodo = (todo) => {
        const newTodos = todos.filter(todoItem => todoItem.title !== todo);
        console.log(dummy_data_1.todoList);
        setTodos(newTodos);
    };
    const addTodo = (todo) => {
        const newTodos = [...todos, todo];
        setTodos(newTodos);
    };
    const toggleTodo = (todo) => {
        const toggleIndex = todos.map(todoItem => todoItem.title).indexOf(todo);
        todos[toggleIndex].completed = !todos[toggleIndex].completed;
        todos.splice(toggleIndex, 1, todos[toggleIndex]);
    };
    return (react_1.default.createElement(exports.TodosContext.Provider, { value: {
            todos: todos,
            setTodos: setTodos,
            deleteTodo: deleteTodo,
            addTodo: addTodo,
            toggleTodo: toggleTodo,
        } }, children));
};
