"use client";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html>
        <head></head>
        <body>
          <Navbar />
          {children}
          <Cursor />
        </body>
      </html>
    </Provider>
  );
}
