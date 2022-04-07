let board = document.getElementById('board') //ვიღებთ ელემენტს სადაც გამოვიტანთ დაფას
let table = [
  //ობიექტების მასივი რომელიც დაფაზე ქვების განლაგებას და ცაიელ ადგილებს განაგებს
  {
    x: 0,
    y: 0,
    fill: 'none',
  },
  {
    x: 0,
    y: 1,
    fill: 'red',
  },
  {
    x: 0,
    y: 2,
    fill: 'none',
  },
  {
    x: 0,
    y: 3,
    fill: 'red',
  },
  {
    x: 0,
    y: 4,
    fill: 'none',
  },
  {
    x: 0,
    y: 5,
    fill: 'red',
  },
  {
    x: 0,
    y: 6,
    fill: 'none',
  },
  {
    x: 0,
    y: 7,
    fill: 'red',
  },
  {
    x: 1,
    y: 0,
    fill: 'red',
  },
  {
    x: 1,
    y: 1,
    fill: 'none',
  },
  {
    x: 1,
    y: 2,
    fill: 'red',
  },
  {
    x: 1,
    y: 3,
    fill: 'none',
  },
  {
    x: 1,
    y: 4,
    fill: 'red',
  },
  {
    x: 1,
    y: 5,
    fill: 'none',
  },
  {
    x: 1,
    y: 6,
    fill: 'red',
  },
  {
    x: 1,
    y: 7,
    fill: 'none',
  },
  {
    x: 2,
    y: 0,
    fill: 'none',
  },
  {
    x: 2,
    y: 1,
    fill: 'red',
  },
  {
    x: 2,
    y: 2,
    fill: 'none',
  },
  {
    x: 2,
    y: 3,
    fill: 'red',
  },
  {
    x: 2,
    y: 4,
    fill: 'none',
  },
  {
    x: 2,
    y: 5,
    fill: 'red',
  },
  {
    x: 2,
    y: 6,
    fill: 'none',
  },
  {
    x: 2,
    y: 7,
    fill: 'red',
  },
  {
    x: 3,
    y: 0,
    fill: 'none',
  },
  {
    x: 3,
    y: 1,
    fill: 'none',
  },
  {
    x: 3,
    y: 2,
    fill: 'none',
  },
  {
    x: 3,
    y: 3,
    fill: 'none',
  },
  {
    x: 3,
    y: 4,
    fill: 'none',
  },
  {
    x: 3,
    y: 5,
    fill: 'none',
  },
  {
    x: 3,
    y: 6,
    fill: 'none',
  },
  {
    x: 3,
    y: 7,
    fill: 'none',
  },
  {
    x: 4,
    y: 0,
    fill: 'none',
  },
  {
    x: 4,
    y: 1,
    fill: 'none',
  },
  {
    x: 4,
    y: 2,
    fill: 'none',
  },
  {
    x: 4,
    y: 3,
    fill: 'none',
  },
  {
    x: 4,
    y: 4,
    fill: 'none',
  },
  {
    x: 4,
    y: 5,
    fill: 'none',
  },
  {
    x: 4,
    y: 6,
    fill: 'none',
  },
  {
    x: 4,
    y: 7,
    fill: 'none',
  },
  {
    x: 5,
    y: 0,
    fill: 'white',
  },
  {
    x: 5,
    y: 1,
    fill: 'none',
  },
  {
    x: 5,
    y: 2,
    fill: 'white',
  },
  {
    x: 5,
    y: 3,
    fill: 'none',
  },
  {
    x: 5,
    y: 4,
    fill: 'white',
  },
  {
    x: 5,
    y: 5,
    fill: 'none',
  },
  {
    x: 5,
    y: 6,
    fill: 'white',
  },
  {
    x: 5,
    y: 7,
    fill: 'none',
  },
  {
    x: 6,
    y: 0,
    fill: 'none',
  },
  {
    x: 6,
    y: 1,
    fill: 'white',
  },
  {
    x: 6,
    y: 2,
    fill: 'none',
  },
  {
    x: 6,
    y: 3,
    fill: 'white',
  },
  {
    x: 6,
    y: 4,
    fill: 'none',
  },
  {
    x: 6,
    y: 5,
    fill: 'white',
  },
  {
    x: 6,
    y: 6,
    fill: 'none',
  },
  {
    x: 6,
    y: 7,
    fill: 'white',
  },
  {
    x: 7,
    y: 0,
    fill: 'white',
  },
  {
    x: 7,
    y: 1,
    fill: 'none',
  },
  {
    x: 7,
    y: 2,
    fill: 'white',
  },
  {
    x: 7,
    y: 3,
    fill: 'none',
  },
  {
    x: 7,
    y: 4,
    fill: 'white',
  },
  {
    x: 7,
    y: 5,
    fill: 'none',
  },
  {
    x: 7,
    y: 6,
    fill: 'white',
  },
  {
    x: 7,
    y: 7,
    fill: 'none',
  },
]
let playing = true //true => თამაშობს თეთრი ქვები | false თამაშობს წითელი ქვები
const createBoard = () => {
  //დაფის შექმნის ფუნქცია, ის ზემოთ გამოცხადებულ board ცვლადში ალაგებს ul, li თეგებს. გამოყენებულია appentChild
  let index = 0
  for (let i = 0; i < 8; i++) {
    let ul = document.createElement('ul')

    for (let j = 0; j < 8; j++) {
      let li = document.createElement('li')

      let text = document.createTextNode(
        `${table[index].x} , ${table[index].y}`,
      )
      li.appendChild(text)
      ul.appendChild(li)
      index++
    }
    board.appendChild(ul)
  }
  boardColor()
}

