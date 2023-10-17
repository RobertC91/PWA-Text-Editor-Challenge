// Import the openDB function from the 'ibd' library
import { openDB } from "idb";

// Initialize the database with a 'jate' object store
const initdb = async () =>
  openDB("jate", 1, {
    // Define the upgrade function, which handles database schema changes
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        // If the 'jate' object  store already exists, log a message
        console.log("jate database already exists");
        return;
      }
      // If the 'jate' object store doesn't exist, create it with a unique 'id'key
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Use the 'put' method to add or update a record with the given 'id' and 'content'
export const putDb = async (id, content) => {
  console.log("PUT to the database");
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.put({ id: id, value: content });
  const result = await request;
};

// Use the 'getAll' method to retrieve all records from the 'jate' object store
export const getDb = async () => {
  console.log("GET from the database");
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.get(1);
  const result = await request;
  return result;
};

initdb();
