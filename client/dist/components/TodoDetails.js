"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const grommet_1 = require("grommet");
const grommet_icons_1 = require("grommet-icons");
const react_router_dom_1 = require("react-router-dom");
const TodoDetails = ({ todo, detailsOpen, onClose, onDelete, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null, detailsOpen && (react_1.default.createElement(grommet_1.Layer, { position: "center", onClickOutside: onClose, onEsc: onClose },
        react_1.default.createElement(grommet_1.Box, { pad: "medium", gap: "small", width: "medium" },
            react_1.default.createElement(grommet_1.Text, null, todo.description),
            react_1.default.createElement(grommet_1.Box, { direction: "row", justify: "around", pad: "large" },
                react_1.default.createElement(grommet_1.Button, { icon: react_1.default.createElement(grommet_icons_1.Trash, { color: "red" }), plain: true, type: "submit", onClick: () => {
                        onDelete(todo.title);
                        onClose();
                    } }),
                react_1.default.createElement(react_router_dom_1.Link, { to: `/edit/${todo.id}` },
                    react_1.default.createElement(grommet_1.Button, { plain: true, type: "submit" },
                        react_1.default.createElement(grommet_icons_1.Edit, { color: "#555555" })))))))));
};
exports.default = TodoDetails;
