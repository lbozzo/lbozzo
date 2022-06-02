import { gobalStyles } from "./globalStyles";

type ThemeProviderProps = {
  children?: React.ReactNode;
};

export const ThemeProvider = ({
  children,
}: ThemeProviderProps): JSX.Element => {
  gobalStyles();
  return <>{children}</>;
};
