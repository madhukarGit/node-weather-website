
const request = require('request')

const location = (lat,lon,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=9c8a996656d11ca1eb32f12a81e37245&query='+lat+','+lon+'?units=m'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Low level error',undefined)
        }else if(response.body.error){
            callback('co-ordinates error',undefined)
        }else{
            callback(undefined,{
                temperature :response.body.current.temperature,
                probabilityOfRain:response.body.current.precip              
            })
        }
    })
}

module.exports=location