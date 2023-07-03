import { withHighlight } from './common'


let handler = (req, res) => {
  const feedBack = JSON.parse(req);
  res.status(200).json(feedBack)
}

// export default handler;
export default withHighlight(handler)
