// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"

const checkPrime = (num: number) => {
  for (let i=2; i<num; i++) {
    if (num % i === 0) return true
  }
  return false
}
const isPrime = (req: NextApiRequest, res: NextApiResponse) => {
  res.send(checkPrime(+req.query.num));
}

export default isPrime