


function equalAB(A,B) {

let prodA = 1;
let prodB = 1;
let sumA = 0;
let sumB = 0;

  for (y=0; y < A.length;  y++) {

    prodA = prodA * A[y];
    prodB = prodB * B[y];
    sumA = sumA + A[y];
    sumB = sumB + B[y];


  }

  if (prodA === prodB && sumA === sumB) {

    return [A, B];

  } else {

    return false

  }

};



let a = [1, 1, 1, 1];
let b = [1, 1, 1, 1];

equalAB(a,b)

let maxvalue = 10;
let mbxvblue = 10;
let testnumber = 0;

 a[0] = 1;
for (i = 1; i<maxvalue; i++){

 a[0] = i;

   a[1] = 1
  for (j = 1; j<maxvalue; j++){

     a[1] = j;

     a[2] = 1
    for (h = 1; h<maxvalue; h++){

      a[2] = h;

       a[3] = 1
      for (k = 1; k<maxvalue; k++){


        a[3] = k;


        //a is done. now choose b


         b[0] = 1;
        for (c = 1; c<mbxvblue; c++){

         b[0] = c;

           b[1] = 1
          for (v = 1; v<mbxvblue; v++){

             b[1] = v;

             b[2] = 1
            for (n = 1; n<mbxvblue; n++){

              b[2] = n;

               b[3] = 1
              for (m = 1; m<mbxvblue; m++){


                b[3] = m;

                equalAB(a,b)

              }
            }
          }
        }



      }
    }
  }
}
