const makeShedule = require('./shedule');

const list = [
  {
    title: 'Рисование',
    from: 9,
    to: 10
  },{
    title: 'Английский',
    from: 9.5,
    to: 10.5
  },{
    title: 'Математика',
    from: 10,
    to: 11
  },{
    title: 'Информатика',
    from: 10.5,
    to: 11.5
  },{
    title: 'Музыка',
    from: 11,
    to: 12
  }
]

console.log(makeShedule(list));