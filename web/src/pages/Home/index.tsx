import { useContext, useEffect } from "react";
import { appContext } from "../../hooks/AppContext";

const Home = () => {
  const { setTitle } = useContext(appContext);
  useEffect(() => {
    setTitle("Home");
  }, [setTitle]);
  return (
    <div style={{marginTop:"2rem"}}>
      <h1><strong>Bem vindo ao Test FullStack</strong></h1>
    </div>
  );
};

export default Home;
