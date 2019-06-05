const router = require('express').Router();

// don't forget that these are already mounted on /api!
router.use('/auth', require('./auth'))


router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})


// module.exports = router;
