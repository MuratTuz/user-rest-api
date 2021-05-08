const rents = require('../../model/rentsData');

export function getAllRents() {
    return rents;
}

export function createRent(newRent) {
    rents.push(newRent);
}

export function deleteRentById(id) {
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