# Add YaBuy and A era da conectividade Projects Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add two new project cards (YaBuy at position 1, A era da conectividade at position 2) to the Swiper carousel in the Angular portfolio.

**Architecture:** All project data is hardcoded in `app.component.ts` and the HTML cards are manually written in `app.component.html`. No ngFor loop is used — each card is a static block. Adding projects requires: extending both interfaces, inserting new entries at the front of `listProjectModal`, adding translation keys to both language objects, prepending two card blocks in the HTML, and incrementing all existing `listProjectModal[N]` indices by 2.

**Tech Stack:** Angular 16, TypeScript, Tailwind CSS, Swiper (carousel)

## Global Constraints

- Card descriptions (`Translate` fields): ≤ 200 characters
- Modal descriptions (`ProjectModal.description`): ≤ 400 characters
- `description` field stores Portuguese text only (existing pattern — modal does not switch language)
- YaBuy card image area background: exactly `#e7264f`
- YaBuy logo: `https://res.cloudinary.com/dujmufzmm/image/upload/v1780171824/Logo_temp_vaveya.png` (external URL, no local download)
- YaBuy project link: `https://yabuy.com.br`
- TCC project link: `https://www.linkedin.com/posts/kaio-maciel_ontem-encerrei-a-noite-com-um-marco-muito-activity-7211748303095414785-xcx6`
- New projects go at indices 0 and 1; all existing indices shift by +2

---

### Task 1: Extend interfaces

**Files:**
- Modify: `src/models/projectModal.ts`
- Modify: `src/models/translate.ts`

**Interfaces:**
- Produces:
  - `ProjectModal.cardBackground?: string`
  - `ProjectModal.projectLink?: string`
  - `ProjectModal.hasProjectLink?: boolean`
  - `Translate.yaBuyDescription: string`
  - `Translate.eraConectividadeDescription: string`

- [ ] **Step 1: Update `src/models/projectModal.ts`**

Replace the entire file with:

```typescript
export interface ProjectModal {
    projectName : string
    projectImage : string
    description : string
    hasRepository : boolean
    hasBehance : boolean
    behanceLink? : string
    gitHubLink? : string
    cardBackground? : string
    projectLink? : string
    hasProjectLink? : boolean
}
```

- [ ] **Step 2: Update `src/models/translate.ts`**

Add `yaBuyDescription` and `eraConectividadeDescription` after `gitHubDescription`:

```typescript
export interface Translate {

    language : string

    nav1: string
    nav2: string
    nav3: string
    nav4: string

    presentationTitle: string
    projectTitle: string
    workHistoryTitle: string
    presentationLink : string

    yaBuyDescription: string
    eraConectividadeDescription: string
    sorvetesCreamDescription: string
    hitItHarderDescription: string
    tiroDeGuerraDescription: string
    taskManagementDescription: string
    gotyaBankDescription: string
    valinorDescription: string
    gitHubDescription: string

    contactTitle: string
    viewMore: string

    whShowMore: string
    whShowLess: string
    whMantyzDesc: string
    whSifraDesc: string
    whOctoFullDesc: string
    whOctoInternDesc: string
    whAppDesc: string
}
```

- [ ] **Step 3: Verify TypeScript compiles (no errors from interface change)**

Run: `npx ng build --configuration=development 2>&1 | head -30`

Expected: compilation errors about missing keys in `portugueseLanguage` and `englishLanguage` — these will be fixed in Task 2.

---

### Task 2: Create IoT/Cloud SVG asset

**Files:**
- Create: `src/assets/img/projects/eraconectividade.svg`
- Create: `src/assets/img/projects/detailed/eraconectividade.svg`

**Interfaces:**
- Consumes: nothing
- Produces: `eraconectividade.svg` usable as `<img src="../assets/img/projects/eraconectividade.svg">`

