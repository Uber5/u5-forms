import React from 'react'
import { curry, reduce } from 'ramda'

const divCombine = curry((c, o) => x => (<div>{c(x)} {o(x)}</div>))

export default (...args) => {
  const [first, ...rest] = args
  return reduce((acc, c) => divCombine(acc, c), first, rest)
}
