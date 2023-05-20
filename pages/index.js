import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../Components/navbar';
import 'tailwindcss/tailwind.css'
export default function Home() {
  return (
  <div className="bg-zinc-800"  >
    <div className={styles.container}>
      
      <Navbar />

      <p className='space-y-2'>&ensp;</p>
    

		<div className='text-white text-base md:text-xl space-y-2'>
			<h1 className=" space-y-2 text-center text-primary-900 mb-4 font-semibold text-3xl md:text-5xl tracking-tight">About</h1>
			

			<p>Hey! I'm Hari Desikan, a sophomore at Carnegie Mellon University majoring in CS. </p>
			<p>I'm involved with math competitions and have taken an interest in nondeterministic zero-sum games like Liar's Dice. </p>
      <p>Check out my projects if you're interested in learning more!</p>
		</div>
	
      <Head className="bg-zinc-800">
        <title>Page</title>
      </Head>

      <main className="bg-zinc-800">
        
      </main >

      <footer className='bg-slate-700'>
        
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
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
