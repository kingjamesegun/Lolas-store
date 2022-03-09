import Head from "next/head"
import Form from "../../components/Form"
import Image from "next/image"

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
          <Form />
        </div>
        <div className="w-6/12 py-16 bg-input-border flex flex-col items-center text-white relative overflow-hidden">
          <div className="w-9/12 mx-auto mb-12 flex flex-col items-center">
            <div className="flex items-center justify-center mb-3">
              <h2 className="font-semi-bold z-10">Create your own website store</h2>
              <div className="bg-pink h-5 w-5 rounded-full -ml-2 -mt-2 z-0"></div>
            </div>
            <p className="text-center text-xs font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, obcaecati? Dolore perspiciatis magnam, sapiente asperiores fuga quae sit et natus officia saepe voluptatibus dignissimos iure eligendi magni repellat quia omnis.</p>
          </div>

            <figure>
              <div className="absolute -right-1/4 top-1/3">
                <Image src='/Dashboard.png' alt="Dashboard Image" width={655} height={371} objectFit='contain' />
                {/* <img src='/images/Dashboard.png' alt="Dashboard Image" className="w-11/12 h-auto absolute right-0 top-0" /> */}
              </div>
            <div className="bg-pink h-20 w-20 rounded-full absolute bottom-24 -left-10"></div>
            </figure>
        </div>
      </section>
    </div>
  )
}

export default login