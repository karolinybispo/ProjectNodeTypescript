    
    import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"; 
    import { request } from "http";
    import { CreateCustomerController} from './controllers/CreateCustomerController'
    import {ListCustomersController} from './controllers/ListCustomersController'
    
    
    
    //criando as rotas (quem usar a rota deve passar 2 parametros)
    export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

        //rota do tipo get
        //* request eh do tipo FastfyRequest *
        fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
            return { ok: true}

        })

        fastify.post("/customer", async (request: FastifyRequest, replay: FastifyReply) =>{
            return new CreateCustomerController().handle(request,replay)
        })

        //rota de listagem
        fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
            return new ListCustomersController().handle(request, reply)
        })
    }



