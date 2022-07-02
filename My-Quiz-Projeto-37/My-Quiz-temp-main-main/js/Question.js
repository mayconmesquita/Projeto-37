class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Digite Seu Nome Aqui....");
    this.input2 = createInput("Digite o Nº da Opção Correta...");
    this.button = createButton('Enviar');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("Meu Questionário");
    this.title.position(350, 0);

    // this.question("Pergunta:- Uma pedra cumprimenta uma tora de madeira. Que horas são? " );
    // this.html("Pergunta:- Uma pedra cumprimenta uma tora de madeira. Que horas são? " );
      this.question.html("Pergunta:- Uma pedra cumprimenta uma tora de madeira. Que horas são? " );
    // question.html("Pergunta:- Uma pedra cumprimenta uma tora de madeira. Que horas são? " );

    this.question.position(150, 80);
    this.option1.html("a) 00:15" );
    this.option1.position(150, 100);
    this.option2.html("b) 08:00" );
    this.option2.position(150, 120);
    this.option3.html("c) 07:50" );
    this.option3.position(150, 140);
    this.option4.html("d) 01:40" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
       this.message.html("Obrigado, Sua Resposta Foi Enviada");
       this.message.position(350, 350);

      // this.message.html("Obrigado, Sua Resposta Foi Enviada");
      // this.message.position();

      // this.message("Obrigado, Sua Resposta Foi Enviada");
      // this.message(350, 350);

      // this.message.html("Obrigado, Sua Resposta Foi Enviada");
      // this.message.position(350);


    });
  }
}
