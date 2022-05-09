const express = require('express');
const router = express.Router();
const userRegistrationRepository = require("./infrastructure/repository/user-repository/user-registration-repository");


router.get('/', (req,res)=>{
    const users = userRegistrationRepository();
    res.status(200).json(users);
});

router.post('/',(req,res)=>{
    const {test} = req.body;
    res.status(201).json(test);
})

module.exports = router;