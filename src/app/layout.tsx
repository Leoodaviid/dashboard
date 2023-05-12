"use client";
import { useMemo } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "@/mui/theme";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { store } from "@/service/store";
import NavBar from "@/components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

setupListeners(store.dispatch);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box width="100vw" height="100vh" padding="1rem 2rem 4rem 2rem">
              <NavBar />
              {children}
            </Box>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
