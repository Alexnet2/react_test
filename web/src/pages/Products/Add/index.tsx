import { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { appContext } from "../../../hooks/AppContext";
import { useRouter } from "next/router";
import { api } from "../../../config";
const AddClient = () => {
  const router = useRouter();
  const { setTitle } = useContext(appContext);
  const [product, setProduct] = useState<Product>({} as Product);
  useEffect(() => {
    setTitle("Adicionar Produto");
  }, [setTitle]);

  const add = () => {
    api
      .post("/products", product)
      .then(() => {
        router.push("/Products");
      })
      .catch((err) => {
        console.log("erro");
        router.push("/Products");
      });
  };
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nome"
          onChange={(e) =>
            setProduct({
              ...product,
              name: e.currentTarget.value,
            })
          }
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Valor</Form.Label>
        <Form.Control
          type="text"
          placeholder="R$"
          onChange={(e) => {
            setProduct({
              ...product,
              value: Number(
                e.currentTarget.value.toString().replace(/,/g, ".") ?? 0
              ),
            });
          }}
          required
        />
      </Form.Group>
      <Button
        variant="danger"
        style={{ margin: "0.5rem" }}
        onClick={() => router.push("/Products")}
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
