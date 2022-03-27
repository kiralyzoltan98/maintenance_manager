import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from './routes/routes.ts';

const app = new Application();
app.use(
    oakCors({
      origin: /^.+localhost:(3000|8000)$/,
      optionsSuccessStatus: 200,
      allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      methods: '*',
      credentials: true,
    }),
);
app.use(router.allowedMethods());
app.use(router.routes());

await app.listen({ port: 8000 });