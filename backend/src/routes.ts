    
    import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"; 

    //criando as rotas (quem usar a rota deve passar 2 parametros)
    export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

        //rota do tipo get
        //* request eh do tipo FastfyRequest *
        fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
            return { ok: true}

        })

    }