- [ ] **Step 1: Create the card SVG at `src/assets/img/projects/eraconectividade.svg`**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <!-- Dark background -->
  <circle cx="100" cy="100" r="100" fill="#0d1117"/>
  <!-- Cloud body -->
  <ellipse cx="100" cy="95" rx="48" ry="28" fill="none" stroke="#58a6ff" stroke-width="3"/>
  <ellipse cx="78" cy="100" rx="22" ry="20" fill="none" stroke="#58a6ff" stroke-width="3"/>
  <ellipse cx="122" cy="100" rx="22" ry="20" fill="none" stroke="#58a6ff" stroke-width="3"/>
  <!-- IoT nodes -->
  <circle cx="45" cy="140" r="7" fill="#3fb950" opacity="0.9"/>
  <circle cx="75" cy="150" r="7" fill="#3fb950" opacity="0.9"/>
  <circle cx="125" cy="150" r="7" fill="#3fb950" opacity="0.9"/>
  <circle cx="155" cy="140" r="7" fill="#3fb950" opacity="0.9"/>
  <!-- Connection lines from cloud to nodes -->
  <line x1="70" y1="118" x2="45" y2="133" stroke="#3fb950" stroke-width="1.5" opacity="0.6"/>
  <line x1="85" y1="120" x2="75" y2="143" stroke="#3fb950" stroke-width="1.5" opacity="0.6"/>
  <line x1="115" y1="120" x2="125" y2="143" stroke="#3fb950" stroke-width="1.5" opacity="0.6"/>
  <line x1="130" y1="118" x2="155" y2="133" stroke="#3fb950" stroke-width="1.5" opacity="0.6"/>
  <!-- AWS Lambda symbol (λ) -->
  <text x="100" y="104" text-anchor="middle" font-family="monospace" font-size="22" fill="#f78166" font-weight="bold">λ</text>
  <!-- AI brain hint: small circuit dots -->
  <circle cx="55" cy="60" r="3" fill="#d2a8ff" opacity="0.7"/>
  <circle cx="100" cy="50" r="3" fill="#d2a8ff" opacity="0.7"/>
  <circle cx="145" cy="60" r="3" fill="#d2a8ff" opacity="0.7"/>
  <line x1="55" y1="60" x2="100" y2="50" stroke="#d2a8ff" stroke-width="1" opacity="0.5"/>
  <line x1="100" y1="50" x2="145" y2="60" stroke="#d2a8ff" stroke-width="1" opacity="0.5"/>
  <!-- Glow ring -->
  <circle cx="100" cy="100" r="96" fill="none" stroke="#58a6ff" stroke-width="1" opacity="0.2"/>
</svg>
```

- [ ] **Step 2: Copy same SVG to detailed folder**

Create `src/assets/img/projects/detailed/eraconectividade.svg` with the exact same content as above.

---

### Task 3: Add project data and translations to `app.component.ts`

**Files:**
- Modify: `src/app/app.component.ts`

**Interfaces:**
- Consumes: `ProjectModal` (with new fields from Task 1), `Translate` (with new fields from Task 1)
- Produces: `listProjectModal[0]` = YaBuy, `listProjectModal[1]` = A era da conectividade, existing projects shifted to indices 2–8

- [ ] **Step 1: Add `yaBuyDescription` and `eraConectividadeDescription` to `portugueseLanguage`**

In `app.component.ts`, inside `portugueseLanguage`, add these two keys immediately after `presentationLink`:

```typescript
yaBuyDescription: "Plataforma de e-commerce completa liderada por mim há 12 meses. Integrações com Correios, Frenet, Mercado Pago e Stripe. Arquitetura, infra e gestão de equipe.",
eraConectividadeDescription: "TCC na Fatec Rio Preto: cenários ultra conectados com IoT, AWS Lambda, Tuya e IA. Um job analisa o clima a cada 3 min e aciona dispositivos IoT ao detectar 80% de chance de chuva.",
```

- [ ] **Step 2: Add the same keys to `englishLanguage`**

```typescript
yaBuyDescription: "Full e-commerce platform I led for 12 months. Integrations with Correios, Frenet, Mercado Pago and Stripe. Led architecture, infrastructure, and team management.",
eraConectividadeDescription: "College final project: ultra-connected IoT scenarios using AWS Lambda, Tuya and AI. A job checks weather every 3 min and triggers IoT devices when detecting 80% chance of rain.",
```

- [ ] **Step 3: Prepend two new entries to `listProjectModal`**

Replace the opening of `listProjectModal` so YaBuy is index 0 and A era da conectividade is index 1. All existing entries follow unchanged:

```typescript
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
  // ... all existing 7 entries follow unchanged (Sorvete's Cream through GitHub Repositories)
```

- [ ] **Step 4: Verify build compiles cleanly**

Run: `npx ng build --configuration=development 2>&1 | head -40`

Expected: no TypeScript errors

---

### Task 4: Update HTML — add new card slides and update indices

**Files:**
- Modify: `src/app/app.component.html`

**Interfaces:**
- Consumes: `listProjectModal[0]` (YaBuy), `listProjectModal[1]` (A era da conectividade), `translate.yaBuyDescription`, `translate.eraConectividadeDescription`
- Produces: Two new `.card.swiper-slide` blocks at the top of `.card-wrapper`; all existing `listProjectModal[N]` references incremented by 2

- [ ] **Step 1: Insert YaBuy card as first slide in `.card-wrapper`**

Immediately after `<div class="card-wrapper swiper-wrapper">` (line 127), insert:

Note: The `.overlay` span (not `.image-content`) provides the card's background color. Applying `style="background: #e7264f"` to the overlay overrides only the overlay's background property; the overlay's `::before`/`::after` pseudo-elements retain their dark color (correct — they blend with the card-content area below).

```html
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay" style="background: #e7264f;"></span>
              <div class="card-image">
                <img loading="lazy" src="https://res.cloudinary.com/dujmufzmm/image/upload/v1780171824/Logo_temp_vaveya.png"
                  class="card-img">
              </div>
            </div>

            <div class="card-content">
              <h2 class="name">YaBuy</h2>
              <p class="description font-montserrat">{{ translate.yaBuyDescription }}</p>
              <a (click)="openModalDetailed(listProjectModal[0])" class="button">{{translate.viewMore}}</a>
            </div>
          </div>

          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>
              <div class="card-image">
                <img loading="lazy" src="../assets/img/projects/eraconectividade.svg"
                  class="card-img">
              </div>
            </div>

            <div class="card-content">
              <h2 class="name">A era da conectividade</h2>
              <p class="description font-montserrat">{{ translate.eraConectividadeDescription }}</p>
              <a (click)="openModalDetailed(listProjectModal[1])" class="button">{{translate.viewMore}}</a>
            </div>
          </div>
