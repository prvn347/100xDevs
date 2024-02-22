// todos.ts

import { client } from "..";

export async function createTodo(userId: number, title: string, description: string) {
    try {
        // await client.connect();
        const query = "INSERT INTO todos(user_id, title, description) VALUES ($1, $2, $3)";
        const values = [userId, title, description];
        const res = await client.query(query, values);
        console.log('Insertion success:', res);
        const newOne = res.rows[0];
        return newOne;
    } catch (error) {
        console.error('Error creating todo:', error);
        throw error;
    } 
}

export async function updateTodo( todoId: number) {
    try {
        const query = "UPDATE todos SET done = true WHERE id = $1";
        const values = [ todoId];
        const res = await client.query(query, values);
        console.log('Update success:', res);
        return true;
        const newUser = res.rows[0];
        return newUser;
    } catch (error) {
        console.error('Error updating todo:', error);
        throw error;
    } 
}

export async function getTodos(userId: number) {
    try {
        // await client.connect()
        const query = "SELECT * FROM todos WHERE user_id = $1";
        const values = [userId];
        const res = await client.query(query, values);
        if (res.rows.length > 0) {
            console.log('Todos:', res.rows);
            return res.rows;
        } else {
            console.log("No todos found");
            return [];
          
        }
    } catch (error) {
        console.error('Error getting todos:', error);
        throw error;
    } 
}
createTodo(3,"go to gym","everyday at night 9pm")
updateTodo(2)
getTodos(2)
