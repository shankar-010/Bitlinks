import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className="bg-purple-100">
     <section className="grid grid-cols-2 h-[50vh] ">
      <div className=" flex flex-col gap-4 items-center justify-center">
        <p className={`text-3xl font-bold ${poppins.className}`}>
The best URL Shortner in Market
</p>

<p className="px-16">
  we are most straightforward URL shortner
</p>
<div className='flex gap-3 justify-start'>
            <Link href="/shorten"><button className='bg-purple-500 rounded-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 rounded-lg p-3 py-1 font-bold text-white'>Github</button></Link>
        </div>
      </div>
      <div className=" flex justify-start relative">
        <Image className="mix-blend-darken"alt="an image" src={"/vector.jpg"} fill={true}/>
      </div>
     </section>
    </main>
  );
}
