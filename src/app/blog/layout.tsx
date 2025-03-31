export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="max-w-xl mx-auto mt-10">{children}</div>
}
