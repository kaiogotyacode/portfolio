import { Component, OnInit } from '@angular/core';
import { ProjectModal } from 'src/models/projectModal';
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
  dropMenu: boolean = false;
  dropModal: boolean = false;
  currentLang: string = "english";
  translate!: Translate;
  currentProjectModal?: ProjectModal;

  portugueseLanguage: Translate = {
    language : "pt",

    nav1: "Apresentação",
    nav2: "Projetos",
    nav3: "Contato",

    presentationTitle: "Apresentação",
    projectTitle: "Projetos",
    presentationLink: "https://www.youtube.com/embed/dKtUsjHmw5w",

    sorvetesCreamDescription: "Mergulhe numa doce fuga na aplicação interativa de gelados! Descubra sabores, partilhe momentos e saboreie a alegria das delícias congeladas.",
    hitItHarderDescription: "Alavanque sua motivação neste hub inspirador! Liberte sua força, vença desafios e transforme contratempos em triunfos. Potencialize-se agora!",
    tiroDeGuerraDescription: "Projeto desenvolvido para o Exército Brasileiro da região de Votuporanga com o intuito de melhorar o desempenho do treinamento de Ordem Unida da guarnição.",
    taskManagementDescription: "Eleve a produtividade com esta plataforma de gestão de tarefas intuitiva. Simplifique, priorize e conquiste sua lista de afazeres com facilidade e precisão!",
    gotyaBankDescription: "Desafio de Código PicPay: Uma simulação de transferência bancária utilizando REST API com C# & EF Core.",
    valinorDescription: "FieldControl Code Challenge: Inicie uma jornada esclarecedora, explorando repositórios no GitHub por meio da API acessível para uma experiência dinâmica de codificação.",
    gitHubDescription: "Aqui você encontrará todos meus outros trabalhos relacionados a programação. Conecte-se comigo e vamos juntos impulsionar a comunidade de tecnologia!",

    contactTitle: "Contato",
    viewMore: "Ver mais"
  }

  englishLanguage: Translate = {
    language : "en",

    nav1: "Presentation",
    nav2: "Projects",
    nav3: "Contact",

    presentationTitle: "Presentation",
    projectTitle: "Projects",
    presentationLink: "https://www.youtube.com/embed/qkaDTbOZ42s",

    sorvetesCreamDescription: "Immerse in a sweet escape with our interactive ice cream haven! Explore flavors, share moments, and savor the joy of frozen delight",
    hitItHarderDescription: "Ignite your drive on our motivational hub! Unleash strength, conquer challenges, and transform setbacks into triumphs. Power up now!",
    tiroDeGuerraDescription: "Project developed for the Brazilian Army in the Votuporanga region with the aim of improving the performance of the garrison's Order of Arms training.",
    taskManagementDescription: "Elevate productivity with our seamless task management platform. Effortlessly streamline, prioritize, and conquer your to-do list with ease and precision!",
    gotyaBankDescription: "PicPay Code Challenge: Immerse in a bank transfer simulation via REST API using C# & EF Core. Sharpen coding skills with hands-on experience",
    valinorDescription: "FieldControl Code Challenge: Embark on an enlightening journey, exploring GitHub repositories through the accessible API for a dynamic coding experience.",
    gitHubDescription: "Explore my portfolio of programming projects here. Connect with me, and let's collaboratively elevate the technology community together!",

    contactTitle: "Contact",
    viewMore: "View more"
  }

  listProjectModal: ProjectModal[] = [
    {
      projectName: "Sorvete's Cream",
      projectImage: "sorvetescream.png",
      description: "Este projeto foi desenvolvido no início de 2021, onde dei início com projetos front-end para praticar a criação de ideias que tinha e transformá-las em código. Com HTML/CSS e PHP consegui atingir resultados de UI incríveis para a época, e foi a partir desse projeto que me motivei ainda mais para continuar minha carreira como desenvolvedor.",
      hasRepository: false,
      hasBehance: true,
      behanceLink: "https://www.behance.net/gallery/118392825/Sorvetes-Cream-2021-Project"
    },
    {
      projectName: "Hit It Harder",
      projectImage: "hititharder.png",
      description: "O projeto 'Hit Harder' foi mais um projeto desenvolvido em 2021, permitindo expandir minhas habilidades técnicas com Desenvolvimento e Design Gráfico. Utilizando PHP e MySQL foi criado uma interação dinâmica com o usuário durante o uso da aplicação.",
      hasRepository: false,
      hasBehance: true,
      behanceLink: "https://www.behance.net/gallery/91391425/Projeto-Motivacional"
    },
    {
      projectName: "Tiro de Guerra",
      projectImage: "tirodeguerra.png",
      description: "No ano de 2022 tive o privilégio de desenvolver uma aplicação C# Desktop para resolver um problema que ocorria durante as Apresentações de Ordem Unida. Criando um Aplicativo para facilitar a performance da equipe de som durante os eventos na guarnição.",
      hasRepository: false,
      hasBehance: false
    },
    {
      projectName: "Task Management",
      projectImage: "taskManagement.png",
      description: "O projeto 'Task Management' tem ênfase em facilitar o gerenciamento de projetos. Sua origem veio após um desafio entre meus amigos da faculdade, para treinar uma técnica que inventamos 'Brainstorming Sprint Code', onde o principal objetivo é desenvolver uma aplicação completa em até 1 semana.",
      hasRepository: true,
      hasBehance: false,
      gitHubLink: "https://github.com/kaiogotyacode/taskManagement"
    },
    {
      projectName: "GotyaBank",
      projectImage: "gotyabank.png",
      description: "Este projeto foi desenvolvido com ênfase na melhoria das habilidades com C# Back-End. Um code challenge oferecido pela Pic Pay para simular uma transferência bancária com REST APIs.",
      hasRepository: true,
      hasBehance: false,
      gitHubLink: "https://github.com/kaiogotyacode/GoTyaBank"
    },
    {
      projectName: "Valinor",
      projectImage: "valinor.png",
      description: "O Valinor é um projeto que realiza busca de repositórios do GitHub acessando a própria API do GitHub. Um desafio recente feito em Angular para treinar desenvolvimento com SPA junto de REST APIs.",
      hasRepository: true,
      hasBehance: false,
      gitHubLink: "https://github.com/kaiogotyacode/valinor"
    },
    {
      projectName: "GitHub Repositories",
      projectImage: "github.png",
      description: "Aqui você encontrará mais informações sobre o meu perfil Desenvolvedor. Atualmente sigo com treinamentos intensivos como Full Stack, focando no framework Angular e desenvolvimento Back-End com maiores complexidades no C#.",
      hasRepository: true,
      hasBehance: false,
      gitHubLink: "https://github.com/kaiogotyacode/"
    }
  ]



  switchLang(lang: string) {
    this.translate = lang == 'portuguese' ? this.portugueseLanguage : this.englishLanguage
  }

  dropdownMenu() {
    this.dropMenu = !this.dropMenu;
  }

  menuSandwich() {
    return {
      'menu-disabled': !this.dropMenu,
      'menu-active': this.dropMenu
    }
  }

  openModalDetailed(modal : ProjectModal) {
    this.dropModal = true;
    this.currentProjectModal =  modal;
    this.ModalDetailed();
  }

  closeModalDetailed() {
    this.dropModal = !this.dropModal;
    this.currentProjectModal = undefined;
  }

  ModalDetailed() {
    return {
      'modal-disabled': !this.dropModal,
      'modal-active': this.dropModal
    }
  }
}
