/**
 * Complete i18n Translation Dictionary (Spanish & English)
 * José Andrés Acuña Herrera — Portfolio
 */
const translations = {
  es: {
    // Navigation
    "nav.about": "Sobre Mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.flipbook": "Flipbook 3D",
    "nav.experience": "Experiencia",
    "nav.leadership": "Liderazgo",
    "nav.contact": "Contacto",
    "nav.cv": "Curriculum",

    // Hero
    "hero.name": "José Acuña",
    "hero.role": "Ingeniero Mecatrónico",
    "hero.title": "Desarrollo e integración de sistemas mecatrónicos, automatización industrial e IoT.",
    "hero.subtitle": "Graduado de la Universidad de las Fuerzas Armadas ESPE. Especializado en <strong>sistemas embebidos, IoT, automatización industrial (PLC/SCADA) y robótica</strong>, con trayectoria de liderazgo técnico en IEEE.",
    "hero.btn.projects": "Ver Proyectos",
    "hero.btn.cv": "Curriculum Vitae",
    "hero.btn.contact": "Contacto",

    // Hero Metrics
    "hero.metric.years.num": "6+",
    "hero.metric.years.label": "Años de Formación",
    "hero.metric.roles.num": "4+",
    "hero.metric.roles.label": "Roles Directivos IEEE",
    "hero.metric.tech.num": "10+",
    "hero.metric.tech.label": "Tecnologías de Control & IoT",
    "hero.metric.lang.num": "B2",
    "hero.metric.lang.label": "Inglés Profesional",

    // Terminal
    "terminal.title": "perfil_profesional.json",
    "terminal.key.profile": "perfil",
    "terminal.key.name": "nombre",
    "terminal.val.name": "José Acuña",
    "terminal.key.title": "titulo",
    "terminal.val.title": "Ingeniero Mecatrónico",
    "terminal.key.university": "universidad",
    "terminal.key.focus": "areas_principales",
    "terminal.val.focus1": "Sistemas Embebidos & IoT",
    "terminal.val.focus2": "Automatización Industrial (PLC / SCADA)",
    "terminal.val.focus3": "Robótica & Control Adaptativo",
    "terminal.key.leadership": "liderazgo",
    "terminal.val.leadership": "Section Lead Ecuador — IEEEXtreme 19.0",
    "terminal.key.cert": "certificacion",
    "terminal.val.cert": "Global Leadership (Univ. of Cambridge)",
    "terminal.badge.hw": "Hardware",
    "terminal.badge.fw": "Firmware",
    "terminal.badge.scada": "SCADA & IoT",

    // About Section
    "about.tag": "Perfil y Especialidades",
    "about.title": "Integración de Hardware, Control y Software",
    "about.description": "Diseño de sistemas ciberfísicos que abarcan desde el desarrollo electrónico y mecánico en taller hasta la supervisión y control en planta o en la nube.",
    "about.card1.title": "Sistemas Embebidos & IoT",
    "about.card1.desc": "Diseño de nodos sensores autónomos con ESP32, Raspberry Pi 5 y redes LoRaWAN. Integración de protocolos I2C, SPI y UART con telemetría en tiempo real.",
    "about.card2.title": "Automatización & SCADA",
    "about.card2.desc": "Programación modular en SCL para controladores Siemens S7-1200/1500, simulación en Factory I/O y desarrollo de sistemas SCADA en Ignition y HMI Kinco.",
    "about.card3.title": "Robótica & Control",
    "about.card3.desc": "Modelado dinámico y validación en Simulink/Simscape. Implementación de control difuso y algoritmos de clasificación para dispositivos biomecánicos y manipuladores.",
    "about.card4.title": "Liderazgo Técnico",
    "about.card4.desc": "Certificación en liderazgo por la Universidad de Cambridge. Coordinación de equipos multidisciplinarios y dirección de iniciativas técnicas en IEEE.",

    // Skills Section
    "skills.tag": "Competencias",
    "skills.title": "Herramientas y Tecnologías",
    "skills.description": "Herramientas utilizadas en proyectos de automatización, investigación y desarrollo mecatrónico.",
    "skills.cat1.title": "Automatización & Control",
    "skills.cat2.title": "Sistemas Embebidos & IoT",
    "skills.cat3.title": "Control, IA & Robótica",
    "skills.cat4.title": "CAD/CAM, Electrónica & Software",

    // Projects Section
    "projects.tag": "Proyectos",
    "projects.title": "Proyectos Destacados",
    "projects.description": "Sistemas desarrollados para automatización industrial, salud biomecánica y aplicaciones web.",
    "projects.filter.all": "Todos",
    "projects.filter.pwa": "Software & Web",
    "projects.filter.robotics": "Robótica & Salud",
    "projects.filter.iot": "IoT & Agricultura",
    "projects.filter.automation": "Automatización & SCADA",
    "projects.filter.aerospace": "I+D Aeroespacial",
    "projects.btn.show_more": "Ver más proyectos",
    "projects.btn.show_less": "Ver menos proyectos",

    // Flipbook 3D Section
    "flipbook.tag": "Bitácora Editorial 3D",
    "flipbook.title": "Catálogo Táctil de Ingeniería & I+D",
    "flipbook.description": "Experiencia editorial interactiva tipo libro abierto. Desliza o arrastra las hojas con el ratón o en pantalla táctil para hojear los capítulos técnicos.",

    // Project 1: THE GOAT
    "project.goat.badge": "Plataforma Web & RFID",
    "project.goat.title": "THE GOAT — Sistema Gift Cards & RFID Tap-Beer",
    "project.goat.desc": "Plataforma web en producción para venta online de tarjetas de regalo digitales, generación criptográfica SHA-256 y aplicación PWA para cajeros con escáner QR anti-rebote para abono de saldo a manillas RFID en bares de autoservicio.",
    "project.goat.hl1": "<strong>Producción:</strong> Desplegado en Vercel (<a href='https://the-goat-giftcards.vercel.app' target='_blank' class='highlight-link'>the-goat-giftcards.vercel.app</a>)",
    "project.goat.hl2": "<strong>Seguridad & Base de Datos:</strong> Supabase (PostgreSQL + RLS + procedimiento atómico con bloqueo <code>FOR UPDATE</code>)",
    "project.goat.hl3": "<strong>PWA Punto de Venta:</strong> Escáner QR por cámara con cerrojo atómico y Web Audio API",

    // Project 2: Storage AGV
    "project.storage.badge": "Almacén Automatizado + AGV",
    "project.storage.title": "Sistema Robótico de Almacenamiento (Storage & AGV)",
    "project.storage.desc": "Simulador cinemático y suite de control en Python y PyQt6 para prototipo logístico automatizado con 3 brazos robóticos, casilleros curvados y plataforma móvil AGV sobre pista central.",
    "project.storage.hl1": "<strong>Video:</strong> <a href='https://youtu.be/2pD4KcC07y4' target='_blank' class='highlight-link'>Ver Funcionamiento en YouTube</a>",
    "project.storage.hl2": "<strong>Operaciones:</strong> Despacho directo inicio ➔ casillero y reubicación coordinada entre estaciones",
    "project.storage.hl3": "<strong>Simulación RFID:</strong> Sensor virtual para validación de lógica sin hardware físico",
    "project.storage.hl4": "<strong>Comunicaciones:</strong> Generación y parseo de tramas JSON para microcontrolador serial",

    // Project 3: Compukit
    "project.compukit.badge": "PWA & Modo Offline",
    "project.compukit.title": "Compukit Taller — Sistema de Gestión Técnica",
    "project.compukit.desc": "Aplicación web progresiva para recepción y seguimiento de soporte técnico de hardware con arquitectura sin conexión, dictado por voz y sincronización en la nube.",
    "project.compukit.hl1": "<strong>Enlace en vivo:</strong> <a href='https://jose-beeb.github.io/compukit-taller/' target='_blank' class='highlight-link'>jose-beeb.github.io/compukit-taller</a>",
    "project.compukit.hl2": "<strong>Entrada:</strong> Dictado por voz con Web Speech API y captura de cámara",
    "project.compukit.hl3": "<strong>Sincronización:</strong> Cola local en LocalStorage conectada con Google Apps Script y Drive",

    // Project 4: Knee Rehab
    "project.knee.badge": "Biomecatrónica & Control",
    "project.knee.title": "Dispositivo Robótico para Rehabilitación de Rodilla",
    "project.knee.desc": "Sistema mecatrónico de rehabilitación activa y pasiva con control de fuerza y posición angular en tiempo real, adaptativo al progreso del paciente.",
    "project.knee.hl1": "<strong>Video:</strong> <a href='https://youtu.be/54CjYQszOWI' target='_blank' class='highlight-link'>Ver Demostración Biomecánica</a>",
    "project.knee.hl2": "<strong>Actuación:</strong> Motor NEMA 23 y transmisión por husillo de bolas",
    "project.knee.hl3": "<strong>Sensores:</strong> Encoder magnético AS5600 y celda de carga HX711",
    "project.knee.hl4": "<strong>Control:</strong> Control Difuso y modelo Random Forest en microcontrolador",

    // Project 5: Lora Kipu
    "project.kipu.badge": "Monitoreo Agrícola & IoT <span style='opacity:0.75; font-size:0.68rem; margin-left:4px;'>(Render)</span>",
    "project.kipu.title": "Lora Kipu — Red IoT Microclimática",
    "project.kipu.desc": "Red inalámbrica autónoma de bajo consumo para monitorización ambiental y detección temprana de fitopatologías en cultivos de cacao.",
    "project.kipu.hl1": "<strong>Comunicaciones:</strong> Nodos LoRa / LoRaWAN de largo alcance",
    "project.kipu.hl2": "<strong>Backend:</strong> Microservicios en FastAPI y base de datos distribuida",
    "project.kipu.hl3": "<strong>Modelos:</strong> Predicción de riesgo climático y fitopatológico",

    // Project 6: SCADA Twin
    "project.scada.badge": "Industria 4.0 & SCADA",
    "project.scada.title": "Gemelo Digital & SCADA de Manufactura",
    "project.scada.desc": "Emulación integral de celdas de ensamblaje industrial conectadas a controlador lógico programable Siemens y sistema SCADA en tiempo real.",
    "project.scada.hl1": "<strong>Video:</strong> <a href='https://youtube.com/shorts/luxnUp_XqdI' target='_blank' class='highlight-link'>Ver Simulación SCADA</a>",
    "project.scada.hl2": "<strong>Control PLC:</strong> Siemens S7-1200/1500 programado en SCL",
    "project.scada.hl3": "<strong>Protocolo:</strong> Enlace industrial OPC UA de baja latencia",
    "project.scada.hl4": "<strong>Supervisión:</strong> Panel SCADA en Ignition Designer con métricas de producción",

    // Project 7: CIDFAE Oven
    "project.cidfae.badge": "I+D Aeroespacial",
    "project.cidfae.title": "Reacondicionamiento de Horno de Curado (CIDFAE)",
    "project.cidfae.desc": "Modernización del sistema de potencia, control térmico e interfaz humano-máquina para procesado de materiales compuestos aeroespaciales.",
    "project.cidfae.hl1": "<strong>Video:</strong> <a href='https://youtube.com/shorts/quRxPrLFzec' target='_blank' class='highlight-link'>Ver Operación de Horno</a>",
    "project.cidfae.hl2": "<strong>HMI:</strong> Rediseño de pantallas de control y alarmas en Kinco DTools",
    "project.cidfae.hl3": "<strong>Telemetría:</strong> Supervisión y diagnóstico remoto seguro con VNC",
    "project.cidfae.hl4": "<strong>Potencia:</strong> Sustitución de conductores y aseguramiento de contacto",

    // Shared Project Buttons
    "btn.view_app": "Ver aplicación",
    "btn.view_video": "Ver video",
    "badge.private": "Privado",

    // Experience Section
    "exp.tag": "Trayectoria & Responsabilidad",
    "exp.title": "Experiencia Profesional y Liderazgo",
    "exp.description": "Historial de contribución en ingeniería, investigación, soporte tecnológico y dirección comunitaria.",
    
    "exp.item1.role": "Pasante de Ingeniería Mecatrónica (I+D Aeroespacial)",
    "exp.item1.date": "Mar. 2026 – Jun. 2026",
    "exp.item1.company": "CIDFAE — Centro de Investigación y Desarrollo de la FAE",
    "exp.item1.desc": "Liderazgo técnico en el reacondicionamiento del horno de curado automático, rediseño de interfaz HMI (Kinco DTools) y configuración de monitoreo remoto en red vía VNC Viewer.",

    "exp.item2.role": "Ecuador Section Lead",
    "exp.item2.date": "Mar. 2025 – Dic. 2025",
    "exp.item2.company": "IEEEXtreme 19.0 — Competencia Global de Programación IEEE",
    "exp.item2.desc": "Coordinación y liderazgo nacional de ramas estudiantiles en Ecuador, articulación de soporte para embajadores y promoción del evento a nivel país.",

    "exp.item3.role": "Presidente / Chair",
    "exp.item3.date": "Ene. 2025 – Feb. 2026",
    "exp.item3.company": "IEEE Student Branch — Universidad de las Fuerzas Armadas ESPE",
    "exp.item3.desc": "Gestión integral de operaciones de la rama estudiantil, fomento de actividades interdisciplinarias, organización de congresos técnicos y relaciones interinstitucionales.",

    "exp.item4.role": "Participante Internacional Work & Travel (Operador de Atracciones)",
    "exp.item4.date": "2024 – 2025",
    "exp.item4.company": "Santa Cruz Seaside Co. (CA) & Six Flags Great Adventure (NJ), EE. UU.",
    "exp.item4.desc": "Operación de atracciones mecánicas y atención de alto volumen en entornos multiculturales bajo presión, operando 100% en idioma inglés con altos estándares de seguridad.",

    "exp.item5.role": "Asistente de Área TI & Técnico de Hardware",
    "exp.item5.date": "2020 – 2022",
    "exp.item5.company": "Libresoft S.A. / Compukit Integrated Systems",
    "exp.item5.desc": "Recuperación de información en medios de almacenamiento masivo (HDD/SSD), diagnóstico de anomalías de hardware y montaje de redes LAN y videovigilancia CCTV.",

    // Certifications Section
    "certs.tag": "Reconocimientos & Credenciales",
    "certs.title": "Certificaciones y Liderazgo Global",
    "cert.c1.title": "Global Leadership & Business Certification",
    "cert.c1.issuer": "Clare College, University of Cambridge (Reino Unido, 2025)",
    "cert.c2.title": "Taller Internacional EMPRETEC",
    "cert.c2.issuer": "Corporación ConQuito / UNCTAD (2025)",
    "cert.c3.title": "Programa LÍDER LAB 2026",
    "cert.c3.issuer": "Corporación Líderes para Gobernar",
    "cert.c4.title": "Multibody Simulation Onramp",
    "cert.c4.issuer": "MathWorks (2026)",

    // Contact Section
    "contact.tag": "Comuniquémonos",
    "contact.title": "¿Tienes un proyecto o buscas incorporar talento a tu equipo?",
    "contact.desc": "Estoy abierto a oportunidades en ingeniería mecatrónica, desarrollo de sistemas IoT, automatización industrial, control y liderazgo técnico.",
    "contact.email.label": "Correo Principal",
    "contact.location.label": "Ubicación",
    "contact.location.val": "Sangolquí / Quito, Ecuador",
    "contact.cv_banner.title": "¿Deseas revisar el historial detallado de mi trayectoria?",
    "contact.cv_banner.desc": "Puedes consultar el CV interactivo completo con opción de exportar a PDF o ver el archivo Markdown.",
    "contact.cv_banner.btn": "Abrir Curriculum Vitae",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "toast.copied": "¡Correo copiado al portapapeles!"
  },

  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.flipbook": "3D Flipbook",
    "nav.experience": "Experience",
    "nav.leadership": "Leadership",
    "nav.contact": "Contact",
    "nav.cv": "Resume",

    // Hero
    "hero.name": "José Acuña",
    "hero.role": "Mechatronics Engineer",
    "hero.title": "Development and integration of mechatronic systems, industrial automation & IoT.",
    "hero.subtitle": "Graduate from Universidad de las Fuerzas Armadas ESPE. Specialized in <strong>embedded systems, IoT, industrial automation (PLC/SCADA), and robotics</strong>, with technical leadership experience in IEEE.",
    "hero.btn.projects": "View Projects",
    "hero.btn.cv": "Curriculum Vitae",
    "hero.btn.contact": "Contact Me",

    // Hero Metrics
    "hero.metric.years.num": "6+",
    "hero.metric.years.label": "Years of Training",
    "hero.metric.roles.num": "4+",
    "hero.metric.roles.label": "IEEE Executive Roles",
    "hero.metric.tech.num": "10+",
    "hero.metric.tech.label": "Control & IoT Stacks",
    "hero.metric.lang.num": "B2",
    "hero.metric.lang.label": "Professional English",

    // Terminal
    "terminal.title": "professional_profile.json",
    "terminal.key.profile": "profile",
    "terminal.key.name": "name",
    "terminal.val.name": "José Acuña",
    "terminal.key.title": "degree",
    "terminal.val.title": "Mechatronics Engineer",
    "terminal.key.university": "university",
    "terminal.key.focus": "core_focus",
    "terminal.val.focus1": "Embedded Systems & IoT",
    "terminal.val.focus2": "Industrial Automation (PLC / SCADA)",
    "terminal.val.focus3": "Robotics & Adaptive Control",
    "terminal.key.leadership": "leadership",
    "terminal.val.leadership": "Ecuador Section Lead — IEEEXtreme 19.0",
    "terminal.key.cert": "certification",
    "terminal.val.cert": "Global Leadership (Univ. of Cambridge)",
    "terminal.badge.hw": "Hardware",
    "terminal.badge.fw": "Firmware",
    "terminal.badge.scada": "SCADA & IoT",

    // About Section
    "about.tag": "Profile & Expertise",
    "about.title": "Integration of Hardware, Control & Software",
    "about.description": "Engineering cyberphysical systems bridging precision mechanical design and embedded electronics with plant supervision and cloud telemetry.",
    "about.card1.title": "Embedded Systems & IoT",
    "about.card1.desc": "Design of ultra-low-power autonomous sensor nodes using ESP32, Raspberry Pi 5, and LoRaWAN. Bus integration (I2C, SPI, UART) with real-time telemetry.",
    "about.card2.title": "Automation & SCADA",
    "about.card2.desc": "Modular SCL programming for Siemens S7-1200/1500 PLCs, digital twin simulation in Factory I/O, and industrial SCADA/HMI interfaces with Ignition and Kinco.",
    "about.card3.title": "Robotics & Control",
    "about.card3.desc": "Dynamic modeling and validation in Simulink/Simscape. Implementation of Fuzzy Control and machine learning classifiers for biomechanical devices.",
    "about.card4.title": "Technical Leadership",
    "about.card4.desc": "Global Leadership Certification by the University of Cambridge. Coordination of multidisciplinary teams and execution of technical programs in IEEE.",

    // Skills Section
    "skills.tag": "Core Competencies",
    "skills.title": "Tools & Technologies",
    "skills.description": "Technologies applied across industrial automation, R&D, and mechatronic engineering projects.",
    "skills.cat1.title": "Automation & Control",
    "skills.cat2.title": "Embedded Systems & IoT",
    "skills.cat3.title": "Control, AI & Robotics",
    "skills.cat4.title": "CAD/CAM, Electronics & Software",

    // Projects Section
    "projects.tag": "Portfolio",
    "projects.title": "Featured Projects",
    "projects.description": "Applied engineering solutions for industrial automation, biomechanical health, and web platforms.",
    "projects.filter.all": "All",
    "projects.filter.pwa": "Software & Web",
    "projects.filter.robotics": "Robotics & Health",
    "projects.filter.iot": "IoT & AgriTech",
    "projects.filter.automation": "Automation & SCADA",
    "projects.filter.aerospace": "Aerospace R&D",
    "projects.btn.show_more": "Show more projects",
    "projects.btn.show_less": "Show fewer projects",

    // Flipbook 3D Section
    "flipbook.tag": "3D Editorial Journal",
    "flipbook.title": "Tactile Engineering & R&D Catalogue",
    "flipbook.description": "Open-book interactive editorial experience. Swipe or drag pages with mouse or touch gestures to browse through technical engineering chapters.",

    // Project 1: THE GOAT
    "project.goat.badge": "Web Platform & RFID",
    "project.goat.title": "THE GOAT — Digital Gift Cards & RFID Tap-Beer",
    "project.goat.desc": "Production web platform for e-commerce digital gift cards with SHA-256 cryptographic token generation and a cashier POS PWA with camera QR scanner for balance top-up on RFID wristbands in self-serve beer taprooms.",
    "project.goat.hl1": "<strong>Production:</strong> Deployed on Vercel (<a href='https://the-goat-giftcards.vercel.app' target='_blank' class='highlight-link'>the-goat-giftcards.vercel.app</a>)",
    "project.goat.hl2": "<strong>Security & DB:</strong> Supabase (PostgreSQL + RLS + atomic RPC function with <code>FOR UPDATE</code> concurrency lock)",
    "project.goat.hl3": "<strong>Cashier POS PWA:</strong> Hardware-accelerated camera QR scanner with atomic lock and Web Audio API",

    // Project 2: Storage AGV
    "project.storage.badge": "Automated Warehouse + AGV",
    "project.storage.title": "Robotic Storage System (AS/RS & AGV)",
    "project.storage.desc": "Kinematic simulator and control suite in Python and PyQt6 for an automated logistics prototype featuring 3 robotic arms, curved storage bays, and a track-guided mobile AGV.",
    "project.storage.hl1": "<strong>Video:</strong> <a href='https://youtu.be/2pD4KcC07y4' target='_blank' class='highlight-link'>Watch Prototype Demo on YouTube</a>",
    "project.storage.hl2": "<strong>Operations:</strong> Direct HOME ➔ Slot dispatch and coordinated inter-station relocation",
    "project.storage.hl3": "<strong>RFID Simulation:</strong> Virtual sensor array for rapid logic validation without physical hardware",
    "project.storage.hl4": "<strong>Communications:</strong> High-speed serial JSON packet parser for microcontrollers",

    // Project 3: Compukit
    "project.compukit.badge": "PWA & Offline Mode",
    "project.compukit.title": "Compukit Taller — Technical Service Management",
    "project.compukit.desc": "Progressive Web App for hardware diagnostic logging and repair tracking with offline-first local storage, voice dictation, and cloud synchronization.",
    "project.compukit.hl1": "<strong>Live App:</strong> <a href='https://jose-beeb.github.io/compukit-taller/' target='_blank' class='highlight-link'>jose-beeb.github.io/compukit-taller</a>",
    "project.compukit.hl2": "<strong>Input:</strong> Voice-to-text dictation via Web Speech API and live camera capture",
    "project.compukit.hl3": "<strong>Sync:</strong> LocalStorage queue connected to serverless Google Apps Script & Drive",

    // Project 4: Knee Rehab
    "project.knee.badge": "Biomechatronics & Control",
    "project.knee.title": "Robotic Device for Lower Limb Rehabilitation",
    "project.knee.desc": "Active and passive mechatronic rehabilitation system with real-time angular position and force feedback, adapting dynamically to the patient's recovery trajectory.",
    "project.knee.hl1": "<strong>Video:</strong> <a href='https://youtu.be/54CjYQszOWI' target='_blank' class='highlight-link'>Watch Biomechanical Demo</a>",
    "project.knee.hl2": "<strong>Actuation:</strong> High-torque NEMA 23 stepper with precision ball-screw transmission",
    "project.knee.hl3": "<strong>Sensors:</strong> AS5600 magnetic rotary encoder and HX711 load cell bridge",
    "project.knee.hl4": "<strong>Control:</strong> Embedded Fuzzy Logic control and Random Forest classifier",

    // Project 5: Lora Kipu
    "project.kipu.badge": "AgriTech & IoT <span style='opacity:0.75; font-size:0.68rem; margin-left:4px;'>(Render)</span>",
    "project.kipu.title": "Lora Kipu — Microclimate IoT Sensor Network",
    "project.kipu.desc": "Low-power long-range wireless sensor network for real-time microclimatic telemetry and early detection of phytopathologies in cocoa crops.",
    "project.kipu.hl1": "<strong>Comms:</strong> Long-range LoRa / LoRaWAN autonomous field nodes",
    "project.kipu.hl2": "<strong>Backend:</strong> FastAPI microservices with distributed database architecture",
    "project.kipu.hl3": "<strong>Models:</strong> Early predictive models for fungal infection risk",

    // Project 6: SCADA Twin
    "project.scada.badge": "Industry 4.0 & SCADA",
    "project.scada.title": "Digital Twin & Manufacturing SCADA System",
    "project.scada.desc": "Full physics emulation of automated manufacturing workcells interfaced with a physical/simulated Siemens PLC and industrial SCADA dashboards in real time.",
    "project.scada.hl1": "<strong>Video:</strong> <a href='https://youtube.com/shorts/luxnUp_XqdI' target='_blank' class='highlight-link'>Watch SCADA Simulation</a>",
    "project.scada.hl2": "<strong>PLC Control:</strong> Siemens S7-1200/1500 programmed in modular Structured Control Language (SCL)",
    "project.scada.hl3": "<strong>Protocol:</strong> Low-latency OPC UA industrial middleware link",
    "project.scada.hl4": "<strong>Supervision:</strong> Ignition Designer SCADA dashboard tracking live throughput and KPIs",

    // Project 7: CIDFAE Oven
    "project.cidfae.badge": "Aerospace R&D",
    "project.cidfae.title": "Refurbishment of Industrial Curing Oven (CIDFAE)",
    "project.cidfae.desc": "Modernization of electrical power distribution, precision thermal regulation, and HMI for processing aerospace-grade composite materials.",
    "project.cidfae.hl1": "<strong>Video:</strong> <a href='https://youtube.com/shorts/quRxPrLFzec' target='_blank' class='highlight-link'>Watch Oven Operation</a>",
    "project.cidfae.hl2": "<strong>HMI:</strong> Redesigned control and alarm management screens in Kinco DTools",
    "project.cidfae.hl3": "<strong>Telemetry:</strong> Secure remote diagnostic monitoring over LAN via VNC Viewer",
    "project.cidfae.hl4": "<strong>Power:</strong> Heavy-gauge conductor replacement and contact resistance reduction",

    // Shared Project Buttons
    "btn.view_app": "Live Demo",
    "btn.view_video": "Watch Video",
    "badge.private": "Private",

    // Experience Section
    "exp.tag": "Career & Responsibility",
    "exp.title": "Professional Experience & Leadership",
    "exp.description": "Track record in mechatronics engineering, aerospace R&D, hardware diagnostic support, and international student direction.",

    "exp.item1.role": "Mechatronics Engineering Intern (Aerospace R&D)",
    "exp.item1.date": "Mar. 2026 – Jun. 2026",
    "exp.item1.company": "CIDFAE — Ecuadorian Air Force Research & Development Center",
    "exp.item1.desc": "Technical lead on the refurbishment of an automated composite curing oven, redesigning the Kinco HMI interface and deploying secure remote monitoring via VNC Viewer.",

    "exp.item2.role": "Ecuador Section Lead",
    "exp.item2.date": "Mar. 2025 – Dec. 2025",
    "exp.item2.company": "IEEEXtreme 19.0 — IEEE Global Virtual Programming Competition",
    "exp.item2.desc": "National coordination across all IEEE Student Branches in Ecuador, providing technical and logistical support to ambassadors and driving nationwide participation.",

    "exp.item3.role": "President / Chair",
    "exp.item3.date": "Jan. 2025 – Feb. 2026",
    "exp.item3.company": "IEEE Student Branch — Universidad de las Fuerzas Armadas ESPE",
    "exp.item3.desc": "Comprehensive management of branch operations, organizing academic congresses, inter-institutional collaborations, and technical workshops.",

    "exp.item4.role": "International Work & Travel Participant (Ride Operator)",
    "exp.item4.date": "2024 – 2025",
    "exp.item4.company": "Santa Cruz Seaside Co. (CA) & Six Flags Great Adventure (NJ), USA",
    "exp.item4.desc": "Operated major mechanical rides and delivered high-volume guest service under pressure, communicating 100% in English with strict adherence to safety protocols.",

    "exp.item5.role": "IT Hardware & Network Support Assistant",
    "exp.item5.date": "2020 – 2022",
    "exp.item5.company": "Libresoft S.A. / Compukit Integrated Systems",
    "exp.item5.desc": "Data recovery from magnetic and solid-state storage (HDD/SSD), hardware diagnostics, component-level repairs, and deployment of LAN networks and CCTV surveillance.",

    // Certifications Section
    "certs.tag": "Credentials & Honors",
    "certs.title": "Certifications & Global Leadership",
    "cert.c1.title": "Global Leadership & Business Certification",
    "cert.c1.issuer": "Clare College, University of Cambridge (UK, 2025)",
    "cert.c2.title": "EMPRETEC International Workshop",
    "cert.c2.issuer": "Corporación ConQuito / UNCTAD (2025)",
    "cert.c3.title": "LÍDER LAB 2026 Program",
    "cert.c3.issuer": "Corporación Líderes para Gobernar",
    "cert.c4.title": "Multibody Simulation Onramp",
    "cert.c4.issuer": "MathWorks (2026)",

    // Contact Section
    "contact.tag": "Get in Touch",
    "contact.title": "Have a project in mind or looking to strengthen your engineering team?",
    "contact.desc": "I am open to opportunities in mechatronics engineering, embedded systems, IoT development, industrial automation, and technical leadership.",
    "contact.email.label": "Primary Email",
    "contact.location.label": "Location",
    "contact.location.val": "Sangolquí / Quito, Ecuador",
    "contact.cv_banner.title": "Looking for the full technical breakdown?",
    "contact.cv_banner.desc": "Explore the interactive online resume with direct PDF export or view the raw Markdown file.",
    "contact.cv_banner.btn": "Open Curriculum Vitae",

    // Footer
    "footer.rights": "All rights reserved.",
    "toast.copied": "Email copied to clipboard!"
  }
};
