let quadrado;
let peso;
let tamanho;
let área;]

 alert ('Você está calculando a área do quadrado');
 alert ('Deseja de mais instruções?');
   
   /*###QUADRADO PESAGEM###*/
   
   function minhaFuncao(); 
   
  peso=document.getElementById(inipeso).value; 
     peso=new String(peso);
  
  tamanho=document.getElementById(initamanho).value;
   tamanho=new String (tamanho);
   
   area=document.getElementById(iniarea).value;
   area=new String (area);
   
   if ( peso === 4 )
   {
     if (tamanho >= 10 && area <=5) 
   { 
     PTA = 15 * peso + 4
	let resultado =document.getElementsById('resultado');
	resultado.innerHTML=(quadrado+"O peso do quadrado é de:"+PTA);
	}
	
	else if (tamanho <= 5 && area =>10)
	{ 
       PTA = 5.1 * area 3; 
	  let resultado =document.getElementById('resultado');
	  resultado.innerHTML=(quadrado+"A área do quadrado é de:"+PTA);
	}
	 
	 else if (peso<10)
	 { 
         let resultado =document.getElementById('resultado');
		 resultado.innerHTML=(quadrado+", O quadrado é muito leve para pesagem");
		 
		if (tamanho===2)
		{ 
         PTA = 2.10 * peso + 2;
     let resultado =document.getElementById('resultado');
    resultado.innerHTML=(quadrado+" O peso ideal do quadrado seria:"+PTA);
	}
	 else if (tamanho >= 3 && peso <=10)
	 { 
        PTA = 14.7 *  peso + 10.2;
		let resultado =document.getElementById('resultado');
		resultado.innerHTML=(quadrado+"O peso ideal do quadrado deveria ser:"+PTA);
		
    else if (tamanho >=5 && peso <=9)
	{  
      PTA = 8.4 * peso + 10.2; 
	  let resultado =document.getElementById('resultado');
	  resultado.innerHTML=(quadrado+"O peso ideal do quadrado deveria ser:"+PTA);
	  
	 else if (peso >8)
		 PTA = 6.2 * peso + 8;
	 let resultado =document.getElementById('resultado');
	 resultado.innerHTML=(quadrado+"O peso ideal do quadrado deveria ser:"+PTA);
	 
	else if (area <8)
	{ 
      let resultado =document.getElementById('resultado');
	  resultado.innerHTML=(quadrado+"A area do quadrado deveria ser de:"+PTA);
	  
	  opcao=document.getElementById('in-opcao').value;
	  opcao=Number(opcao);
	  
	  if(peso===1)
	  { 
      if(opcao===1)
	  {
		total=PTA*1.2;
		let final =document.getElementById('Resultado');
		final.innerHTML=('O quadrado necessita ter mais que '+ total+' ao total');
		
		}
		else if (opcao===2)
		{ 
	    area=PTA*1.4;
		let resultadoArea =document.getElementById('resultadoArea')
		resultadoArea.innerHTML=('O quadrado necessita de '+ area+' ao total');
		}
	 else if (opcao===3)
	 {
	else if (opcao===3)
	{
		tamanho=PTA*1.5;
		let resultadoTamanho =document.getElementById('resultadoTamanho')
		resultadoTamanho.innerHTML=('o quadrado necessita de '+ tamanho+' ao total);
	} 
	}
	
	} //function