import "@/app/globals.css";
import { getConcerts } from "@/controller/concerts";
import FooterComponent from "@/lib/Components/FooterComponent";
import HeaderComponent from "@/lib/Components/HeaderComponent";
import SiderComponent from "@/lib/Components/SiderComponent";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Concert",
  description: "Free Concert Tickets",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className} suppressHydrationWarning={true}>
        <AntdRegistry>
          <Layout>
            <SiderComponent />
            <Layout>
              <HeaderComponent />
              {children}
              <FooterComponent />
            </Layout>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
