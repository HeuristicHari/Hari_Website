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

      Obviously, you should call BS. But there exists a nash equilibrium where you simply resign.
      I nodelocked my solver (some of it is on Github) to call BS, and the minimax payoff did not change -- which means that 
      calling BS instead of resigning is also a nash equilibrium.
    </div>

    <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 my-2 md:my-4 lg:mx-64'>
      Why? To put it concisely, resigning is only weakly dominated by calling BS. And weakly dominated 
      strategies may be a part of a nash equilibrium (NE). In this particular case -- if our opponent tries to exploit our resign,
      they will lose too much EV by calling 2 3s when we don't have a 4. So our opponent can't exploit our resign, and the equilibria doesn't care about this node.

      The set of NE is not only trivially infinite, but also very difficult to describe. There are many situations where we can make clearly bad moves at cetain nodes of the game tree, 
      and our opponent can't efficiently exploit them because they don't know what die we have. I will be experimenting 
      with the LP to avoid generating such NE.

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

    <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 lg:mx-64'>
      I have to make some optimization choices, because the algorithm as-is is quite general and fails to exploit nice properties 
      of Perudo. Because of this, trying to solve with PyGambit (which implements Koller's Algorithm) results in something like 
      12 hours of computation to solve the one vs one game. So I reimplemented the algorithm, adding simple optimizations 
      like: when a matrix is guaranteed to be sparse, represent it as such. We've gotten to a 20000x speedup, 
      and now we can solve the game in 2-3 seconds.


    </div>

    <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 my-2 md:my40 lg:mx-64'>
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
