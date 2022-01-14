const router = require('express').Router();
const { route } = require('.');
const { Schedule, User, Painting } = require('../../models');
const { sequelize } = require('../../models/Post');
const withAuth = require('../../utils/auth');
//get all scheduled item
router.get('/',(req,res)=>{
    console.log('===============')
    Schedule.findAll({
        where:{
            user_id:req.session.user_id
        },
        attributes:[

        ]
    })
})
module.exports=router;