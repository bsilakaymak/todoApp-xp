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
const react_1 = __importStar(require("react"));
const grommet_1 = require("grommet");
const react_router_dom_1 = require("react-router-dom");
const TodosContext_1 = require("./TodosContext");
const EditTodo = () => {
    const { todos, setTodos } = react_1.useContext(TodosContext_1.TodosContext);
    const { id } = react_router_dom_1.useParams();
    const history = react_router_dom_1.useHistory();
    const todo = todos.find(todo => todo.id === id);
    const [formData, setFormData] = react_1.useState(todo.description);
    const onChange = (e) => {
        setFormData(e.target.value);
    };
    const editTodo = (formData) => {
        const toggleIndex = todos.map(todoItem => todoItem.id).indexOf(id);
        todos[toggleIndex].description = formData;
        todos.splice(toggleIndex, 1, todos[toggleIndex]);
        setTodos([...todos]);
        history.push('/');
        console.log(todos);
    };
    return (react_1.default.createElement(grommet_1.Box, { align: "center", justify: "center", direction: "column", pad: "large" },
        ' ',
        react_1.default.createElement(grommet_1.Form, null,
            react_1.default.createElement(grommet_1.FormField, { htmlFor: "text-area", onChange: onChange, value: formData, component: grommet_1.TextArea, placeholder: "Edit Description" }),
            react_1.default.createElement(grommet_1.Box, { align: "center", justify: "center" },
                react_1.default.createElement(grommet_1.Box, { pad: "0.5rem" },
                    react_1.default.createElement(grommet_1.Button, { type: "submit", label: "EDIT", primary: true, onClick: () => editTodo(formData) })),
                react_1.default.createElement(grommet_1.Box, { pad: "0.5rem" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                        react_1.default.createElement(grommet_1.Button, { label: "CANCEL" }))))),
        ' '));
};
exports.default = EditTodo;
