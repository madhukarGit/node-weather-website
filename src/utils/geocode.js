const request = require('request')

const geocode=(address,callback)=>{
    const mapboxurl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibWFkaHVrYXI3ODkiLCJhIjoiY2tncmVkemw1MHVtazJ6bDhzeDcwY2V6YiJ9.HY5YoXEF-G4KLTNzTPqf7A'
   
    request({url:mapboxurl,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to location services',undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find location, try another search',undefined)
        }else{
            callback(undefined,{
                longitude:response.body.features[0].center[0],
                latitude:response.body.features[0].center[1],
                location:response.body.features[0].place_name
            })
        }
    })
    
}

module.exports=geocode
