import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export interface IPage {
  name: string
  to: string
  active: boolean
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const pages: IPage[] = [
    {
      name: 'Home', to: '/', active: router.pathname === '/',
    },
    {
      name: 'About', to: '/about', active: router.pathname.indexOf('/about') > -1,
    },
    {
      name: 'Blog', to: '/blog', active: router.pathname.indexOf('/blog') > -1,
    }
  ]

  return (
    <main className={"bg-gradient-to-b from-[#1A253C] to-[#111827] text-white pt-6"}>
      <Layout pages={pages}>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}

export default MyApp
