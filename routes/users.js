import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* CREATE user. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user. */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

/* PUT user. */
router.put('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

/* DELETE user. */
router.delete('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

export default { router };
