# Cyber-Intelligence Content Broadcaster - Architecture

## Vue d'ensemble du Pipeline

Ce workflow automatise la production et la publication de contenu LinkedIn à forte valeur ajoutée pour OffensiveSkills, depuis la veille cyber jusqu'à la diffusion WhatsApp.

Le pipeline se déroule en 6 grandes étapes séquentielles :

### 1. Déclenchement et Collecte
Un webhook HTTP lance le pipeline. Deux flux RSS (The Hacker News et BleepingComputer) sont interrogés en parallèle pour récupérer les actualités cyber du jour.

### 2. Filtrage et Déduplication
Les articles sont fusionnés, notés selon leur pertinence stratégique (mots-clés cyber, géopolitiques, africains) et dédupliqués. La base de données PostgreSQL est consultée pour écarter les articles déjà publiés.

### 3. Checkpoint 1 - Sélection de l'Article
Un agent IA (Stratège en Chef) analyse les articles filtrés et sélectionne le meilleur. Le résultat est renvoyé au front-end via le webhook de réponse, puis le workflow se met en pause et attend une validation humaine avant de continuer.

### 4. Extraction et Conseil des Experts
Après approbation, FlareSolverr extrait le contenu complet de l'article. Trois agents IA spécialisés travaillent en parallèle :
- **Agent 1 - Threat Intel** : Analyse technique offensive
- **Agent 2 - Risque & Business** : Analyse financière et gouvernance  
- **Agent 3 - Souveraineté** : Analyse géopolitique africaine

Leurs analyses sont fusionnées en un brief consolidé.

### 5. Checkpoint 2 - Rédaction CEO
L'agent CEO synthétise le brief des experts pour produire un post LinkedIn et un carrousel de 5 slides. Le draft est renvoyé au front-end pour relecture, puis le workflow attend une seconde validation humaine.

### 6. Publication et Distribution
Le carrousel est rendu en PDF via Gotenberg, uploadé sur LinkedIn, puis le post est publié. L'article est archivé en base de données. Enfin, une alerte WhatsApp avec le lien du post est envoyée à plusieurs destinataires.

## Modèle IA
Mistral Medium alimente tous les agents du pipeline.

## Fichiers du Projet

```
cyber-intelligence-content-broadcaster/
├── README.md                    # Documentation principale
├── ARCHITECTURE.md             # Architecture détaillée (ce fichier)
├── workflow/
│   └── cyber-intel-pipeline.json  # Workflow n8n exporté
├── fui-interface/
│   └── index.html              # Interface de contrôle FUI
├── docker-compose.yml          # Orchestration des services
└── .env.example               # Variables d'environnement
```

## Ports d'Accès

| Service | Port | Description |
|---------|------|-------------|
| n8n | 5678 | Interface workflow n8n |
| PostgreSQL | 5432 | Base de données |
| Gotenberg | 3000 | Moteur PDF |
| Evolution API | 8080 | API WhatsApp |
| FlareSolverr | 8191 | Service anti-bot |

## API Endpoints

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/start-linkedin-pipeline` | POST | Point d'entrée du pipeline |
| `/webhook/checkpoint-1` | POST | Validation article |
| `/webhook/checkpoint-2` | POST | Validation post & slides |

## Schéma de la Base de Données

```sql
CREATE TABLE articles_traites (
    id SERIAL PRIMARY KEY,
    url TEXT UNIQUE,
    titre TEXT,
    sujet TEXT,
    date_traitement TIMESTAMP,
    est_publie BOOLEAN DEFAULT false
);
```