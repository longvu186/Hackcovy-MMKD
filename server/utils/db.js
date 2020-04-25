// import { JsonDB } from 'node-json-db';
// import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
const JsonDB = require('node-json-db').JsonDB;
const Config = require('node-json-db/dist/lib/JsonDBConfig').Config;

const db = new JsonDB(new Config("myDataBase", true, false, '/'));

module.exports = db;