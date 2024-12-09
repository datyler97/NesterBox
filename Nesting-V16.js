/**
 *  Tyler Nesting Program v16 with 4 coords, run counter, Breakdown, & 3 Material inputs
 **/


/*--------------Options-------------- */

var roll = 48;
var runs = 9000 // No of runs
var randomPiece = false // randomize list
var tableOutput = true // console.log best plotted table
var methodOutput = false // outputs oversize breakdown method
var debugMode = false // debug true works in editor, debug false works in webpage
/*--------------Options-------------- */

var matRun = 0;


// /* Gather Input Data ------- Example 1 - 110in */
// var f9 = 3; // width
// var f10 = 100; // height
// var f27= 1; // qty

// var f11 = 50; // width
// var f12 = 15; // height
// var f28 = 3; // qty

// var f13 = 24; // width
// var f14 = 30; // height
// var f29 = 2; // qty


/*------------Material 1---------------- */
var f9 = 0; /* width*/  var f10 = 0; /* height */ var f27 = 0; /* qty*/
var f11 = 0; /* width*/ var f12 = 0; /* height */ var f28 = 0; /* qty*/
var f13 = 0; /* width*/ var f14 = 0; /* height */ var f29 = 0; /* qty*/
var f15 = 0; /* width*/ var f16 = 0; /* height */ var f30 = 0; /* qty*/
var f17 = 0; /* width*/ var f18 = 0; /* height */ var f31 = 0; /* qty*/


/*------------Material 2---------------- */
var g9 = 0; /* width*/  var g10 = 0; /* height */ var g27 = 0; /* qty*/
var g11 = 0; /* width*/ var g12 = 0; /* height */ var g28 = 0; /* qty*/
var g13 = 0; /* width*/ var g14 = 0; /* height */ var g29 = 0; /* qty*/
var g15 = 0; /* width*/ var g16 = 0; /* height */ var g30 = 0; /* qty*/
var g17 = 0; /* width*/ var g18 = 0; /* height */ var g31 = 0; /* qty*/


/*--------------Material 3-------------- */
var h9 =  0; /* width*/ var h10 = 0; /* height */ var h27 = 0; /* qty*/
var h11 = 0; /* width*/ var h12 = 0; /* height */ var h28 = 0; /* qty*/
var h13 = 0; /* width*/ var h14 = 0; /* height */ var h29 = 0; /* qty*/
var h15 = 0; /* width*/ var h16 = 0; /* height */ var h30 = 0; /* qty*/
var h17 = 0; /* width*/ var h18 = 0; /* height */ var h31 = 0; /* qty*/


var checks = 0;
var combo

var originX = 0;
var originY = 0;
var low = 0
var high = 0
var validRun = false

// Top Left
var TL_X = 0;
var TL_Y = 0;
var topL = [TL_X,TL_Y];

// Top Right
var TR_X = 0;
var TR_Y = 0;
var topR = [TR_X,TR_Y];

// Bottom Left
var BL_X = 0;
var BL_Y = 0;
var bottomL = [BL_X,BL_Y];

// Bottom Right
var BR_X = 0;
var BR_Y = 0;
var bottomR = [BR_X,BR_Y];


var pieces = []; // Empty Array that gets filled with objects representing your rectangles
var saver = []; // Empty Array that fills at the end of each run saving data

/* Formula to generate a piece object */
function piece(width, height){
    this.width = width;
    this.height = height;
    this.qty = 1;
}

// Template to save run data to an object
function save(width,height,topL,topR,bottomL,bottomR){
    this.width = width;
    this.height = height;
    this.topL = topL;
    this.topR = topR;
    this.bottomL = bottomL;
    this.bottomR = bottomR;
}



var rowMax = Infinity
var maxTRX
var best

if(debugMode == true){ generatePieces() }










