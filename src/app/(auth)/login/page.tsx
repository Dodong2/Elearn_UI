
"use client"; 
import Link from "next/link";
import { IoLogoGoogle } from "react-icons/io"; 
import { IoPerson } from "react-icons/io5"; 
 
// Object Factory Function ang tawag dito
const createContents = () => ({ 
  message1: {  
    title: "Account Login", 
    icon: <IoPerson className="text-2xl" />, // JSX element 
    description: "Please select your account type"
  }, 
  loginButton: {  
    title: "Continue with Google",  
    icon: <IoLogoGoogle className="text-2xl" />, // JSX element 
    href: "/beneficiary"
  }, 
}); 

//Main login page
export default function Login() { 
  const contents = createContents(); // Create contents dynamically 
 
  return ( 
    <div className="flex items-center justify-center min-h-screen bg-gray-100"> 
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md"> 
        <div className="flex justify-center mb-4"> 
          <div className="rounded-full bg-gray-200 p-3"> 
            {contents.message1.icon} {/* Use account icon */} 
          </div> 
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4"> 
          {contents.message1.title} 
        </h2> 
        <p className="text-center text-gray-500 mb-4"> 
           {contents.message1.description}
        </p>
        <Link href={contents.loginButton.href}>
        <button 
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex justify-center items-center gap-1.5" 
          type="button" 
        > 
          {contents.loginButton.icon} {contents.loginButton.title} 
        </button>
        </Link>
      </div>
    </div> 
  ); 
}