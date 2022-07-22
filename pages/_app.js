import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/Main.scss";
import "../styles/swiperstyle.scss";

import { createTheme, NextUIProvider } from "@nextui-org/react";
function MyApp({ Component, pageProps }) {
  const OceanByPeter = createTheme({
    type: "OceanByPeter",
    theme: {
      colors: {
        primary: "#083C50",
        secondary: "#CFF0F8",
        tertiary: "#EBFBFF",
        primarySolidHover: "$green700",
        primarySolidContrast: "$white",
        primaryShadow: "$green500",

        gradient:
          "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
        link: "#5E1DAD",

        myColor: "#ff4ecd",
      },
      space: {},
      fonts: {},
    },
  });

  return (
    <NextUIProvider theme={OceanByPeter}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
