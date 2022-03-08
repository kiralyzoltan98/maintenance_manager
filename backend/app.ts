import { Application, Context } from 'https://deno.land/x/oak/mod.ts'
import router from './routes/routes.ts';

const app = new Application();

app.use(router.routes())
app.use(router.allowedMethods())

app.use((ctx: Context) => {
  ctx.response.body = "is dis even working? deno lol";
});

await app.listen({ port: 8000 });
