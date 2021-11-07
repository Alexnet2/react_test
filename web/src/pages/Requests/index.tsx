import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { appContext } from "../../hooks/AppContext";
import { Table } from "react-bootstrap";
import { Div, Button } from "./styles";
import { useRouter } from "next/router";
import { api } from "../../config";
import moment from "moment";
import { money } from "../../utils";
const Requests = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const router = useRouter();

  const { setTitle } = useContext(appContext);
  useEffect(() => {
    setTitle("Pedidos");
    api.get("/requests").then((res) => {
      console.log(res);
      setRequests(res.data);
    });
  }, [setTitle]);

  return (
    <Div>
      <Button
        onClick={() => {
          router.push("/Requests/Add");
        }}
      >
        Inserir
      </Button>
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
            <th>Cliente</th>
            <th>Produto</th>
            <th>Valor</th>
            <th>Data da Criação</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request.id}</td>
              <td>{request.client.name}</td>
              <td>{request.product.name}</td>
              <td>{money(request.product.value ?? 0)}</td>
              <td>{moment(request.created).format("DD/MM/YYYY HH:mm:ss")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Div>
  );
};

export default Requests;
