var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const PORT = process.env.PORT || 3001
const db = require('./models')
const sequelize = require('sequelize')
const passport    = require('passport');
//const bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var indicatorsRouter = require('./routes/indicators');
var rolesRouter = require('./routes/roles');
var permsRouter = require('./routes/permissions');
var authRouter = require('./routes/auth');
var productRouter = require('./routes/products');
var sectorRouter = require('./routes/sector');
var homestatRouter = require("./routes/homestat");
var homestat = require('./routes/homestat_data.js');
var population = require("./routes/population.js");
var employment = require("./routes/employment.js");
var employee = require("./routes/employee.js");
var working_poverty = require("./routes/working_poverty.js");
var unemployment = require("./routes/unemployment.js");
var child_labour = require("./routes/child_labour.js");
var api = require("./routes/api.js");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json({limit: "100mb", parameterLimit: 100000000}));
app.use(express.urlencoded({limit: '100mb', extended: true, parameterLimit: 100000000}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//app.use(bodyParser.json({limit: "100mb", parameterLimit: 100000000}));
//app.use(bodyParser.urlencoded({limit: '100mb', extended: true, parameterLimit: 100000000}));

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));

var cors = require('cors');
// const { default: HomepageStats } = require('../backend/src/components/pages/homepage_stats');
app.use(cors());


app.use('/', indexRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/indicators', indicatorsRouter);
app.use('/api/v1/roles', rolesRouter);
app.use('/api/v1/permissions', permsRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/sectors', sectorRouter);
app.use('/api/v1/homestat', homestatRouter)

//API data
app.get("/api/v2/population", population.showAll);
app.get("/api/v2/employment", employment.showAll);
app.get("/api/v2/employee", employee.showAll);
app.get("/api/v2/working_poverty", working_poverty.showAll);
app.get("/api/v2/unemployment", unemployment.showAll);
app.get("/api/v2/child_labour", child_labour.showAll);
app.get("/api/v2/indicators", api.showAll);
app.get('/api/v1/homestat', homestat.showAll);



//Population Indicators
// POST call route to create records in bulk 
app.post("/api/v1/bulkpopulation", population.bulkCreate);
//app.post("/bulkcreate", customers.bulkCreate);
// POST call to create single record
app.post("/population", population.create);
// GET call to retrieve all the records present in table
app.get("/api/v1/population", population.findAll);

// GET call to retrieve a single record with ID
app.get("/population/:populationId", population.findOne);
// PUT call to upadte record with "ID" and complete body
app.put("/population/:populationId", population.update);
// DELET call to Delete a recod with ID
app.delete("/population/:populationId", population.delete);
// DELETE call to delete all the records
app.delete("/population", population.deleteAll);
// GET call to retrieve all the records present in table
app.get("/api/v1/population/series/year", population.CustomApi);

//Employment Indicators
// POST call route to create records in bulk 
app.post("/api/v1/bulkemployment", employment.bulkCreate);
//app.post("/bulkcreate", customers.bulkCreate);
// POST call to create single record
app.post("/employment", employment.create);
// GET call to retrieve all the records present in table
app.get("/api/v1/employment", employment.findAll);
// GET call to retrieve a single record with ID
app.get("/employment/:employmentId", employment.findOne);
// PUT call to upadte record with "ID" and complete body
app.put("/employment/:employmentId", employment.update);
// DELET call to Delete a recod with ID
app.delete("/employment/:employmentId", employment.delete);
// DELETE call to delete all the records
app.delete("/employment", employment.deleteAll);

//Employees Indicators
// POST call route to create records in bulk 
app.post("/api/v1/bulkemployees", employee.bulkCreate);
//app.post("/bulkcreate", customers.bulkCreate);
// POST call to create single record
app.post("/employee", employee.create);
// GET call to retrieve all the records present in table
app.get("/api/v1/employees", employee.findAll);
// GET call to retrieve a single record with ID
app.get("/employee/:employeeId", employee.findOne);
// PUT call to upadte record with "ID" and complete body
app.put("/employee/:employeeId", employee.update);
// DELET call to Delete a recod with ID
app.delete("/employee/:employeeId", employee.delete);
// DELETE call to delete all the records
app.delete("/employee", employee.deleteAll);

//Working poverty Indicators
// POST call route to create records in bulk 
app.post("/api/v1/bulkworkingpoverty", working_poverty.bulkCreate);
//app.post("/bulkcreate", customers.bulkCreate);
// POST call to create single record
app.post("/workingpoverty", working_poverty.create);
// GET call to retrieve all the records present in table
app.get("/api/v1/workingpoverty", working_poverty.findAll);
// GET call to retrieve a single record with ID
app.get("/workingpoverty/:workingPovertyId", working_poverty.findOne);
// PUT call to upadte record with "ID" and complete body
app.put("/workingpoverty/:workingPovertyId", working_poverty.update);
// DELET call to Delete a recod with ID
app.delete("/workingpoverty/:workingPovertyId", working_poverty.delete);
// DELETE call to delete all the records
app.delete("/workingpoverty", working_poverty.deleteAll);

//Unemployment Indicators
// POST call route to create records in bulk 
app.post("/api/v1/bulkunemployment", unemployment.bulkCreate);
// POST call to create single record
app.post("/unemployment", unemployment.create);
// GET call to retrieve all the records present in table
app.get("/api/v1/unemployment", unemployment.findAll);
// GET call to retrieve a single record with ID
app.get("/unemployment/:unemploymentId", unemployment.findOne);
// PUT call to upadte record with "ID" and complete body
app.put("/unemployment/:unemploymentId", unemployment.update);
// DELET call to Delete a recod with ID
app.delete("/unemployment/:unemploymentId", unemployment.delete);
// DELETE call to delete all the records
app.delete("/unemployment", unemployment.deleteAll);

//Child Labour Indicators
// POST call route to create records in bulk 
app.post("/api/v1/bulkchildlabour", child_labour.bulkCreate);
// POST call to create single record
app.post("/childlabour", child_labour.create);
// GET call to retrieve all the records present in table
app.get("/api/v1/childlabour", child_labour.findAll);
// GET call to retrieve a single record with ID
app.get("/childlabour/:childlabourId", child_labour.findOne);
// PUT call to upadte record with "ID" and complete body
app.put("/childlabour/:childlabourId", child_labour.update);
// DELET call to Delete a recod with ID
app.delete("/childlabour/:childlabourId", child_labour.delete);
// DELETE call to delete all the records
app.delete("/childlabour", child_labour.deleteAll);

// HOME STATS

// app.post("/api/v1/homestat", HomepageStats.create);
//app.get("/api/v1/homestat/:statID", homestat.findOne);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//synchronizing the database and forcing it to false so we dont lose data
//db.sequelize.sync({ force: true }).then(() => {
 //   console.log("db has been re sync")
//})

// Run server on port
app.listen(3001, () => console.log(`LMIS app listening on port 3001`));
//module.exports = app;
