const rents = require('../../model/rentsData');

exports.getAllRents=()=> {
    return rents;
}

exports.createRent=(newRent)=> {
    rents.push(newRent);
}

exports.deleteRentById=(id)=> {
    rents = rents.filter(r => r.id != id);
}
/*
GET /rents
POST /rents

Rent JSON'i
{
   "movieId": 10002,
   "duration": 10,
   "person": "Hi Coders"
}
 */