const boardColor = () => {
  //ზემოთ ჩაყრილ li თეგებში, მასივის მიხედვით ვალაგებთ div-ებს რომლებსაც გაწერილი აქვთ თავიანთი კლასები და ქლიქზე გამოსაძახებელი ფუნქციები
  let li = document.querySelectorAll('li')
  let startColor = false
  for (let i = 0; i < li.length; i++) {
    if (startColor) {
      if (i % 2 === 0) {
        li[i].style.backgroundColor = 'black'
        li[i].style.color = 'white'
      }
    } else {
      if (i % 2 !== 0) {
        li[i].style.backgroundColor = 'black'
        li[i].style.color = 'white'
      }
    }
    if ((i + 1) % 8 === 0) startColor = !startColor

    if (table[i].fill === 'red') {
      li[
        i
      ].innerHTML = `<div class="redStone" onclick=redMove(this) data=${i}></div>`
    } else if (table[i].fill === 'white') {
      li[
        i
      ].innerHTML = `<div class="whiteStone" onclick=whiteMove(this) data=${i}></div>`
    } else {
      li[
        i
      ].innerHTML = `<div onclick=emptyClick(this) class="transperantStone" data=${i}></div>`
    }
  }
}
let choosen = 0 //აქ ვირჩევთ არჩეული ქვის ინდექსს
let positions = {
  //აქ ვინახავთ გადასაადგილებელი ადგილის პოზიციის კოორდინატებს
  a: 0,
  b: 0,
}
let deleteStone //აქ ვინახავთ მოსაკლავი ქვის ინდექსს

const deleteStoneFunc = (index, pos) => {
  //აქ deleteStone-ში ვინახავთ მოსაკლავი ქვის ინდექსს და გადაადგილების პოზიციას
  deleteStone = { index, pos }
}

