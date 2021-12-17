let numeroDeAlunos  =  10

for  ( let  contador  =  0 ;  contador  <=  numeroDeAlunos ;  contador ++ )  {
    console.log(contador)
    
    if ( contador  == 0 ) {
        console.log ( "O número atual é zero" )
    } else  if ( contador  %  2  == 0 ) {
        console.log ( "O número"  +  contador  +  "é Par" ) ;	                
} else {
    console.log ( `O número $ { contador } é Impar` ) ;
}
}


let numeroDeAlunos  =  10

let  contador  =  0

while ( contador  <=  numeroDeAlunos )  {
 console.log(contador)
    
if ( contador  == 0 ) {    
   console.log ( "O número atual é zero" )
} else  if ( contador  %  2  == 0 ) {
   console.log ( "O número"  +  contador  +  "é Par" ) ;	                
} else {
  console.log ( `O número $ { contador } é Impar` ) ;
}
  contador ++ ;
}


let  nomeDeAluno  = [ "Marcel" ,  "Franklin" , "Rita" , "Afranio" ]

if  (nomeDeAluno ) {
        console.log( `Esta pessoa se chama $ { nome } ` )
}
