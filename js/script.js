let arr = [
  'images/arrow.jpg',
  'images/arrow.jpg',
  'images/no-truck.jpg',
  'images/no-truck.jpg',
  'images/roadClosed.jpg',
  'images/roadClosed.jpg',
  'images/stop.webp',
  'images/stop.webp',
  'images/u-turn.jpg',
  'images/u-turn.jpg',
]

let questionImg = 'images/question.png'

let score = 0
let highScore = 0
let count = 0
let src1 =''
let src2 = ''
let start = false

function moving(){
  let temp =0
  let random = 0
  for(let i = 0; i<9; i++){
    temp = arr[i]
    random = Math.floor(Math.random() * arr.length)
    arr[i] = arr[random]
    arr[random] = temp
  }
}

function check(src_1, src_2){
  if($(src_1).attr('src') === $(src_2).attr('src')){
    score = score + 5
    $(src_1).attr('clicked', 'true')
    $(src_2).attr('clicked', 'true')
  }else{
    console.log('No')
    setTimeout(function(){
      $(src_1).attr('src', questionImg)
      $(src_2).attr('src', questionImg)
    }, 500)
    $(src_1).attr('clicked', 'false')
    $(src_2).attr('clicked', 'false')
  }
}

function initFlip(){
    setTimeout(function(){
      for(let i = 0; i<9; i++){

  }
}, 4000)
}

function flip(image){
  let position = $(image).attr('pos')
  $(image).attr('src',arr[position])
  if(count === 1 ){
    src1 = $(image)
  }else if(count ===0){
    src2 = $(image)
  }

  count = count+1
  if( count===2){


    check(src1, src2)
    count = 0
    }
}

$(document).ready(function(){

  moving()
  $('#start').click(()=>{
    start = true
    console.log(start)
    if(start === true ){
      $('img').click(function(){
        let clicked = $(this).attr('clicked')
        console.log(clicked)
        if(clicked=== 'false'){
          flip($(this))
          console.log($(this).attr('clicked'))
        }


      })
    }
  })


})
