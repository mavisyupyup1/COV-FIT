const router = require('express').Router();
const { Schedule, User, Exercise } = require('../../models');
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
            'exercise_id', 
            'user_id',
            'start',  
        ],
        include:[
            {
                model:Exercise,
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
    res.render('scheduler',{schedules,loggedIn:true})
     })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err)
    })
    console.log()
})
router.get('/event',withAuth,(req,res)=>{
    console.log('=============== ')
    console.log(req.session.user_id)
    Schedule.findAll({
        where:{
            user_id:req.session.user_id
        },
        attributes:[
            'start','id'
        ],
        include:[
            {
                model:Exercise,
                attributes:['title'],
            },
        ]
    })
    .then(dbScheduleData=>{
        const mappedEvents = dbScheduleData.map(event=>{
            const eventObj =event.get({plain:true})
            const mappedEvent = {id:eventObj.id,start:eventObj.start,title:eventObj.exercise.title};
            console.log(mappedEvent);
            return mappedEvent;
          })
          res.json(mappedEvents)
        
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
        exercise_id:req.body.exercise_id,
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