import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={"bg-gradient-to-b from-[#1A253C] to-[#111827] text-white pt-6"}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}

export default MyApp
