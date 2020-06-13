//servidor jogo quiz sobre segurança do trabalho;
//alunos do primeiro periodo de IPI(informatica para internet);
//codigo privado pertencente ao aluno miguel gabriel;
//mas sinta se avontade para copiar e alterar;
//igarassu/pe 04/07/2019 21:00;
//gabrielogabriel10@gmail.com
//mgbs@discente.ifpe.edu.br
//miguelgabriel01



          // servidor do quiz

const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash")
const path = require("path");
const bodyparser = require('body-parser');//envia os dados do formulario;
const gabarito = ['1c', '2a', '3c', '4b', '5c', '6d', '7c', '8b'];//respostas do quiz;


//session configurações
app.use(session({
	secret: 'XXassasas¨¨$',
	resave: false,
	saveUninitialized: true
}));

app.use(flash())




//body-parser
app.use(bodyparser.urlencoded({
	extended: false
}))
app.use(bodyparser.json())

//midddleware
app.use((req, res, next) => {

	next()

})
//arquivos estaticos(public)
app.use(express.static(__dirname));


//rota index(menu);
app.get("/", function (req, res, next) {
	

          res.write('<!DOCTYPE html>');
         res.write('<HTML lang="pt-br">');
        res.write('<head>');
       res.write('<meta charset="utf-8" />');
        res.write('<title>index</title>');
         res.write('</head>');
          res.write('<link rel="stylesheet" href="css/index.css">');
           res.write('<embed src="musicas/mus.mp3" hidden="true" loop="infinite" autostart="TRU">');


      res.write('<body>');
       res.write('<h1>QUIZ</h1>');
        res.write('<section>');

      res.write('<div class="rede" id="a"><a href="/jogar" >');
     res.write('<img class="ícone" séc=""/><h2><br><br><br>início</h2>');
    res.write('</a></div>');
   res.write('<div class="rede" id="b"><a href="/ajuda" >');
  res.write('<img class="ícone" séc=""/><h2><br><br><br>ajuda</h2>');
 res.write('</a></div>');
  res.write('<div class="rede" id="c"><a href="/sobre">');
   res.write('<img class="ícone" séc=""/><h2><br><br><br>sobre</h2>');
    res.write('</a></div>');
     res.write('<div class="rede" id="d"><a href="https://www.google.com/" >');
      res.write('<img class="ícone" séc=""/><h2><br><br><br>sair</h2>');
       res.write('</a></div>');



     res.write('</section>');
    res.write('<h6>gabrielogabriel10@gmail.com</h6>');
   res.write('</body>');
  res.write('</HTML>');

});


//rota "/respostas"(resultado final do quiz);

app.post("/respostas", function (req, res) {
	const {p1, p2, p3, p4, p5, p6, p7, p8} = req.body;
	var erros = 0;
	var acertos = 0;
	const respostaFront = [p1, p2, p3, p4, p5, p6, p7, p8];
	for(var contador = 0; contador < respostaFront.length; contador++) {
		respostaFront[contador] === gabarito[contador] ? acertos++ : erros++;
	}
	
		res.write('<html lang="pt-br">');
        res.write('<head>');

        res.write('<title>quiz</title>');
        res.write('<link rel="stylesheet" href="css/resposta.css" media="screen" charset="utf-8">');
        res.write('<meta charset="UTF-8">');

        res.write('</head>');
        res.write('<body>'); 

        res.write('<div class="divprin">');    
        res.write('<div class="divmeio" style="display:block;" id="resultadoFinal">');
	    res.write('<h2>Resultado</h2>');
	    res.write('<form class="radioed" action="#">');
	    res.write('<div class="row"><P>resultado final</P></div>');
		res.write(`acertou: ${acertos}`);
		//res.write(`errou: ${erros}`);
		//res.send(`acertou: ${acertos}, errou: ${erros}`);
	    
        res.write('</form>');
        res.write('</div>');
        res.write('</div>');
        res.write('<a href="/"> voltar</a>');
        res.write('</body>');
        res.write('</html>');





});


//rota "/jogar" (quiz);

