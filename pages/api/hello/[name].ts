import { NextApiRequest, NextApiResponse } from "next"

const Handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).send(`Hello ${req.query.name}`)
}
export default Handler