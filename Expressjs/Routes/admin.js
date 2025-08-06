const express=require('express');
const router=express.Router();
const val=express();
router.get('/add-product',(req,res,next)=>{
    res.send('<h1>Add Product</h1><form action="/store-product" method="POST"><input type="text"name="title"><input type="submit" value="send"></form>')
})
router.post('/store-product',(req,res,next)=>{
    console.log('Form Data:',req.body);
    res.send('<h1>Value Submitted successfully!!</h1>');
})
module.exports=router;