function generatePieces(){
 
 resetResults()
best = Infinity
combo = runs
pieces = []; // Empty Array that gets filled with objects representing your rectangles
saver = []; // Empty Array that fills at the end of each run saving data

if(matRun == 1){

/* Field 1 Oversize Check */
if(f9 > roll && f10 > roll){
    overSizeF1(f9,f10,f27)
} else{
    /* Generates Rectangles for 1st input Field */
    for(let i=0; i<f27; i++){
        pieces.push( new piece(f9,f10) );
    }
}
/* Field 2 Oversize Check */
if(f11 > roll && f12 > roll){
    overSizeF2(f11,f12,f28)
} else{
/* Generates Rectangles for 2nd input Field */
for(let i=0; i<f28; i++){
    pieces.push( new piece(f11,f12) );
}
}
/* Field 3 Oversize Check */
if(f13 > roll && f14 > roll){
    overSizeF3(f13,f14,f29)
} else{
    /* Generates Rectangles for 3rd input Field */
for(let i=0; i<f29; i++){
    pieces.push( new piece(f13,f14) );
}
}
/* Field 4 Oversize Check */
if(f15 > roll && f16 > roll){
    overSizeF4(f15,f16,f30)
} else{
    /* Generates Rectangles for 4th input Field */
for(let i=0; i<f30; i++){
    pieces.push( new piece(f15,f16) );
}
}
/* Field 5 Oversize Check */
if(f17 > roll && f18 > roll){
    overSizeF5(f17,f18,f31)
} else{
    /* Generates Rectangles for 5th input Field */
for(let i=0; i<f31; i++){
    pieces.push( new piece(f17,f18) );
}
}

} 

if(matRun == 2){
    
    /* Field 1 Oversize Check */
    if(g9 > roll && g10 > roll){
        overSizeF1(g9,g10,g27)
    } else{
        /* Generates Rectangles for 1st input Field */
        for(let i=0; i<g27; i++){
            pieces.push( new piece(g9,g10) );
        }
    }
    /* Field 2 Oversize Check */
    if(g11 > roll && g12 > roll){
        overSizeF2(g11,g12,g28)
    } else{
    /* Generates Rectangles for 2nd input Field */
    for(let i=0; i<g28; i++){
        pieces.push( new piece(g11,g12) );
    }
    }
    /* Field 3 Oversize Check */
    if(g13 > roll && g14 > roll){
        overSizeF3(g13,g14,g29)
    } else{
        /* Generates Rectangles for 3rd input Field */
    for(let i=0; i<g29; i++){
        pieces.push( new piece(g13,g14) );
    }
    }
    /* Field 4 Oversize Check */
    if(g15 > roll && g16 > roll){
        overSizeF4(g15,g16,g30)
    } else{
        /* Generates Rectangles for 4th input Field */
    for(let i=0; i<g30; i++){
        pieces.push( new piece(g15,g16) );
    }
    }
    /* Field 5 Oversize Check */
    if(g17 > roll && g18 > roll){
        overSizeF5(g17,g18,g31)
    } else{
        /* Generates Rectangles for 5th input Field */
    for(let i=0; i<g31; i++){
        pieces.push( new piece(g17,g18) );
    }
    }
    
    } 


    if(matRun == 3){
    
        /* Field 1 Oversize Check */
        if(h9 > roll && h10 > roll){
            overSizeF1(h9,h10,h27)
        } else{
            /* Generates Rectangles for 1st input Field */
            for(let i=0; i<h27; i++){
                pieces.push( new piece(h9,h10) );
            }
        }
        /* Field 2 Oversize Check */
        if(h11 > roll && h12 > roll){
            overSizeF2(h11,h12,h28)
        } else{
        /* Generates Rectangles for 2nd input Field */
        for(let i=0; i<h28; i++){
            pieces.push( new piece(h11,h12) );
        }
        }
        /* Field 3 Oversize Check */
        if(h13 > roll && h14 > roll){
            overSizeF3(h13,h14,h29)
        } else{
            /* Generates Rectangles for 3rd input Field */
        for(let i=0; i<h29; i++){
            pieces.push( new piece(h13,h14) );
        }
        }
        /* Field 4 Oversize Check */
        if(h15 > roll && h16 > roll){
            overSizeF4(h15,h16,h30)
        } else{
            /* Generates Rectangles for 4th input Field */
        for(let i=0; i<h30; i++){
            pieces.push( new piece(h15,h16) );
        }
        }
        /* Field 5 Oversize Check */
        if(h17 > roll && h18 > roll){
            overSizeF5(h17,h18,h31)
        } else{
            /* Generates Rectangles for 5th input Field */
        for(let i=0; i<h31; i++){
            pieces.push( new piece(h17,h18) );
        }
        }
        
        }     

        if(matRun == 4){
            matRun = 0
        }



/* Max Method Vars */
var maxM // final method length
var maxMw // max method width => width/height max * qty
var maxMpanel // max method panels => maxMw / roll


/* Min Method Vars */
var minM // final method length
var minMw // min method width => width/height min * qty
var minMpanel // min method panels => minMw / roll


/*--------------------------
    Oversize Field 1
--------------------------*/
function overSizeF1(w,h,qty){
    max = Math.max(w,h)
    maxMw =  Math.max(w,h) * qty
    maxMpanel = Math.ceil(maxMw / roll)
    maxM = maxMpanel * Math.min(w,h)

    min = Math.min(w,h)
    minMw =  Math.min(w,h) * qty
    minMpanel = Math.ceil(minMw / roll)
    minM = minMpanel * Math.max(w,h)

// Compares both methods and executes most efficient
if(maxM < minM){
    tileMax(maxMw,minMw,max,min)
} else if(minM < maxM){
    tileMin(min,max)
} else{
    tileMax(maxMw,minMw,max,min)
}
}

/*--------------------------
    Oversize Field 2
--------------------------*/
function overSizeF2(w,h,qty){
    max = Math.max(w,h)
    maxMw =  Math.max(w,h) * qty
    maxMpanel = Math.ceil(maxMw / roll)
    maxM = maxMpanel * Math.min(w,h)

    min = Math.min(w,h)
    minMw =  Math.min(w,h) * qty
    minMpanel = Math.ceil(minMw / roll)
    minM = minMpanel * Math.max(w,h)

// Compares both methods and executes most efficient
 if(maxM < minM){
    tileMax(maxMw,minMw,max,min)
} else if(minM < maxM){
    tileMin(min,max)
} else{
    tileMax(maxMw,minMw,max,min)
}
}

/*--------------------------
    Oversize Field 3
--------------------------*/
function overSizeF3(w,h,qty){
    max = Math.max(w,h)
    maxMw =  Math.max(w,h) * qty
    maxMpanel = Math.ceil(maxMw / roll)
    maxM = maxMpanel * Math.min(w,h)

    min = Math.min(w,h)
    minMw =  Math.min(w,h) * qty
    minMpanel = Math.ceil(minMw / roll)
    minM = minMpanel * Math.max(w,h)

// Compares both methods and executes most efficient
if(maxM < minM){
    tileMax(maxMw,minMw,max,min)
} else if(minM < maxM){
    tileMin(min,max)
} else{
    tileMax(maxMw,minMw,max,min)
}
}

/*--------------------------
    Oversize Field 4
--------------------------*/
function overSizeF4(w,h,qty){
    max = Math.max(w,h)
    maxMw =  Math.max(w,h) * qty
    maxMpanel = Math.ceil(maxMw / roll)
    maxM = maxMpanel * Math.min(w,h)

    min = Math.min(w,h)
    minMw =  Math.min(w,h) * qty
    minMpanel = Math.ceil(minMw / roll)
    minM = minMpanel * Math.max(w,h)

// Compares both methods and executes most efficient
if(maxM < minM){
    tileMax(maxMw,minMw,max,min)
} else if(minM < maxM){
    tileMin(min,max)
} else{
    tileMax(maxMw,minMw,max,min)
}
}

/*--------------------------
    Oversize Field 5
--------------------------*/
function overSizeF5(w,h,qty){
    max = Math.max(w,h)
    maxMw =  Math.max(w,h) * qty
    maxMpanel = Math.ceil(maxMw / roll)
    maxM = maxMpanel * Math.min(w,h)

    min = Math.min(w,h)
    minMw =  Math.min(w,h) * qty
    minMpanel = Math.ceil(minMw / roll)
    minM = minMpanel * Math.max(w,h)

// Compares both methods and executes most efficient
if(maxM < minM){
    tileMax(maxMw,minMw,max,min)
} else if(minM < maxM){
    tileMin(min,max)
} else{
    tileMax(maxMw,minMw,max,min)
}
}

/*--------------------------
    Max Method Tile
--------------------------*/
function tileMax(maxMw,minMw,max,min){
    if(methodOutput == true){console.log("Tile Max")}

    for(sample = maxMw / roll; sample > 1; sample --){
        pieces.push( new piece(roll,min) );
    } 

    pieces.push( new piece(Math.ceil((sample * 48)),min) );

}


/*--------------------------
    Min Method Tile
--------------------------*/
function tileMin(min,max){
    if(methodOutput == true){console.log("Tile Min")}

    for(sample = min / roll; sample > 1; sample --){
        pieces.push( new piece(roll,max) );
    } 
    
    pieces.push( new piece(Math.ceil((sample * 48)),max) );
}   


looper()
}







