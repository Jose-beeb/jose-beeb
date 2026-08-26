# José Andrés Acuña Herrera
**Ingeniero Mecatrónico | Automatización, Sistemas Embebidos, IoT & Liderazgo Técnico**

📍 Sangolquí / Quito, Ecuador  
📱 +593 99 847 9829  
✉️ [jaacunainusa@gmail.com](mailto:jaacunainusa@gmail.com) | [jaacuna@ieee.org](mailto:jaacuna@ieee.org)  
🔗 [LinkedIn](https://linkedin.com/in/joseacuñah) | 🐙 [GitHub](https://github.com/jose-beeb)

---

## 🎯 Perfil Profesional

Ingeniero Mecatrónico graduado de la **Universidad de las Fuerzas Armadas ESPE**, especializado en la convergencia entre hardware, control inteligente, automatización industrial y desarrollo de software embebido. Experiencia en diseño de sistemas ciberfísicos, prototipado rápido, modelado 3D e implementación de arquitecturas IoT / SCADA para aplicaciones biomédicas, agrícolas e industriales.

Sólida trayectoria de liderazgo internacional en **IEEE**, gestionando ramas estudiantiles, capítulos técnicos (EMBS, RAS) y liderando la sección Ecuador de la competencia global de programación IEEEXtreme. Destacada capacidad analítica, resolución de problemas en entornos de alta exigencia, comunicación asertiva y gestión multicultural de proyectos.

---

## 🛠️ Habilidades Técnicas y Competencias

* **Automatización y Control:** Siemens S7-1200 / S7-1500, TIA Portal (SCL/KOP), Factory I/O, HMI (Kinco DTools v4.5.6), Ignition SCADA, OPC UA, Node-RED, FlexSim, LabVIEW, VNC Viewer.
* **Sistemas Embebidos e IoT:** ESP32, ESP8266, Raspberry Pi 5, LoRa / LoRaWAN, protocolos I2C, SPI, UART, encoders magnéticos (AS5600), celdas de carga (HX711), sensores ambientales y de telemetría.
* **Control, Robótica y Simulación:** ROS 2, MATLAB & Simulink, Simscape, Multibody, Control Difuso (Fuzzy Logic), Machine Learning aplicado (Random Forest, Scikit-learn).
* **Diseño CAD/CAM/CAE y Electrónica:** Autodesk Inventor, SolidWorks, ANSYS (Diseño Mecánico), AutoCAD Electrical, KiCad, Proteus, Multisim, Impresión 3D FDM (Bambu Lab / Creality), corte y grabado láser.
* **Programación y Análisis de Datos:** Python (FastAPI, NumPy, Pandas), C, C++ (Arduino / ESP-IDF), MATLAB, Microsoft Excel (Avanzado), Power BI (Básico), Git & GitHub.
* **Competencias Interpersonales:** Liderazgo de equipos multidisciplinarios, gestión ágil de proyectos, resolución analítica de problemas, comunicación multicultural y diagnóstico técnico.

---

## 💼 Experiencia Profesional

### **CIDFAE — Centro de Investigación y Desarrollo de la Fuerza Aérea Ecuatoriana**
**Pasante de Ingeniería Mecatrónica (I+D Aeroespacial)** | *Mar. 2026 – Jun. 2026* | *Sangolquí, Ecuador*
* Liderazgo técnico en el reacondicionamiento de un horno de curado automático para materiales compuestos, ejecutando diagnósticos de potencia y reemplazo de conductores para optimizar la resistencia de contacto.
* Rediseño y optimización de la interfaz humano-máquina (HMI) en Kinco DTools v4.5.6, reestructurando variables de control y pantallas de gestión de alarmas.
* Configuración de servicios de comunicación industrial y monitoreo remoto seguro en tiempo real mediante VNC Viewer.

### **Libresoft S.A.**
**Asistente de Área TI** | *Ene. 2022 – Jun. 2022* | *Ecuador*
* Recuperación de información crítica en dispositivos de almacenamiento masivo (HDD y SSD).
* Mantenimiento preventivo y correctivo de infraestructura de cómputo y estaciones de trabajo empresariales.

### **Compukit Integrated Systems**
**Técnico de Hardware y TI** | *Sep. 2020 – Nov. 2021* | *Lago Agrio, Ecuador*
* Diagnóstico de anomalías de hardware y soporte correctivo/preventivo en ordenadores y sistemas de impresión.
* Instalación física y configuración de redes de área local (LAN) y sistemas de videovigilancia CCTV.

### **Santa Cruz Seaside Co. (CA) & Six Flags Great Adventure (NJ)**
**Participante Internacional Work & Travel (Ride Operator)** | *2024 – 2025* | *Estados Unidos*
* Operación de atracciones de alto volumen y gestión de seguridad bajo estándares internacionales en idioma inglés a tiempo completo.
* Desarrollo de resiliencia operativa, comunicación intercultural y resolución inmediata de contingencias.

---

## 🚀 Proyectos de Ingeniería Destacados

### 1. THE GOAT — Sistema Automatizado de Gift Cards & RFID Tap-Beer ([Live Demo: the-goat-giftcards.vercel.app](https://the-goat-giftcards.vercel.app))
* **Arquitectura:** Aplicación Web Fullstack en producción (Next.js, React, TypeScript, Vercel) para venta de gift cards y recarga de saldo en manillas RFID de autoservicio cervecero *(Código privado/comercial)*.
* **Seguridad & Base de Datos:** Supabase (PostgreSQL + RLS), procedimiento RPC atómico `redeem_gift_card` con bloqueo `FOR UPDATE` para prevenir race conditions y generación de tokens de 24 bytes (SHA-256).
* **Módulo POS Cajero:** PWA con lector QR por cámara (`html5-qrcode`), cerrojo atómico anti-doble lectura, Web Audio API y servicio de correos híbrido (Gmail SMTP + Resend API).

### 2. Sistema Robótico de Almacenamiento & AGV (AS/RS Logístico)
* **Arquitectura:** Software interactivo de simulación cinemática y monitoreo en Python/PyQt6 para prototipo de almacén automatizado con 3 brazos robóticos y plataforma móvil AGV *(Código privado)*.
* **Control & Cinemática:** Despacho directo HOME ➔ Casillero, reubicación coordinada entre estaciones, simulación de sensores RFID (A-E) y gestión de seguridad modal (QMessageBox).
* **Comunicaciones:** Generación y parseo de tramas JSON de alta velocidad enviadas por puerto serial hacia microcontroladores.

### 3. Compukit Taller — Sistema PWA de Gestión Técnica Offline-First ([En Vivo](https://jose-beeb.github.io/compukit-taller/) | [GitHub](https://github.com/Jose-beeb/compukit-taller))
* **Arquitectura:** Progressive Web App (PWA) con Service Workers, LocalStorage sync resiliente y diseño adaptable.
* **APIs & Backend:** Web Speech API para dictado por voz de diagnósticos, compresión Canvas para fotos de hardware y backend serverless en Google Apps Script enlazado a Google Drive y Sheets.
* **Automatización:** Emisión de comprobantes digitales en PDF con jsPDF e integración de notificaciones vía WhatsApp Deep Links.

### 4. Dispositivo Robótico para Rehabilitación de Miembro Inferior (Rodilla)
* **Arquitectura:** Raspberry Pi 5 + ESP32, actuador NEMA 23 con transmisión por husillo de bolas, encoder magnético AS5600, celda de carga con amplificador HX711.
* **Control e IA:** Algoritmos de Control Difuso (Fuzzy Logic) para adaptación de carga activa/pasiva y clasificación biomecánica con Random Forest.
* **Validación:** Modelado dinámico en MATLAB Simulink/Simscape con telemetría en tiempo real.

### 5. Lora Kipu — Red IoT AgriTech para Monitoreo Microclimático
* **Arquitectura:** Nodos sensoriales autónomos de ultra bajo consumo con microcontroladores ESP32 y transmisión LoRaWAN.
* **Software:** Backend reactivo en Python (FastAPI), modelos predictivos de enfermedades fúngicas en plantaciones de cacao y paneles de visualización.
* **Impacto:** Co-fundador de la iniciativa orientada a reducir pérdidas agrícolas y optimizar recursos hídricos.

### 6. Gemelo Digital & Sistema SCADA para Manufactura Automatizada
* **Arquitectura:** Simulación integral en Factory I/O conectada vía OPC UA con PLC Siemens S7-1200 / S7-1500 programado en SCL modular.
* **Supervisión:** Dashboard SCADA en Ignition Designer con visualización de estados y métricas operativas (KPIs/OEE).

---

## 🌐 Liderazgo y Experiencia Internacional

* **Ecuador Section Lead — IEEEXtreme 19.0** *(Mar. 2025 – Dic. 2025)*  
  Coordinación nacional de ramas estudiantiles universitarias para la competencia global de programación, soporte a embajadores y gestión de logística técnica.
* **Presidente / Chair — Rama Estudiantil IEEE ESPE** *(Ene. 2025 – Feb. 2026)*  
  Dirección estratégica de operaciones, gestión de presupuestos, alianzas interinstitucionales y organización de congresos técnicos.
* **Vicepresidente — IEEE EMBS (Engineering in Medicine and Biology Society) ESPE** *(Ene. 2026 – Presente)*  
  Impulso de iniciativas de bioingeniería, webinars internacionales y proyectos de tecnología médica.
* **Vicepresidente & Secretario — IEEE RAS (Robotics and Automation Society) ESPE** *(Feb. 2024 – Ene. 2025)*  
  Coordinación de talleres prácticos de robótica móvil, microcontroladores y automatización industrial.
* **Embajador Estudiantil — IEEEXtreme 18.0** *(2024)*.
* **Docente Voluntario — IV y V Olimpiadas Ecuatorianas de Astronomía y Astronáutica** *(2021 – 2023)*  
  Capacitación a estudiantes secundarios en Python básico, estadística y análisis de datos en la Universidad Técnica de Cotopaxi.
* **Co-organizador y Relaciones Universitarias — Google DevFest Quito (GDG Ecuador)**.

---

## 🎓 Educación

* **Ingeniería Mecatrónica** | *2020 – 2026*  
  Universidad de las Fuerzas Armadas ESPE — Sangolquí, Ecuador.
* **Bachillerato Internacional (IB)** | *2020*  
  Unidad Educativa Fiscomisional "Pacífico Cembranos" — Lago Agrio, Ecuador.

---

## 📜 Certificaciones

* **Global Leadership and Business Certification** — Clare College, University of Cambridge, UK *(2025)*.
* **Taller Internacional EMPRETEC** — Corporación ConQuito / UNCTAD *(2025)*.
* **Programa LÍDER LAB 2026** — Corporación Líderes para Gobernar *(2026)*.
* **Multibody Simulation Onramp** — MathWorks *(2026)*.

---

## 🗣️ Idiomas

* **Español:** Nativo
* **Inglés:** Intermedio - Avanzado (B2)
