import BlogPage from '../../components/BlogPage';

// true: the Game Theory page links here. false: it shows an open circle that doesn't link
// (the page still loads if someone types its URL).
export const SHOW = true

// Shows the PDF in the browser's built-in viewer so it scrolls right on the page.
export default function constructions() {
  return (
    <BlogPage title="Constructions">
      <div className='mx-4 md:mx-32 lg:mx-64 my-2 md:my-4'>
        <iframe src="/Poker_Constructions.pdf" title="Constructions" className='w-full h-[80vh] rounded shadow-md bg-white' />
        <a href="/Poker_Constructions.pdf" target="_blank" rel="noopener noreferrer" className="block my-2 text-purple-700 hover:text-blue-700 hover:underline">
          Open the PDF in a new tab
        </a>
      </div>
    </BlogPage>
  )
}
