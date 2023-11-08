const jwt = require('jsonwebtoken');

const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTk0NTk2NTQsImV4cCI6MTY5OTQ2MzI1NH0.ANH9zulCtIMddImwyCf3_V53mEAORo98T5t77WKBHC4';

// ? Read the values from seclist.txt file and push into an array
const fs = require('fs');
const secret = fs.readFileSync('./seclist.txt', 'utf8');
const secrets = secret.split('\n');

// ? Check item in secrets array, if token is valid then print the secret and break the loop
for (let i = 0; i < secrets.length; i++) {
    try {
        const decoded = jwt.verify(token, secrets[i]);
        console.log(secrets[i]);
        break;
    } catch (err) {
        // console.log(err);
    }
}
