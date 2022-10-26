var format = require('date-fns/format')
var startOfWeek = require('date-fns/startOfWeek')
var addDays = require('date-fns/addDays')
// var utcToZonedTime = require('date-fns-tz/utcToZonedTime')

// var result = startOfWeek(new Date(), {locale: 'in_ID', weekStartsOn: 1})
// var result = format(result, 'yyy/MM/dd');
// console.log(result)

var result = startOfWeek(new Date(), {weekStartsOn: 1})
var result = format(result, 'yyyy-MM-dd');
var result = addDays(new Date(result), 1);
console.log(result)


// let tgl = new Date('2022-06-12');
// console.log(tgl);

// const result = utcToZonedTime(new Date(), 'Asia/Jakarta')
// console.log(result)
