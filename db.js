function getDBConnection (callback) {
  MongoClient.connect(DataBaseURL, function (err, db) {
    if (err) {
      throw err;
    }
    console.log("Connected correctly to server");
    callback(db);
  });
}

module.exports = {
  getDB: getDBConnection
};
