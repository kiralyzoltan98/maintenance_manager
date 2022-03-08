import { Client } from "https://deno.land/x/mysql/mod.ts";

const mySqlClient = await new Client().connect({
  hostname: "artigraf.hu",
  username: "artigraf_ag243",
  db: "artigraf_deno",
  password: "artivgabor1965",
});

export default mySqlClient;