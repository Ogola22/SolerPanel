
import "../style/index.scss";
 
export const metadata = {
  title: "Besca Engineering",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head>
        <meta name="description" content="" />
        <link rel="icon" href="icon.jpg" sizes="any" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
      </head>

      <body>{children}</body>
    </html>
  )
}
