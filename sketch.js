
var streams;
var symbolSize = 60;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
 // stream = new Stream();
 // createSprite(400, 200, 50, 50);
 var y = 0;
 var x = 0;
 for(i = 0;i <= width/symbolSize;i++){
   var stream = new Stream();
   stream.generate(x,y);
   streams.push(stream);
   x += symbolSize
 }
}

function draw() {
  background(0,150);  
  drawSprites();
  textSize(symbolSize);
  //stream.generate();
  //stream.render();
  streams.forEach(function(stream) {
    stream.render();
  });
}

function Symbol(x,y,speed){
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed;

  this.setToRandomSymbol = function(){
    this.value = String.fromCharCode(
    0x30A0 + round(random(0,96))
    );

  }
  
  this.rain = function(){
    if(this.y >= height ){
      this.y=0;
    }
    else{
    this.y += this.speed;
    }
  }

}
function Stream (){
  this.symbols = {};
  this.totalSymbols = round(random(3,30));
  this.speed = random(5,20);

  this.generate = function(x,y){
   
    for(var i = 0; i <= this.totalSymbols;i++){
      symbol = new Symbol(x,y,this.speed);
      symbol.setToRandomSymbol();
     // this.symbol.push(symbols);
     this.symbols.push(symbol);

      this.render = function(){
        this.symbols.forEach(function(symbol) {
          fill(139,0,0)
          text( symbol.value, symbol.x, symbol.y);
          symbol.rain();
          symbol.setToRandomSymbol();
        })
        
      }
  }
  }
}