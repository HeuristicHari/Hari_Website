import Link from 'next/link';
import { useRouter } from 'next/router';
import BlogPage from '../components/BlogPage';
import { tree, pathToDropdown } from '../components/gameTheoryTree';

const row_class = "flex items-center gap-2 py-1 font-semibold"
const icon_class = "inline-block w-3 text-center"

// A dropdown holds Dropdowns and Pages. The arrow points down while it's open.
function Dropdown({ item, open_ids }) {
  return (
    <details open={open_ids.includes(item.id)}>
      <summary className={`${row_class} cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:text-blue-700`}>
        {/* only this dropdown's own open state rotates the arrow, not an open ancestor's */}
        <span className={`${icon_class} transition-transform [details[open]>summary>&]:rotate-90`}>▶</span>
        {item.title}
      </summary>
      <div className='ml-5'>
        <Items items={item.children} parent_id={item.id} open_ids={open_ids} />
      </div>
    </details>
  )
}

// A page is a leaf: a filled circle linking to a text page, or an open circle
// that doesn't link if the page's SHOW flag is off.
// Links carry the parent dropdown's id so the page's back button returns to it.
function Page({ item, parent_id }) {
  if (item.show && !item.show()) {
    return <div className={row_class}><span className={icon_class}>○</span>{item.title}</div>
  }
  const href = parent_id ? { pathname: item.href, query: { parent: parent_id } } : item.href
  return (
    <div className={row_class}>
      <span className={icon_class}>●</span>
      <Link href={href} className="hover:text-blue-700 hover:underline">{item.title}</Link>
    </div>
  )
}

function Items({ items, parent_id, open_ids }) {
  return items.map((item) => item.children
    ? <Dropdown key={item.id} item={item} open_ids={open_ids} />
    : <Page key={item.title} item={item} parent_id={parent_id} />
  )
}

export default function Game_theory_page() {
  // ?open=<dropdown id> opens that dropdown and everything above it (used by back buttons).
  const open_ids = pathToDropdown(useRouter().query.open)
  return (
    <BlogPage title="Game Theory">
      <div className='text-black md:text-md sm: mx-16 md:mx-32 my-2 md:my-4 lg:mx-64'>
        <Items items={tree} parent_id={null} open_ids={open_ids} />
      </div>
    </BlogPage>
  )
}
