import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./global.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-full flex-col flex-nowrap bg-background">
          {/* Header */}
          <Header />
          {/* Content */}
          <div className="px-8 py-8 flex flex-grow overflow-auto">{children}</div>
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
