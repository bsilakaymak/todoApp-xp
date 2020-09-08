"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoList = void 0;
const uuid_1 = require("uuid");
exports.todoList = [
    {
        id: uuid_1.v4(),
        title: 'Study',
        description: 'Finish TS tutorials',
        completed: false,
    },
    {
        id: uuid_1.v4(),
        title: 'Exercise',
        description: 'Go to the park and run for 20 minutes',
        completed: true,
    },
    {
        id: uuid_1.v4(),
        title: 'Clean the house',
        description: 'Wipe the floors, wash the dishes, do laundry',
        completed: false,
    },
    {
        id: uuid_1.v4(),
        title: 'Meet your friend',
        description: "Be  in Amsterdam Oost at 19 o'clock",
        completed: false,
    },
];
