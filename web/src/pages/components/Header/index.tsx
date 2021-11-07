import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { appContext } from "../../../hooks/AppContext";
import { useRouter } from "next/router";
const Header = () => {
  const { title } = useContext(appContext);
  const router = useRouter();
  return (
    <Box style={{ height: "4rem" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component="div"
            sx={{ flexGrow: 0.1 }}
            style={{ alignItems: "center" }}
          >
            <h2>{title}</h2>
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              router.push("/Clients");
            }}
          >
            Clientes
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              router.push("/Products");
            }}
          >
            Produtos
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              router.push("/Requests");
            }}
          >
            Pedidos
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
