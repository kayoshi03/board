import { ReactNode } from "react"
import { Header } from "./header/Header"
export const AppLayout = ({children}:{children:ReactNode}) => {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <footer>
        <p>App Layout Footer</p>
      </footer>
    </>
    
  )
}