import { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { appContext } from "../../../hooks/AppContext";
import { useRouter } from "next/router";
import { api } from "../../../config";
const AddClient = () => {
  const router = useRouter();
  const { setTitle } = useContext(appContext);
  const [client, setClient] = useState<Client>({} as Client);
  useEffect(() => {
    setTitle("Adicionar Cliente");
  }, [setTitle]);

  const add = () => {
    api
      .post("/clients", client)
      .then(() => {
        router.push("/Clients");
      })
      .catch((err) => {
        console.log("erro");
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
            setClient({
              ...client,
              name: e.currentTarget.value,
            })
          }
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Sobrenome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Sobrenome"
          onChange={(e) => {
            setClient({
              ...client,
              lastname: e.currentTarget.value,
            });
          }}
          required
        />
      </Form.Group>
      <Button
        variant="danger"
        style={{ margin: "0.5rem" }}
        onClick={() => router.push("/Clients")}
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
