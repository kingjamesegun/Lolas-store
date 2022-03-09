import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Lolas Store</title>
        <meta name="description" content="Lolas store is a web store which allows you to create your own store on the site and sell your goods and services." />
        <link rel="icon" href="images/LogoFavicon.png" />
      </Head>

    <main className=''>
      <Link href='./login'><a>Login Page</a></Link>
    </main>
    </div>
  )
}