app.get("/jogar", function (req, res,next) {

	res.write('<!DOCTYPE html>');
    res.write('<HTML lang="pt-br">');
    res.write('<head>');
    res.write('<meta charset="utf-8">');
    res.write('<link rel="stylesheet" href="css/jogoquiz.css">');
    res.write('<embed src="musicas/rhcp.mp3" hidden="true" loop="infinite" autostart="TRU">');

    res.write('<title>jogar</title>');
    res.write('</head>');
	

 
    res.write('<BODY>');   

    res.write('<DIV class="divprin" id="divprin">');    


    res.write('<DIV class="divmeio" style="display:block" id="pergunta1">');
	res.write('<H2>pergunta 1</H2>');
	res.write('<FORM class="radioed" action="/respostas" method="post">');
	res.write('<DIV class="row"><P>A CIPA tem como objetivo observar e relatar condições de risco nos ambientes de trabalho e solicitar medidas para reduzir até eliminar os riscos existentes e/ou neutralizar os mesmos. Qual é o significado da sigla CIPA?</P></DIV>');
	res.write('<DIV class="row"><INPUT name="p1" value="1a" id="1a" type="radio" />    <LABEL for="1a">Conselho Interno de Prevenção de Acidentes</LABEL></DIV>');
	res.write('<DIV class="row"><INPUT name="p1"  value="1b" id="1b" type="radio" />    <LABEL for="1b">Comite Interno de Prevenção de Acidentes</LABEL></DIV>');
	res.write('<DIV class="row"><INPUT name="p1" value="1c" id="1c" type="radio" />    <LABEL for="1c">Comissão Interna de Prevenção de Acidentes</LABEL></DIV>');
	res.write('<DIV class="row"><INPUT name="p1"  value="1d" id="1d" type="radio" />    <LABEL for="1d">Comissão Interna de Participação de Acidentes</LABEL></DIV>');
	
    res.write('<a href="#pergunta2" id="proxi">proxima</a>');

    res.write('</DIV>');

    res.write('</DIV>');


    res.write('<DIV class="divprin" id="pergunta2">');    
    res.write('<DIV class="divmeio" style="display:block;">');
	res.write('<H2>pergunta 2</H2>');
	res.write('<div class="radioed" action="#">');
	res.write('<DIV class="row"><P>A quem cabe a guarda e conservação do EPI?</P></DIV>');
	res.write('<DIV class="row"><INPUT name="p2" value="2a" id="2a" type="radio" />    <LABEL for="2a">O Empregado</LABEL></DIV>');
	res.write('<DIV class="row"><INPUT name="p2" value="2b" id="2b" type="radio" />    <LABEL for="2b">O Empregador</LABEL></DIV>');
	res.write('<DIV class="row"><INPUT name="p2" value="2c" id="2c" type="radio" />    <LABEL for="2c">A Cipa</LABEL></DIV>');
	res.write('<DIV class="row"><INPUT name="p2" value="2d" id="2d" type="radio" />    <LABEL for="2d">A Sipat</LABEL></DIV>');
				
    res.write('<a href="#pergunta3" id="proxi">proxima</a>');



	res.write('</div>');
	res.write('jesus vem!!!');
    res.write('</DIV>');

    res.write('</DIV>');




   res.write('<DIV class="divprin"  id="pergunta3">');   
   res.write('<DIV class="divmeio" style="display:block;">');
   res.write('<H2>pergunta 3</H2>');
   res.write('<div class="radioed" action="#">');
   res.write('<DIV class="row"><P>Quais são os exames médicos que obrigatoriamente são incluídos no PCMSO?</P></DIV>');
   res.write('<DIV class="row"><INPUT name="p3" value="3a" id="3a" type="radio" />');
   res.write('<LABEL for="3a">Admissional; Periódico; Retorno ao trabalho; Mudança de função; Mudança de Cidade;Demissional.</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p3" value="3b" id="3b" type="radio" />    <LABEL for="3b">Admissional; Periódico; Retorno ao trabalho; Mudança de função; Mudança de Cidade.</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p3" value="3c" id="3c" type="radio" />    <LABEL for="3c">Admissional; Periódico; Retorno ao trabalho; Mudança de função; Demissional.</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p3" value="3d" id="3d" type="radio" />    <LABEL for="3d">Admissional; Periódico; Retorno ao trabalho; Mudança de função;Mudança de Setor; demissional.</LABEL></DIV>');
			
   res.write('<a href="#pergunta4" id="proxi">proxima</a>');


   res.write('</div>');
   res.write('</DIV>');
   res.write('</DIV>');


   res.write('<DIV class="divprin"  id="pergunta4">  ');  
   res.write('<DIV class="divmeio" style="display:block;">');
   res.write('<H2>pergunta 4</H2>');
   res.write('<div class="radioed" action="#">');
   res.write('<DIV class="row"><P>Em virtude do acidente com trabalhador, ocorrido no exercicio da atividade profissional a serviço da empresa , deverá ser emitido qual documento pela empresa?</P></DIV>');
   res.write('<DIV class="row"><INPUT name="p4" value="4a" id="4a" type="radio" />    <LABEL for="4a">comunicação de acidente</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p4" value="4b" id="4b" type="radio" />    <LABEL for="4b">comunicação de acidente de trabalho</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p4" value="4c" id="4c" type="radio" />    <LABEL for="4c">informe de ocorrencia</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p4" value="4d" id="4d" type="radio" />    <LABEL for="4d">nenhuma das respostas anteriores</LABEL></DIV>');

   res.write('<a href="#pergunta5" id="proxi">proxima</a>');
	

   res.write('</div>');
   res.write('</DIV>');
   res.write('</DIV>');


   res.write('<DIV class="divprin"  id="pergunta5">');    
   res.write('<DIV class="divmeio" style="display:block;" >');
   res.write('<H2>pergunta 5</H2>');
   res.write('<div class="radioed" action="#">');
   res.write('<DIV class="row"><P>O objetivo do PCMSO é o de promover e preservar à saúde do conjunto dos seus trabalhadores. Qual o significado da sigla PMCO?</P></DIV>');
   res.write('<DIV class="row"><INPUT name="p5" value="5a" id="5a" type="radio" />    <LABEL for="5a">Participação no Controle Médico de Saúde Ocupacional</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p5" value="5b" id="5b" type="radio" />    <LABEL for="5b">Presença no Controle Médico de Saúde Ocupacional</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p5" value="5c" id="5c" type="radio" />    <LABEL for="5c">Programa de Controle Médico de Saúde Ocupacional</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p5" value="5d" id="5d" type="radio" />    <LABEL for="5d">Programa de Casos Médico de Saúde Ocupacional</LABEL></DIV>');
			
   res.write('<a href="#pergunta6" id="proxi">proxima</a>');
	         


   res.write('</div>');
   res.write('</DIV>');
   res.write('</DIV>');



   res.write('<DIV class="divprin"  id="pergunta6">');    
   res.write('<DIV class="divmeio" style="display:block;">');
   res.write('<H2>pergunta 6</H2>');
   res.write('<div class="radioed" action="#">');
   res.write('<DIV class="row"><P>Um trabalhador que executa uma tarefa no alto de um predio, deixa cair uma ferramenta que atinge o solo sem causar qualquer dano pessoal ou material. esse evento é definido como:</P></DIV>');
   res.write('<DIV class="row"><INPUT name="p6" value="6a" id="6a" type="radio" />    <LABEL for="6a">acidente</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p6" value="6b" id="6b" type="radio" />    <LABEL for="6b">desvio</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p6" value="6c" id="6c" type="radio" />    <LABEL for="6c">falha do trabalhador</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p6" value="6d" id="6d" type="radio" />    <LABEL for="6d">incidente</LABEL></DIV>');
		
   res.write('<a href="#pergunta7" id="proxi">proxima</a>');

	

   res.write('</div>');
   res.write('</DIV>');
   res.write('</DIV>');



   res.write('<DIV class="divprin"  id="pergunta7">');    
   res.write('<DIV class="divmeio" style="display:block;">');
   res.write('<H2>pergunta 7</H2>');
   res.write('<div class="radioed" action="#">');
   res.write('<DIV class="row"><P>Quanto a ultilzação de cores para identificação de agentes que causam riscos a saude dos trabalhadores e que costumam estar presente nos locais de trabalho, assinale a alternativa correta: </P></DIV>');
   res.write('<DIV class="row"><INPUT name="p7" value="7a" id="7a" type="radio" />    <LABEL for="7a">A cor azul indica risco fisico</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p7" value="7b" id="7b" type="radio" />    <LABEL for="7b">A cor laranja indica risco de queda</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p7" value="7c" id="7c" type="radio" />    <LABEL for="7c">A cor marrom indica risco biologico</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p7" value="7d" id="7d" type="radio" />    <LABEL for="7d">A cor vermelha indica risco de explosão</LABEL></DIV>');
		
   res.write('<a href="#pergunta8" id="proxi">proxima</a>');
		

   res.write('</div>');
   res.write('</DIV>');
   res.write('</DIV>');

   res.write('<DIV class="divprin"  id="pergunta8"> ');   
   res.write('<DIV class="divmeio" style="display:block;">');
   res.write('<H2>pergunta 8</H2>');
   res.write('<div class="radioed" action="#">');
   res.write('<DIV class="row"><P>Segundo a lei 9.213/1991 define-se acidente de trabalho como:</P></DIV>');
   res.write('<DIV class="row"><INPUT name="p8" value="8a" id="8a" type="radio" />    <LABEL for="8a">aquele que acontece provocando lesão corporal, causando perda da capacidade de trabalho</LABEL></DIV>');
   res.write('<DIV class= "row"><INPUT name="p8" value="8b" id="8b" type="radio" />    <LABEL for="8b">Aquele que acontece no exercicio do trabalho a seviço da empresa, provocando lesão corporal, ou pertubação funcional podendo causar morte, perda ou redução permanente ou temporaria da capacidade para o trabalho </LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p8" value="8c" id="8c" type="radio" />    <LABEL for="8c">Aquele que acontece fora do ambiente de trabalho, estando em horario de descanso, provocando perda material ou de tempo</LABEL></DIV>');
   res.write('<DIV class="row"><INPUT name="p8" value="8d" id="8d" type="radio" />    <LABEL for="8d">Aquele causado por colega de trabalho em exercicio da função</LABEL></DIV>');
   res.write('<button type="submit" value="submit"><p class="c" style="display:block">confirmar</p></butto>');


   res.write('</form>');

   res.write('</div>');
   res.write('</DIV>');





   res.write('<a href="/"> voltar</a>');
   res.write('<a class="reiniciar" href="/jogar"> reiniciar</a>');
   res.write('</BODY>');
   res.write('</HTML>');


});


