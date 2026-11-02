import BlogPage, { Paragraph } from '../../components/BlogPage';

// true: the Game Theory page links here. false: it shows an open circle that doesn't link
// (the page still loads if someone types its URL).
export const SHOW = false

export default function Leveling_theory_page() {
  return (
    <BlogPage title="Leveling Theory">
      <Paragraph>
        Don't know what I'll talk about in here TBH
      </Paragraph>
    </BlogPage>
  )
}
