export type SaeItem = {
  slug: string;
  code: string;
  semester: "Semestre 1" | "Semestre 2" | "SAÉ intégratif";
  title: string;
  status: string;
  objectif: string;
  travail: string[];
  competences: string[];
  livrables: string[];
};

export const saeItems: SaeItem[] = [
  {
    slug: "hygiene-informatique",
    code: "SAÉ 1.1",
    semester: "Semestre 1",
    title: "Hygiène informatique et cybersécurité",
    status: "Terminé",
    objectif:
      "Sensibiliser un public novice à une menace informatique courante via une capsule vidéo (présentation filmée + support), en s'appuyant sur le MOOC SecNumAcadémie de l'ANSSI.",
    travail: [
      "Script de présentation sur le boîtier Flipper Zero : RFID/NFC, infrarouge, sub-GHz, BLE",
      "Explication des risques de clonage de badge et des signes d'intrusion",
      "Mesures de protection : désactiver NFC/Bluetooth, ne pas prêter son badge, surveiller les logs",
      "Procédure à suivre en cas de compromission",
    ],
    competences: [
      "Sensibilisation cybersécurité",
      "Communication orale/vidéo",
      "Veille sur les menaces",
      "ANSSI / SecNumAcadémie",
      "Storytelling technique",
    ],
    livrables: ["Script final de présentation", "Support PPTX + Canva", "Ressources ANSSI"],
  },
  {
    slug: "reseau-maison-hote",
    code: "SAÉ 1.02",
    semester: "Semestre 1",
    title: "Réseau segmenté pour une maison d'hôte",
    status: "Terminé",
    objectif:
      "Concevoir un réseau informatique segmenté pour une maison d'hôte fictive « Chez Tata Jacqueline » : VLAN privé/invité, couverture Wifi, haute disponibilité, DNS/DHCP, serveur web interne, sécurité des ports et politique de mots de passe.",
    travail: [
      "Maquette réseau sous Cisco Packet Tracer avec 3 VLAN (10-PRIVÉ, 20-INVITÉ, 30-SERVEUR)",
      "Port Security avec shutdown automatique sur violation d'adresse MAC",
      "ACL isolant le VLAN invité du reste du réseau",
      "NAT pour la sortie Internet",
      "DNS statique résolvant www.chez-tataj.fr vers le serveur (192.168.30.10)",
    ],
    competences: [
      "Cisco Packet Tracer",
      "VLAN",
      "ACL",
      "NAT",
      "DNS/DHCP",
      "Port Security",
      "Rédaction de rapport technique",
      "Travail en binôme",
    ],
    livrables: [
      "Compte-rendu technique de configuration",
      "Rapport de binôme (Word + PDF)",
      "Rapport personnel réflexif",
      "Page web du gîte hébergée sur le serveur simulé",
    ],
  },
  {
    slug: "certification-cablage",
    code: "SAÉ 1.03",
    semester: "Semestre 1",
    title: "Certification de câblage cuivre (norme Cat 6A)",
    status: "Terminé",
    objectif:
      "Dans un contexte professionnel simulé (embauche fictive chez « R'n T Solution »), certifier le câblage d'un client (« Chez Tata Jacqueline ») à l'aide d'un certificateur Fluke DSX-602, selon la norme TIA Cat 6A.",
    travail: [
      "Analyse de rapports de test Fluke (câble Acolan100 puis liaisons réelles TchTom1/TchTom2)",
      "Diagnostic : liaison TchTom1 non conforme (marge NEXT négative, -0,3 dB)",
      "Diagnostic : liaison TchTom2 conforme (marge NEXT +9,8 dB)",
      "Recommandations de reprise des terminaisons et remplacement de câble",
      "Rédaction d'un glossaire technique personnel (NEXT, ACR, PS-NEXT, Return Loss, perte d'insertion, skew, impédance)",
    ],
    competences: [
      "Certification de câblage LAN",
      "Mesures physiques (NEXT, RL, IL, ACR)",
      "Norme TIA/ISO Cat 6A",
      "Rédaction de rapport client",
      "Vocabulaire technique télécom",
    ],
    livrables: [
      "Rapport d'entreprise et rapport technique interne",
      "Tutoriels d'utilisation du Fluke DSX-602",
      "Présentations ODP",
      "Documentation constructeur",
    ],
  },
  {
    slug: "ppp-portfolio",
    code: "SAÉ 1.4",
    semester: "Semestre 1",
    title: "Projet personnel et professionnel (PPP)",
    status: "Terminé",
    objectif:
      "Construire le projet professionnel : pitch (Changemaking Elevator Pitch), réseautage, analyse comparée de portfolios existants, entretiens avec des professionnels, création d'un premier site portfolio personnel.",
    travail: [
      "Bornage de portfolio : analyse critique comparée de deux portfolios d'anciens étudiants R&T",
      "Entretien avec Maxime Teyssier, ingénieur système Linux, ancien étudiant de l'IUT de Béziers",
      "Entretien avec Guilhem Perez, ingénieur réseaux/cybersécurité chez SFR Business",
      "Ébauche d'un site portfolio HTML/CSS/JS — point de départ de ce site actuel",
    ],
    competences: [
      "Communication professionnelle",
      "Prise de contact et réseautage",
      "Auto-évaluation critique",
      "HTML/CSS/JS",
      "LinkedIn",
    ],
    livrables: ["Comptes-rendus d'entretiens professionnels", "Analyse comparée de portfolios", "Ébauche de site portfolio"],
  },
  {
    slug: "traiter-donnees",
    code: "SAÉ 1.5",
    semester: "Semestre 1",
    title: "Traiter les données — open data Montpellier",
    status: "Terminé",
    objectif:
      "Dans le cadre d'un mandat fictif de la mairie de Montpellier, étudier l'usage des parkings voitures et vélos via l'open data de la métropole (taux d'occupation, heures de pointe, relais voiture/vélo).",
    travail: [
      "Récupération de données via l'API portail-api-data.montpellier3m.fr (Python, requests)",
      "Extraction et tri des données par type de véhicule",
      "Calcul du taux de remplissage et analyse de corrélation entre parkings",
      "Détection des heures/jours de pointe, heatmaps hebdomadaires",
      "Calcul de distance parking-voiture ↔ station vélo la plus proche (formule de Haversine)",
    ],
    competences: [
      "Python (pandas, numpy, matplotlib, seaborn, requests)",
      "API REST/JSON",
      "Traitement et nettoyage de données",
      "Statistiques descriptives",
      "Data visualisation",
      "Git/GitHub",
    ],
    livrables: [
      "Fichiers Excel de synthèse et corrélations",
      "Compte-rendu pour la mairie (Word/PDF)",
      "Présentation PowerPoint",
      "Dossier GitHub avec données CSV/XLSX",
    ],
  },
  {
    slug: "reseau-multi-sites",
    code: "SAÉ 2.1",
    semester: "Semestre 2",
    title: "Réseau multi-sites — ShowPatate",
    status: "Terminé",
    objectif:
      "Construire, en binôme, le réseau multi-sites d'une PME fictive « ShowPatate » : site principal avec DMZ, sites délocalisés reliés par VPN IPsec, réseau opérateur en /30, services DNS/Web/DHCP, segmentation VLAN et règles de sécurité différenciées par service.",
    travail: [
      "Architecture complète : routeurs Cisco 2811/1841, switches 2960",
      "Segmentation VLAN 10/20/30/100 selon les services (administratifs, commerciaux, SI)",
      "DMZ publique 200.0.0.0/24 avec serveur web externe, DNS et poste admin",
      "Plan d'adressage détaillé et VPN IPsec vers 2 sites délocalisés",
    ],
    competences: [
      "Cisco Packet Tracer",
      "VLAN",
      "DMZ",
      "NAT",
      "ACL",
      "VPN IPsec",
      "Routage inter-VLAN",
      "DHCP/DNS",
      "Documentation technique en binôme",
    ],
    livrables: [
      "Document d'architecture, sécurité et plan d'adressage",
      "Document de configurations (exports show run)",
      "Rapport de tests et archive de tests de sécurité",
      "Montage final .pkt et présentation PDF",
    ],
  },
  {
    slug: "wavestream-audio",
    code: "SAÉ 2.2",
    semester: "Semestre 2",
    title: "Numérisation d'un signal audio — WaveStream",
    status: "Terminé",
    objectif:
      "Pour la start-up fictive WaveStream, étudier l'échantillonnage et la quantification d'un signal audio (voix + musique) et recommander un compromis qualité/débit réseau, en binôme, avec soutenance orale.",
    travail: [
      "Chargement et visualisation du signal de référence (voix + musique)",
      "Expérimentations d'échantillonnage : aliasing, spectres, fe de 4000 à 44100 Hz",
      "Expérimentations de quantification : bruit, SNR, de 2 à 16 bits",
      "Étude des contraintes réseau (débit ≤ 64 kbit/s) via une matrice fe × n bits",
      "Script Python complet (numpy, matplotlib, scipy) générant figures et fichiers WAV pour chaque configuration",
    ],
    competences: [
      "Python (numpy, matplotlib, scipy)",
      "Théorie de l'échantillonnage (Shannon)",
      "Quantification et bruit de quantification",
      "Calcul de débit réseau",
      "Traitement du signal audio",
    ],
    livrables: [
      "Script Python de simulation",
      "Recommandation finale : voix en fe=8000 Hz / 8 bits (SNR 49,9 dB, équivalent G.711)",
      "Synthèse musique : compromis PCM à 64 kbit/s, compression nécessaire au-delà",
      "Oral de soutenance de 15 min",
    ],
  },
  {
    slug: "gparc",
    code: "SAÉ 2.3",
    semester: "Semestre 2",
    title: "GParc — gestion de parc informatique",
    status: "Terminé",
    objectif:
      "Développer une application web pour gérer le parc matériel de l'IUT de Béziers : inventaire, affectations, locaux et personnel, via une interface sécurisée avec gestion de rôles.",
    travail: [
      "Stack PHP 8+ sans framework, MySQL/MariaDB (PDO, requêtes préparées), JS vanilla, Chart.js",
      "Sécurité : sessions régénérées à la connexion, protection CSRF, mots de passe hashés, échappement XSS, anti-brute-force",
      "Rôles admin (CRUD complet) et consultant (lecture seule)",
      "Tableau de bord avec statistiques, graphiques et alertes d'équipements sans affectation",
      "Liste paginée avec filtres, export CSV, archivage (soft delete) et vérification d'unicité en temps réel",
      "Internationalisation FR / EN / ES",
    ],
    competences: [
      "PHP / MySQL",
      "Sécurité web (CSRF, XSS, injection SQL)",
      "Conception de base de données relationnelle",
      "Gestion de rôles",
      "Internationalisation",
      "Chart.js",
    ],
    livrables: [
      "Script SQL de création + données de test",
      "Cahier des charges PDF",
      "Manuels utilisateur PDF",
      "Vidéo de démonstration",
    ],
  },
  {
    slug: "integratif-404",
    code: "SAÉ intégratif",
    semester: "SAÉ intégratif",
    title: "Préparation 404 — chaîne IoT complète",
    status: "Terminé — équipe de 4",
    objectif:
      "Projet intégratif en équipe de 4 combinant capteurs IoT, transmission LoRaWAN, stockage/visualisation de données et exposition via API web, avec relevés terrain réels sur le campus.",
    travail: [
      "Capteur environnemental Elsys ERS2-04 vers le réseau TTN (The Things Network) via MQTT, puis Telegraf et InfluxDB",
      "Raspberry Pi 5 autonome avec récepteur RTL-SDR et module LA66 LoRaWAN, chaîne LoRa sans réseau IP permanent",
      "VM hébergée (equipe4.stonevibrations.com) : InfluxDB, Grafana en dashboards publics, API Flask générant de l'entropie (SHA-256) à partir des données capteurs",
      "Nginx routant les différents services (/404/, /carto/, /videos/, /grafana/)",
      "Campagne de mesures RSSI/SNR sur 7 points du campus, publiée en heatmap interactive",
      "Tests d'atténuation/réflexion RF avec écrans en aluminium",
    ],
    competences: [
      "IoT / LoRaWAN (TTN)",
      "Raspberry Pi",
      "RTL-SDR",
      "InfluxDB / Grafana",
      "API Flask",
      "Nginx",
      "Administration Linux/VM à distance (SSH)",
      "Mesures RF terrain",
      "Gestion de projet en équipe avec deadline serrée",
    ],
    livrables: [
      "Compte-rendu final et rapport technique",
      "Journal de commandes et guide de configuration",
      "Feuille de mesures terrain",
      "4 vidéos de présentation individuelles",
      "4 URLs publiques : API, cartographie, vidéos, Grafana",
    ],
  },
];
