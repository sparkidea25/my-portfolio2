import Head from 'next/head'
import experience from '../myportfolio/schemas/experience';
import sanityClient from '../pages/api/client'

const query = `*[_type == "experience"] {
  _id,
  Title,
  Company,
  Description
}`;


export default function Home({experiences}) {
  return (
    <div className="bg-white">
      <Head>
        <title>Micheal Daralola Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-start justify-items-start sm:w-full px-20 text-left">
        <div className="bg-yellow-300 md:pt-72">
          <h1 className="text-6xl font-bold font-mono">Hi I'm Micheal Daralola</h1>
          </div>
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
        <p className="sm:pr-96 sm:pb-12">From programming to marketing & business development, Micheal's work spans a wide range of disciplines. As a developer, he generally works in the javascript stack but he's always open to learning new technologies and frameworks. Here's a little skills list below, and a portfolio detailing his positions and projects (his GitHub is quite empty because most of his work has been done on private respositories, so he'd recommend reading through his portfolio instead of his GitHub).</p>
        <div className="grid grid-cols-3 gap-4 pb-18">
          <h1><li>Vuejs</li></h1>
          <h1><li>Reactjs</li></h1>
          <h1><li>Nodejs</li></h1>
          <h1><li>Typescript</li></h1>
          <h1><li>Go</li></h1>
        </div>

        <h2 className="text-6xl font-bold pt-16">MY{' '}<b className="text-yellow-600">EXPERIENCES</b></h2>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 pl-12 sm:w-full">
          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">{experience.title}</h3>
            <p className="mt-4 text-xl">
              Wirlix
            </p>
            <p>
              Job Description
            </p>
          </a>

          
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

export const getStaticProps = async () => {
  const experiences = await sanityClient.fetch(query);
  return {
    props: {experiences}

  };
}
