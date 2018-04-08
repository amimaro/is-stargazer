'use strict'

let axios = require('axios')

module.exports = async function isStargazer(repository, username) {
  try {
    const stargazers = await getStargazers(repository)
    return hasStargazer(stargazers.data, username)
  } catch (err) {
    console.error(`An error occured: ${err}`)
    return null
  }
}

let getStargazers = async function(repository) {
  return await axios.get(`https://api.github.com/repos/${repository}/stargazers`)
}

let hasStargazer = function(stargazers, username) {
  for (let stargazer of stargazers) {
    if (stargazer.login === username)
      return true
  }
  return false
}
