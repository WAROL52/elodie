"use client";
import React, { Children } from "react";
import { SessionProvider } from "next-auth/react";
type Props = {
  children: React.ReactNode;
};
export type DataType = {};
export type ThemeType = {
  mode: "dark" | "light";
  color: "primary" | "secondary";
};
const initialDataValue: DataType = {};
const initialThemeValue: ThemeType = {
  mode: "light",
  color: "primary",
};
export type DataContextType = {
  theme: ThemeType;
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};
export const DataContext = React.createContext<DataContextType>({
  theme: initialThemeValue,
  data: initialDataValue,
  setData: () => {},
  setTheme: () => {},
});
export default function ClientProvider({ children }: Props) {
  const [data, setData] = React.useState<DataType>(initialDataValue);
  const [theme, setTheme] = React.useState<ThemeType>(initialThemeValue);
  React.useLayoutEffect(() => {
    // @ts-ignore
    import("bootstrap");
  }, []);

  return (
    <SessionProvider
      refetchWhenOffline={false}
      refetchOnWindowFocus={false}
      refetchInterval={60 * 60}
    >
      <DataContext.Provider value={{ data, setData, theme, setTheme }}>
        {children}
      </DataContext.Provider>
    </SessionProvider>
  );
}
