const express=require('express');
const val=express();
const bodyparser=require('body-parser');
val.use(bodyparser.urlencoded());
const adminRoutes=require('./Routes/admin');
const shopRoutes=require('./Routes/shop');
val.use('/admin',adminRoutes);
val.use(shopRoutes);
val.use((req,res,next)=>{
    res.status(404).send('<h1>404 Error Page Not Found</h1>')
})
val.listen(8000);