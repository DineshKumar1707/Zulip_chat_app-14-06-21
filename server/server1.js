const zulip = require('zulip-js');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');
const request = require('request');

const https = require('https');
const users = require('zulip-js/lib/resources/users');
const { response } = require('express');

const app = express();

// Pass the path to your zuliprc file here.
const config = { zuliprc: ".zuliprc" };

// Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(cors());
app.use(morgan('tiny'));


// Get queue_id

// (async () => {
//     const client = await zulip(config);

//     // Register a queue
//     const params = {
//         event_types: ["message"],
//     };

//     console.log(await client.queues.register(params));
// })();

// Get own user

// (async () => {
//     const client = await zulip(config);

//     // Get the profile of the user/bot that requests this endpoint,
//     // which is `client` in this case:
//     console.log(await client.users.me.getProfile());
// })();


// Get messages sent by both sender and reciever 

// (async () => {
//     const client = await zulip(config);

//     const readParams = {
//         anchor: "newest",
//         num_before: 100,
//         num_after: 0,
//         narrow: [
//             {operator: "pm-with", operand: "nirmalkumarcse07@gmail.com" },
//         ],
//     };

//     console.log(await client.messages.retrieve(readParams));
// })();


// 19-05-2021


// Create a Stream of users

// (async () => {
//     const client = await zulip(config);

//     const meParams = {
//         subscriptions: JSON.stringify([{name: "NStream"}]),
//     };

//     console.log(await client.users.me.subscriptions.add(meParams));

//     const user_mail_id = "praveenprakash2699@gmail.com";

//     const anotherUserParams = {
//         subscriptions: JSON.stringify([{name: "NStream"}]),
//         principals: JSON.stringify([user_mail_id]),
//     }
//     console.log(await client.users.me.subscriptions.add(anotherUserParams));

// })();


// Get messages from a stream 

// (async () => {
//     const client = await zulip(config);

//     const readParams = {
//         anchor: "newest",
//         num_before: 100,
//         num_after: 0,
//         narrow: [
//             {operator: "stream", operand: "NStream"},
//         ],
//     };

//     console.log(await client.messages.retrieve(readParams));
// })();


// Get a user by email 

// (async () => {
//     const client = await zulip(config);

//     // const user_mail_id = "praveenprakash2699@gmail.com";

//     // console.log(await client.users.me.getProfile({user_mail_id}));
//     const email = "praveenprakash2699@gmail.com";
//     // const params = {
//     //     email: "praveenprakash2699@gmail.com",
//     // }

//     console.log(await client.callEndpoint(`/users/${email}`, 'GET'));
    
// })();


// const unixTime = 1621412193;

// const date = new Date(unixTime*1000);



var presentTime = new Date();
// // // console.log(date.toLocaleString("en-us"));

// let utcTimeStamp = new Date('22.05.2021').getTime() / 1000;

// console.log("Today's Date is: "+presentTime);


var datum = new Date(Date.UTC(presentTime.getFullYear(),presentTime.getMonth(),presentTime.getDate(),presentTime.getHours(),presentTime.getMinutes(),presentTime.getSeconds()));
// // var datum = new Date(Date.UTC('2021','05','22','19','12','3000'));
// console.log(datum.getTime()/1000);

var unixTime = datum.getTime()/1000;
console.log(unixTime);

var date = new Date(unixTime*1000);

console.log("time after converted into unix: " + date.toLocaleTimeString("en-us"));


// const unixTime = 1619608505;
// const date = new Date(unixTime*1000);
// const msgTime = date.toLocaleString("en-us");

// console.log(msgTime);

// const d = new Date();

// const n = d.getUTCHours();

// console.log(n);


// const time = new Date(n).getTime();
// console.log(n.toLocaleString("en-us"));