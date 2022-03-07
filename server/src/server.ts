import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import request from 'request'

dotenv.config()



const app = express()

app.use(cors( {credentials: true,
            origin: 'http://localhost:3000'}))
app.use(express.json())

const spotify_client_id=process.env.CLIENT_ID;
const spotify_client_secret=process.env.CLIENT_SECRET;

let access_token: string;
const state = '867f563d1a495d16013b4bdfc0a789c8'
const scope = 
    "streaming \
    user-read-email \
    user-read-private"

    const x: any = {
        response_type:"code",
        client_id: spotify_client_id,
        scope: scope,
        redirect_uri: "http://localhost:8080/auth/callback",
        state: state,
    }

var auth_query_parameters = new URLSearchParams(x)

//Rota de login
app.get('/auth/login', (req, res)=> {

    console.log(res)
    res.redirect(
        'https://accounts.spotify.com/authorize/?'
        + auth_query_parameters.toString()
        )
})

//Após o login, usuário é redirecionado p essa rota, 
//que recebe o res.code 
app.get('/auth/callback', async (req, res)=>{

    //res.send()
    var code = req.query.code;

    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: "http://localhost:8080/auth/callback",
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      json: true
    };


    request.post(authOptions, (error, response, body)=>{

        if(!error && response.statusCode===200){

            console.log(response.body)
             access_token = body.access_token;
            console.log(access_token)
            res.redirect('http://localhost:3000/')
        }else{
            res.send('deu ruim')
        }
    })

})

app.post('/auth/token', (req, res)=>{

    if(access_token){
        return res.json(access_token)
    }

    return res.status(400).json({error:"user is not logged in"})
})


app.get('/auth/signout', (req, res) => {
   res.redirect('https://www.spotify.com/logout/')

    //res.redirect('http:localhost:3000/')
})

app.listen(8080, ()=>console.log('Running...=)'))