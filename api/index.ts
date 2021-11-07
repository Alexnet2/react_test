import app from "./src/components/app";
import { config } from "dotenv";
import "@routes";

config();

const port = process.env.API_PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
