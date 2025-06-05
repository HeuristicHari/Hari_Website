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
    

		
			<h1 className="text-center text-primary-900 mb-1 font-semibold text-2xl md:text-4xl tracking-tight">Perudo Blog</h1>
      <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 lg:mx-64'>I've known of this
      game since 2019. We used to play with cards instead of dice, which ended up
      removing much from the complexity of the game. Now, you can play with friends at
      {' '} <a href="https://perudoonline.com" rel="noopener noreferrer" className="text-purple-700 hover:text-blue-700 hover:underline" >perudoonline.com</a>{' '} without owning a truly questionable number of dice.
		</div>

    <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 my-2 md:my-4 lg:mx-64'>
      A little about the game -- it's a survival game where you win by being the last player standing. Here are the {' '} <a href="../perudo_rules.pdf" className="text-purple-700 hover:text-blue-700 hover:underline">rules</a>{' '} if you want to learn more; they're also available
      on the website. See if you can come up with a strategy to beat your friends!
    </div>
    <h1 className="text-center mb-1 font-semibold text-lg md:text-xl tracking-tight">AI</h1>
    <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 my-2 md:my-4 lg:mx-64'>
      (05-31-25)
      Heads up, one die each. You roll a 4. Your opponent calls 2 3s. What is your best response?
    </div>

    <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 lg:mx-64'>

      Obviously, you should call BS. But there exists a nash equilibrium where you call 2 6s (mechanically equal to resigning.)
      I nodelocked my solver (some of it is on Github) to call BS, and the minimax payoff did not change -- which means that 
      calling BS instead of resigning is also a nash equilibrium.
    </div>

    <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 my-2 md:my-4 lg:mx-64'>
      Why? To put it concisely, resigning is only weakly dominated by calling BS. And weakly dominated 
      strategies may be a part of a nash equilibrium. In this particular case -- if our opponent tries to exploit our resign,
      they will lose too much EV by calling 2 3s. So our opponent can't exploit our resign, and the equilibria doesn't care about this node.

      (For those who've used GTOWizard -- this is the same reason why GTOWizard will sometimes give you weird looking
      strategies along with a warning that you are at a "not-often-traversed-node" of the game tree.)
    </div>

    <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 my-2 md:my-4 lg:mx-64'>
        (05-30-25)
      Perudo is just large enough to put naive LP-solving out of reach, as I found when I coded up a 
      naive solution -- represent your strategy as a mix of all pure strategies, then iterate over opposing strategies 
      and find a distribution that does well vs all of them. There are on the order of 
      12^(2^11) opposing pure strategies. Solution: use the Koller-Megiddo-Strengel algorithm that works with 
      sequential representations of games.
    </div>

    <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 my-2 md:my-4 lg:mx-64'>
      The algorithm is a bit general, and supports a wide class of games. So it fails to exploit nice properties 
      of perudo. Because of this, trying to solve with PyGambit (which implements Koller's Algorithm) results in something like 
      12 hours of computation to solve the one vs one game. Solution: reimplement the algorithm, leveraging details like the fact that 
      certain game-theoretic matrices are sparse in Perudo's context. 

    </div>

    <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 md:my-0 lg:mx-64'>
        (01-13-25) 
        My overall goal is to 
        beat <a href="https://dudo.ai" rel="noopener noreferrer" className="text-purple-700 hover:text-blue-700 hover:underline">dudo.ai</a>. The core idea is fine-tuning counter-factual regret techniques using pytorch, 
        which is similar to experts. Thus far, I've ported some code to a collab notebook for CUDA (GPU) access, coded up a lot of utilities, and trained 2 models for a (measly) 6k iterations, varying 
        a hyperparameter that I invented. As expected, one model simplifies strategies a little more aggressively than the other.
  
    </div>

       <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 my-2 md:my-4 lg:mx-64'>
       I've experimented with regret-hedge algorithms, including the one at <a href="https://arxiv.org/pdf/0903.2851" rel="noopener noreferrer" className="text-purple-700 hover:text-blue-700 hover:underline">https://arxiv.org/pdf/0903.2851</a> that tried to 
       avoid the problem of tuning a learning rate parameter. However, when I implemented it, weighting weights in 
       proportion to re^(r^2) empirically just converges poorly because the strategy "likes leaf nodes too much"

        For the future, I intend to integrate linear programming (LP) 
        into the model, solving near-terminal states explicitly. I got some experience with LPs them in CMUs 15451, where I found that making simple observations about games 
        to construct LPs can lead to a lot of speedup. 
  </div>

  
    <div className="flex justify-center md:my-16 lg:my-28"> 
    <img src='/Images/BS.png' className='md:h-32 lg:h-40  mx-11'></img>
  </div>


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
