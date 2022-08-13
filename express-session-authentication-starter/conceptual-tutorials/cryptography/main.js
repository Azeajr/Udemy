const fs = require('fs');
const encrypt = require('./encrypt');
const decrypt = require('./decrypt');

const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

const encryptedMessage = encrypt.encryptWithPublicKey(
    publicKey,
    'This is a story all about how my life got flipped turned upside down.');

console.log(encryptedMessage.toString());

const privateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf8');

const decryptedMessage =
    decrypt.decryptWithPrivateKey(privateKey, encryptedMessage);

console.log(decryptedMessage.toString());