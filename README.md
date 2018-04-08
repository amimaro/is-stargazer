# is-stargazer [![Build Status](https://secure.travis-ci.org/amimaro/is-stargazer.svg?branch=master)](https://travis-ci.org/amimaro/is-stargazer) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Check if user has starred the repository

## Installation

```bash
npm install --save is-stargazer
```

## Usage

```javascript
const isStargazer = require('is-stargazer')

isStargazer({
    repos: 'amimaro/is-stargazer',
    query: 'amimaro',
    token: process.env.PERSONAL_ACCESS_TOKEN // optional
  })
  .then(
    res => {
      console.log(res)
    }
  )
  .catch(
    err => {
      console.error(err)
    }
  )
```

[How to create a Personal API Access Token?](https://blog.github.com/2013-05-16-personal-api-tokens/)

## Testing

```bash
npm run test
```

## License

MIT [LICENSE.md](LICENSE.md)

## Contributing

Pull Requests are welcome.

1. Fork it
2. Create your feature branch (`git checkout -b new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin new-feature`)
5. Create new Pull Request

Crafted with <3 by [amimaro](https://github.com/amimaro).
