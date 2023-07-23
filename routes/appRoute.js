const express = require('express');
const getUsers = require('../controller/userController')
const router = express.Router();
router.get('',(req , res)=>{
    res.send('Hi Deepak');
});
router.get('/user',(req , res)=>{
    getUsers(req);
    res.send('Hi Deepak user');
});



module.exports = router;