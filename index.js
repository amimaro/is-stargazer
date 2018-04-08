'use strict'

let axios = require('axios')

module.exports = async function isStargazer(params) {
  try {
    const stargazers = await getStargazers(params.repos, params.token)
    return hasStargazer(stargazers.data, params.query)
  } catch (err) {
    console.error(`An error occured: ${err}`)
    return null
  }
}

let getStargazers = async function(repository, token) {
  const URI = `https://api.github.com/repos/${repository}/stargazers`

  return await axios.get(URI)
}

let hasStargazer = function(stargazers, username) {
  for (let stargazer of stargazers) {
    if (stargazer.login === username)
      return true
  }
  return false
}
