import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../components/navbar';
import 'tailwindcss/tailwind.css'
export default function Perudo_page() {
  return (
  <div className="bg-red-300 overflow-x-hidden"  >
    <div className={styles.container}>
      
      <Navbar />

      <p className='space-y-2'>&ensp;</p>
    

		
			<h1 className="text-center text-primary-900 mb-1 font-semibold text-2xl md:text-4xl tracking-tight">Perudo</h1>
      <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 lg:mx-64'>I've known of this
      game since 2019. We used to play with cards instead of dice, which actually ends up
      robbing some of the beauty of the game. Now, you can play with your friends at
      {' '} <a href="https://perudoonline.com" rel="noopener noreferrer" className="text-purple-500 hover:text-blue-700 hover:underline" >perudoonline.com</a>{' '} without owning a truly questionable number of dice.
		</div>

    <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 my-2 md:my-4 lg:mx-64'>
      A little about the game -- it's a battle-royale game to outsmart and outsurvive other players, placed in the setting of a dice game. Something like a poker tournament, except
      the fact that aggressive actions are very high-risk and low-reward early on incentivizes extremely defensive play 
      near the beginning and aggressive play near the end. Additionally, players who start off losing
      gain a handicap as the game progresses, which introduces further complicated player dynamics to the game. Here are the {' '} <a href="../perudo_rules.pdf" className="text-purple-500 hover:text-blue-700 hover:underline">rules</a>{' '} if you want to learn more; they're also available
      on the website.
    </div>
    <h1 className="text-center  mb-1 font-semibold text-lg md:text-xl tracking-tight">AI</h1>
    <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 my-2 md:my-4 lg:mx-64'>
      CFR coming soon... or whenever I feel like continuing where I left off. My goal is to beat {' '} <a href="https://dudo.ai" rel="noopener noreferrer" className="text-purple-500 hover:text-blue-700 hover:underline">dudo.ai</a>{' '} as well
      as develop AIs for the variants it doesn't play.

    </div>
    <div className="flex justify-center md:my-16 lg:my-28"> 
    <img src='/Images/BS.png' className='md:h-32 lg:h-40  mx-11'></img>
  </div>


      <Head className="bg-zinc-800">
        <title>heuristichari</title>
      </Head>

      <main className="bg-zinc-800">
        
      </main >

      <footer className='bg-slate-700'>
        
      </footer>


{/* note footer width 102%: means if you scroll right theres white. idrc though. */}
      <style jsx>{`
        main {

          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width:
        }
        footer {
          width: 102%;
          height: 100px;
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
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    </div>
  )
}