function nest(){

 
    


if(randomPiece == true){
    pieces.sort(() => 0.5 -Math.random());
    prePlot()
} else{
    prePlot()
    randomPiece = true
}


}



function prePlot(){
/*Top Left*/ TL_X += originX;   TL_Y = originY;
/*Top Right*/ TR_X = TL_X + Math.min(pieces[checks].width,pieces[checks].height);   TR_Y = originY;
/*Bottom Left*/ BL_X = originX;   BL_Y = Math.max(pieces[checks].width,pieces[checks].height) + originY;
/*Bottom Right*/ BR_X = Math.min(pieces[0].width,pieces[checks].height) + originX;   BR_Y = Math.max(pieces[checks].width,pieces[checks].height) + originY;
 /*Coords Array*/ topL = [TL_X,TL_Y];  topR = [TR_X,TR_Y];    bottomL = [BL_X,BL_Y];  bottomR = [BR_X,BR_Y];    

/*Sets largest Height value*/
if(high < BR_Y){ 
    high = BR_Y
    maxTRX = TR_X
}

/*Save -  saves variables out to saver */
saver[0] = new save(pieces[checks].width,pieces[checks].height,topL,topR,bottomL,bottomR);
checks++

plot()
}

function plot(){

  /* -----------Loop the rest of the Pieces ------------ */
    for(let i=checks; i<pieces.length; i++){

if (BL_Y < high) {rowMax = BL_Y} 
if (BL_Y < rowMax) {rowMax = rowMax} 


        // if the smallest dimension of a piece is  < the roll width - the smallest dimension aka can the smallest side of a piece fit into the media width
        if(TR_X <= roll - Math.min(pieces[i].width,pieces[i].height)){
            /*Top Left*/     TL_X += Math.min(pieces[i-1].width,pieces[i-1].height);      TL_Y = originY;
            /*Top Right*/    TR_X = TL_X + Math.min(pieces[i].width,pieces[i].height);       TR_Y = originY;
            /*Bottom Left*/  BL_X = TL_X;       BL_Y = Math.max(pieces[i].width,pieces[i].height) + originY;
            /*Bottom Right*/ BR_X = TR_X;       BR_Y = Math.max(pieces[i].width,pieces[i].height) + originY;
            /*Coords Array*/ topL = [TL_X,TL_Y];  topR = [TR_X,TR_Y];    bottomL = [BL_X,BL_Y];  bottomR = [BR_X,BR_Y];

            /*Sets largest Height value*/ if(high < BR_Y){ 
                high = BR_Y
                maxTRX = TR_X
            }

            if(  Math.max(pieces[i].width,pieces[i].height) < Math.max(pieces[i-1].width,pieces[i-1].height)   ){maxTRX = TL_X}
            saver[i] = new save(pieces[i].width,pieces[i].height,topL,topR,bottomL,bottomR); // saves variables out to saver //
            
            checks++
        } else{

            if (BL_Y < high) { 
                nestedRow = true
                // console.log("Use Nest")
                if(rowMax < high){
                  
                    originX = maxTRX 
                    originY = rowMax
                    if(originX > roll - Math.min(pieces[i].width,pieces[i].height)){originX = 0;originY = high}
                    newPlot(i)
                    break
                }
            } else{
                nestedRow = false
                // console.log("NEW ROW")
                if(checks < pieces.length){
                    originX = 0
                    originY = high
                    newPlot(i)
                    break
                }

            }
            
           
        }


    }
    
}




 function newPlot(i){
// originX = 0
// originY = high



            /*Top Left*/     TL_X = originX;      TL_Y = originY;
            /*Top Right*/    TR_X = TL_X + Math.min(pieces[i].width,pieces[i].height);       TR_Y = originY;
            /*Bottom Left*/  BL_X = TL_X;       BL_Y = Math.max(pieces[i].width,pieces[i].height) + originY;
            /*Bottom Right*/ BR_X = TR_X;       BR_Y = Math.max(pieces[i].width,pieces[i].height) + originY;
            /*Coords Array*/ topL = [TL_X,TL_Y];  topR = [TR_X,TR_Y];    bottomL = [BL_X,BL_Y];  bottomR = [BR_X,BR_Y];

     
            

/*Sets largest Height value*/
if(high < BR_Y){ high = BR_Y}

/*Save -  saves variables out to saver */
saver[i] = new save(pieces[checks].width,pieces[checks].height,topL,topR,bottomL,bottomR);
checks++



plot()

}



