import Head from "next/head"
import LoginForm from "../components/authentication/LoginForm"
import SidePageLogin from "../components/authentication/SidePageLogin"

const login = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login page to be able to access your personal dashboard" />
        <link rel="shortcut icon" href="images/LogoFavicon.png" type="image/x-icon" />
      </Head>
      <section className="font-Roboto flex flex-col md:flex-row md:flex-1 h-full md:h-screen">
        <div className="pb-6 p-4 w-full md:w-6/12 lg:p-16 md:p-8">
          <div className="mb-8">
            <h1 className="font-semibold text-input-border text-4xl mb-1 tracking-normal">Login</h1>
            <p className="text-xs font-semibold">Welcome back, log in to your account.</p>
          </div>
          <LoginForm />
        </div>
        <SidePageLogin />
      </section>
    </div>
  )
}

export default login