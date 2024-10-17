"use client";

import "@/common/styles/globals.css";
import type { ReactNode } from "react";
import { Nav } from "@/common/components/Nav";
import { StoreProvider } from "./StoreProvider";
import { ThemeProvider } from "./themeProvider";
import styles from "@/common/styles/layout.module.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <ThemeProvider>
      <StoreProvider>
        <html lang="en">
          <head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>Bolos da Solange</title>
            <link rel="icon" href="/assets/icon.png" />
          </head>
          <body>
            <section className={styles.container}>
              <Nav />
              <main className={styles.main}>{children}</main>
            </section>
          </body>
        </html>
      </StoreProvider>
    </ThemeProvider>
  );
}
