import connection from "./Connection";

const ProductDao = {
  getAll: async () => {
    return await connection("products").returning("*");
  },
  getFindByParams: async (product: Product) => {
    return await connection("products").where(product).returning("*");
  },
  create: async (client: Client) => {
    return await connection("products").insert(client).returning("*");
  },
};

export default ProductDao;
