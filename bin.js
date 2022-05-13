let table = [
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
//ქვების განგალეგების JSON
let board = document.getElementById('board') //div ელემენტი რომელშიც დავარენდერებთ დამკის დაფას
let player = false //false-ზე თამაშობენ თეთრი ქვები
let afterKill = false //თრუვდება მოკვლის შემდეგ სვლის გაკეთებისას
class createBoardClass {
  //დამკის დაფის გენერატორი
  // constructor(name, year) {
  //   this.name = name;
  //   this.year = year;
  // }

  boardColor() {
    //JSON-ის მიხედვით ვადგენთ რა ტიპის არის უჯრა: ცარიელი, არის მასზე წითელი ქვა, არის მასზე თეთრი ქვა.
    let li = document.querySelectorAll('li') //ქვემოთ დაგენერირებულ li-ებს ვიძახებთ, ვატრიელებთ მას ციკლში და ვსვამთ შესაბამის ქვას ან ვტოვებთ ცარიელს.
    let startColor = false // false - თეთრი, true - შავი უჯრა
    for (let i = 0; i < li.length; i++) {
      // უჯრის დეფაულტ ფერი არის თეთრი, startColor-ის მიხედვით ვადგენთ რომელი უჯრა უნდა გაშავდეს. როცა startColor არის false უნდა გაშავდეს ლუწი პოზიციის უჯრები, საპირისპირო შემთხვევაში კენტის
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
      if ((i + 1) % 8 === 0) startColor = !startColor //ციკლის მომდევსნო სვლაზე იცვლება შავი უჯრების პოზიცია

      if (table[i].fill === 'red') {
        //თუ JSON-ში fill არის წითელი, ესეიგი უჯრაში უნდა იყოს წითელი ქვა, ასევე ხდება თეთრზეც. ხოლო თუ არის none მაშინ უჯრა ცარიელია.
        li[
          i
        ].innerHTML = `<div class="redStone" onclick=callMoveStone.moveSide(this) data=${i}></div>`
      } else if (table[i].fill === 'white') {
        li[
          i
        ].innerHTML = `<div class="whiteStone" onclick=callMoveStone.moveSide(this) data=${i}></div>`
      } else {
        li[
          i
        ].innerHTML = `<div onclick=callMoveStone.chooseSquare(this) class="transperantStone" data=${i}></div>`
      }
    }
  }
  createBoard() {
    // ეს ფუნქცია მუშაობს დაფის გენერირებაზე
    for (let i = 0; i < 8; i++) {
      let ul = document.createElement('ul') //ვქმნით ul და li ელემენტებს და appendChild-ით ul-ში ვალაგებთ li-ებს
      for (let j = 0; j < 8; j++) {
        let li = document.createElement('li')

        ul.appendChild(li)
      }
      board.appendChild(ul)
    }
    this.boardColor() // აქ კი ვიძახებთ ქვების ჩალაგების ფუნქციას
  }
}

let callCreateBoardClass = new createBoardClass() // ვიძახებთ დაფის რენდერის კლასს და ვარენდერებთ მას
callCreateBoardClass.createBoard()

class gameRusels {
  // ეს კლასი ემსახურება თამაშის წესებს
  constructor() {
    this.x = 0 // ეს ორი ცვლადი წყვეტს ქვა რა მიმართულებით და რამდენი ბიჯით გადაადგილდება
    this.y = 1
  }
  moveSquare(color, index) {
    let indexes = { square: [], killStone: [] }
    if (color === 'redStone') {
      // თუ უნდა გადავაადგილოთ წითელი ქვა, მაშინ მისი x კოორდინატა უნდა გაიზარდოს 1-ით, თეთრი ქვის შემთხვევაში კი უნდა შემცირდეს.
      this.x = 1
    } else {
      this.x = -1
    }
    table.forEach((obj, i) => {
      // ამ ციკლს ვატრიალებთ რათა ვიპოვოთ იმ უჯრების ინდექსები რომელზეც ქვას აქვს გადასვლის უფლება. ამ ინდექსებს კი ვარეთურნებთ რათა შემდეგ გამოვიყენოთ სხვა ფუინქციებში
      if (
        obj.x === table[index].x + this.x &&
        (obj.y === table[index].y + this.y || obj.y === table[index].y - this.y)
      ) {
        if (obj.fill === 'none' && !afterKill) {
          indexes.square.push(i)
          indexes.killStone.push('none')
        } else if (obj.fill !== table[index].fill) {
          let side = false //false არის მარცხნეა
          if (obj.y > table[index].y) {
            side = true
          }
          table.forEach((obj2, j) => {
            if (side) {
              if (
                obj2.x === table[index].x + this.x * 2 &&
                obj2.y === table[index].y + this.y * 2
              ) {
                if (obj2.fill === 'none') {
                  indexes.square.push(j)
                  indexes.killStone.push(i)
                }
              }
            } else {
              if (
                obj2.x === table[index].x + this.x * 2 &&
                obj2.y === table[index].y - this.y * 2
              ) {
                if (obj2.fill === 'none') {
                  indexes.square.push(j)
                  indexes.killStone.push(i)
                }
              }
            }
          })
        }
      }
    })
    return indexes
  }
}
let callGameRusels = new gameRusels()

let li = document.querySelectorAll('li')
class moveStone {
  // ეს კლასი პასუხს აგებს ქვის გადაადგილებაზე და უჯრის გამწვანებაზე
  constructor() {
    this.stoneIndex = -1 // აქ ინახება იმ ქვის ინდექსი რომელსაც გადავაადგილებთ
    this.moveIndex = {} // აქ კი ზემოთა gameRules ფუნქციით დარეთურნებული უჯრების ინდექსები
  }
  moveSide(element) {
    callCreateBoardClass.boardColor()
    let color = element.getAttribute('class') //მოსული ელემენტიდან ვიღებთ კლასის სახელს რაც არის მასში არსებული ფერის დასახელებაც და ვიღებთ data-ს რომელშიც ინახება ინდექსი
    let index = element.getAttribute('data')
    if ((!player && color === 'whiteStone') || (player && color === 'redStone'))
      if (afterKill) {
        player = !player
      } else this.glowSquare(index, color) // შემდეგ ვიძახებთ უჯრის გამწვანების ფუნქციას
  }
  glowSquare(index, color) {
    let indexes = callGameRusels.moveSquare(color, index) // აქ ვიძახებთ gameRules და ვიღებთ შესაბამის ინდექსებს სადაც ქვას გადაადგილება შეუძლია
    this.moveIndex = indexes // ვინახავთ გადასაადგილებელი ქვის ინდექსს
    indexes.square.forEach((obj) => {
      // ვატრიელბთ ინდექსის სიგრძის ციკლს და ვამწვანებთ მოსული ინდექსების მიხედვით უჯრებს
      li[obj].style.backgroundColor = 'green'
    })
    this.stoneIndex = index // აქ კი კონსტრუქტორის ცვლადში ვათავსებთ მას
  }
  chooseSquare(element) {
    let index = JSON.parse(element.getAttribute('data')) //აქ არჩეულ უჯრაში ხდება ქვის გადაადგილება
    let killedStone = false
    let movementDone = false
    this.moveIndex.square.forEach((obj, i) => {
      //ვატრიელებთ ციკლს, და არჩეულ უჯრის fill ცვლადს ვანიჭებთ შესაბამის ქვის ფერს, ხოლო ქვის ძველ უჯრას none-ს.
      if (obj === index) {
        table[index].fill = table[this.stoneIndex].fill
        table[this.stoneIndex].fill = 'none'
        if (
          this.moveIndex.killStone.length > 0 &&
          this.moveIndex.killStone[i] !== 'none'
        ) {
          table[this.moveIndex.killStone[i]].fill = 'none'
          killedStone = true
          afterKill = true
        }
        movementDone = true
      }
    })
    if (movementDone) {
      callCreateBoardClass.boardColor() //ვიძახებთ ქვების ჩალაგების ფუნქციას რათა განახლებული დაფა დარენდერდეს
      if (!killedStone) {
        player = !player
        this.moveIndex = {}
        afterKill = false
      } else {
        let color = ''
        if (table[index].fill === 'white') {
          color = 'whiteStone'
        } else {
          color = 'redStone'
        }
        let checkKillStone = callGameRusels.moveSquare(color, index)
        console.log(checkKillStone)
        if (checkKillStone.killStone.length > 0) {
          this.glowSquare(index, color)
        } else {
          player = !player
          this.moveIndex = {}
          afterKill = false
        }
      }
    }
  }
}
let callMoveStone = new moveStone()
