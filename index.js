 
 
 
 
 
 
 
 
 
 
 
 
 
 // СВЯЗИ В КОДЕ МОГУТ БЫТЬ НАРУШЕНЫ ПРОВЕРЯЙ ПУТИ ПОДКЛЮЧЕНИЯ 
 




















 // уроки https://www.youtube.com/playlist?list=PL0lO_mIqDDFX0qH9w5YQIDV6Wxy0oawet

/*
function test() {
    console.log("Hello");
}

test();

function call(func) {
    func();
}



var printSomething = function () {
    console.log("просто текст");
};

printSomething();



call(printSomething);
*/

//подключенеи модуля 
 // require ('./array');

/*
var counter = require ('./array');

console.log(counter([1, 7 ,99, 8 ,45,8,6]));  
*/

/*
// тут подлюсили модуль который сами создали 
var things = require ('./things');
// его првоерка 
console.log(things.some_value);
console.log(things.array_counter([1, 7 ,99, 8 ,45,8,6]));  
console.log(things.muliply(5,8));  
*/




        //подключенеи встроенного модуля? 

//модуль 1
/*
var events = require ('events');

var myEmit = new events.EventEmitter();

myEmit.on('some_event', function (text) {
    console.log(text);
    
});

myEmit.emit('some_event', 'обработчик событий сработал!' );
*/

// модуль 2 
/*
var events = require ('events');
var util = require('util');

var Cars = function (model) {
    this.model = model; 
};

// унаследование обработчика события  (inherits)

util.inherits(Cars, events.EventEmitter);

var bmw = new Cars('bmw') ;
var audi = new Cars('audi') ;
var volvo = new Cars('volvo') ;

var cars = [bmw, audi, volvo];

cars.forEach(function (car) {
   car.on('speed', function (text) {
       console.log(car.model+ " speed is - "+ text);
   }) ;
});


bmw.emit('speed','254.5 km');
audi.emit('speed','255.5 km');
volvo.emit('speed','256.5 km');
*/


        // Написание и чтение файлов
    //синхронное чтение файлов 
        // (fs) модуль который позволяет читать другие файлый? 
        // (Sync) -до бавление этого включает синхронное выполнение 
        /*
var fs = require ('fs');

var file_reader = fs.readFileSync('text.txt', 'utf8');
console.log(file_reader);

//запись данных в файл 
var message = "Привет мир! \n" + file_reader;

fs.writeFileSync('text.some_new_file.txt', message);
*/

    //асинхронное чтение 
/*
    var fs = require ('fs');

fs.readFile('text.txt', 'utf8', function (err, data) {
console.log(data);    
});

fs.writeFile('some.txt', 'Hello' ,function (err, data) {
    });

console.log("Test");
*/

// Работа с директориями и удаление файлов 

// удаление файла 
/*
var fs = require ('fs'); 
// fs.unlink('some.txt', function () {});

 //создание/удаление папки  
 // так же можно делать ээто асинхронно 

fs.mkdirSync('new $');// создать папку 
fs.rmdirSync('new $');// удалить папку 
*/

// папка с фалом в котором текст 
// почему то глючит 
/*
var fs = require ('fs'); 

fs.mkdir('new-one ', function () {
    fs.writeFile('./new-one/some_new.txt', 'Hello' ,function () {
        console.log("сработало");
    });
});
*/

// удаление прошлой папки 

// папка должн абыть пустой 
/*
fs.rmdir('new-one', function () {
    
})
*/

    //Работа и создание сервера на Node  // (ctl+ c)- стоп сервера 
/*
    var http = require('http');
    var server = http.createServer(function (req, res) {
        console.log("url страницы: "+req.url);
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Привет мир! '); // то что отображается на страние
    });

 server.listen(3000, '127.0.0.1');
 console.log("Мы отслеживаем порт 3000");
*/

    //Работа с потоками в Node JS 
    // постепенная загрузка текста 
    /*
    var fs = require('fs');
    
    var myReadShort = fs.createReadStream(__dirname+ '/text.txt', 'utf8');

    myReadShort.on('data', function (chunk) {
        console.log("Новые данные оплучены:\n "+ chunk);
    });
    */

    // запись? 
    /*
    var fs = require('fs');
    
    var myReadShort = fs.createReadStream(__dirname+ '/text.txt', 'utf8');
    var myWriteShort = fs.createWriteStream(__dirname+ '/news.txt', );


    myReadShort.on('data', function (chunk) {
        console.log("Новые данные оплучены:");
        myWriteShort.write(chunk);
    });
    */

    //Функция pipe(), работа с HTML и JSON
