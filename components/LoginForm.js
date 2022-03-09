import Link from "next/link"
const LoginForm = () => {
  return (
    <form>
        <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-sm mb-2 font-semibold">Email</label>
            <input type="email" id="email" className="rounded-md border py-3 px-5 text-sm border-input-border placeholder:text-input-grey outline-0" placeholder="youremail@gmail.com" />
        </div>
        <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-sm mb-2 font-semibold">Password</label>
            <input type="password" id="password" placeholder="Password" className="rounded-md border py-4 px-6 text-sm border-input-border placeholder:text-input-grey outline-0" />
        </div>
        <div className="flex justify-between items-center mb-6">
            <div className="flex flex-row items-center justify-center">
                <input className="mr-1" type="checkbox" />
                <span className="text-xs font-semibold">Remember Me</span>
            </div>
            <div className="flex items-center ">
                <p className="text-xs font-medium">No account yet?</p> 
                <Link href=''><a className='text-xs font-medium text-blue-600 ml-1' >Register</a></Link>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <Link href=''><button className=" mb-4 w-full bg-input-border text-white px-2 py-4 rounded-md">Login</button></Link>
            <Link href=''><a className='text-blue-600 text-sm'>Forgot password?</a></Link>
        </div>
    </form>
  )
}

export default LoginForm