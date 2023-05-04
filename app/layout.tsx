import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-[#011638]">
        <div className="container  mx-auto bg-[#2E294E] text-[#E8C1C5]">
          {children}
        </div>{" "}
      </body>
    </html>
  );
}
