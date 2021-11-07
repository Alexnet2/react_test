import { app } from "@components";
import { RequestDao } from "database";

app
  .route("/requests")
  .get(async (req, res) => {
    if (Object.keys(req.query).length) {
      res.status(200).send(await RequestDao.getFindByParams({} as Request));
    } else {
      res.status(200).send(await RequestDao.getAll());
    }
  })
  .post(async (req, res) => {
    try {
      res.status(201).send(await RequestDao.create(req.body));
    } catch (err) {
      res.status(500).send("Houve um erro ao adicionar o pedido");
    }
  });

export default app;
