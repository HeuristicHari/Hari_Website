import BlogPage from '../components/BlogPage';

// Shows the PDF in the browser's built-in viewer so it scrolls right on the page.
export default function Warps_and_squares_page() {
  return (
    <BlogPage title="Warps and Squares">
      <div className='mx-4 md:mx-32 lg:mx-64 my-2 md:my-4'>
        <iframe src="/warps_and_squares.pdf" title="Warps and Squares" className='w-full h-[80vh] rounded shadow-md bg-white' />
        <a href="/warps_and_squares.pdf" target="_blank" rel="noopener noreferrer" className="block my-2 text-purple-700 hover:text-blue-700 hover:underline">
          Open the PDF in a new tab
        </a>
      </div>
    </BlogPage>
  )
}
