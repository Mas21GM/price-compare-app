export const metadata = {
  title: "Price Compare App",
  description: "Find the best prices fast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
