const router = require('express').Router();
const { Schedule, User, Painting } = require('../../models');
const withAuth = require('../../utils/auth');
//get all scheduled item
router.get('/',withAuth,(req,res)=>{
    console.log('=============== ')
    console.log(req.session.user_id)
    Schedule.findAll({
        where:{
            user_id:req.session.user_id
        },
        attributes:[
            'id',
            'painting_id', 
            'user_id',
            'start',  
        ],
        include:[
            {
                model:Painting,
                attributes:['title']
            },
            {
                model:User,
                attributes:['username']
            }
        ]
    })
    .then(dbScheduleData=>{
        console.log(dbScheduleData)
    const schedules = dbScheduleData.map(schedule=>schedule.get({plain:true}));
    console.log('==============')
    console.log(schedules)
    res.render('myschedule',{schedules,loggedIn:true})
     })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err)
    })
    console.log()
})

router.post("/",(req, res)=>{
        //console.log(req.body);
if(req.session){
    Schedule.create({ 
        user_id:req.session.user_id,
        painting_id:req.body.painting_id,
        start:req.body.date
    })
    .then(dbScheduleData=>res.json(dbScheduleData))
   .catch(err=>{
       console.log(err);
       res.status(400).json(err)
   })
 }
});


module.exports=router;