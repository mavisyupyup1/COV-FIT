const router = require('express').Router();
const { Schedule, User, Painting } = require('../../models');
const withAuth = require('../../utils/auth');
//get all scheduled item
router.get('/',(req,res)=>{
    console.log('===============')
    Schedule.findAll({
        // where:{
        //     user_id:req.session.user_id
        // },
        attributes:[
            'id',
            'painting_id', 
            'start',  
        ],
        include:[
            {
                model:User,
                attributes:['id']
            }
        ]
    }).then(dbScheduleData=>{
        res.json(dbScheduleData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err)
    })
})

router.post("/", (req, res)=>{
        //console.log(req.body);
if(req.session){
    Schedule.create({ 
        use_id:req.session.use_id,
        painting_id:req.body.painting_id,
        start:req.body.date
    })
        .then(dbScheduleData=> {
          res.json(dbScheduleData);
        ;})
   
 }

});

module.exports=router;