```

- [ ] **Step 2: Increment all existing `listProjectModal[N]` indices by 2 in the HTML**

The existing cards reference indices 0–6. After inserting the two new cards, they must reference 2–8:

| Old reference | New reference |
|---|---|
| `listProjectModal[0]` (Sorvete's Cream button) | `listProjectModal[2]` |
| `listProjectModal[1]` (Hit it Harder button) | `listProjectModal[3]` |
| `listProjectModal[2]` (Tiro de Guerra button) | `listProjectModal[4]` |
| `listProjectModal[3]` (Task Management button) | `listProjectModal[5]` |
| `listProjectModal[4]` (GotyaBank button) | `listProjectModal[6]` |
| `listProjectModal[5]` (Valinor button) | `listProjectModal[7]` |
| `listProjectModal[6]` (GitHub Repositories button) | `listProjectModal[8]` |

Update each `(click)="openModalDetailed(listProjectModal[N])"` in the 7 existing card blocks.

- [ ] **Step 3: Add project link button to the modal actions block**

Find the modal actions block (around line 288–307 in the original). After the `hasBehance` button block, add:

```html
        <a *ngIf="currentProjectModal?.hasProjectLink"
          class="modal-action-btn modal-action-btn--project"
          target="_blank" href="{{currentProjectModal?.projectLink}}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-4 h-4 inline-block mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
          Ver Projeto
        </a>
```

- [ ] **Step 4: Fix modal image URL handling**

The modal image template currently concatenates a static path with `projectImage`. For YaBuy, `projectImage` is an absolute URL. Change the modal `<img>` src binding from static interpolation to a conditional:

Find (around line 273–276):
```html
          <img fetchpriority="high" loading="eager" *ngIf="currentProjectModal"
            class="modal-detail-img"
            src="../assets/img/projects/detailed/{{currentProjectModal.projectImage}}" />
```

Replace with:
```html
          <img fetchpriority="high" loading="eager" *ngIf="currentProjectModal"
            class="modal-detail-img"
            [src]="currentProjectModal.projectImage?.startsWith('http') ? currentProjectModal.projectImage : '../assets/img/projects/detailed/' + currentProjectModal.projectImage" />
```

- [ ] **Step 5: Add preload entries for new images in the hidden preload block**

Find the hidden preload `<div>` (around line 248–256). Add at the top:

```html
      <img loading="eager" fetchpriority="low" src="https://res.cloudinary.com/dujmufzmm/image/upload/v1780171824/Logo_temp_vaveya.png" />
      <img loading="eager" fetchpriority="low" src="../assets/img/projects/detailed/eraconectividade.svg" />
```

- [ ] **Step 6: Build and verify no errors**

Run: `npx ng build --configuration=development 2>&1 | head -40`

Expected: Build successful, 0 errors

---

### Task 5: Add CSS for the new modal button style

**Files:**
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: `.modal-action-btn` (existing class)
- Produces: `.modal-action-btn--project` variant

- [ ] **Step 1: Add `.modal-action-btn--project` style**

Find `.modal-action-btn--behance` in `src/styles.css` and add a sibling rule immediately after it:

```css
.modal-action-btn--project {
  border-color: rgba(88, 166, 255, 0.4);
  color: #58a6ff;
}
.modal-action-btn--project:hover {
  background: rgba(88, 166, 255, 0.1);
  border-color: rgba(88, 166, 255, 0.8);
}
```

- [ ] **Step 2: Final build check**

Run: `npx ng build --configuration=development 2>&1 | head -40`

Expected: Build successful, 0 errors

- [ ] **Step 3: Commit all changes**

```bash
git add src/models/projectModal.ts src/models/translate.ts src/app/app.component.ts src/app/app.component.html src/styles.css src/assets/img/projects/eraconectividade.svg src/assets/img/projects/detailed/eraconectividade.svg docs/superpowers/specs/2026-06-25-add-projects-yabuy-era-conectividade-design.md docs/superpowers/plans/2026-06-25-add-projects-yabuy-era-conectividade.md
git commit -m "feat: add YaBuy and A era da conectividade project cards"
```
