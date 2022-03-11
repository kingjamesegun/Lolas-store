import Head from "next/head"
import { SidePage } from "../../components/SidePage"
import SignUpForm from "../../components/SignUpForm"

const signUp = () => {
  return (
    <div>
      <Head>
        <title>Sign Up Page</title>
        <meta name="description" content="Sign up page to be able to create your account" />
        <link rel="shortcut icon" href="images/LogoFavicon.png" type="image/x-icon" />
      </Head>
      <section className="font-Roboto flex flex-col md:flex-row md:flex-1 h-full md:h-screen">
        <div className="pb-6 p-4 w-full md:w-6/12 lg:p-16 md:p-8">
          <div className="mb-8">
            <h1 className="font-semibold text-input-border lg:text-4xl mb-1 tracking-normal">Create Account</h1>
            <p className="text-xs font-semibold">Sign up to start setting up your store.</p>
          </div>
          <SignUpForm />
        </div>
        <SidePage />
      </section>
    </div>
  )
}

export default signUp