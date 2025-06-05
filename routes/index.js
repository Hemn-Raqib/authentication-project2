const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => res.render('welcome'));
router.get('/dashboard', (req,res) => res.render(`dashboard`));


module.exports = router;





