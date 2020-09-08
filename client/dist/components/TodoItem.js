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
const grommet_1 = require("grommet");
const styled_components_1 = __importDefault(require("styled-components"));
const TodoDetails_1 = __importDefault(require("./TodoDetails"));
const TodosContext_1 = require("./TodosContext");
const StyledText = styled_components_1.default(grommet_1.Text) `
  text-decoration: ${props => props.complete && 'line-through'};
`;
const TodoItem = ({ todo }) => {
    const [checked, setChecked] = react_1.useState(todo.completed);
    const [detailsOpen, setDetailsOpen] = react_1.useState(false);
    const { deleteTodo, toggleTodo } = react_1.useContext(TodosContext_1.TodosContext);
    const onClose = () => {
        setDetailsOpen(false);
    };
    const onButtonClick = () => {
        setDetailsOpen(true);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(grommet_1.Box, { align: "start", pad: "large" },
            react_1.default.createElement(grommet_1.Box, { align: "center", pad: { left: '0', right: '0' } },
                react_1.default.createElement(grommet_1.CheckBox, { checked: checked, label: react_1.default.createElement(grommet_1.Button, { onClick: onButtonClick },
                        react_1.default.createElement(StyledText, { complete: checked }, todo.title)), onChange: () => {
                        toggleTodo(todo.title);
                        setChecked(todo.completed);
                    } })),
            react_1.default.createElement(TodoDetails_1.default, { todo: todo, onClose: onClose, onDelete: deleteTodo, detailsOpen: detailsOpen }))));
};
exports.default = TodoItem;
