import { SHOW as SHOW_LEVELING } from '../pages/poker/Leveling_Theory';
import { SHOW as SHOW_SHARPE } from '../pages/poker/Sharpe_Ratio';
import { SHOW as SHOW_ADAPTIVE } from '../pages/poker/Exploiting_Adaptive_Strategies';
import { SHOW as SHOW_CONSTRUCTIONS } from '../pages/poker/Constructions';
import { SHOW as SHOW_ADVICE } from '../pages/tichu/On_advice_given_online';
import { SHOW as SHOW_FICKLE } from '../pages/nash_equilibria/Even_2-Player_Nash_Equilibria_are_Fickle';
import { SHOW as SHOW_MULTIPLAYER } from '../pages/nash_equilibria/Multiplayer_Equilibria_and_Dominant_Strategies';

// The Game Theory page's tree. A dropdown has an id and children; a page has an href.
// A page's URL is its title with spaces turned into underscores (pages/<URL>.js).
// Dropdown ids must be unique: back buttons use them to reopen the right dropdown.
// A page whose show() returns false is listed but not linked; its flag lives at the top of the page's own file.
// show is a function because those files import this one: reading the flag lazily avoids the import cycle.
export const tree = [
  { title: "Warps and Squares", href: "/Warps_and_Squares" },
  { title: "Poker", id: "poker", children: [
    { title: "Constructions", href: "/Constructions", show: () => SHOW_CONSTRUCTIONS },
    { title: "Leveling Theory", href: "/Leveling_Theory", show: () => SHOW_LEVELING },
    { title: "Sharpe Ratio", href: "/Sharpe_Ratio", show: () => SHOW_SHARPE },
    { title: "Exploiting Adaptive Strategies", href: "/Exploiting_Adaptive_Strategies", show: () => SHOW_ADAPTIVE },
  ]},
  { title: "Tichu", id: "tichu", children: [
    { title: "On advice given online", href: "/On_advice_given_online", show: () => SHOW_ADVICE },
  ]},
  { title: "Nash Equilibria", id: "nash_equilibria", children: [
    { title: "Even 2-Player Nash Equilibria are Fickle", href: "/Even_2-Player_Nash_Equilibria_are_Fickle", show: () => SHOW_FICKLE },
    { title: "Multiplayer Equilibria and Dominant Strategies", href: "/Multiplayer_Equilibria_and_Dominant_Strategies", show: () => SHOW_MULTIPLAYER },
  ]},
]

// Ids of the dropdowns from the root down to (and including) dropdown `id`, or [] if not found.
export function pathToDropdown(id, items = tree) {
  for (const item of items) {
    if (!item.children) continue
    if (item.id === id) return [id]
    const rest = pathToDropdown(id, item.children)
    if (rest.length) return [item.id, ...rest]
  }
  return []
}

// Whether a page at `href` appears anywhere in the tree.
export function isPageInTree(href, items = tree) {
  return items.some((item) => item.href === href || (item.children && isPageInTree(href, item.children)))
}

// Id of the first dropdown that directly contains a page at `href`, or null (top level or not found).
export function parentOfPage(href, items = tree, parent = null) {
  for (const item of items) {
    if (item.href === href) return parent
    if (item.children) {
      const found = parentOfPage(href, item.children, item.id)
      if (found) return found
    }
  }
  return null
}
