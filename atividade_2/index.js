let rs = require('readline-sync')

alert ('Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou então higienize com álcool em gel 70%.');
alert ('Ao tossir ou espirrar, cubra nariz e boca com lenço ou com o braço, e não com as mãos.');
alert ('Evite tocar olhos, nariz e boca com as mãos não lavadas, ao tocar, lave sempre as mãos como já indicado.');
alert ('Se estiver doente, evite contato físico com outras pessoas, principalmente idosos e doentes crônicos, e fique em casa até melhorar.');
alert ('Utilize máscaras caseiras ou artesanais feitas de tecido em situações de saída de sua residência.');

let mascara = rs.question ('Você está fazendo o uso da máscara?')

let mao = rs.question ('Você está levando seu álcool em gel?')

console.log('============================')

if (mascara == 'sim' && mao == "sim") {
	console.log ('Muito obrigado por se atentar as dicas da OMS, se possível, fique em casa!')
	
}
else {
	console.log ('O uso da máscara é necessário, caso você não esteja fazendo o uso, vai ser multado!')
}

var covidmail = require('covidmail');

var transporter = covidmail.createTransport({
  service: 'gmail',
  auth: {
    user: 'seuemail@gmail.com',
    pass: 'suasenha'
  }
});

var mailOptions = {
  from: 'oms@saude.gov.br',
  to: 'shorykays@gmail.com',
  subject: 'Alerta Covid-19',
  text: 'Siga todas as orientações da OMS'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});