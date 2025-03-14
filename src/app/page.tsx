//import Image from "next/image";
import Footer from "./_components/footer";
import Header from "./_components/header";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-4 pb-16 gap-8 sm:p-8 md:p-16 lg:p-20 md:gap-16 font-[family-name:var(--font-geist-sans)]">
      
      <Header />
      
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <div>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in font-[family-name:var(--font-geist-mono)] bg-gradient-to-r from-green-600 via-yellow-500 to-blue-500 text-transparent bg-clip-text">
            Hello, I am Angelo Makory
          </h1>
          <div className='my-3 sm:my-4 md:my-6'>
            <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-sm animate-fade-in font-[family-name:var(--font-geist-mono)] bg-gradient-to-r from-green-600 via-yellow-500 to-blue-500 text-transparent bg-clip-text">
              I am a very passionate Full Stack developer and data enthusiast fueled by the commitment to provide the best professional services in my qualifications.
            </p>
          </div>
          
        </div>
        
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}
      </main>

      <Footer />
    </div>
  );
}
