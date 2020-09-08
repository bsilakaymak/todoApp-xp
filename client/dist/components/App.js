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
const React = __importStar(require("react"));
const grommet_1 = require("grommet");
const TodoApp_1 = __importDefault(require("./TodoApp"));
const utils_1 = require("grommet/utils");
const react_router_dom_1 = require("react-router-dom");
const EditTodo_1 = __importDefault(require("./EditTodo"));
const TodosContext_1 = require("./TodosContext");
const customTheme = utils_1.deepMerge(grommet_1.grommet, {
    global: {
        font: {
            family: 'Verdana',
        },
    },
    textInput: {
        extend: `::placeholder{
      color:#F2F2F2;
      padding:0;
      font-weight:500;
    };`,
    },
    textArea: {
        extend: `::placeholder{
      color:#7D4BDA;
      opacity:0.75;
      padding:0;
      font-weight:500;
    };`,
    },
});
const App = () => {
    return (React.createElement(grommet_1.Grommet, { theme: customTheme },
        React.createElement(TodosContext_1.TodosProvider, null,
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement(react_router_dom_1.Switch, null,
                    React.createElement(react_router_dom_1.Route, { path: "/", component: TodoApp_1.default, exact: true }),
                    React.createElement(react_router_dom_1.Route, { path: "/edit/:id", component: EditTodo_1.default, exact: true }))))));
};
exports.default = App;
