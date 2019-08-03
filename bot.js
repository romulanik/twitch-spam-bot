const tmi = require('tmi.js');

let kanal = 'xliwistorx'; //adding twitch channel name
let napis = 'Szkoda ze przegrales! BloodTrail  '; // adding spam

// Define configuration options

let usernames = ['']; // put username
let passwords = ['']; // put passwords from token (OATH)

let clientsOpts = [];
let clients = [];

for (i = 0; i < 15; i++) { //adding options for each client to array
  let opts = {
    identity: {
      username: usernames[i],
      password: passwords[i]
    },
    channels: [
      kanal,
    ]
  };
  clientsOpts.push(opts);
}
for (let i = 0; i < 13; i++) { //adding clients to array of objects and connecting clients

  clients.push(new tmi.client(clientsOpts[i])); //adding clients to array of objects

  clients[i].connect();
}
setInterval(xd, 2000);


function xd() {
  for (let i = 0; i < 13; i++) {
     clients[i].action(kanal, napis + ` ${Math.floor(Math.random() * 10)}`);
  }
}
