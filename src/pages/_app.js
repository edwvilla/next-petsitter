import { CssBaseline } from "@mui/material";
import Layout from "@/components/Layout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </>
  );
}
export default MyApp;
