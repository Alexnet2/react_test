import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { appContext } from "../../hooks/AppContext";
import { Table } from "react-bootstrap";
import { Div ,Button} from "./styles";
import { useRouter } from "next/router";
import { api } from "../../config";
import moment from 'moment'
const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const router = useRouter();

  const { setTitle } = useContext(appContext);
  useEffect(() => {
    setTitle("Clientes");
    api.get("/clients").then((res) => {
      setClients(res.data)
    })
  }, [setTitle]);

  return (
    <Div>
      <Button onClick={() => {
        router.push("/Clients/Add")}
      }>Inserir</Button>
      <Table
        striped
        bordered
        hover
        variant="dark"
        size="sm"
        style={{ width: "40rem", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Data da Criação</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.lastname}</td>
              <td>{moment(client.created).format("DD/MM/YYYY HH:mm:ss")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Div>
  );
};

export default Clients;
