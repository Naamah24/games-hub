// this is to customize the chakra default theme
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// create a configuration object
const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default theme;
