
import { Client } from "pg"



  const client =  new Client(
       {connectionString:"postgres://fagxctur:tu3wFqQxNmJyoPDvsA45BBa6E-TfFWza@rain.db.elephantsql.com/fagxctur"
}  )

 async function insertData(username: string, email: string, password: string) {
    
    try {
        await client.connect(); // Ensure client connection is established
        // Use parameterized query to prevent SQL injection
        const insertQuery = "INSERT INTO employee (username, email, password) VALUES ($1, $2, $3)";
        const values = [username, email, password];
        const res = await client.query(insertQuery, values);
        console.log('Insertion success:', res); // Output insertion result
      } catch (err) {
        console.error('Error during the insertion:', err);
      } 
 }
 async function insertDataAddress(user_id: number, city: string, country: string,street:string,pincode:string) {
    
    try {
        // Ensure client connection is established
        // Use parameterized query to prevent SQL injection
        await client.connect();
        const insertQuery = "INSERT INTO addresses (user_id, city, country,street,pincode) VALUES ($1, $2, $3,$4,$5)";
        const values = [user_id, city, street,country,pincode];
        const res = await client.query(insertQuery, values);
        console.log('Insertion success:', res); // Output insertion result
      } catch (err) {
        console.error('Error during the insertion:', err);
      } 
 }

//  insertData('prvn337', 'prvn347@gmail.com', 'password').catch(console.error);
 insertDataAddress(3, 'New Yorkdd', 'USAss', '123 Broadway St', '10001').catch(console.error);