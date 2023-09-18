import { CssBaseline } from "@mui/material";
import Layout from "@/components/Layout";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { persistor } from "@/store";
import store from "@/store";
import theme from "@/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