//rota sobre (desenvolvedores);


app.get("/sobre", function (req, res,next) {

   res.write('<!DOCTYPE html>');
   res.write('<html lang="pt-br">');
   res.write('<head>');

   res.write('<meta charset="UTF-8">');
   res.write('<title>Desenvolvedores</title>');
   res.write('<link rel="stylesheet" href="css/Desenvolvedores.css">');
   res.write('</head>');
 

   res.write('<body>');
   res.write('<h1> Desenvolvedores </h1>');

   res.write('<div id="d1"></div> <p>  Miguel gabriel barbosa dos santos<br>mgbs@discente.ifpe.edu.br<br><br>(81)99276-5185</p>');

   res.write('<div id="d3"></div><p>  João Matheus Da Silva<br>joao.matheus0101@gmail.com<br>(81)98487-6838</p>');

   res.write('<div id="d1"></div> <p>  Miguel gabriel barbosa dos santos<br>mgbs@discente.ifpe.edu.br<br><br>(81)99276-5185</p>');

   res.write('<div id="d4"></div><p> Erinston ferreira da s. nascimento<br>eristong@gmail.com<br>(81)98557-2470</p>');

   res.write('<h2 ><a href="/" >voltar</a></h2>');
   
   res.write('</body>');

   res.write('</html>');

});

//rota "/ajuda" (como jogar);

    app.get("/ajuda", function (req, res, next) {

    res.write('<!DOCTYPE html>');
    res.write('<html lang="pt-br">');
    res.write('<head>');
	  res.write('<meta charset="UTF-8">');
	  res.write('<link rel="stylesheet" href="css/comojogar.css">');
	  res.write('<title>Document</title>');
    res.write('</head>');

    res.write('<body>');
	  res.write('<h1>Sobre o jogo</h1>');
  	res.write('<p>O quiz é um jogo baseado em perguntas e respostas, no qual o objetivo final é obter o maior numero de pontos ao final das perguntas.<br><br>para pontuar basta marcar a alternativa correta e confirmar. no fim tera o resultado das respostas marcadas.</p>');
	  res.write('<div id="	voltar">	<a class="voltar"  href="/" >voltar</a></div>');
    res.write('</body>');
    res.write('</html>');

});

  app.listen(8000, function () {
	console.log("servidor rodando na url http://localhost:8081");
	console.log("para derrubar servidor: ctrl+c");
	console.log("cristo vem!!!");
});
