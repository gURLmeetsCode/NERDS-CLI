const db = require('./server/db/_db');
const app = require('./server');
const PORT = 5001


const init = async () => {
  await db.sync({force: true}) 
  console.log('db synced')
  if (!module.parent) app.listen(PORT, () => console.log(`==> 🌎 Listening at http://localhost:${PORT}`))
}

init();
