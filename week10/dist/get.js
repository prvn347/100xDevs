"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({ connectionString: "postgres://fagxctur:tu3wFqQxNmJyoPDvsA45BBa6E-TfFWza@rain.db.elephantsql.com/fagxctur"
});
// Async function to fetch user data from the database given an email
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect(); // Ensure client connection is established
            const query = 'SELECT * FROM employee';
            // const values = [email];
            const result = yield client.query(query);
            if (result.rows.length > 0) {
                console.log('User found:', result.rows[0]); // Output user data
                return result.rows[0]; // Return the user data
            }
            else {
                console.log('No user found with the given email.');
                return null; // Return null if no user was found
            }
        }
        catch (err) {
            console.error('Error during fetching user:', err);
            throw err; // Rethrow or handle error appropriately
        }
    });
}
function getAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query2 = 'SELECT * FROM addresses';
            const result2 = yield client.query(query2);
            if (result2.rows.length > 0) {
                console.log('User found:', result2.rows); // Output user data
                return result2.rows; // Return the user data
            }
            else {
                console.log('No user found with the given email.');
                return null; // Return null if no user was found
            }
        }
        catch (err) {
            console.error('Error during fetching user:', err);
            throw err; // Rethrow or handle error appropriately
        }
    });
}
// Example usage
// getUser().catch(console.error);
getAddress().catch(console.error);
