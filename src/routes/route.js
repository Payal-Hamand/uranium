const express = require('express');
const router = express.Router();



    router.get('/movies', function (req, res) {
    const movi =['Khiladi','Lagan','Players','Golmaal','Dhamal']

   
    res.send(movi)
});

const fil = [ {
    "id": 1,
    "name": "The Shining"
   }, {
    "id": 2,
    "name": "Incendies"
   }, {
    "id": 3,
    "name": "Rang de Basanti"
   }, {
    "id": 4,
    "name": "Finding Nemo"
   }]
   
router.get('/films',function(req,res){
   
    res.send(fil)

});

router.get('/films/:filmId',function(req,res){
    const b = req.params.filmId
    if(b < fil.length && b>=0){
        res.send(fil[b])
    }
        else{
            res.send('Use a Valid Index')
        }

});


router.get('/movies/:indexNumber', function (req, res) {
    const movi =['Khiladi','Lagan','Players','Golmaal','Dhamal']
   const a = req.params.indexNumber
   if(a < movi.length && a>=0){
       res.send(movi[a])
   }
       else{
           res.send('Use a Valid Index')
       }
});



module.exports = router;
// adding this comment for no reason