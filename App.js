import { useColorScheme } from "react-native";
import RootNavigation from "./src";
import { customTheme } from "./src/utils/theme";
import { Provider as NativeProvider, useTheme } from "react-native-paper";

/**
 * @author        Fausto Rodrigo Toloi <faustortoloi@gmail.com>
 * @description   Função principal do aplicativo
 * @version       1.0.0
 * @since         1.0.0
 *
 * @export App função principal do aplicativo
 * @return {*} 
 */
export default function App() {

  // Verifica se o sistema está usando Dark Mode
  const theme = useColorScheme();

  // define a variável de tema escuro e claro
  const themeDark = customTheme.dark;
  const themeLight = customTheme.light;

  return (
    <NativeProvider
      // Define o tema do aplicativo
      theme={theme === "dark" ? themeDark : themeLight}
    >
      <RootNavigation />
    </NativeProvider>
  )
}