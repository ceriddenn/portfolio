import Header from "./Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body className="bg-black">
        {children}
        </body>
    </html>
  )
}
