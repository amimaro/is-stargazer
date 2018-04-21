'use strict'

let axios = require('axios')

module.exports = async function isStargazer(params) {
  try {
    const stargazers = await getStargazers(params.repos, params.token)
    return hasStargazer(stargazers.data, params.query)
  } catch (err) {
    throw err
  }
}

let getStargazers = async function(repository, token) {
  const AUTH = token === undefined ? '' : `Bearer ${token}`
  const URI = `https://api.github.com/repos/${repository}/stargazers`

  return await axios.get(URI, { headers: { Authorization: AUTH } })
}

let hasStargazer = function(stargazers, username) {
  for (let stargazer of stargazers) {
    if (stargazer.login === username)
      return true
  }
  return false
}
