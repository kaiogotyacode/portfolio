import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ProjectModal } from 'src/models/projectModal';
import { Translate } from 'src/models/translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.translate = this.portugueseLanguage;
    setTimeout(() => {
      this.triggerFilmIntro(true);
      // Remove the pre-loader only after the film overlay (opacity:1) is guaranteed rendered
      setTimeout(() => {
        const loader = document.getElementById('pre-loader');
        if (loader) {
          loader.classList.add('fade-out');
          setTimeout(() => loader.remove(), 300);
        }
      }, 100);
    }, 600);
    setInterval(() => {
      if (!document.hidden) this.triggerFilmIntro(false);
    }, 30000);
  }

  filmIntro: boolean = false;
  filmIntroFull: boolean = false;

  triggerFilmIntro(full: boolean = false) {
    this.filmIntroFull = full;
    this.filmIntro = true;
    setTimeout(() => this.filmIntro = false, full ? 5000 : 4600);
  }

  title = 'Portfolio';
  currentYear = new Date().getFullYear();
  dropMenu: boolean = false;
  dropModal: boolean = false;
  workHistoryExpanded: boolean = false;
  currentLang: string = "portuguese";
  translate!: Translate;
  currentProjectModal?: ProjectModal;
  languageAnimation: boolean = false;

  toggleLanguageAnimation() {
    this.languageAnimation = !this.languageAnimation;
  }

  portugueseLanguage: Translate = {
    language: "portuguese",

    nav1: "Apresentação",
    nav2: "Projetos",
    nav3: "Contato",
    nav4: "Histórico",

    presentationTitle: "Apresentação",
    projectTitle: "Projetos",
    workHistoryTitle: "Histórico Profissional",
    presentationLink: "https://www.youtube.com/embed/dncGus0asoA",

    yaBuyDescription: "Plataforma de e-commerce completa liderada por mim há 12 meses. Integrações com Correios, Frenet, Mercado Pago e Stripe. Arquitetura, infra e gestão de equipe.",
    eraConectividadeDescription: "TCC na Fatec Rio Preto: cenários ultra conectados com IoT, AWS Lambda, Tuya e IA. Um job analisa o clima a cada 3 min e aciona dispositivos IoT ao detectar 80% de chance de chuva.",

    sorvetesCreamDescription: "Mergulhe numa doce fuga na aplicação interativa de gelados! Descubra sabores, partilhe momentos e saboreie a alegria das delícias congeladas.",
    hitItHarderDescription: "Alavanque sua motivação neste hub inspirador! Liberte sua força, vença desafios e transforme contratempos em triunfos. Potencialize-se agora!",
    tiroDeGuerraDescription: "Projeto desenvolvido para o Exército Brasileiro da região de Votuporanga com o intuito de melhorar o desempenho do treinamento de Ordem Unida da guarnição.",
    taskManagementDescription: "Eleve a produtividade com esta plataforma de gestão de tarefas intuitiva. Simplifique, priorize e conquiste sua lista de afazeres com facilidade e precisão!",
    gotyaBankDescription: "Desafio de Código PicPay: Uma simulação de transferência bancária utilizando REST API com C# & EF Core.",
    valinorDescription: "FieldControl Code Challenge: Inicie uma jornada esclarecedora, explorando repositórios no GitHub por meio da API acessível para uma experiência dinâmica de codificação.",
    gitHubDescription: "Aqui você encontrará todos meus outros trabalhos relacionados a programação. Conecte-se comigo e vamos juntos impulsionar a comunidade de tecnologia!",

    contactTitle: "Contato",
    viewMore: "Ver mais",

    whShowMore: "Ver experiências anteriores",
    whShowLess: "Recolher",
    whMantyzDesc: "Desenvolvimento de soluções back-end com foco na criação de novas funcionalidades, integrações internas e externas, entregando aplicações seguras e escaláveis alinhadas aos objetivos estratégicos do negócio.",
    whSifraDesc: "Alocado no desenvolvimento back-end com foco na implementação de novas funcionalidades, melhoria de desempenho e manutenção da segurança robusta das aplicações.",
    whOctoFullDesc: "Liderança de iniciativas de desenvolvimento back-end, contribuindo com decisões de arquitetura, implementação de novas funcionalidades e integrações, além da manutenção dos padrões de qualidade e desempenho do código.",
    whOctoInternDesc: "Desenvolvimento de relatórios em um Sistema ERP utilizando C# ASP.NET, seguindo os padrões da arquitetura MVC, com SQL Server e MongoDB como bancos de dados. Manutenção e suporte ao projeto, além de sugestões e implementação de novas funcionalidades solicitadas pelos clientes.",
    whAppDesc: "Acompanhamento diário da rotina do squad de desenvolvimento da empresa. Aprendizado intensivo em C# pela plataforma Alura, construindo uma base sólida em fundamentos de desenvolvimento de software e metodologias ágeis."
  }

  englishLanguage: Translate = {
    language: "english",

    nav1: "Presentation",
    nav2: "Projects",
    nav3: "Contact",
    nav4: "History",

    presentationTitle: "Presentation",
    projectTitle: "Projects",
    workHistoryTitle: "Work History",
    presentationLink: "https://www.youtube.com/embed/eJh1fKJgL0g",

    yaBuyDescription: "Full e-commerce platform I led for 12 months. Integrations with Correios, Frenet, Mercado Pago and Stripe. Led architecture, infrastructure, and team management.",
    eraConectividadeDescription: "College final project: ultra-connected IoT scenarios using AWS Lambda, Tuya and AI. A job checks weather every 3 min and triggers IoT devices when detecting 80% chance of rain.",

    sorvetesCreamDescription: "Immerse in a sweet escape with our interactive ice cream haven! Explore flavors, share moments, and savor the joy of frozen delight",
    hitItHarderDescription: "Ignite your drive on our motivational hub! Unleash strength, conquer challenges, and transform setbacks into triumphs. Power up now!",
    tiroDeGuerraDescription: "Project developed for the Brazilian Army in the Votuporanga region with the aim of improving the performance of the garrison's Order of Arms training.",
    taskManagementDescription: "Elevate productivity with our seamless task management platform. Effortlessly streamline, prioritize, and conquer your to-do list with ease and precision!",
    gotyaBankDescription: "PicPay Code Challenge: Immerse in a bank transfer simulation via REST API using C# & EF Core. Sharpen coding skills with hands-on experience",
    valinorDescription: "FieldControl Code Challenge: Embark on an enlightening journey, exploring GitHub repositories through the accessible API for a dynamic coding experience.",
    gitHubDescription: "Explore my portfolio of programming projects here. Connect with me, and let's collaboratively elevate the technology community together!",

    contactTitle: "Contact",
    viewMore: "View more",

    whShowMore: "Show earlier experience",
    whShowLess: "Collapse",
    whMantyzDesc: "Developing back-end solutions focused on creating new features, internal and external integrations, delivering secure and scalable applications aligned with the strategic goals of the business.",
    whSifraDesc: "Assigned to back-end development with a focus on implementing new features, enhancing performance, and maintaining robust application security across the platform.",
    whOctoFullDesc: "Led back-end development initiatives, contributing to system architecture decisions, implementing new features and integrations, and maintaining code quality and performance standards.",
    whOctoInternDesc: "Development of Reports in an ERP System using C# ASP.NET, following MVC architecture standards, and utilizing SQL Server and MongoDB as databases. Maintenance and support for the project, as well as implementation of new features requested by clients.",
    whAppDesc: "Daily monitoring of the company's development squad routine. Intensive learning in C# through the Alura platform, building a solid foundation in software development fundamentals and agile methodologies."
  }

  listProjectModal: ProjectModal[] = [
    {
      projectName: "YaBuy",
      projectImage: "https://res.cloudinary.com/dujmufzmm/image/upload/v1780171824/Logo_temp_vaveya.png",
      cardBackground: "#e7264f",
      description: "YaBuy é uma plataforma de e-commerce desenvolvida ao longo de 12 meses como líder técnico, coordenando 2 devs front-end e sendo responsável pela arquitetura, infraestrutura e distribuição de tarefas. O projeto conta com e-management, e-commerce.front e e-commerce.api, com integrações ao Correios, Frenet, Mercado Pago e Stripe.",
      hasRepository: false,
      hasBehance: false,
      hasProjectLink: true,
      projectLink: "https://yabuy.com.br"
    },
    {
      projectName: "A era da conectividade",
      projectImage: "eraconectividade.svg",
      description: "Projeto de TCC na Fatec de Rio Preto explorando IoT, Cloud e IA para criar cenários ultra conectados. Integrando OpenWeather, AWS Lambda e Plataforma Tuya: a cada 3 minutos, um job analisa as condições climáticas e, ao detectar 80% de chance de chuva, dispara alertas e aciona dispositivos IoT em tempo real na residência do usuário.",
      hasRepository: false,
      hasBehance: false,
      hasProjectLink: true,
      projectLink: "https://www.linkedin.com/posts/kaio-maciel_ontem-encerrei-a-noite-com-um-marco-muito-activity-7211748303095414785-xcx6"
    },
    {
      projectName: "Sorvete's Cream",
      projectImage: "sorvetescream.webp",
      description: "Este projeto foi desenvolvido no início de 2021, onde dei início com projetos front-end para praticar a criação de ideias que tinha e transformá-las em código. Com HTML/CSS e PHP consegui atingir resultados de UI incríveis para a época, e foi a partir desse projeto que me motivei ainda mais para continuar minha carreira como desenvolvedor.",
      hasRepository: false,
      hasBehance: true,
      behanceLink: "https://www.behance.net/gallery/118392825/Sorvetes-Cream-2021-Project"
    },
    {
      projectName: "Hit It Harder",
      projectImage: "hititharder.webp",
      description: "O projeto 'Hit Harder' foi mais um projeto desenvolvido em 2021, permitindo expandir minhas habilidades técnicas com Desenvolvimento e Design Gráfico. Utilizando PHP e MySQL foi criado uma interação dinâmica com o usuário durante o uso da aplicação.",
      hasRepository: false,
      hasBehance: true,
      behanceLink: "https://www.behance.net/gallery/91391425/Projeto-Motivacional"
    },
    {
      projectName: "Tiro de Guerra",
      projectImage: "tirodeguerra.webp",
      description: "No ano de 2022 tive o privilégio de desenvolver uma aplicação C# Desktop para resolver um problema que ocorria durante as Apresentações de Ordem Unida. Criando um Aplicativo para facilitar a performance da equipe de som durante os eventos na guarnição.",
      hasRepository: false,
      hasBehance: false
    },
    {
      projectName: "Task Management",
      projectImage: "taskmanagement.webp",
      description: "O projeto 'Task Management' tem ênfase em facilitar o gerenciamento de projetos. Sua origem veio após um desafio entre meus amigos da faculdade, para treinar uma técnica que inventamos 'Brainstorming Sprint Code', onde o principal objetivo é desenvolver uma aplicação completa em até 1 semana.",
      hasRepository: true,
      hasBehance: false,
      gitHubLink: "https://github.com/kaiogotyacode/taskManagement"
    },
    {
      projectName: "GotyaBank",
      projectImage: "gotyabank.webp",
      description: "Este projeto foi desenvolvido com ênfase na melhoria das habilidades com C# Back-End. Um code challenge oferecido pela Pic Pay para simular uma transferência bancária com REST APIs.",
      hasRepository: true,
      hasBehance: false,
      gitHubLink: "https://github.com/kaiogotyacode/GoTyaBank"
    },
    {
      projectName: "Valinor",
      projectImage: "valinor.webp",
      description: "O Valinor é um projeto que realiza busca de repositórios do GitHub acessando a própria API do GitHub. Um desafio recente feito em Angular para treinar desenvolvimento com SPA junto de REST APIs.",
      hasRepository: true,
      hasBehance: false,
      gitHubLink: "https://github.com/kaiogotyacode/valinor"
    },
    {
      projectName: "GitHub Repositories",
      projectImage: "github.webp",
      description: "Aqui você encontrará mais informações sobre o meu perfil Desenvolvedor. Atualmente sigo com treinamentos intensivos como Full Stack, focando no framework Angular e desenvolvimento Back-End com maiores complexidades no C#.",
      hasRepository: true,
      hasBehance: false,
      gitHubLink: "https://github.com/kaiogotyacode/"
    }
  ]

  setOverflowHidden() {
    document.body.style.overflow = 'hidden';
  }

  setOverflowVisible() {
    document.body.style.overflow = 'visible';
  }


  switchLang(lang: string) {

    if (lang == this.translate.language)
      return;


    this.translate = lang == 'portuguese' ? this.portugueseLanguage : this.englishLanguage
    this.toggleLanguageAnimation();
    this.setOverflowHidden();

    setTimeout(() => {
      this.toggleLanguageAnimation();
      this.setOverflowVisible();
    }, 1000)
  }

  showScrollTop: boolean = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  openModalDetailed(modal: ProjectModal) {
    this.dropModal = true;
    this.currentProjectModal = modal;
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