function getResults(){
    // console.log("------------Saver Results------------");
    // console.table(saver);
    // console.log("------------Saver Results------------");
    
   totalPrintHeight = high;
    // console.log("Total Print Height: " + totalPrintHeight + " in")
    // console.log("------------------------------------");

    if(totalPrintHeight < best){
        best = totalPrintHeight
        if(tableOutput == true){console.table(saver)}
    }
}



function resetResults(){
    checks = 0;
    originX = 0;
    originY = 0;
    low = 0
    high = 0
    
    
    // Top Left
    var TL_X = 0;
    var TL_Y = 0;
    var topL = [TL_X,TL_Y];
    
    // Top Right
    var TR_X = 0;
    var TR_Y = 0;
    var topR = [TR_X,TR_Y];
    
    // Bottom Left
    var BL_X = 0;
    var BL_Y = 0;
    var bottomL = [BL_X,BL_Y];
    
    // Bottom Right
    var BR_X = 0;
    var BR_Y = 0;
    var bottomR = [BR_X,BR_Y];
    
    
    var pieces = []; // Empty Array that gets filled with objects representing your rectangles
    var saver = []; // Empty Array that fills at the end of each run saving data
    

    
    var rowMax = Infinity
    var maxTRX
}


function looper(){

    if(combo > 0){



        nest()
        getResults()
        resetResults()
        combo--
        looper()
     } else{
        console.log(best + '"')
       if(debugMode == false){ 
     if(matRun == 1){   mat1best.innerHTML = best + '"';}
     if(matRun == 2){   mat2best.innerHTML = best + '"';}
     if(matRun == 3){   mat3best.innerHTML = best + '"';}
    }
        // console.table(pieces)
        if(matRun < 4){wait()}
     }

}

