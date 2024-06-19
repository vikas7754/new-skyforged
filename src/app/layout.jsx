import "@/styles/globals.scss";

export const metadata = {
  title: "SkyForged | Transforming the web3 gaming landscape",
  description: "SkyForged | Transforming the web3 gaming landscape",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
