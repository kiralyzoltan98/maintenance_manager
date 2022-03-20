import { Application, Context } from 'https://deno.land/x/oak/mod.ts'
import router from './routes/routes.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";


const app = new Application();

app.use(router.routes())
app.use(router.allowedMethods())

app.use((ctx: Context) => {
  ctx.response.body = "is dis even working? deno lol";
});

app.use(oakCors()); // Enable CORS for All Routes

await app.listen({ port: 8000 });
