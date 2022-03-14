import Head from "next/head"
import LoginForm from "../components/authentication/LoginForm"
import {SidePage}  from "../components/authentication/SidePage"

const login = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login page to be able to access your personal dashboard" />
        <link rel="shortcut icon" href="images/LogoFavicon.png" type="image/x-icon" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <section className="font-Roboto flex flex-row flex-1 h-screen">
        <div className="w-6/12 p-16">
          <div className="mb-8">
            <h1 className="font-semibold text-input-border text-4xl mb-1 tracking-normal">Login</h1>
            <p className="text-xs font-semibold">Welcome back, log in to your account.</p>
          </div>
          <LoginForm />
        </div>
        <SidePage />
      </section>
    </div>
  )
}

export default login