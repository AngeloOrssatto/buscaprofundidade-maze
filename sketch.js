var ti = performance.now();

var cols = 25;
var rows = 25;

var grid = new Array(cols);

var start;
var end;
var w, h;

var path = [];
var visited = []

var noSolution = false;

function Spot(i,j){
    this.i = i;
    this.j = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.neighbors = [];
    this.previous = undefined;
    this.wall = false;
    this.neighborUp = undefined;
    this.neighborDown = undefined;
    this.neighborRight = undefined;
    this.neighborLeft = undefined;
  
    this.show = function(color){
      fill(color);
      if (this.wall){
        fill(0);
      }
      stroke(0);
      rect(this.i * w, this.j * h, w, h);
    }
  
    this.addNeighbors = function(grid){
      if (this.i < cols-1){
        this.neighbors.push(grid[this.i+1][this.j]);
        this.neighborRight = grid[this.i+1][this.j];
      }
      if (this.i > 0){
        this.neighbors.push(grid[this.i-1][this.j]);
        this.neighborLeft = grid[this.i-1][this.j];
      }
      if (this.j < rows-1){
        this.neighbors.push(grid[this.i][this.j+1]);
        this.neighborDown = grid[this.i][this.j+1];
      }
      if (this.j > 0){
        this.neighbors.push(grid[this.i][this.j-1]);
        this.neighborUp = grid[this.i][this.j-1];
      }
    }
  }

  function setup() {
    createCanvas(600,600);

    w = width / cols;
    h = height / rows;

    //construindo o grid
    for(let i = 0; i < cols; i++){
        grid[i] = new Array(rows);
    }

    for(let i = 0; i < cols; i++){
      for(let j = 0; j < rows; j++){
        grid[i][j] = new Spot(i,j);
      }
    }

    //adiciona os vizinhos de cada spot
    for(let i = 0; i < cols; i++){
      for(let j = 0; j < rows; j++){
        grid[i][j].addNeighbors(grid);
      }
    }

    //definindo o ponto inicial e o ponto final do caminho
    start = grid[1][1];
    end = grid[cols-1][rows-1];

    maze(grid, false, false);

    start.wall = false;
    end.wall = false;

    path.push(start);
    
  }

  function draw(){

    if (path.length > 0){

      var current = path[path.length-1];

      if (current === end){
        noSolution = false;
        var tf = performance.now();
        console.log(ti, tf, tf-ti); 
        document.getElementById("time").innerHTML = "Tempo de excução: " + ((tf-ti)/1000).toFixed(2) + "s";
        document.getElementById("resultado").innerHTML = "Resultado: Solução encontrada!";
        document.getElementById("path").innerHTML = "Tamanho do caminho percorrido: " + path.length;
        noLoop();
      }
      else if(current.neighborDown !== undefined && !current.neighborDown.wall && !path.includes(current.neighborDown) && !visited.includes(current.neighborDown)){
        temp = current.neighborDown;
        path.push(temp);
      } 
      else if (current.neighborLeft !== undefined && !current.neighborLeft.wall && !path.includes(current.neighborLeft) && !visited.includes(current.neighborLeft)){
        temp = current.neighborLeft;
        path.push(temp);
      } 
      else if (current.neighborUp !== undefined && !current.neighborUp.wall && !path.includes(current.neighborUp) && !visited.includes(current.neighborUp)){
        temp = current.neighborUp;
        path.push(temp);
      } else if (current.neighborRight !== undefined && !current.neighborRight.wall && !path.includes(current.neighborRight) && !visited.includes(current.neighborRight)){
        temp = current.neighborRight;
        path.push(temp);
      } else {
        visited.push(current);
        path.pop();
      }

    } else {
      noSolution = true;
      var tf = performance.now();
      console.log(ti, tf, tf-ti); 
      document.getElementById("time").innerHTML = "Tempo de excução: " + ((tf-ti)/1000).toFixed(2) + "s";
      document.getElementById("resultado").innerHTML = "Resultado: Sem solução :(";
      document.getElementById("path").innerHTML = "Tamanho do caminho percorrido: 0";
      noLoop();
    }

    background(0);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j].show(color(255));
      }
    }

    for (let i = 0; i < path.length; i++){
      path[i].show(color(0,255,255));
    }

    for(let i = 0; i < visited.length; i++){
      visited[i].show(color(255,0,0));
    }

    if(noSolution){
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          grid[i][j].show(color(255,0,0));
        }
      }
    }

    start.show(color(0,0,255));
    end.show(color(255,255,0));
  }