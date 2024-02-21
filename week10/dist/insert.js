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
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect(); // Ensure client connection is established
            // Use parameterized query to prevent SQL injection
            const insertQuery = "INSERT INTO employee (username, email, password) VALUES ($1, $2, $3)";
            const values = [username, email, password];
            const res = yield client.query(insertQuery, values);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
    });
}
function insertDataAddress(user_id, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Ensure client connection is established
            // Use parameterized query to prevent SQL injection
            yield client.connect();
            const insertQuery = "INSERT INTO addresses (user_id, city, country,street,pincode) VALUES ($1, $2, $3,$4,$5)";
            const values = [user_id, city, street, country, pincode];
            const res = yield client.query(insertQuery, values);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
    });
}
//  insertData('prvn337', 'prvn347@gmail.com', 'password').catch(console.error);
insertDataAddress(3, 'New Yorkdd', 'USAss', '123 Broadway St', '10001').catch(console.error);
