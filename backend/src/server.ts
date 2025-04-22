    import Fastify from "fastify";
    import { routes } from "./routes";
    import cors from '@fastify/cors';

    const app = Fastify({ logger: true})

    const start = async () => {

        //executando as rotas
        await app.register(cors);
        await app.register(routes);
        




        try { 
            await app.listen({port: 3333})
        } catch(err){
            process.exit(1)
        }
    }


    start();