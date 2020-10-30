const path = require('path')

const express = require('express')

const geocode= require('./utils/geocode')

const forecast = require('./utils/forecast')

const hbs= require('hbs')

const app = express()

const port = process.env.PORT || 3000

const viewsPath = path.join(__dirname,'../templates/views')

const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Andrew'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help for App',
        name:'meed'
    })
})


app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send('Address is an essentail key to pass !')
    }
    
    geocode(req.params.address,(error,{latitude,longitude,location})=>{
        if(error){
            res.send('error, address issue')
        }else {
            forecast(latitude,longitude,(error,forecastData)=>{
                if(error){
                    res.send('error, forecast data issue')
                }

                res.send({
                    address:req.params.address,
                    forecast:forecastData,
                    location
                })
            })
        }
    })
})

app.get('/products',(req,res)=>{
    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res)=>{
    res.render('<p>Help not availble for particular key search</p>')
})

app.get('*',(req,res)=>{
    res.send('My 404 Page')
})

app.listen(port,()=>console.log('Server is up on port '+port))