

    import { FastifyRequest, FastifyReply } from "fastify";
    import { DeleteCustomerService } from '../services/DeleteCustomerService'

    class DeleteCustomerController{
        async handle(request: FastifyRequest, replay: FastifyReply){
            
            
            const {id} = request.query as {id: string} // pegando o id pela query

            const customerService = new DeleteCustomerService;

            const customer = await customerService.execute({ id }) // o id recebido na linha 10

            replay.send(customer); //devolvendo para o front o id recebido
        }
 

    }

    export { DeleteCustomerController }