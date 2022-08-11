const {MongoClient} = require('mongodb');
const crypto = require('crypto');

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to
   * reflect your cluster. See https://docs.mongodb.com/ecosystem/drivers/node/
   * for more details
   */
  // const uri =
  // "mongodb+srv://<username>:<password>@<your-cluster-url>/sample_airbnb?retryWrites=true&w=majority";

  const uri = 'mongodb://localhost:27017/expressSessionAuth';
  /**
   * The Mongo Client you will use to interact with your database
   * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html
   * for more details In case: '[MONGODB DRIVER] Warning: Current Server
   * Discovery and Monitoring engine is deprecated...' pass option {
   * useUnifiedTopology: true } to the MongoClient constructor. const client =
   * new MongoClient(uri, {useUnifiedTopology: true})
   */
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    // await listDatabases(client.);
    const response =
        await client.db('expressSessionAuth').collection('users').deleteOne({
          username: 'antonio'
        })

    // const response = await
    // client.db("expressSessionAuth").collection('users').drop(); const
    // response = crypto.pbkdf2Sync('tony',
    // '243b9a097b409bd3f99c3eb23aca0331a912b333c131257066d0da26b9c963fd',
    // 10000, 64, 'sha512').toString('hex');

    console.log(response);

  } catch (e) {
    console.error(e);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log('Databases:');
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};