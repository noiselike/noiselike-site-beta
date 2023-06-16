//layout.tsx is where global components hang out, like navbar and media player
import './globals.css'
import { Courier_Prime } from 'next/font/google'
import Navbar from './NavBar'

const courier_prime = Courier_Prime({
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: 'noiselike.art',
  description: 'experimental music publishing',
};

export default function RootLayout({ children }) {

  return (
    <html>
      <h1>noiselike.art</h1>
      <div className='nav'>
        <Navbar />
      </div>
      <main>
        {children}
      </main>
    </html>
  )
}
