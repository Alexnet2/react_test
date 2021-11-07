import connection from "./Connection";
import { ClientDao, ProductDao } from "@database";
const RequestDao = {
  getAll: async () => {
    return await Promise.all(
      (
        await connection("requests").returning("*")
      ).map(async (request) => {
        const client = (
          await ClientDao.getFindByParams({
            id: request.client_id,
          })
        )[0];
        const product = (
          await ProductDao.getFindByParams({
            id: request.product_id,
          })
        )[0];

        return {
          id: request.id,
          created: request.created,
          client,
          product,
        };
      })
    );
  },
  getFindByParams: async (request: Request) => {
    return await connection("requests").where(request).returning("*");
  },
  create: async (request: Request) => {
    console.log({
      product_id: request.product?.id,
      client_id: request.client?.id,
    });
    return await connection("requests")
      .insert({
        product_id: request.product?.id,
        client_id: request.client?.id,
      })
      .returning("*");
  },
};

export default RequestDao;
