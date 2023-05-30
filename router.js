var express=require('express');
var app=express();
var router=express.Router();
var data=require('./users.txt')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

router.get('/',(req,res)=>{
    res.send(data)
})


router.delete('/',(req,res)=>{
    var a=data.splice(0,data.length)
    res.send("message deleted"+a)
})


router.get('/:id',(req,res)=>{
    var found=data.some(value=>value.id===parseInt(req.params.id))
    if(found)
    {
        res.send(data.filter((value=>value.id===parseInt(req.params.id))))
    }
    else
    {
        res.sendStatus(404)
    }
    
})


router.get('/:id/comments',(req,res)=>{
    
    var found=data.some(value=>value.id===parseInt(req.params.id))
    if(found)
    {
        res.send(data[0].comments)
    }
    else
    {
        res.sendStatus(404)
    }
    
})



router.get('/:id/comments/:commentId',(req,res)=>{
    
    var found=data.some(value=>value.id===parseInt(req.params.id))
    if(found)
    {
        var result=data[0].comments.some(value=>value.id===parseInt(req.params.commentId))
        if(result){
            res.send(data[0].comments.filter(values=>values.id===parseInt(req.params.commentId)))
        }
        else
        {
            res.sendStatus(300)
        }
        
    }
    else
    {
        res.sendStatus(404)
    }
    
})

router.post('/',(req,res)=>{
    data.push(req.body)
  res.send(req.body)
})
router.post('/:id/comments',(req,res)=>{
    var found=data.some(value=>value.id===parseInt(req.params.id))
    if(found)
    {
         data[0].comments.push(req.body)
      res.send(req.body)
    }

      else{
        
        res.sendStatus(400)
      }

})


router.put('/:id',(req,res)=>{
   
       var found=data.some(value=>value.id===parseInt(req.params.id))
       if(found)
       {
               data.forEach(element => {

                if(element.id===parseInt(req.params.id))
                {
                    // element.name=req.body.name?req.body.name:element.name
                    // res.send(element.name)
                    // console.log(element.name)
                    // console.log(req.body.name)

                    // element.label=req.body.label?req.body.label:element.label
                    // res.send(element.label)
                    // console.log(element.label)
                    // console.log(req.body.label)
                   
                    element.label=req.body.label
                    res.send(element.label)

                }
              
            })
        }
        else
        {
            res.sendStatus(400)
        }
    });


router.put('/:id/comments/:commentId',(req,res)=>{
    var found=data.some(value=>value.id===parseInt(req.params.id))
    if(found)
    {
        var result=data[0].comments.some(val=>val.id===parseInt(req.params.commentId))
        if(result)
        {
            data[0].comments.forEach(user=>
                {
                    
                    //   if(response.id===req.params.commentId)
                    //   {
                    //     response.author=req.body.author
                    //     res.send(response.author)
                        
                    //   }

                    const updateUser=req.body;
                    if(user.id===parseInt(req.params.commentId)){
                        
                        user.rating=updateUser.rating?updateUser.rating:user.rating;
                        
                        res.json(user.rating)
                        console.log(user.rating)
                        console.log(updateUser.rating)
                        
                    }
                    
                    // console.log(user)
                    // console.log(user.id)
                    // console.log(req.params.commentId)
                    
                })
        }
        else{
            res.sendStatus(500)
        }
    }
    else
    {
        res.sendStatus(400)
    }
})


    

router.delete('/:id',(req,res)=>{
    data=data.filter(user=>user.id !== parseInt(req.params.id))
    // console.log(user.id !== parseInt(req.params.id))
    console.log(data)
        res.send("message deleted"+data)
})


module.exports=router;