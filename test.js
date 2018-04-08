import test from 'ava'
import isStargazer from './'

test('check amimaro at amimaro/is-stargazer', t => {
  t.plan(1)
  return isStargazer({
      repos: 'amimaro/is-stargazer',
      query: 'amimaro',
      token: process.env.PERSONAL_ACCESS_TOKEN
    })
    .then(
      res => {
        console.log('true - ' + res)
        t.true(res)
      }
    )
    .catch(
      err => {
        console.error(err)
      }
    )
})

test('check amimaro at amimaro/strobe', t => {
  t.plan(1)
  return isStargazer({
      repos: 'amimaro/strobe',
      query: 'amimaro',
      token: process.env.PERSONAL_ACCESS_TOKEN
    })
    .then(
      res => {
        console.log('false - ' + res)
        t.false(res)
      }
    )
    .catch(
      err => {
        console.error(err)
      }
    )
})

test('check for null', t => {
  t.plan(1)
  return isStargazer({
      repos: '',
      query: '',
      token: ''
    })
    .then(
      res => {
        console.log('null - ' + res)
        t.is(res, null)
      }
    )
    .catch(
      err => {
        console.error(err)
      }
    )
})
