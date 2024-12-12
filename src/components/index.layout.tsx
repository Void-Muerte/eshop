import  { ReactNode } from 'react'
import Header from './header';

function RootLayout({children}:{children:ReactNode}) {
  return (
    <div>
        <Header />
        <section>
            {children}
        </section>
    </div>
  )
}

export default RootLayout;