/*
    var fs = require('fs');
    
    // подключение к локалу 
    // (text/plain) -вывод только текста 
    // (text/html)- вывод кода 
    // (application/json) - вывод js
    
    var http = require('http');
    var server = http.createServer(function (req, res) {
        console.log("url страницы: "+req.url);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        
        var myReadShort = fs.createReadStream(__dirname+ '/index.html', 'utf8');


        myReadShort.pipe (res);
     
    });

    server.listen(3000, '127.0.0.1');
    console.log("Мы отслеживаем порт 3000");
    */
   
    /*
    var http = require('http');
    var server = http.createServer(function (req, res) {
        console.log("url страницы: "+req.url);
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        var obj = {
            model : 'Audi',
            speed: '234.5',
            wheels : 4
        };
    res.end(JSON.stringify(obj));

    });

    server.listen(3000, '127.0.0.1');
    console.log("Мы отслеживаем порт 3000");
    */

    //Маршрутизация Node JS
    // работа с url адресовм
    
    /*
    var fs = require('fs');

    var http = require('http');

    var server = http.createServer( function (req, res) {
        console.log("URL страницы:" + req.url);
        if (req.url ==='/index' ||req.url === '/') {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            fs.createReadStream(__dirname+ '/index.html').pipe(res);
        } 
        else if (req.url==='/about'){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            fs.createReadStream(__dirname+ '/about.html').pipe(res);
        } else{
            res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
            fs.createReadStream(__dirname+ '/404.html').pipe(res);
        }


    });
    server.listen(3000, '127.0.0.1');
    console.log("работает");
    */
    

    //Использование пакетного менеджера npm
    //

    // Изучение фреймворка Express
    /*
    //(get) -отображается в сылке? 
    //(post) -не отображается в сылке?


    var express = require ('express');

    var app = express();
 

    // статичные ссылки ?

    ///////////////////////////////////////////////////////
        app.get('/',function (req,res) {
            res.send('This is home'); 
        });
        app.get('/news',function (req,res) {
            res.send('This is news'); 
        });
    ///////////////////////////////////////////////////////    

    // динамические ссылки ? 

    ////////////////////////////
    app.get('/news/:id',function (req,res) {
        res.send('id is - ' + req.params.id); 
     });

    ////////////////////////////

    app.listen(3000);
     console.log("работает");
    */
     /*
     // Использование шаблонизатора
     // подключени html но уже в жэтйо библиотеке 
     var express = require ('express');

    var app = express();
    ////////////////////
    // указание шаблонизатора 

     app.set('view engine','ejs');
    ////////////////////


     app.get('/',function (req,res) {
        res.sendFile(__dirname + "/index.html"); 
    });
    app.get('/about',function (req,res) {
        res.sendFile(__dirname + "/about.html"); 

    }); 

    // к примеру вывод нужной статьй в данном случае по айди (назване может быт ьлюбым не обязательно айли )
    // подключение шаблонизатора  EJS (npm install ejs)

    app.get('/news/:id', function (req, res) {
        
        var obj = {title: "Новость", id:4 , paragraphs:['параграф', ' обычный текст', 'Числа: 2, 4, 6',99] };

        res.render('news', {newsId: req.params.id, newParam: 234, obj:obj }); // не нужно указывать вроде весь путь так как (render) сразу ищет в папке (views)
    });

    app.listen(3000);
    console.log("работает");
    */

    // Статические файлы и промежуточное ПО
    
    /*
    var express = require ('express');

    var app = express();

    app.set('view engine','ejs');


    ///////////////
    // промежуточные по ( тут все статически файлы) что бы работал (css) и тд
    app.use('/pablic',express.static('pablic'));
    ///////////////

    
    app.get('/',function (req,res) {
    res.render('index'); 
    });
    app.get('/about',function (req,res) {
        res.render('about'); 
    }); 

    app.get('/news/:id', function (req, res) {
        var obj = {title: "Новость", id:4 , paragraphs:['параграф', ' обычный текст', 'Числа: 2, 4, 6',99] };
        res.render('news', {newsId: req.params.id, newParam: 234, obj:obj }); 
    });

    app.listen(3000); 
    console.log("работает");
    */

    //Создание HTML-формы и получение данных

 /*
    var express = require ('express');
    var bodyParser = require('body-parser')

    var app = express();

    var urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.set('view engine','ejs');
    app.use('/pablic',express.static('pablic')); 

    app.get('/',function (req,res) {
    res.render('index'); 
    });

    app.get('/about',function (req,res) {
        res.render('about'); 
    }); 

    app.post('/about', urlencodedParser, function (req,res) {
        if(!req.body) return res.sendStatus(400);
        console.log(req.body);
        res.render('about-success',{data: req.bady}); 
    }); 

    app.get('/news/:id', function (req, res) {
        var obj = {title: "Новость", id:4 , paragraphs:['параграф', ' обычный текст', 'Числа: 2, 4, 6',99] };
        res.render('news', {newsId: req.params.id, newParam: 234, obj:obj }); 
    });

    app.listen(3000); 
    console.log("работает");
*/

var express = require ('express');
    var bodyParser = require('body-parser')

    var app = express();

    var urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.set('view engine','ejs');
    app.use('/pablic',express.static('pablic')); 

    app.get('/',function (req,res) {
    res.render('index'); 
    });

    app.get('/about',function (req,res) {
        res.render('about'); 
    }); 

    app.post('/about', urlencodedParser, function (req,res) {
        if(!req.body) return res.sendStatus(400);
        console.log(req.body);
        res.render('about-success',{data: req.bady}); 
    }); 

    app.get('/news/:id', function (req, res) {
        var obj = {title: "Новость"};
        res.render('news', {newsId: req.params.id, obj:obj }); 
    });

    app.listen(3000); 
    console.log("работает");

    





























    
