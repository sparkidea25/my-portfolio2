import Head from 'next/head'


export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Micheal Daralola Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-start justify-items-start w-full px-20 text-left">
        <h1 className="text-6xl font-bold font-mono pt-72 bg-yellow-300">Hi I'm Micheal Daralola</h1>
        <p className="text-4xl font-mono">Fullstack focused software developer, building products that scale to Thousands of users.</p>
        <div className="flex space-x-4">
        </div>

        {/* <div className="flex flex-row border-box h-32 w-full shadow-2xl">
        <img src="/Micheal.jpg" className="h-24 pl-4 pt-2"/>
          <p className="pl-4">welcome to Micheal Daralola's perconal blog, you can check me out on my social's in the Footer.</p>
        </div> */}

        <div className="flex flex-row border-box pl-24 pr-24">
        </div>
        <h2 className="text-6xl font-bold pt-16">THE{' '}<b className="text-yellow-600">WORKS</b></h2>
        <p className="pr-96">From programming to marketing & business development, Micheal's work spans a wide range of disciplines. As a developer, he generally works in the javascript stack but he's always open to learning new technologies and frameworks. Here's a little skills list below, and a portfolio detailing his positions and projects (his GitHub is quite empty because most of his work has been done on private respositories, so he'd recommend reading through his portfolio instead of his GitHub).</p>
        <div class="flex flex-row space-x-4">
          <h1>Vuejs</h1>
          <h1> Reacjs</h1>
          <h1>Nodejs</h1>
          <h1>Typescript</h1>
          <h1>Go</h1>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
