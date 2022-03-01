import { Client } from "https://deno.land/x/mysql/mod.ts";

const connection = await new Client().connect({
  hostname: "artigraf.hu",
  username: "artigraf_bomobit",
  password: "1034friends1035",
  db: "artigraf_deno",
});

export default connection;

