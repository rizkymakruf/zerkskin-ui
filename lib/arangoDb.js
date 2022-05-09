const { Database, aql } = require("arangojs");

const getConnection = () => {
  return new Database({
    url: process.env.DB_HOST,
    databaseName: process.env.DB_NAME,
    auth: { username: process.env.DB_USER, password: process.env.DB_PASS },
  });
};

const getCollection = async (cName, db) => {
  const collections = await db.collections();

  if (collections.find((c) => c._name === cName)) {
    return await db.collection(cName);
  } else {
    return db.createCollection(cName);
  }
};

export const checkUid = async (uid) => {
  const db = getConnection()

  await getCollection("user_alamerchant", db);

  let result = [];

  const resx = await db.query(aql`
    FOR u IN user_alamerchant
      FILTER u._key == ${uid}
    RETURN u
  `);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};
