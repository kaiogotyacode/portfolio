import { Component, OnInit } from '@angular/core';
import { Translate } from 'src/models/translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.translate = this.englishLanguage;
  }

  title = 'Portfolio';
  dropMenu : boolean = false;
  currentLang : string = "english";
  translate! : Translate;

  portugueseLanguage : Translate = {
    nav1  : "Apresentação",
    nav2  : "Projetos",
    nav3  : "Contato",

    presentationTitle : "Apresentação",
    projectTitle : "Projetos",

    sorvetesCreamDescription : "Mergulhe numa doce fuga na aplicação interativa de gelados! Descubra sabores, partilhe momentos e saboreie a alegria das delícias congeladas.",
    hitItHarderDescription : "Alavanque sua motivação neste hub inspirador! Liberte sua força, vença desafios e transforme contratempos em triunfos. Potencialize-se agora!",
    tiroDeGuerraDescription : "Projeto desenvolvido para o Exército Brasileiro da região de Votuporanga com o intuito de melhorar o desempenho do treinamento de Ordem Unida da guarnição.",
    taskManagementDescription : "Eleve a produtividade com esta plataforma de gestão de tarefas intuitiva. Simplifique, priorize e conquiste sua lista de afazeres com facilidade e precisão!",
    gotyaBankDescription : "Desafio de Código PicPay: Uma simulação de transferência bancária utilizando REST API com C# & EF Core.",
    valinorDescription : "FieldControl Code Challenge: Inicie uma jornada esclarecedora, explorando repositórios no GitHub por meio da API acessível para uma experiência dinâmica de codificação.",
    gitHubDescription : "Aqui você encontrará todos meus outros trabalhos relacionados a programação. Conecte-se comigo e vamos juntos impulsionar a comunidade de tecnologia!",

    contactTitle : "Contato",
    viewMore : "Ver mais"
  }
  
  englishLanguage : Translate = {
    nav1  : "Presentation",
    nav2  : "Projects",
    nav3  : "Contact",

    presentationTitle : "Presentation",
    projectTitle : "Projects",

    sorvetesCreamDescription : "Immerse in a sweet escape with our interactive ice cream haven! Explore flavors, share moments, and savor the joy of frozen delight",
    hitItHarderDescription : "Ignite your drive on our motivational hub! Unleash strength, conquer challenges, and transform setbacks into triumphs. Power up now!",
    tiroDeGuerraDescription : "Project developed for the Brazilian Army in the Votuporanga region with the aim of improving the performance of the garrison's Order of Arms training.",
    taskManagementDescription : "Elevate productivity with our seamless task management platform. Effortlessly streamline, prioritize, and conquer your to-do list with ease and precision!",
    gotyaBankDescription : "PicPay Code Challenge: Immerse in a bank transfer simulation via REST API using C# & EF Core. Sharpen coding skills with hands-on experience",
    valinorDescription : "FieldControl Code Challenge: Embark on an enlightening journey, exploring GitHub repositories through the accessible API for a dynamic coding experience.",
    gitHubDescription : "Explore my portfolio of programming projects here. Connect with me, and let's collaboratively elevate the technology community together!",

    contactTitle : "Contact",
    viewMore : "View more"
  }

  switchLang(lang: string) {
    this.translate = lang == 'portuguese' ? this.portugueseLanguage : this.englishLanguage  
  }

  dropdownMenu(){
    this.dropMenu = !this.dropMenu;
  }

  menuSandwich(){    
    return {
      'menu-disabled' : !this.dropMenu,
      'menu-active' : this.dropMenu
    }
  }
}
