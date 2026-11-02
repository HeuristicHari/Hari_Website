import BlogPage, { Paragraph } from '../../components/BlogPage';

// true: the Game Theory page links here. false: it shows an open circle that doesn't link
// (the page still loads if someone types its URL).
export const SHOW = false

export default function Sharpe_ratio_page() {
  return (
    <BlogPage title="Sharpe Ratio">
      <Paragraph>
        Sneak Peek: This post is roughly about considering an opponent's strategy, 
        putting error bars on all the frequencies, and then taxing the EV of our strategy
        by some percent of it's standard deviation (assuming the stdev is toxic). You can also consider only taxing it 
        with Stdev induced by error bars if you like (this assumes the game you're playing in isn't rigged)
      </Paragraph>
    </BlogPage>
  )
}
