import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ProjectModal } from 'src/models/projectModal';
import { Translate } from 'src/models/translate';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    this.translate = this.englishLanguage;
    this.setupPixelGrid();
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
      // As the KR intro begins fading (92% of 6s = 5520ms): show white welcome + pixel grid
      setTimeout(() => {
        this.filmWelcomeWhite = true;
        this.filmHeroLoop = true;
        this.pixelTransitionActive = true;
        // Brief pause on white frame, then dissolve
        setTimeout(() => this.runPixelTransition(), 800);
      }, 5500);
    }, 600);
  }

  private setupPixelGrid() {
    this.pixelItems = Array.from({ length: 25 * 15 }, (_, i) => i);
  }

  private runPixelTransition() {
    setTimeout(() => {
      const pixels = document.querySelectorAll('.pixel-dissolve-item');
      if (!pixels.length) return;
      // Start text color transition at 60% of the dissolve so it lands with the last pixels
      setTimeout(() => { this.filmWelcomeWhite = false; }, 1100);
      gsap.to(Array.from(pixels), {
        opacity: 0,
        scale: 0,
        duration: 0.15,
        stagger: { each: 0.005, from: 'random' },
        ease: 'expo.in',
        onComplete: () => {
          setTimeout(() => {
            this.pixelTransitionActive = false;
            setTimeout(() => { document.body.style.overflow = ''; }, 300);
          }, 0);
        }
      });
    }, 50);
  }

  filmIntro: boolean = false;
  filmIntroFull: boolean = false;
  filmHeroLoop: boolean = false;
  filmWelcomeWhite: boolean = false;
  pixelTransitionActive: boolean = false;
  pixelItems: number[] = [];
  typingText: string = '';
  showCursor: boolean = false;
  filmElevateZoom: boolean = false;

  triggerFilmIntro(full: boolean = false) {
    this.filmIntroFull = full;
    this.filmIntro = true;
    if (full) this.startTypingSequence();
    setTimeout(() => {
      this.filmIntro = false;
      this.typingText = '';
      this.showCursor = false;
      this.filmElevateZoom = false;
    }, full ? 6000 : 4600);
  }

  startTypingSequence() {
    const word = 'elevate';
    setTimeout(() => {
      this.showCursor = true;
      this.typingText = 'e';
      setTimeout(() => {
        let idx = 1;
        const typeInterval = setInterval(() => {
          this.typingText = word.substring(0, idx + 1);
          idx++;
          if (idx >= word.length) {
            clearInterval(typeInterval);
            this.showCursor = false;
            setTimeout(() => { this.filmElevateZoom = true; }, 1500);
          }
        }, 83);
      }, 500);
    }, 2500);
  }

  title = 'Portfolio';
  currentYear = new Date().getFullYear();

  get mantyzDuration(): string {
    const start = new Date(2024, 10); // Nov 2024 (month is 0-indexed)
    const now = new Date();
    let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth()) + 1; // inclusive, like LinkedIn
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    const endLabel = `Present`;
    const duration = years > 0
      ? remainingMonths > 0
        ? `${years} yr ${remainingMonths} mos`
        : `${years} yr`
      : `${remainingMonths} mos`;
    return `Nov 2024 – ${endLabel} · ${duration}`;
  }
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
    presentationLink: "https://www.youtube.com/embed/rOvp10qQkJk",

    yaBuyDescription: "Plataforma de e-commerce para o público Geek, com integrações a Correios, Frenet, Mercado Pago e Stripe. Atuei como líder técnico coordenando mais 2 devs front-end. Projeto ativo em todo o Brasil e em constante evolução.",
    eraConectividadeDescription: "TCC desenvolvido na Fatec Rio Preto explorando IoT, AWS Lambda, Tuya e IA. A solução integrava essas tecnologias por meio de jobs acionados via Amazon Alexa, entregando uma funcionalidade coesa e de alto nível.",

    sorvetesCreamDescription: "Projeto de transição para o desenvolvimento front-end, criado após a conclusão do curso técnico em Análise e Desenvolvimento de Sistemas. Utilizando HTML e CSS, marcou o início da jornada na criação de interfaces web.",
    hitItHarderDescription: "Desenvolvido na mesma fase inicial da carreira, este projeto expandiu as habilidades técnicas com a introdução de PHP e MySQL, agregando interatividade dinâmica e persistência de dados às interfaces construídas.",
    tiroDeGuerraDescription: "Projeto desenvolvido para o Exército Brasileiro da região de Votuporanga com o intuito de melhorar o desempenho do treinamento de Ordem Unida da guarnição.",
    taskManagementDescription: "Eleve a produtividade com esta plataforma de gestão de tarefas intuitiva. Simplifique, priorize e conquiste sua lista de afazeres com facilidade e precisão!",
    gotyaBankDescription: "Desafio de Código PicPay: Uma simulação de transferência bancária utilizando REST API com C# & EF Core.",
    valinorDescription: "FieldControl Code Challenge: Inicie uma jornada esclarecedora, explorando repositórios no GitHub por meio da API acessível para uma experiência dinâmica de codificação.",
    gitHubDescription: "Repositório central de projetos pessoais e experimentos técnicos. Especialista back-end com foco em C# e Python, atuando com SQL Server e noções práticas de arquitetura de software e infraestrutura.",

    contactTitle: "Contato",
    viewMore: "Ver mais",

    dubBadgeTitle: "Dublagem",
    dubBadgeLine1: "Versão em inglês dublada por mim,",
    dubBadgeLine2: "baseada no original em português.",

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
    presentationLink: "https://www.youtube.com/embed/IVPdjYeRUPU",

    yaBuyDescription: "E-commerce platform for the Geek community, with integrations for Correios, Frenet, Mercado Pago, and Stripe. I served as technical lead coordinating 2 additional front-end developers. Project active across Brazil and continuously evolving.",
    eraConectividadeDescription: "College thesis developed at Fatec Rio Preto exploring IoT, AWS Lambda, Tuya, and AI. The solution integrated these technologies through jobs triggered via Amazon Alexa, delivering a cohesive, high-quality feature.",

    sorvetesCreamDescription: "A front-end transition project developed after completing the technical course in Systems Analysis and Development. Built with HTML and CSS, it marked the beginning of the journey into web interface development.",
    hitItHarderDescription: "Built in the same early-career period, this project expanded technical skills by introducing PHP and MySQL, adding dynamic interactivity and data persistence to the interfaces developed.",
    tiroDeGuerraDescription: "Project developed for the Brazilian Army in the Votuporanga region with the aim of improving the performance of the garrison's Order of Arms training.",
    taskManagementDescription: "Elevate productivity with our seamless task management platform. Effortlessly streamline, prioritize, and conquer your to-do list with ease and precision!",
    gotyaBankDescription: "PicPay Code Challenge: Immerse in a bank transfer simulation via REST API using C# & EF Core. Sharpen coding skills with hands-on experience",
    valinorDescription: "FieldControl Code Challenge: Embark on an enlightening journey, exploring GitHub repositories through the accessible API for a dynamic coding experience.",
    gitHubDescription: "Central repository for personal projects and technical experiments. Back-end specialist focused on C# and Python, working with SQL Server and holding practical knowledge of software architecture and infrastructure.",

    contactTitle: "Contact",
    viewMore: "View more",

    dubBadgeTitle: "Voice-over",
    dubBadgeLine1: "Dubbed by me, based on the",
    dubBadgeLine2: "original Portuguese version.",

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
      projectImage: "https://res.cloudinary.com/dw5vgi1w1/image/upload/v1782398185/Logo_ktmw0s.png",
      cardBackground: "#e7264f",
      description: "YaBuy é uma plataforma de e-commerce desenvolvida ao longo de 12 meses, na qual atuei como líder técnico responsável pela arquitetura, infraestrutura e gestão de tarefas, coordenando uma equipe de 2 desenvolvedores front-end. A solução é composta pela loja online yabuy.com.br e por um sistema de gerenciamento dedicado, que permite ao proprietário controlar todo o fluxo operacional da plataforma — incluindo exibição e cadastro de produtos, gerenciamento de banners, disparo de e-mails promocionais, acompanhamento e aprovação de pedidos, além do fluxo completo de reembolso. As integrações contemplam serviços de frete como Correios e Frenet, e gateways de pagamento como Mercado Pago e Stripe.",
      descriptionEn: "YaBuy is an e-commerce platform developed over 12 months, in which I served as technical lead responsible for the architecture, infrastructure, and task management, coordinating a team of 2 front-end developers. The solution consists of the online store yabuy.com.br and a dedicated management system that allows the owner to control the entire operational flow of the platform — including product listing and registration, banner management, promotional email campaigns, order tracking and approval, and a complete refund workflow. Integrations include shipping services such as Correios and Frenet, and payment gateways such as Mercado Pago and Stripe.",
      hasRepository: false,
      hasBehance: false,
      hasProjectLink: true,
      projectLink: "https://yabuy.com.br"
    },
    {
      projectName: "A era da conectividade",
      projectImage: "https://res.cloudinary.com/dw5vgi1w1/image/upload/v1782398186/LogoConectividade_s1lvs5.png",
      description: "Projeto acadêmico desenvolvido como TCC na Fatec Rio Preto, com foco em cenários de alta conectividade entre IoT, Cloud e Inteligência Artificial.\n\nA solução consiste em um fluxo automatizado e autônomo onde, a cada 3 minutos, um job acionado via Amazon Alexa dispara uma função AWS Lambda que consulta a OpenWeather API com base na latitude e longitude de uma região monitorada. Os dados climáticos são então enviados à OpenAI, que analisa a probabilidade de chuva. Caso a IA detecte entre 80% e 100% de chance de precipitação, um dispositivo IoT é acionado automaticamente via Tuya, sem qualquer intervenção do usuário final, que é notificado ou tem seu ambiente ajustado de forma proativa e transparente.",
      descriptionEn: "Academic project developed as a college thesis at Fatec Rio Preto, focused on high-connectivity scenarios integrating IoT, Cloud, and Artificial Intelligence.\n\nThe solution consists of an automated and autonomous flow where, every 3 minutes, a job triggered via Amazon Alexa fires an AWS Lambda function that queries the OpenWeather API based on the latitude and longitude of a monitored region. The weather data is then sent to OpenAI, which analyzes the probability of rain. If the AI detects between 80% and 100% chance of precipitation, an IoT device is automatically activated via Tuya, without any end-user intervention — the user is notified or has their environment proactively and transparently adjusted.",
      hasRepository: false,
      hasBehance: false,
      hasProjectLink: true,
      projectLink: "https://www.linkedin.com/posts/kaio-maciel_ontem-encerrei-a-noite-com-um-marco-muito-activity-7211748303095414785-xcx6"
    },
    {
      projectName: "Valinor",
      projectImage: "https://res.cloudinary.com/dw5vgi1w1/image/upload/v1782398185/valinorIcon_vjsoxv.png",
      description: "O Valinor é uma aplicação Angular desenvolvida como desafio técnico para explorar a integração com a API pública do GitHub. A solução permite buscar repositórios de qualquer usuário em tempo real, consumindo os endpoints REST disponibilizados publicamente pela plataforma. O projeto conta com testes automatizados aplicados para garantir a confiabilidade das integrações e o comportamento esperado dos componentes, reforçando boas práticas de desenvolvimento com SPA e REST APIs.",
      hasRepository: true,
      hasBehance: false,
      gitHubLink: "https://github.com/kaiogotyacode/valinor"
    },
    {
      projectName: "GotyaBank",
      projectImage: "https://res.cloudinary.com/dw5vgi1w1/image/upload/v1782399437/PicPayChallenge_maz0yo.png",
      description: "O GotyaBank é um code challenge proposto pela PicPay, desenvolvido em C# com foco nas complexidades da Programação Orientada a Objetos. A aplicação simula um sistema de transferência bancária via REST API, aplicando conceitos como herança, encapsulamento e polimorfismo na modelagem das entidades financeiras. Utiliza Entity Framework Core para persistência de dados e implementa regras de negócio robustas — como validação de saldo e controle de transações — seguindo os princípios de uma arquitetura REST bem definida.",
      hasRepository: true,
      hasBehance: false,
      gitHubLink: "https://github.com/kaiogotyacode/GoTyaBank"
    },
    {
      projectName: "Tiro de Guerra",
      projectImage: "https://res.cloudinary.com/dw5vgi1w1/image/upload/v1782398185/tirodeguerra_mxumd3.webp",
      description: "No ano de 2021 tive o privilégio de desenvolver uma aplicação C# Desktop para resolver um problema que ocorria durante as Apresentações de Ordem Unida. Criando um Aplicativo para facilitar a performance da equipe de som durante os eventos na guarnição.",
      hasRepository: false,
      hasBehance: false
    },
    {
      projectName: "Task Management",
      projectImage: "https://res.cloudinary.com/dw5vgi1w1/image/upload/v1782398185/Taskmanagement_wnt3hy.png",
      description: "O projeto 'Task Management' tem ênfase em facilitar o gerenciamento de projetos. Sua origem veio após um desafio entre meus amigos da faculdade, para treinar uma técnica que inventamos 'Brainstorming Sprint Code', onde o principal objetivo é desenvolver uma aplicação completa em até 1 semana.",
      hasRepository: true,
      hasBehance: false,
      gitHubLink: "https://github.com/kaiogotyacode/taskManagement"
    },
    {
      projectName: "Sorvete's Cream",
      projectImage: "https://res.cloudinary.com/dw5vgi1w1/image/upload/v1782398184/sorvetescream_nsfn3n.webp",
      description: "Este projeto foi desenvolvido no início de 2021, onde dei início com projetos front-end para praticar a criação de ideias que tinha e transformá-las em código. Com HTML/CSS e PHP consegui atingir resultados de UI incríveis para a época, e foi a partir desse projeto que me motivei ainda mais para continuar minha carreira como desenvolvedor.",
      hasRepository: false,
      hasBehance: true,
      behanceLink: "https://www.behance.net/gallery/118392825/Sorvetes-Cream-2021-Project"
    },
    {
      projectName: "Hit It Harder",
      projectImage: "https://res.cloudinary.com/dw5vgi1w1/image/upload/v1782398185/HitLogo_wdu0pi.png",
      description: "O projeto 'Hit Harder' foi mais um projeto desenvolvido em 2021, permitindo expandir minhas habilidades técnicas com Desenvolvimento e Design Gráfico. Utilizando PHP e MySQL foi criado uma interação dinâmica com o usuário durante o uso da aplicação.",
      hasRepository: false,
      hasBehance: true,
      behanceLink: "https://www.behance.net/gallery/91391425/Projeto-Motivacional"
    },
    {
      projectName: "GitHub Repositories",
      projectImage: "https://res.cloudinary.com/dw5vgi1w1/image/upload/v1782398184/github_yf6fpq.webp",
      description: "Repositório que centraliza os projetos pessoais e experimentos técnicos desenvolvidos ao longo da carreira como especialista back-end. As principais stacks são C# e Python, com experiência prática em modelagem e consultas SQL utilizando SQL Server. Os projetos refletem uma atuação que vai além do código — abrangendo decisões de arquitetura de software, organização de sistemas e noções de infraestrutura, com foco em soluções escaláveis e bem estruturadas.",
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
  private snapTimer: any = null;
  private isSnapping = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 300;
    if (this.isSnapping) return;
    clearTimeout(this.snapTimer);
    this.snapTimer = setTimeout(() => this.performSnap(), 150);
  }

  private getSnapPoints(): number[] {
    const sectionIds = ['presentation', 'projects', 'work-history', 'contact'];
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const viewH = window.innerHeight;
    const targets = sections.map(sec => {
      const secH = sec.offsetHeight;
      // Center section in viewport so both dividers above/below are equally visible.
      // For sections taller than viewport, fall back to plain offsetTop.
      if (secH >= viewH) return sec.offsetTop;
      return Math.max(0, sec.offsetTop - (viewH - secH) / 2);
    });

    return [0, ...targets];
  }

  private performSnap(): void {
    if (document.body.style.overflow === 'hidden') return;
    if (this.dropModal) return;

    const scrollY = window.scrollY;
    const threshold = window.innerHeight * 0.2;
    const snapPoints = this.getSnapPoints();

    let nearest: number | null = null;
    let nearestDist = Infinity;

    for (const point of snapPoints) {
      const dist = Math.abs(point - scrollY);
      if (dist < threshold && dist < nearestDist) {
        nearestDist = dist;
        nearest = point;
      }
    }

    if (nearest !== null) this.snapTo(nearest);
  }

  private snapTo(targetY: number): void {
    if (Math.abs(window.scrollY - targetY) < 5) return;
    this.isSnapping = true;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
    setTimeout(() => { this.isSnapping = false; }, 1000);
  }

  scrollToTop() {
    this.isSnapping = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => { this.isSnapping = false; }, 1000);
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      this.isSnapping = true;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => { this.isSnapping = false; }, 1000);
    }
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
    document.body.style.overflow = 'hidden';
  }

  closeModalDetailed() {
    this.dropModal = false;
    this.currentProjectModal = undefined;
    document.body.style.overflow = '';
  }

  ModalDetailed() {
    return {
      'modal-disabled': !this.dropModal,
      'modal-active': this.dropModal
    }
  }
}
