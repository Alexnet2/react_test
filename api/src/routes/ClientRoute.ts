import { app } from "@components";
import { ClientDao } from "database";

app
  .route("/clients")
  .get(async (req, res) => {
    if (Object.keys(req.query).length) {
      res.status(200).send(await ClientDao.getFindByParams(req.query));
    } else {
      res.status(200).send(await ClientDao.getAll());
    }
  })
  .post(async (req, res) => {
    try {
      res.status(201).send(await ClientDao.create(req.body));
    } catch (err) {
      res.status(500).send("Houve um erro ao adicionar o cliente");
    }
  });

export default app;
