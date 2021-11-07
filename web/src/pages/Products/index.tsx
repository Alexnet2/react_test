import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { appContext } from "../../hooks/AppContext";
import { Table } from "react-bootstrap";
import { Div, Button } from "./styles";
import { useRouter } from "next/router";
import { api } from "../../config";
import moment from "moment";
import { money } from "../../utils";
const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  const { setTitle } = useContext(appContext);
  useEffect(() => {
    setTitle("Produtos");
    api.get("/products").then((res) => {
      setProducts(res.data);
    });
  }, [setTitle]);

  return (
    <Div>
      <Button
        onClick={() => {
          router.push("/Products/Add");
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
            <th>Nome</th>
            <th>Valor</th>
            <th>Data da Criação</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{money(product.value ?? 0)}</td>
              <td>{moment(product.created).format("DD/MM/YYYY HH:mm:ss")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Div>
  );
};

export default Products;
