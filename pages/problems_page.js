import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../Components/navbar';
import 'tailwindcss/tailwind.css'

export default function FirstPost() {
  const image_class="flex justify-center md:my-2 transform hover:scale-105 transition duration-300"
  return (
  <div className="bg-blue-300"  >
    <div className={styles.container}>
      
      <Navbar />

      <p className='space-y-2'>&ensp;</p>
    

		
			<h1 className="text-center text-primary-900 mb-1 font-semibold text-2xl md:text-4xl tracking-tight">My fave published problems over the years (:</h1>
      <div className='w-3/5'>
      <div className={image_class}> 
      <a href="https://drive.google.com/file/d/1juoxlwJrkbXtGE4VDYKDawdc8ZvcqUPp/view" target="_blank" rel="noopener noreferrer">
        <img src='/Images/CMIMC-2024-Algebra-P5.png' className='my-1 '  ></img>
      </a>
      </div>
      <div className={image_class}> 
      <a href="https://drive.google.com/file/d/1kAubTU07ddg-61izBOJNWPicyuy98cFe/view" target="_blank" rel="noopener noreferrer">
        <img src='/Images/CMIMC-2024-Combo-P8.png' className='my-1 '  ></img>
      </a>
      </div>
      <div className={image_class}> 
      <a href="https://drive.google.com/file/d/1juoxlwJrkbXtGE4VDYKDawdc8ZvcqUPp/view" target="_blank" rel="noopener noreferrer">
        <img src='/Images/CMIMC-2024-Algebra-P7.png' className='my-1'  ></img>
      </a>
      </div>

      <div className={image_class}> 
      <a href="https://cncm-website.web.app/pdfs/cncm-online/Problems_R3.pdf" target="_blank" rel="noopener noreferrer">
        <img src='/Images/CNCM-Online-R3-P7.png' className='my-1'  ></img>
      </a>
      </div>


     
      <div className={image_class}> 
      <a href="https://cncm-website.web.app/pdfs/cncm-online/Problems_R4.pdf" target="_blank" rel="noopener noreferrer">
        <img src='/Images/CNCM-Online-2021-P5.png' className='my-1'  ></img>
      </a>
      </div>
      <div className={image_class}> 
      <a href="https://cncm-website.web.app/pdfs/cncm-online/Problems_R3.pdf" target="_blank" rel="noopener noreferrer">
        <img src='/Images/CNCM-Online-R3-P5.png' className='my-1'  ></img>
      </a>
      </div>


      <div className={image_class}> 
      <a href="https://cncm-website.web.app/images/CRMT_Individual_Round.pdf" target="_blank" rel="noopener noreferrer">
        <img src='/Images/CRMT-2019-P8.png' className='my-1'  ></img>
      </a>
      </div>
      <div className={image_class}> 
      <a href="https://cncm-website.web.app/pdfs/cncm-online/Problems_R4.pdf" target="_blank" rel="noopener noreferrer">
        <img src='/Images/CNCM-Online-2021-P7.png' className='my-1'  ></img>
      </a>
      </div>
      <div className={image_class}> 
      <a href="https://drive.google.com/file/d/1ceoUzNFzZqYCNoPbzTGBwHyznHdKv5Xg/view" target="_blank" rel="noopener noreferrer">
        <img src='/Images/monty-1.png' className='my-1 w-75wv '  ></img>
      </a>
      </div>
      </div>

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
