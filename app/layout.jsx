import "@styles/global.css"
import Nav from "@components/Nav"
import Provider from "@components/Provider"

export const metadata = {
  title: "Ft_Prompt",
  description: "Discover & Share your favorite Prompts !"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout