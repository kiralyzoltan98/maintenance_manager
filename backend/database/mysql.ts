import { Client } from "https://deno.land/x/mysql/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const mySqlClient = await new Client().connect({
  hostname: config().HOSTNAME,
  username: config().USERNAME,
  db: config().DB,
  password: config().PASSWORD,
});

const users = await mySqlClient.execute('SELECT * FROM user');
console.log(users.rows);

export default mySqlClient;