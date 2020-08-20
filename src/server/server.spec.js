import {addNewTask, updateTask } from './server';

(async function myFunc() {
    addNewTask({
        name: "My task",
        id: "12345736"
    });

    await updateTask({
        id: "12345736",
        name: "My task - UPDATED!!!!"
    })
}) ();