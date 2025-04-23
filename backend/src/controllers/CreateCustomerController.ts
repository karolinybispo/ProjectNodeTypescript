
    import { FastifyRequest, FastifyReply } from "fastify";
    import {CreateCustomerService} from '../services/CreateCustomerService'

    class CreateCustomerController{
        async handle(request: FastifyRequest, replay: FastifyReply){ //replay: o que vamos devolver ao use
            
            const {name, email} = request.body as { name: string, email: string}
            

            const customerService = new CreateCustomerService()
            const customer = await customerService.execute({name,email});

            replay.send(customer)

        }
    }

    export {CreateCustomerController}