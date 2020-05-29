//Express
const express = require('express');
/* extern modules */
const {countries, languages } = require('countries-list');
/* parciales modules */
const {info} = require('./modules/mylog');
const app = express();
const routes = require('./routes/index');


app.get('/', (request,response) => {
    response.send('Hello');
});
app.get('/info', (request,response)=>{
    info('hola info');
    response.send('info nodemon');
});
app.get('/country', (request,response) => {
    console.log('request.query', request.query);
    //response.send(JSON.stringify(countries[request.query.code]));
    response.json(countries[request.query.code]);
});
app.get('/languages/:lang', (request,response) => {
    //console.log('request.params',request.params);
    //response.json(languages[request.params.lang]);
    console.log('request.params', request.params);
    const lang = languages[request.params.lang];
    if(lang){
        response.json ({status: 'OK', data: lang});
    }else{
        response.status(404).json({
            status: 'NOT_FOUND',
            message: 'language ' + request.params.lang + ' not found'
            //message: 'language ${request.params.lang} not found'
    });
    }
});

app.get('*', (request, response) => {
    response.status(404).send("NOT FOUND");
});

app.listen(4000, () => {
    console.log("running on 4000");
});