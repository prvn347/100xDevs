// user.ts

import { client } from "..";

export async function createUser(username: string, password: string, name: string) {
    try {
        // await client.connect();
        const query = "INSERT INTO users(username, password, name) VALUES ($1, $2, $3)";
        const values = [username, password, name];
        const res = await client.query(query, values);
        console.log('Insertion success:', res);
        const newOne = res.rows[0];
        return newOne;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    } 
}

export async function getUser(userId: number) {
    try {
        // await client.connect()
        const query = "SELECT * FROM users WHERE id = $1";
        const values = [userId];
        const res = await client.query(query, values);
        if (res.rows.length > 0) {
            console.log('User:', res.rows[0]);
            return res.rows[0];
        } else {
            console.log("User not found");
            return null;
        }
    } catch (error) {
        console.error('Error getting user:', error);
        throw error;
    }
}

createUser("prvn334","password","pravin");
getUser(1)