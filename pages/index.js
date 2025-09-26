import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../components/navbar';
import 'tailwindcss/tailwind.css'
import Tile from '../components/Tile';
export default function Home() {
  return (
  <div className="bg-zinc-800 overflow-x-hidden">
    <div className={styles.container}>
      
      <Navbar />

      <p className='space-y-2'>&ensp;</p>
    

		<div className='text-white md:text-xl space-x-2 sm: mx-16 md:mx-32 lg:mx-64'>
			<h1 className="text-center text-primary-900 mb-1 font-semibold text-3xl md:text-5xl tracking-tight">Hi! I'm Hari!</h1>
			
      <div className='mx-8'>
       Welcome. I'm a junior at Carnegie Mellon University majoring in CS and Math. I've previously interned at Meta and 
       Hartree Partners, and I'm currently a <a href="https://www.cs.cmu.edu/~fsaad/teaching/15259-f25/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 font-semibold rounded">TA</a>. Below is a collection of my work and interests.
    
      </div>
		</div>
    <div className="grid grid-cols-3">
          {/* <Tile
            title="About me"
            content={<p>Random facts</p>}
            link="/"
            bg={0}
          /> */}

 
          <Tile
            title="Perudo"
            content={<div><div className='text-md my-1'>High variance duel (07-18-25)</div> <img src='/Images/perudo-template.png' className=' text-center my-8 sm:my-0 lg:my-4 '></img></div>} 
            link="perudo_page"
            bg={1}
          />
 
          
          <Tile
            title="Hari's Head-Scratchers"
            content={<div><div className='text-md my-1'>Problems for your free time</div><img src='/Images/Region.png' className=' text-center sm:w-20 sm:mx-9 lg:w-40 lg:mx-14 lg:my-9'></img> </div>} 

            link="/problems_page"
            bg={2}
          />
          <Tile
            title="Jane Street Probability Cards"
            link="/JS_Probability_Playing_Cards_10_17.pdf"
            bg={3}
            content={<div><div className='text-md'>The only solutions online, I think</div> <img src='/Images/QQ.png' className='sm:w-16 lg:w-44 sm:my-1  sm:mx-14 lg:mx-14 my-4'></img></div>}
          />

          <Tile
            title="Research"
            link="/Hari_Research_Ultrasound.pdf"
            bg={0}
            content={<div><div className='text-md my-1'>Pretty graphs, Ultrasound images</div> <img src='/Images/3D-Research.png' className=' my-11 sm:w-20 sm:my-2 sm:mx-9 lg:w-48 lg:mx-12 lg:my-7'></img></div>}
          />

          <Tile
            title="Games"
            content = {<div><div className='text-md my-1'>My life as a history of fun games</div> <img src ='/Images/UTTT.png' className = ' text-center sm:w-20  lg:w-40 lg:mx-16 lg:my-9'></img></div>}  
            link = "/games_page"
            bg={5}
          />
          

          <Tile 
            title="Nothing"
            content={<div><div className='text-md my-1'>There's nothing here...</div> </div>}  
            link = ""
            bg = {6}
          />
          {/* <Tile
            title="Food"
            imageSrc="/images/victory.png" 
            link="/first-post"
            bg={5}
          /> */}
           

        </div>

      <Head className="bg-zinc-800">
        <title>Hari Desikan</title>
        <link rel="icon" href="/icon.ico" />
      </Head>

      <main className="bg-zinc-800">
        
      </main >



      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 101%;
          height: 30px;
          border-top: 1px solid #27272a;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            overscroll-behavior: none;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    </div>
  )
}
