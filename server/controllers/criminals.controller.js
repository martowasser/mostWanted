 
const criminalsService = require('../services/criminals.service');

const getPossibleCriminals = function(req, res){
    res.send(criminalsService.getPossibleCriminals(req.params.name));
}


module.exports = {
    getPossibleCriminals
};