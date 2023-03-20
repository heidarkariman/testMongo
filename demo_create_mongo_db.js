const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:-jD$E*afs3A2ajy@karimamcluster.j2brhab.mongodb.net/blog?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) throw err;
    console.log("Connected successfully to MongoDB Atlas cluster");
    client.close((err) => {
      if (err) throw err;
      console.log("Connection to MongoDB Atlas cluster closed");
    });
  });