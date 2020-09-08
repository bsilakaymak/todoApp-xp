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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const TodoItem_1 = __importDefault(require("./TodoItem"));
const grommet_1 = require("grommet");
const TodosContext_1 = require("./TodosContext");
const TodoList = () => {
    const options = ['All', 'Open', 'Completed'];
    const [value, setValue] = react_1.useState('All');
    const { todos } = react_1.useContext(TodosContext_1.TodosContext);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(grommet_1.Select, { id: "select", name: "select", placeholder: "Select", value: value, options: options, onChange: ({ option }) => setValue(option) }),
        value === 'All'
            ? todos.map((todo) => (react_1.default.createElement(TodoItem_1.default, { key: todo.title, todo: todo })))
            : todos
                .filter((todo) => {
                if (value === 'Completed') {
                    return todo.completed === true;
                }
                else {
                    return todo.completed === false;
                }
            })
                .map((todo) => (react_1.default.createElement(TodoItem_1.default, { key: todo.title, todo: todo })))));
};
exports.default = TodoList;
