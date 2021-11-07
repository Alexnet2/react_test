import { AppProvider } from "../hooks/AppContext";
import "../assets/css/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components";

function App({ Component, pageProps }: any) {
  return (
    <>
      <AppProvider>
        <Header/>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default App;
