import { Client } from 'pg';

// Async function to fetch user data and their address together
async function getUserDetailsWithAddress(userId: number) {
    const client = new Client({
        connectionString:"postgres://fagxctur:tu3wFqQxNmJyoPDvsA45BBa6E-TfFWza@rain.db.elephantsql.com/fagxctur"

    });

    try {
        await client.connect();
        const query = `
            SELECT e.id, e.username, e.email, a.city, a.country, a.street, a.pincode
            FROM employee e
            JOIN addresses a ON e.id = a.user_id
            WHERE e.id = $1
        `;
        const result = await client.query(query, [userId]);

        if (result.rows.length > 0) {
            console.log('User and address found:', result.rows[0]);
            return result.rows[0];
        } else {
            console.log('No user or address found with the given ID.');
            return null;
        }
    } catch (err) {
        console.error('Error during fetching user and address:', err);
        throw err;
    } finally {
        await client.end();
    }
}




getUserDetailsWithAddress(2);