import BlogPage, { Paragraph } from '../../components/BlogPage';

// true: the Game Theory page links here. false: it shows an open circle that doesn't link
// (the page still loads if someone types its URL).
export const SHOW = false

export default function Advice_given_online_page() {
  return (
    <BlogPage title="On advice given online">
      <Paragraph>
        What did you think would happen :/
      </Paragraph>
    </BlogPage>
  )
}
