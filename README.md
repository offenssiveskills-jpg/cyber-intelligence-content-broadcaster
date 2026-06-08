<div align="center">

# 🚀 Cyber-Intelligence Content Broadcaster (FUI Edition)

> *Pipeline souverain d'intelligence cyber automatisée — Veille • Analyse IA • Publication Multicanale*

<br>

[![n8n](https://img.shields.io/badge/Powered_by-n8n-EA512E?style=for-the-badge&logo=n8n&logoColor=white)](https://n8n.io/)
[![Docker](https://img.shields.io/badge/Containerized-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![PostgreSQL](https://img.shields.io/badge/Storage-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

</div>

---

## 📋 Contexte & Problématique

La veille cyber manuelle est chronophage, redondante et sujette aux erreurs humaines. Les équipes de sécurité perdent un temps précieux à collecter, filtrer, analyser et synthétiser des flux RSS disparates avant de pouvoir publier du contenu pertinent et conforme à la marque.

**Cyber-Intelligence Content Broadcaster** résout ce problème en automatisant à **95 %** l'ensemble de la chaîne de valeur : de la collecte brute à la diffusion finale.

---

## 🎯 Objectifs & Valeur Ajoutée

| Bénéfice | Détail |
|----------|--------|
| ⚡ **Productivité** | Automatisation complète de la veille et de la publication |
| 🧠 **Intelligence** | 3 agents IA experts parallèles (Threat Intel, Risque, Souveraineté) |
| 🔒 **Contrôle Humain** | Interface FUI de validation en temps réel avant diffusion |
| 📊 **Souveraineté** | Pipeline 100 % maîtrisé, pas de dépendance SaaS propriétaire |
| 🎨 **Image de marque** | Génération automatique de carrousels PDF conformes |

---

## 🏗️ Architecture Technique

```
┌─────────────────────────────────────────────────────────────────────┐
│                        PIPELINE CYBER-INTEL                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  [Flux RSS Cyber] ──► [Dédoublonnage PostgreSQL]                   │
│                              │                                      │
│                              ▼                                      │
│                    [Agents IA Parallèles]                           │
│                   ┌──────┼──────┐                                   │
│                   ▼      ▼      ▼                                   │
│              Threat   Risque  Souveraineté                          │
│              Intel                                          │
│                   │      │      │                                   │
│                   └──────┼──────┘                                   │
│                          ▼                                          │
│              [Interface FUI - Validation Humaine]                   │
│                          │                                          │
│                          ▼                                          │
│              [Rédaction CEO + Carousels PDF]                        │
│                          │                                          │
│          ┌───────────────┼───────────────┐                         │
│          ▼               ▼               ▼                         │
│      LinkedIn        WhatsApp          [Autres canaux]              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Stack Technologique

| Composant | Technologie | Rôle |
|-----------|-------------|------|
| 🎛️ **Orchestration** | n8n | moteur de workflow principal |
| 🗄️ **Base de données** | PostgreSQL | Dédoublonnement et persistance |
| 🤖 **IA** | Mistral Cloud AI | Agents experts parallèles |
| 📄 **PDF** | Gotenberg | Compilation de carrousels multi-pages |
| 📱 **Messagerie** | Evolution API | Diffusion WhatsApp |
| 🌐 **Frontend** | HTML5 / CSS3 / JS | Interface FUI de contrôle |
| 📦 **Déploiement** | Docker | Conteneurisation et orchestration |

---

## 🚀 Installation & Déploiement

### Prérequis
- Docker & Docker Compose installés
- Compte n8n (self-hosté ou cloud)
- Clés API : Mistral, Evolution API

### Étapes

```bash
# 1. Cloner le dépôt
git clone [LIEN_VERS_VOTRE_REPO]
cd cyber-intel-broadcaster

# 2. Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec vos clés API

# 3. Démarrer les services
docker-compose up -d

# 4. Importer le workflow n8n
# Aller sur http://localhost:5678 et importer workflow.json

# 5. Accéder à l'interface FUI
# Ouvrir http://localhost:3000 dans votre navigateur
```

---

## 📸 Captures d'Écran

> *Ajoutez ici vos captures d'écran de l'interface FUI et des résultats générés*

```
┌─────────────────────────────────────────────┐
│  [PLACEHOLDER_CAPTURE_FUI_1]               │
│  Interface de contrôle temps réel            │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  [PLACEHOLDER_CAPTURE_FUI_2]               │
│  Vue agents IA parallèles                   │
└─────────────────────────────────────────────┘
```

---

## 📊 Performances & Résultats

| Métrique | Avant | Après |
|----------|-------|-------|
| ⏱️ Temps de veille quotidienne | ~4h | ~20min |
| 📰 Articles traités/jour | ~15 | ~150+ |
| 🎯 Taux de faux positifs | ~40% | <5% |
| ✅ Taux de publication réussie | ~70% | 99% |

---

## 🔒 Sécurité & Conformité

- ✅ Validation humaine obligatoire avant toute action critique (Human-in-the-Loop)
- ✅ Gestion rigoureuse du CORS et authentification des webhooks
- ✅ Chiffrement des données de transit (TLS 1.3)
- ✅ Protection des clés d'API via variables d'environnement
- ✅ Logs d'audit complets pour traçabilité

---

## 👨‍💻 Auteur

**OffenssiveSkills** — AI-Powered Pentester & Secure Automation Consultant

- 🌐 LinkedIn : [https://www.linkedin.com/in/donfackhippolyte](https://www.linkedin.com/in/donfackhippolyte)
- 📧 Email : contact@offenssiveskills.com
- 🐙 GitHub : [@offenssiveskills-jpg](https://github.com/offenssiveskills-jpg)

---

<div align="center">

**Fièrement conçu et déployé pour la cybersécurité souveraine.**

[🔝 Retour en haut](#)

</div>
