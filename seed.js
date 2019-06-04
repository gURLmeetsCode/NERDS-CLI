const db = require('./server/db/_db')
const User = require('./server/db/models/Users')
const {green, red} = require('chalk')

const seed = async () => {
  try {
    await db.sync({force: true})
    await User.create({
      email: 'cody@email.com',
      password: '12345'
    })
    console.log(green('Seeding success!'))
    db.close()
  } catch (err) {
    console.error(red(`Oh noes!`))
    console.error(err.stack)
    db.close()
  }
}

seed()
