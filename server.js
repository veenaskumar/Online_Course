const express=require('express');
const app= express();
const router=require('./route/route')
const user=require('./route/userroute')

app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.get('/',(req,res)=>{
    res.send('login');
})

app.get('/signup',(req,res)=>{
    res.send('signup');
})

app.use('/api/lectures',router);
app.use('/api',user);

app.listen(3002,()=>{
    console.log('server running on port 2001....');
});