const checkKill = (index) => {
  let li = document.querySelectorAll('li')
  let x = table[index].x //გადასაადგილებელი ადგილის ინდექსის მიხედვით კოორდინატების გატკვევა
  let y = table[index].y
  let stone = table[index].fill //ვამოწმებთ მოსული ინდექსის მიხედვით რაფერის ქვა დევს მოსაკლავისპოზიციაზე
  let a = 1 //ეს არის ცვლადები, რომელთაგან ორ-ორი განკუთვნილია კონკრეტული ფერისთვის. სამომავლოდ ბევრი ქვის მოსაკლავად მისი რაოდენობა გაიზრდებო სვლებთან ერთად.
  let b = 1
  let c = 1
  let d = 1
  const redStone = (color) => {
    //აქ მწვანდება ის წერტილის სადაც ქვის მოკვლის შემთხვევაში დაჯდება ქვა და ინახება იმ ქვის ინდექსი რომელიც უნდა მოკვდეს
    for (let i = 0; i < li.length; i++) {
      if (x + a === table[i].x && y - b === table[i].y) {
        if (table[i].fill === 'none') {
          li[i].style.backgroundColor = 'green'
          positions.a = i
        } else if (table[i].fill !== color) {
          deleteStone = i
          a++
          b++
          redStone(color)
        }
      } else if (x + c === table[i].x && y + d === table[i].y) {
        if (table[i].fill === 'none') {
          li[i].style.backgroundColor = 'green'
          positions.b = i
        } else if (table[i].fill !== color) {
          deleteStone = i

          c++
          d++
          redStone(color)
        }
      }
    }
  }
  const whiteStone = (color) => {
    //აქაც იგივე რაც ზემოთ
    for (let i = 0; i < li.length; i++) {
      if (x - a === table[i].x && y - b === table[i].y) {
        if (table[i].fill === 'none') {
          li[i].style.backgroundColor = 'green'
          positions.a = i
        } else if (table[i].fill !== color) {
          deleteStone = i

          a++
          b++
          whiteStone(color)
        }
      } else if (x - c === table[i].x && y + d === table[i].y) {
        if (table[i].fill === 'none') {
          li[i].style.backgroundColor = 'green'
          positions.b = i
        } else if (table[i].fill !== color) {
          deleteStone = i

          c++
          d++
          whiteStone(color)
        }
      }
    }
  }

  if (stone === 'red') {
    //ქვის ფერის მიხედვით იძახებს შესაბამის ფუნქციას
    redStone('red')
  } else if (stone === 'white') {
    whiteStone('white')
  }
}

const redMove = (element) => {
  //სვლის გაკეთებისას ვანახლებთ დაფას, რათ
  boardColor()
  positions = {
    //ვანულებთ მონაცემებს
    a: 0,
    b: 0,
  }
  let index = element.getAttribute('data') //ვიღებთ ინდექსს მოსული ელემენტიდან
  choosen = index

  if (!playing) {
    checkKill(index) //ცამოწმებთ შეიძლება თუ არა რაიმეს მოკლვა
  }
}
const whiteMove = (element) => {
  //იგივე რაც ზემოთ
  boardColor()
  positions = {
    a: 0,
    b: 0,
  }
  let index = element.getAttribute('data')
  choosen = index

  if (playing) {
    checkKill(index)
  }
}

const emptyClick = (element) => {
  //აქ ხდება ქვის გადაადგილება, მოწმდება შეიძლება თუ არ აკონკრეტულ ცარიელ კუბზე ქმის დასმა და შემდეგ ხდება მისი გადაადგილება
  let index = element.getAttribute('data')
  let empty = table[index].fill
  let stone = table[choosen].fill
  if (stone === 'white' && playing) {
    if (
      JSON.parse(index) === positions.a ||
      JSON.parse(index) === positions.b
    ) {
      table[index].fill = stone
      table[choosen].fill = empty
      deleteStone && (table[deleteStone].fill = empty)
      deleteStone = undefined
      playing = !playing
    }
  } else if (stone === 'red' && !playing) {
    if (
      JSON.parse(index) === positions.a ||
      JSON.parse(index) === positions.b
    ) {
      table[index].fill = stone
      table[choosen].fill = empty
      deleteStone && (table[deleteStone].fill = empty)
      deleteStone = undefined

      playing = !playing
    }
  }
  positions = {
    a: 0,
    b: 0,
  }
  boardColor() //ნახლდება დაფა
}

createBoard()
