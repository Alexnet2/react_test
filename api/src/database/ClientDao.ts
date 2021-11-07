import connection from "./Connection";

const ClientDao = {
  getAll: async () => {
    return await connection("clients").returning("*");
  },
  getFindByParams: async (client: Client) => {
    return await connection("clients").where(client).returning("*");
  },
  create: async (client: Client) => {
    return await connection("clients").insert(client).returning("*");
  },
};

export default ClientDao;
