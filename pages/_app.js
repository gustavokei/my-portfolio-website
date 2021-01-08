import { GlobalProvider } from "../components/models/global-provider";
import "./App.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
};

export default MyApp;
