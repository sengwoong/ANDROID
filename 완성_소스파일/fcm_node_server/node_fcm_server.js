var admin = require('firebase-admin')
var serviceAccount = require('./server_key.json')
admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
})
var token = "c7QkJnBtTNGAVNGFf41qJH:APA91bGOFZsm2TprKxI-E_dNagrUxZ_aIhHtAAizF2Ptzfzw3v1jOLoAqdpvezAg4lzMR9uEfWzD8_lcUjBYCsAXi4Np5iVepi7ihJtrLTa1rE8XP_KHyHD1eOYvp-wqIS_JneXvPxfp"
var fcm_message = {
notification: {
title:'noti title',
body: 'noti body..'
},
data: {
title:'data title',
value: '20'
},
token: token
}
admin.messaging().send(fcm_message)
.then(function(response){
console.log('send ok...')
})
.catch(function(error){
console.log('send error...')
})