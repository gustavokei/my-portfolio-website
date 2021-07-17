import { GlobalProvider } from "../components/models/global-provider";
import "./App.scss";
import "./../components/styles.global.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
};

export default MyApp;
