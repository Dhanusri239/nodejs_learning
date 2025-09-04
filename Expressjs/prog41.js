const express = require('express');
const val = express();
const path = require('path');
const bodyparser = require('body-parser');
const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

val.set('view engine', 'pug');
val.set('views', path.join(__dirname, 'views'));

val.use(bodyparser.urlencoded({ extended: false }));

val.use('/admin', adminRoutes);
val.use(shopRoutes);

val.use((req, res, next) => {
    res.status(404).render('404', { docTitle: "Page not Found" });
});

val.listen(8000);
