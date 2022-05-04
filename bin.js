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
let board = document.getElementById('board')

class createBoardClass {
  // constructor(name, year) {
  //   this.name = name;
  //   this.year = year;
  // }

  boardColor() {
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
    this.boardColor()
  }
}

let callCreateBoardClass = new createBoardClass()
callCreateBoardClass.createBoard()

class gameRusels {
  constructor() {
    this.x = 0
    this.y = 1
  }
  moveSquare(color, index) {
    let indexes = []
    if (color === 'redStone') {
      this.x = 1
    } else {
      this.x = -1
    }

    table.forEach((obj, i) => {
      if (
        obj.x === table[index].x + this.x &&
        (obj.y === table[index].y + this.y || obj.y === table[index].y - this.y)
      ) {
        if (obj.fill === 'none') indexes.push(i)
        else if (obj.fill !== table[index].fill) {
          let side = false //false aris marcxena
          if (obj.y > table[index].y) {
            side = true
          }

          table.forEach((obj2, j) => {
            if (side) {
              if (
                obj2.x === table[index].x + this.x * 2 &&
                obj2.y === table[index].y + this.y * 2
              ) {
                indexes.push(j)
                console.log(j, '111aaa')
              }
            } else {
              console.log('ess')
              if (
                obj2.x === table[index].x + this.x * 2 &&
                obj2.y === table[index].y - this.y * 2
              ) {
                indexes.push(j)
                console.log(j, 'aaa')
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
  constructor() {
    this.stoneIndex = -1
    this.squareIndexes = []
  }
  moveSide(element) {
    callCreateBoardClass.boardColor()
    let color = element.getAttribute('class')
    let index = element.getAttribute('data')

    this.glowSquare(index, color)
  }
  glowSquare(index, color) {
    let indexes = callGameRusels.moveSquare(color, index)
    this.squareIndexes = indexes
    console.log(indexes)
    indexes.forEach((obj) => {
      li[obj].style.backgroundColor = 'green'
    })
    this.stoneIndex = index
  }
  chooseSquare(element) {
    let index = JSON.parse(element.getAttribute('data'))

    console.log(this.stoneIndex)
    this.squareIndexes.forEach((obj) => {
      console.log(obj, '---', index)
      if (obj === index) {
        table[index].fill = table[this.stoneIndex].fill
        table[this.stoneIndex] = 'none'
      }
    })
    callCreateBoardClass.boardColor()
  }
}
let callMoveStone = new moveStone()
