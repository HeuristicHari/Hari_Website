import BlogPage, { Paragraph } from '../../components/BlogPage';

// true: the Game Theory page links here. false: it shows an open circle that doesn't link
// (the page still loads if someone types its URL).
export const SHOW = false

export default function Dominant_strategies_page() {
  return (
    <BlogPage title="Multiplayer Equilibria and Dominant Strategies">
      <Paragraph>
        What did you think would happen :/
      </Paragraph>
    </BlogPage>
  )
}
