    
    import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"; 
    import { request } from "http";
    import { CreateCustomerController} from './controllers/CreateCustomerController'
    import {ListCustomersController} from './controllers/ListCustomersController'
    import {DeleteCustomerController} from './controllers/DeleteCustomerController'
    
    
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

        //rota de listagem
        fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
            return new DeleteCustomerController().handle(request, reply)
        })
    }
    //Funcioanamento dessa API: rota eh requisitada, controller eh chamado, pois esta na rota. Por fim, o service faz toda operacao.


