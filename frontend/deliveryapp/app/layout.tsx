import Link from "next/link";
import "./globals.css";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import { Menu } from "antd";

const items = [
  {key: "home", label: <Link href={"/"}>Главная</Link>},
  {key: "orders", label: <Link href={"/orders"}>Заказы</Link>},
  {key: "createorder", label: <Link href={"/createorder"}>Оформление</Link>},
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={{minHeight: "100vh"}}>
          <Header>
            <Menu 
              theme="dark"
              mode="horizontal"
              items={items}
              style={{flex: 1, minWidth: 0}}
              />
          </Header>
          <Content style={{ padding: "0 48px" }}> {children} </Content> 
          <Footer style={{ textAlign: "center" }}>Created by Dmitry Volkov</Footer>
        </Layout>
         </body>
    </html>
  );
}
