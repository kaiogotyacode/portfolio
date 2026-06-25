# Design: Add YaBuy and A era da conectividade projects

**Date:** 2026-06-25  
**Status:** Approved

## Overview

Add two new project cards to the portfolio's Swiper carousel:
1. **YaBuy** — e-commerce platform (1st position) with custom `#e7264f` card background
2. **A era da conectividade** — IoT/Cloud/AI college final project (2nd position)

---

## Interface Changes

### `src/models/projectModal.ts`

Add three optional fields:

```typescript
cardBackground?: string    // hex color for image-content area (e.g. '#e7264f')
projectLink?: string       // generic project URL (website or LinkedIn post)
hasProjectLink?: boolean   // show "Ver Projeto" button in modal
```

### `src/models/translate.ts`

Add two short-description fields (≤200 chars each):

```typescript
yaBuyDescription: string
eraConectividadeDescription: string
```

---

## New Project Data

### YaBuy (`listProjectModal[0]`)

```typescript
{
  projectName: "YaBuy",
  projectImage: "https://res.cloudinary.com/dujmufzmm/image/upload/v1780171824/Logo_temp_vaveya.png",
  cardBackground: "#e7264f",
  hasRepository: false,
  hasBehance: false,
  hasProjectLink: true,
  projectLink: "https://yabuy.com.br",
  description: "<400-char detailed PT text>"
}
```

### A era da conectividade (`listProjectModal[1]`)

```typescript
{
  projectName: "A era da conectividade",
  projectImage: "eraconectividade.svg",   // local SVG asset
  hasRepository: false,
  hasBehance: false,
  hasProjectLink: true,
  projectLink: "https://www.linkedin.com/posts/kaio-maciel_ontem-encerrei-a-noite-com-um-marco-muito-activity-7211748303095414785-xcx6",
  description: "<400-char detailed PT text>"
}
```

---

## Translations

### Portuguese (card ≤200 chars, modal ≤400 chars)

| Key | Card text | Modal description |
|-----|-----------|-------------------|
| `yaBuyDescription` | "Plataforma de e-commerce completa liderada por mim há 12 meses. Integrações com Correios, Frenet, Mercado Pago e Stripe. Arquitetura, infra e gestão de equipe." | "YaBuy é uma plataforma de e-commerce desenvolvida ao longo de 12 meses como líder técnico, coordenando 2 devs front-end e sendo responsável pela arquitetura, infraestrutura e distribuição de tarefas. O projeto conta com e-management, e-commerce.front e e-commerce.api, com integrações ao Correios, Frenet, Mercado Pago e Stripe." |
| `eraConectividadeDescription` | "TCC na Fatec Rio Preto: cenários ultra conectados com IoT, AWS Lambda, Tuya e IA. Um job analisa o clima a cada 3 min e aciona dispositivos IoT ao detectar 80% de chance de chuva." | "Projeto de TCC na Fatec de Rio Preto explorando IoT, Cloud e IA para criar cenários ultra conectados. Integrando OpenWeather, AWS Lambda e Plataforma Tuya: a cada 3 minutos, um job analisa as condições climáticas e, ao detectar 80% de chance de chuva, dispara alertas e aciona dispositivos IoT em tempo real na residência do usuário." |

### English (card ≤200 chars, modal ≤400 chars)

| Key | Card text | Modal description |
|-----|-----------|-------------------|
| `yaBuyDescription` | "Full e-commerce platform I led for 12 months. Integrations with Correios, Frenet, Mercado Pago and Stripe. Led architecture, infrastructure, and team management." | "YaBuy is a full e-commerce platform built over 12 months as tech lead. I managed 2 front-end developers and owned architecture, infrastructure, and task management. The project includes e-management, e-commerce.front and e-commerce.api, with integrations to Correios, Frenet, Mercado Pago, and Stripe." |
| `eraConectividadeDescription` | "College final project: ultra-connected IoT scenarios using AWS Lambda, Tuya and AI. A job checks weather every 3 min and triggers IoT devices when detecting 80% chance of rain." | "College final project at Fatec Rio Preto exploring IoT, Cloud Services, and AI. Integrated OpenWeather, AWS Lambda, and the Tuya Platform: every 3 minutes, a job checks weather conditions. When detecting 80% chance of rain, it triggers real-time alerts and activates IoT devices at the resident's home." |

---

## HTML Changes (`app.component.html`)

1. Insert two new `<div class="card swiper-slide">` blocks at the top of `.card-wrapper`
2. YaBuy card: `<div class="image-content" [style.background]="'#e7264f'">` — overrides default gradient
3. YaBuy card image: external Cloudinary URL (no local asset needed)
4. A era da conectividade card: local asset `../assets/img/projects/eraconectividade.svg`
5. Update all existing `listProjectModal[N]` references: increment indices by 2 (0→2, 1→3, … 6→8)
6. Add preload entries for both new images in the hidden preload block
7. In the modal actions block, add a third button for `hasProjectLink`:

```html
<a *ngIf="currentProjectModal?.hasProjectLink"
   class="modal-action-btn modal-action-btn--project"
   target="_blank" href="{{currentProjectModal?.projectLink}}">
  Ver Projeto
</a>
```

---

## Assets

- `src/assets/img/projects/eraconectividade.svg` — IoT/Cloud/AI themed SVG icon (dark background, circuit/cloud motif)
- `src/assets/img/projects/detailed/eraconectividade.svg` — same SVG reused for modal detail view
- YaBuy uses external Cloudinary URL; no local file needed

---

## Constraints

- Card descriptions: ≤200 characters
- Modal descriptions: ≤400 characters
- `description` field in `ProjectModal` stores the Portuguese version only (current pattern matches existing cards)
- Modal language does not switch with translate toggle (existing behavior, kept as-is)
