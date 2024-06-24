export default function RootLayout({children}){
  return (
    <html>
      <body>
        <div>Header</div>
        {children}
        <div>footer</div>
      </body>
    </html>
    )
  }