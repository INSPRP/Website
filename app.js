const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

__dirname += "/views";

appPort = 42759;


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
router.get('/test',function(req,res){
  res.sendFile(path.join(__dirname+'/test.html'));
});

router.error(function(err, req, res, next) {
  if (err instanceof NotFound) {
    res.sendFile(path.join(__dirname+'/404.html'));
  }
});

//add the router
app.use('/', router);
app.engine('html', require('ejs').renderFile);
app.listen(process.env.port || appPort);