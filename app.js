const express = require('express');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoutes');
const courseRouter = require('./routes/courseRoutes');
const academyRouter = require('./routes/academyRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use('/api/v1/users', userRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/academy', academyRouter);
app.use('/', viewRouter);

module.exports = app;

/*//TODO Да се креира нова дата база со име exams
Да се креира колекција за академија и курс
Линкот до дата базата и лозинката да се впишани во config.env(ili vo .json)
За секоја академија се чуваат неговото име и адреса
За секој курс се чуваат неговото име, адреса и за која област е наменет
CRUD систем за додавање на Курсеви во база
CRUD систем за додавање на Академија во база
Да се отворат сите рути за менаџирање на ресурсот Курс*/
