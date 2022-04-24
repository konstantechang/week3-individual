var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next){
    res.status(200).json({
      "name": "Home Page",
    });
});// 

router.get('/index', function(req, res, next) {
  // res.render('index', { title: 'Express' });
      res.status(200).json({
        'name': "hello world!",
      });

});


//express  開啟路由的方式
//動態路由 ex: '/s/:productName'   <--   req.params.productName
// router.get('/', (req, res, next) => {
//   res.status(200).json({
//       "name": "me",
//   });
// });//end of app.get()

//delete method
// router.delete('/', () => {
//   res.status(200).json({
//       "status": true,
//       "name": "me",
//   });
// });//end of app.delete()










module.exports = router;
