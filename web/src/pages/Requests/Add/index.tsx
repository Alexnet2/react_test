import { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { appContext } from "../../../hooks/AppContext";
import { useRouter } from "next/router";
import { api } from "../../../config";
import { money } from "../../../utils";
const AddClient = () => {
  const router = useRouter();
  const { setTitle } = useContext(appContext);
  const [request, setRequest] = useState<Request>({} as Request);
  const [clients, setClients] = useState<Client[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setTitle("Adicionar Pedido");
    api.get("/clients").then((res) => {
      setClients(res.data);
    });

    api.get("/products").then((res) => {
      setProducts(res.data);
    });
  }, [setTitle]);

  const add = () => {
    api
      .post("/requests", request)
      .then(() => {
        router.push("/Requests");
      })
      .catch((err) => {
        console.log("erro");
        router.push("/Requests");
      });
  };
  return (
    <Form>
      <Form.Group
        className="mb-3"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <Form.Select
          required
          onChange={(e) => {
            setRequest({
              ...request,
              client: {
                ...request.client,
                id: Number(e.target.value),
              },
            });
          }}
        >
          <option>Clientes</option>
          {clients.map((client) => {
            return (
              <option
                value={client.id}
              >{`${client.name} ${client.lastname}`}</option>
            );
          })}
        </Form.Select>
        <Form.Select
          required
          onChange={(e) => {
            setRequest({
              ...request,
              product: {
                ...request.product,
                id: Number(e.target.value),
              },
            });
          }}
        >
          <option>Produtos</option>
          {products.map((product) => {
            return (
              <option value={product.id}>{`${product.name} => ${money(
                product.value
              )}`}</option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Button
        variant="danger"
        style={{ margin: "0.5rem" }}
        onClick={() => router.push("/Requests")}
      >
        Voltar
      </Button>
      <Button variant="primary" onClick={add}>
        Adicionar
      </Button>
    </Form>
  );
};

export default AddClient;
