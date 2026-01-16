import ApolloProvider from "@/app/providers/ApolloProvider";
import { Navbar } from "@/components/Navbar";
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar/>
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  );
}
