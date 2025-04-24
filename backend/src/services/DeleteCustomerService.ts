
    import prismaClient from "../prisma";

    interface DeleteCustomerProps{
        id: string;
    }

    class DeleteCustomerService{
        //quando chamar esse metodo, precisa informar o id
        async execute({ id }: DeleteCustomerProps){

            if(!id){
                throw new Error("Informe id")
            }

            const findCustomer = await prismaClient.customer.findFirst({
                where: {
                    id: id
                }
            })

            if(!findCustomer){
                throw new Error("cliente nao encontrado")
            }

            await prismaClient.customer.delete({
                where:{
                    id: findCustomer.id
                }
            })

            return { message: "deletado com sucesso!"}
        }
    }

    export {DeleteCustomerService}