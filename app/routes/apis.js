const express = require('express')
const router = express.Router()
const newsletterController = require('../controllers/apis/newsletterController');

//endpoints
router.get('/', (req,res)=>{
    return res.status(200).json({
        status:"Api funcionando",
        version:"1.0.0"
    })
})

router.post('/newsletter', newsletterController.store) //Cadastra email

module.exports = router;
