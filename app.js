const path = require('path');
const rootDir = require('./helpers/path');
const express = require('express');
const bodyParser = require('body-parser');
const notFoundController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(notFoundController.get404);

app.listen(3000);
