import I18nClientProvider from "./i18n-client-provider";
import MuiThemeProvider from "./mui-theme-provider";
import ReactQueryProvider from "./react-query-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nClientProvider>
      <ReactQueryProvider>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </ReactQueryProvider>
    </I18nClientProvider>
  );
}
