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
const TodoList_1 = __importDefault(require("./TodoList"));
const grommet_icons_1 = require("grommet-icons");
const StyledDiv = styled_components_1.default.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: auto;
`;
const TodoApp = () => {
    const [descOpen, setDescOpen] = react_1.useState(false);
    const [formData, setFormData] = react_1.useState({
        title: '',
        description: '',
        completed: false,
    });
    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (react_1.default.createElement(StyledDiv, null,
        react_1.default.createElement(grommet_1.Grid, { fill: true, responsive: true, alignSelf: "center", rows: ['xxsmall', 'auto', 'small', 'xsmall'], columns: ['3/4', '1/4'], areas: [
                ['header', 'header'],
                ['todo', 'todo'],
                ['todoform', 'todoform'],
                ['footer', 'footer'],
            ], gap: "small" },
            react_1.default.createElement(grommet_1.Box, { background: "brand", gridArea: "header", align: "center", justify: "around", direction: "row" },
                react_1.default.createElement(grommet_icons_1.Tasks, { size: "2rem" }),
                " ",
                react_1.default.createElement(grommet_1.Text, null, "TodoApp")),
            react_1.default.createElement(grommet_1.Box, { background: "brand", gridArea: "todoform", direction: "row", align: "center", justify: "around", pad: "0 0 0 1rem" },
                react_1.default.createElement(grommet_1.FormField, { name: "todo", required: true },
                    react_1.default.createElement(grommet_1.TextInput, { name: "title", value: formData.title, onChange: onChangeHandler, type: "text", placeholder: 'Add Todo' })),
                react_1.default.createElement(grommet_1.Button, { label: react_1.default.createElement(grommet_icons_1.AddCircle, { size: "2.5rem" }), href: "#", size: "medium", plain: true, onClick: () => setDescOpen(true) })),
            formData.title !== '' && descOpen && (react_1.default.createElement(grommet_1.Layer, { position: "center", onClickOutside: () => setDescOpen(false), onEsc: () => setDescOpen(false) },
                react_1.default.createElement(grommet_1.Box, null,
                    react_1.default.createElement(grommet_1.Form, { onSubmit: () => {
                            setDescOpen(false);
                            setFormData({
                                title: '',
                                description: '',
                                completed: false,
                            });
                        } },
                        react_1.default.createElement(grommet_1.FormField, { htmlFor: "text-area", name: "description", value: formData.description, onChange: onChangeHandler, component: grommet_1.TextArea, placeholder: "Description" }),
                        react_1.default.createElement(grommet_1.Box, { align: "center", justify: "center" },
                            react_1.default.createElement(grommet_1.Box, { pad: "0.5rem" },
                                react_1.default.createElement(grommet_1.Button, { type: "submit", label: "Add Description", primary: true })))),
                    ' '))),
            react_1.default.createElement(grommet_1.Box, { background: "light-2", gridArea: "todo", pad: "1rem" },
                react_1.default.createElement(TodoList_1.default, null)),
            react_1.default.createElement(grommet_1.Box, { background: "dark-2", gridArea: "footer", align: "center", justify: "center" },
                react_1.default.createElement(grommet_1.Text, null, "XPAY Amsterdam Dev Team")))));
};
exports.default = TodoApp;