/*--------------------------
    HTML Functions
--------------------------*/

function resetRun(){
    matRun = 0;
    wait()
}


function wait(){
    randomPiece = false
    if(matRun > 3){matRun = 0;}
    matRun++

    

    if(matRun == 1){
        getRoll()
        updateFields();
        if(f27 == 0 && f28 == 0 && f29 == 0 && f30 == 0 && f31 == 0){
            mat1best.innerHTML = '0"';
            matRun++
        } else{
            mat1best.innerHTML = "...";
            setTimeout(function(){
                generatePieces()
            },50)
        }
    } 
    

    if(matRun == 2){
        getRoll()
        updateFields();
        mat2best.innerHTML = "..."
        if(g27 == 0 && g28 == 0 && g29 == 0 && g30 == 0 && g31 == 0){
            mat2best.innerHTML = '0"';
            matRun++
        } else{
            setTimeout(function(){
                generatePieces()
            },50)
        }
    }
  

    if(matRun == 3){
        getRoll()
        updateFields()
        mat3best.innerHTML = "..."
        if(h27 == 0 && h28 == 0 && h29 == 0 && h30 == 0 && h31 == 0){
            mat3best.innerHTML = '0"';
            matRun++
        } else{
            setTimeout(function(){
                generatePieces()
            },50)
        }
    } 
    
    

}


