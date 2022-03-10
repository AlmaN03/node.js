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
















