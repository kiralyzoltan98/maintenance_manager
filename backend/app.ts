import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from './routes/routes.ts';

const app = new Application();
app.use(
    oakCors({
      origin: /^.+localhost:(3000|8000)$/,
      optionsSuccessStatus: 200,
      exposedHeaders: ['Content-Range', 'X-Content-Range'],
    }),
);
app.use(router.routes());

await app.listen({ port: 8000 });