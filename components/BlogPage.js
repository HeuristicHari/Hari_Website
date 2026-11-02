import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Navbar from './navbar';
import { parentOfPage, isPageInTree } from './gameTheoryTree';
import 'tailwindcss/tailwind.css'

// Background for the Game Theory page and every page under it. Change this to recolor them all.
// Starts as the Game Theory tile's gray on the homepage.
const BG_COLOR = "bg-gray-300"

// Shared layout for text-only blog pages, matching the Perudo Blog formatting.
// Each child paragraph should be a <Paragraph>.
export function Paragraph({ children }) {
  return (
    <div className='text-black md:text-md space-x-2 sm: mx-16 md:mx-32 my-2 md:my-4 lg:mx-64'>
      {children}
    </div>
  )
}

// Goes back one level: to the Game Theory page with this page's dropdown opened.
// Uses ?parent= from the link that got here, so a page listed twice returns to the right spot.
// Renders nothing for pages outside the tree (including the Game Theory page itself).
function BackButton() {
  const router = useRouter()
  // Post URLs skip the subfolder (see next.config.js), so match on the file name alone.
  const url = '/' + router.pathname.split('/').pop()
  if (!isPageInTree(url)) return null
  // Top-level pages have no parent, so they go back to the Game Theory page with nothing open.
  const parent = router.query.parent || parentOfPage(url)
  const query = parent ? { open: parent } : {}
  return (
    <div className='self-stretch ml-8'>
      <Link href={{ pathname: '/game_theory_page', query }} className="font-semibold hover:text-blue-700 hover:underline">
        ← Back
      </Link>
    </div>
  )
}

export default function BlogPage({ title, children }) {
  return (
  <div className={`${BG_COLOR} overflow-x-hidden`}  >
    {/* pages may be short, so pin content to the top instead of the container's vertical centering */}
    <div className={styles.container} style={{ justifyContent: 'flex-start' }}>

      <Navbar />

      <p className='space-y-2'>&ensp;</p>

      <BackButton />

      <h1 className="text-center text-primary-900 mb-1 font-semibold text-2xl md:text-4xl tracking-tight">{title}</h1>

      <div className='self-stretch'>
        {children}
      </div>

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
