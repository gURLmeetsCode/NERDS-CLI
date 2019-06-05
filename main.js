const db = require('./server/db/_db')
const app = require('./server/app');
const PORT = 5001


const init = async () => {
  // leave the force true in so you can have a clean slate every time
  await db.sync({force: true})
  console.log('db synced')
  if (!module.parent) app.listen(PORT, () => console.log(`==> 🌎 Listening at http://localhost:${PORT}`))
}

init();
