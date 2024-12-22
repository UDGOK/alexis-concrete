import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black">
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
