const db = require('./server/db/_db')
const app = require('./server/app');
const PORT = 5001


const init = async () => {
  await db.sync()
  console.log('db synced')
  if (!module.parent) app.listen(PORT, () => console.log(`==> 🌎 Listening at http://localhost:${PORT}`))
}

init();
