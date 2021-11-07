interface Client {
  id?: number;
  name: string;
  lastname: string;
  created?: Date | string;
}

interface Product {
  id?: number;
  name: string;
  value: number;
  created?: Date | string;
}

interface Request {
  id?: number;
  client: Client;
  product: Product;
  created?: Date | string;
}
