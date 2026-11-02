import BlogPage, { Paragraph } from '../../components/BlogPage';

// true: the Game Theory page links here. false: it shows an open circle that doesn't link
// (the page still loads if someone types its URL).
export const SHOW = false

export default function Heads_up_equilibria_page() {
  return (
    <BlogPage title="Even 2-Player Nash Equilibria are Fickle">
      <Paragraph>
        What did you think would happen :/
      </Paragraph>
    </BlogPage>
  )
}
