const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
  console.log(req.query.name)
  res.send('User List')
})

router.get('/new', (req, res) => {
  res.render('users/new', { firstName: 'Mike Maignan' })
})

router.post('/', (req, res) => {
  const isValid = true
  if (isValid) {
    users.push({ firstName: req.body.firstName })
    res.redirect(`/users/${users.length - 1}`)
  } else {
    console.log('error')
    res.render('users/new', { firstName: req.body.firstName })
  }
  console.log(req.body.firstName)
  res.send('hi')
})

router
  .route('/:id')
  .get((req, res) => {
    // eslint-disable-next-line no-unused-expressions
    console.log(req.user)
    res.send(`get user by id ${req.params.id}`)
  })
  .put((req, res) => {
    // eslint-disable-next-line no-unused-expressions
    req.params.id
    res.send(`edit user by id ${req.params.id}`)
  }).delete((req, res) => {
    // eslint-disable-next-line no-unused-expressions
    req.params.id
    res.send(`delete user by id ${req.params.id}`)
  })

const users = [{ name: 'Kylian' }, { name: 'Mbappe' }]

router.param('id', (req, res, next, id) => {
  req.user = users[id]
  next()
})

function logger (req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router
