const express=require('express');
const bodyparser=require('body-parser');
const val=express();
val.use(bodyparser.urlencoded({ extended: false }));
const adminRoutes=require('./Routes/admin');
const shopRoutes=require('./Routes/shop');
val.use(adminRoutes);
val.use(shopRoutes);
val.listen(8000);