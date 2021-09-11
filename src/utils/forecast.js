const request  = require('request')

const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=3f46f246eb2c36fb8bae8d2deb15d8bb&query='+ latitude + ',' + longitude + '&units=f'
  
    request({url, json:true}, (error, {body})=>{         
        if(error){
            callback('Unable to connect to location service', undefined)
        } else if(body.error){
            callback('Unable to find location. Try another search', undefined)
        
        }else{
            console.log(body.current)
            callback(
                undefined,
                body.current.weather_descriptions[0] + '. It is currently '+ body.current.temperature +' degrees out. It feels like ' + 
                body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%.'
                )
        } 
})
}
module.exports = forecast


