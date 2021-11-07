import { app } from "@components";
import { ProductDao } from "database";

app
  .route("/products")
  .get(async (req, res) => {
    if (Object.keys(req.query).length) {
      res.status(200).send(await ProductDao.getFindByParams(req.query));
    } else {
      res.status(200).send(await ProductDao.getAll());
    }
  })
  .post(async (req, res) => {
    try {
      res.status(201).send(await ProductDao.create(req.body));
    } catch (err) {
      res.status(500).send("Houve um erro ao adicionar o produto");
    }
  });

export default app;
