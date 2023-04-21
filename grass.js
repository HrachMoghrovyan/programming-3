let LivingCreature = require("./LivingCreature")

module.exports = class Grass extends LivingCreature{
    constructor(x,y){
        super(x,y)
        this.multiply = 0
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    
    }
    


    eat(){
        let emptyCell = this.chooseCell(5)
        let newCell = random(emptyCell)

           if(newCell ){
               this.energy += 5
            let newX = newCell[0]
            let newY = newCell[1]

                   for(let i in waterArr){
                            if(newX == waterArr[i].x  && newY == waterArr[i].y){
                                      waterArr.splice(i,1)
                            }
                   }

                   matrix[newY][newX] = 1
                   matrix[this.y][this.x] = 0


                   this.x = newX
                   this.y = newY

                   if(this.energy > 30){
                        this.mul()
                   }

           }else{
               this.move()
           }
        }
    mul(){
         this.multiply++
          let emptyCell = this.chooseCell(0)
          let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]
      
          if(newCell && this.multiply >= 5){
                     let newX  =   newCell[0]
                     let newY  =   newCell[1]

                     matrix[newY][newX] = 1

                     let grass = new Grass(newX,newY)
                     grassArr.push(grass)


                     this.multiply = 0


          }
          
    }

   

}

