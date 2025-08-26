const express=require('express');
const val=express();
const path=require('path');
const bodyparser=require('body-parser');
const adminRoutes=require('./Routes/admin');
const shopRoutes=require('./Routes/shop');
val.set('view engine','pug');
val.use('/admin',adminRoutes);
val.use(shopRoutes);
val.use((req,res,next)=>{
    res.status(404).render('404');
});
val.listen(8000);