function getRoll(){

    if(matRun == 1){
        roll = +document.querySelector("#mat1Roll").value
    }

    if(matRun == 2){
        roll = +document.querySelector("#mat2Roll").value
    }

    if(matRun == 3){
        roll = +document.querySelector("#mat3Roll").value
    }

}




function updateFields(){
    // Field 1
    f9 =  +document.querySelector("#f9").value
    f10 = +document.querySelector("#f10").value
    f27 = +document.querySelector("#f27").value
    // Field 2
    f11 = +document.querySelector("#f11").value
    f12 = +document.querySelector("#f12").value
    f28 = +document.querySelector("#f28").value
    // Field 3
    f13 = +document.querySelector("#f13").value
    f14 = +document.querySelector("#f14").value
    f29 = +document.querySelector("#f29").value
    // Field 4
    f15 = +document.querySelector("#f15").value
    f16 = +document.querySelector("#f16").value
    f30 = +document.querySelector("#f30").value
    // Field 5
    f17 = +document.querySelector("#f17").value
    f18 = +document.querySelector("#f18").value
    f31 = +document.querySelector("#f31").value


    // Field 1
    g9 =  +document.querySelector("#g9").value
    g10 = +document.querySelector("#g10").value
    g27 = +document.querySelector("#g27").value
    // Field 2
    g11 = +document.querySelector("#g11").value
    g12 = +document.querySelector("#g12").value
    g28 = +document.querySelector("#g28").value
    // Field 3
    g13 = +document.querySelector("#g13").value
    g14 = +document.querySelector("#g14").value
    g29 = +document.querySelector("#g29").value
    // Field 4
    g15 = +document.querySelector("#g15").value
    g16 = +document.querySelector("#g16").value
    g30 = +document.querySelector("#g30").value
    // Field 5
    g17 = +document.querySelector("#g17").value
    g18 = +document.querySelector("#g18").value
    g31 = +document.querySelector("#g31").value    


    // Field 1
    h9 =  +document.querySelector("#h9").value
    h10 = +document.querySelector("#h10").value
    h27 = +document.querySelector("#h27").value
    // Field 2
    h11 = +document.querySelector("#h11").value
    h12 = +document.querySelector("#h12").value
    h28 = +document.querySelector("#h28").value
    // Field 3
    h13 = +document.querySelector("#h13").value
    h14 = +document.querySelector("#h14").value
    h29 = +document.querySelector("#h29").value
    // Field 4
    h15 = +document.querySelector("#h15").value
    h16 = +document.querySelector("#h16").value
    h30 = +document.querySelector("#h30").value
    // Field 5
    h17 = +document.querySelector("#h17").value
    h18 = +document.querySelector("#h18").value
    h31 = +document.querySelector("#h31").value      

    //  if(+f27 + +f28 + +f29 + +f30 + +f31 >= 15){
    //     warning.classList.remove('off')
    //  } else {
    //     warning.classList.add('off')
    // }

    // if(f27 && f28 && f29 && f30 && f31 == 0){mat1best.innerHTML = '0"';}
    // if(g27 && g28 && g29 && g30 && g31 == 0){mat2best.innerHTML = '0"';}
    // if(h27 && h28 && h29 && h30 && h31 == 0){mat3best.innerHTML = '0"';}
    }

    function reset(){
        for(let i=0; i<document.getElementsByTagName('input').length; i++){
            document.getElementsByTagName('input')[i].value = 0
        }

        mat1best.innerHTML = '0"'
        mat2best.innerHTML = '0"'
        mat3best.innerHTML = '0"'
    }