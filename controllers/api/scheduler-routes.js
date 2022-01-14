const router = require('express').Router();
const { route } = require('.');
const { Schedule, User, Painting } = require('../../models');
const withAuth = require('../../utils/auth');
//get all scheduled item
router.get('/',(req,res)=>{
    console.log('===============')
    Schedule.findAll({
        where:{
            user_id:req.session.user_id
        },
        attributes:[
'id','painting_id','year',

        ]
    })
})
module.exports=router;