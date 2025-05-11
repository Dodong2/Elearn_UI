"use client"
import Link from "next/link";


const landing = () => ({
  button: { text: "Get Started", href: "./login" }
})

export default function Home() {
  const landingContent = landing()
  return (
    <div className="flex justify-center items-center min-h-screen">
          <div>
            <Link href={landingContent.button.href}>
                  <button className="p-4 rounded-2xl border-2 text-black cursor-pointer">{landingContent.button.text}</button>
                  </Link>
          </div>
    </div>
  );
}
