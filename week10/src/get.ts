import { Client } from 'pg';
   const client =  new Client(
        {connectionString:"postgres://fagxctur:tu3wFqQxNmJyoPDvsA45BBa6E-TfFWza@rain.db.elephantsql.com/fagxctur"
 }  )
// Async function to fetch user data from the database given an email
async function getUser() {
 

  try {
    await client.connect(); // Ensure client connection is established
    const query = 'SELECT * FROM employee';
    // const values = [email];

    const result = await client.query(query);

    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log('No user found with the given email.');
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } 
}

async function getAddress() {
  

  try {
    await client.connect();
    const query2 ='SELECT * FROM addresses' 

    const result2 = await client.query(query2);


    if (result2.rows.length > 0) {
      console.log('User found:', result2.rows); // Output user data
      return result2.rows; // Return the user data
    } else {
      console.log('No user found with the given email.');
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } 
}
// Example usage
// getUser().catch(console.error);
getAddress().catch(console.error)