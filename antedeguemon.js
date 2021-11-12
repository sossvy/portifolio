let button1 = document.getElementById("eu");
let button2 = document.getElementById("biopark");
let button3 = document.getElementById("connect");
let button4 = document.getElementById("conteudo");
let campotexto = document.getElementById("sacred_text");
let imagemtexto = document.getElementById("imagemtexto");
let campobutton = document.getElementById("button_order");
let texto = "";
let imagem = "";

function mudatexto(parametro)
{
campotexto.innerHTML = parametro;

}

function mudaimg(imagem)
{
imagemtexto.src = imagem;
imagemtexto.style.border = "0.5rem solid greenyellow";
}

function anires()
{
campotexto.classList.remove("bagunca");

void campotexto.offsetTop;

campotexto.classList.add("bagunca");

}

button1.onclick = function()
{
texto = "&#10084 Meu nome é vitor, eu tenho 18 aninhos de vida aqui no planeta terra.<br>"+
"Tenho muitos amigos no Biopark Connect<br> cada um com abilidades e poderes unicos."+
"<br><br>&#10084 Eu me sintonizo com as energias de programação, gosto da natureza, amo assistir filmes, principalmente os de animação,"+
"como por exemplo: My Little Pony: A New Generation e LUCA, <br><br>&#10084 amo musica e quando tenho vontade toco piano no meu tempo livre."+
"Gosto de usar minha criatividade e intuição no que eu fasso gerando muito amor e diversão";
anires();
mudatexto(texto);
imagem = "./imagens/VitorPose.jpg";
mudaimg(imagem);
}

button2.onclick = function()
{
texto = "&#10084 O Biopark é um lugar bem distante de Toledo.<br>  É um lugar cercado de terra e misterios, é um dos centros de treinamento da<br>"+
"Prati Donaduzzi, nesse centro especifico varias pessoas aprendem as artes ocultas de programação, peripecias medicas, analise de queijos,<br>"+
" entre outras maluquices(no bom sentido).<br> <br> &#10084 Alem disso, o Biopark tambem é uma incubadora cheia de ovos de varias empresas"+
" diferentes e quando uma empresa atinge o valor de R$1.000.000.000 no mercado, o ovo dessa empresa no Biopark <br>choca e dele sai um lindo unicórnio";
anires();
mudatexto(texto);
imagem = "./imagens/Biopark.jpg";
mudaimg(imagem);
}

button3.onclick = function()
{
texto = "&#10084\xa0O Connect é uma opurtunidade que não deixei passar, é um presente para mim,fazia tempo que não  tinha um proposito de vida,<br> <br>&#10084\xa0esse curso esta mudando muito a minha vida, é muito dificil enjoar <br>porque agente faz ou aprende  uma coisa diferente em todos os dias. Essa é a vida que eu quero para mim, é a minha missão compartilhar um pouquinho de mim com um monte de pessoas através da técnologia.";
anires();
mudatexto(texto);
imagem = "./imagens/leonardo_explicando.jpg";
mudaimg(imagem);
}

button4.onclick = function()
{
texto = 
" &#10084\xa0\xa0  minha visão das matérias do connect: <br><br>"+ 
" &#10084\xa0\xa0  linguagem C:é uma linguagem desafiadora mas muito interessante, os ponteiros são bem legais de mexer  e eu tambem gosto de mexer com arquivos,<br> Dificuldades:no começo a questão dos ponteiros e dos e-comerciais era um pouco complicadas. <br> trabalhos: o principal com certeza foi o de passagem de onibus, muitas funções eu criei. nesse programa tinha que cadastrar clientes, reservar poltronas vender poltronas, foi muito divertido, só faltou melhorar a parte visual, mas como deixar um console bonito? <br><br>"+ 
"&#10084\xa0\xa0  linguagem Java:é uma linguagem que consiste em escrever bastante. <br> dificuldades: o professor não ensinou como fazer classes, então a dificuldade mais dificultosa foi um desafio de trunfo do pokemon. como não criei classe precisei criar um vetor para cada atributo de um pokemon. No final não consegui completar o desafio. <br> trabalhos: um trabalho avaliativo de 5 programas para realizar calculos com os valores digitados pelo usuário e estourar o resultado na tela <br><br>"+ 
" &#10084\xa0\xa0  front(HTML,CSS,Javascript): é uma materia muito divertida pois o resultado, se bem feito, é algo estiloso e criativo<br> dificuldades: as vezes eu esqueco alguma syntaxe daí eu tenho que pesquisar. <br> trabalhos: este portifolio é um deles <br><br>"+ 
" &#10084\xa0\xa0  Engenharia de Software: é interressante os requisitos, os fluxos principais.<br>dificuldades: as aulas teóricas dão sono, mas na prática eu entendo <br> trabalhos: teve aquele do aviãozinho de papel, bem bacana, eu não sou bom em fazer aviãozinhos de papel<br><br>"+
" &#10084\xa0\xa0  Banco de dados: no começo eu não gostei , agora estou entendendo melhor.<br> dificuldades:parece meio chato, é só guardar os elementos e organizar relacionar,<br> trabalhos:nem um até agora. só listas  <br><br>"+
"&#10084\xa0\xa0   Metodologias ágeis:Tem algo a ver com separar as tarefas e ver o desempenho, o go horse é bem bacana<br> dificuldades: as mesmas de engenharia de software só que as vezes nem ná pratica eu entendo<br> trabalhos: teve um de apresentação sobre o trello melhorando as empresas";
anires();
mudatexto(texto);
imagem = "./imagens/ponteiros_engraçados.jpg";
mudaimg(imagem);
}

imagemtexto.onclick = function()
{
imagemtexto.classList.add("aumenta");

imagemtexto.classList.remove("aumenta");
void imagemtexto.offsetTop;
imagemtexto.classList.add("aumenta");

}


