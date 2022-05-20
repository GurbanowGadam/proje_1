require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const ejsLayouts = require('express-ejs-layouts')

app.use("/api", express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

app.use(ejsLayouts)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, ()=>{
    console.log('listening => ',process.env.PORT);
})

require('./api/Routers/routerManager')(app)