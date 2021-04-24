function maze(grid, twoPath, noPath){
  
    for(let i = 0; i < grid.length; i++){
      grid[0][i].wall = true;
      grid[i][0].wall = true;
    }
  
    for(let i = 0; i < grid.length-1; i++){
      grid[grid.length-1][i].wall = true;
    }
  
    for(let i = 0; i < grid.length-2; i++){
      grid[i][grid.length-1].wall = true;
    }
  
    grid[2][1].wall = true;
    grid[15][1].wall = true;
  
    for(let i = 2; i <= 22; i++){
      if (i != 8 && i != 16){
        grid[i][2].wall = true;
      }
    }
  
    grid[2][3].wall = true;
    grid[6][3].wall = true;
    grid[11][3].wall = true;
    grid[15][3].wall = true;
    grid[17][3].wall = true;
    grid[19][3].wall = true;
    grid[22][3].wall = true;
  
    grid[4][4].wall = true;
    grid[6][4].wall = true;
    grid[7][4].wall = true;
    grid[9][4].wall = true;
    grid[11][4].wall = true;
    grid[12][4].wall = true;
    grid[13][4].wall = true;
    grid[15][4].wall = true;
    grid[17][4].wall = true;
    grid[19][4].wall = true;
    grid[20][4].wall = true;
    grid[22][4].wall = true;
  
    for(let i = 1; i < 5; i++){
      grid[i][5].wall = true;
    }
    grid[9][5].wall = true;
    grid[15][5].wall = true;
    grid[17][5].wall = true;
  
    grid[4][6].wall = true;
    for(let i = 6; i < 14; i++){
      grid[i][6].wall = true;
    }
    grid[15][6].wall = true;
    for(let i = 17; i < 24; i++){
      grid[i][6].wall = true;
    }
  
    grid[2][7].wall = true;
    grid[8][7].wall = true;
  
    grid[2][8].wall = true;
    for(let i = 4; i < 23; i++){
      if(i != 7 && i != 17){
        grid[i][8].wall = true;
      }
    }
  
    grid[2][9].wall = true;
    grid[6][9].wall = true;
    grid[8][9].wall = true;
    grid[10][9].wall = true;
    grid[16][9].wall = true;
    grid[18][9].wall = true;
    grid[22][9].wall = true;
    
    for(let i = 1; i < 15; i++){
      if(i != 7 && i != 9){
        grid[i][10].wall = true;
      }
    }
    grid[16][10].wall = true;
    grid[18][10].wall = true;
    grid[20][10].wall = true;
    grid[22][10].wall = true;
  
    grid[8][11].wall = true;
    grid[16][11].wall = true;
    grid[18][11].wall = true;
    grid[20][11].wall = true;
    grid[21][11].wall = true;
    grid[22][11].wall = true;
    if(!twoPath){
      grid[23][11].wall = true;
    }
  
    for(let i = 1; i < 21; i++){
      if(i != 7 && i != 12 && i != 17 && i != 19){
        grid[i][12].wall = true;
      }
    }
  
    grid[3][13].wall = true;
    grid[14][13].wall = true;
    grid[18][13].wall = true;
    grid[20][13].wall = true;
    grid[22][13].wall = true;
  
    for(let i = 2; i < 7; i++){
      grid[i][14].wall = true;
    }
    for(let i = 8; i < 23; i++){
      if(i%2 == 0){
        grid[i][14].wall = true;
      }
    }
    if(noPath){
      grid[23][14].wall = true;
    }
  
    grid[3][15].wall = true;
    grid[5][15].wall = true;
    for(let i = 8; i < 23; i++){
      if(i%2 == 0){
        grid[i][15].wall = true;
      }
    }
  
    grid[5][16].wall = true;
    grid[7][16].wall = true;
    for(let i = 8; i < 23; i++){
      if(i%2 == 0){
        grid[i][16].wall = true;
      }
    }
  
    grid[2][17].wall = true;
    grid[4][17].wall = true;
    grid[5][17].wall = true;
    grid[7][17].wall = true;
    for(let i = 10; i < 23; i++){
      if(i%2 == 0){
        grid[i][17].wall = true;
      }
    }
  
    grid[1][18].wall = true;
    grid[2][18].wall = true;
    grid[9][18].wall = true;
    grid[10][18].wall = true;
    grid[12][18].wall = true;
    grid[14][18].wall = true;
    grid[16][18].wall = true;
    grid[17][18].wall = true;
    grid[18][18].wall = true;
    grid[22][18].wall = true;
  
    grid[2][19].wall = true;
    grid[4][19].wall = true;
    grid[7][19].wall = true;
    grid[9][19].wall = true;
    grid[12][19].wall = true;
    grid[14][19].wall = true;
    grid[16][19].wall = true;
    grid[21][19].wall = true;
    grid[22][19].wall = true;
  
    grid[2][20].wall = true;
    grid[4][20].wall = true;
    grid[5][20].wall = true;
    grid[6][20].wall = true;
    grid[7][20].wall = true;
    grid[9][20].wall = true;
    grid[10][20].wall = true;
    grid[11][20].wall = true;
    grid[12][20].wall = true;
    grid[14][20].wall = true;
    grid[16][20].wall = true;
    grid[18][20].wall = true;
    grid[21][20].wall = true;
  
    grid[4][21].wall = true;
    grid[12][21].wall = true;
    grid[14][21].wall = true;
    grid[16][21].wall = true;
    grid[18][21].wall = true;
    grid[20][21].wall = true;
    grid[21][21].wall = true;
    grid[23][21].wall = true;
  
    for(let i = 1; i < 19; i++){
      if (i != 3 && i != 15){
        grid[i][22].wall = true;
      }
    }
    grid[20][22].wall = true;
  
    grid[9][23].wall = true;
    grid[20][23].wall = true;
    grid[22][23].wall = true;
  }