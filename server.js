let express=require('express'); //importamos express

let app=express(); //Definimos una variable para usar express
let port=process.env.PORT || 3000; //
app.use('/assets', express.static(__dirname+'/public'));
app.use(express.urlencoded({extended: false})) // Esta linea de codigo hara que nos permita pasear en caso de no tenerla marcara error al momento de querer mostrar resultados
app.set('view engine', 'ejs'); // Usamos el motor de vistas ejs para poder mostrar nuestras views

app.use('/',(req, res, next) => {
    console.log('Request URL:' + req.url);
    next()
});

app.get('/',  (req, res) => {
    res.render('index');
});

app.get('/student',  (req, res) => {
    res.render('student'); // creamos una nueva vista ejs para recibir datos
});
/*
app.post('/addStudent', (req, res) => {
    res.send(`  Nombre: ${req.body.nombre} 
                Edad: ${req.body.edad}
                NSS: ${req.body.nss}
                Tipo de sangre: ${req.body.tpSangre}`) 
    - Para mostrar los datos tenemos que usar req.body ya que son datos que se recibend el body
    - Demos usar los nombre que pusimos en el id de cada input
})
*/
app.post('/addStudent', (req, res) => { //Cuando usamos el metodo Post tambien debemos usarlo con express
    res.render('displayData',{Nombre:req.body.nombre,Edad: req.body.edad, NSS: req.body.nss, TpSangre:req.body.tpSangre}); // cambiamos res.send por render para mostrar los datos en un hmtl y mandamos los datos con res.body
})
app.listen(port); // inicamos el server


