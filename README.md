# Appointment Schedule System

![Status](https://img.shields.io/badge/Status-Production-success) ![Stack](https://img.shields.io/badge/Tech-React%20|%20TypeScript%20|%20n8n-blue)

## 🚀 Caso de Éxito en Producción: La Choza Barber

Este sistema no es solo un concepto; es una solución **desplegada y operativa**. Actualmente, gestiona la totalidad de la agenda de **La Choza Barber**, centralizando reservas, eliminando conflictos de horarios y automatizando la comunicación con los clientes.

> **Impacto real:** Desde su implementación, se ha reducido al 0% la doble reserva de citas, se ha reducido al 0% la omisión de reservas de citas y se ha optimizado el tiempo operativo del negocio al eliminar la gestión manual por WhatsApp.


## 🎯 Demo en Producción

Este proyecto cuenta con una implementación real y activa en un entorno productivo.

👉 Acceder al Demo Público:
[Aquí](https://appointment-scheduler-template.netlify.app/)

> ⚠️ Nota:
El demo refleja un entorno real de negocio, los emails se envían al mismo correo otorgado. Algunas funciones administrativas y credenciales internas están protegidas por razones de seguridad.

## 📖 Descripción Técnica

**Appointment Schedule** es una solución Fullstack desacoplada diseñada para la orquestación de reservas en tiempo real. Resuelve la complejidad de la gestión de disponibilidad mediante una arquitectura basada en eventos y microservicios low-code.

El sistema actúa como una capa de abstracción inteligente entre la interfaz de usuario y los servicios de Google (Calendar, Gmail, Sheets), garantizando la integridad de los datos y una experiencia de usuario (UX) fluida.

---

## 🛠 Stack Tecnológico

El proyecto utiliza un stack moderno, aprovechando las últimas versiones estables de sus tecnologías principales.

### Frontend (Cliente)

- **Core:** React 19 + TypeScript.
- **Routing:** React Router DOM v7 para gestión de rutas y navegación SPA.
- **UI & Estilos:**
  - **Tailwind CSS v4:** Motor de estilos de última generación.
  - **Lucide React:** Iconografía consistente y ligera.
- **UX & Interactividad:**
  - **Framer Motion:** Animaciones fluidas y transiciones de estado complejas.
  - **Swiper:** Implementación de carruseles interactivos y touch-friendly.

### Backend & Infraestructura

El backend opera bajo una arquitectura **Serverless / Low-code** optimizada para el mantenimiento y la escalabilidad.

- **Orquestación:** n8n (Workflow Automation) actuando como el cerebro lógico del sistema mediante Webhooks.
- **Infraestructura:** Instancia de n8n **auto-alojada (Self-Hosted)** desplegada en un servidor VPS de **Hostinger**, garantizando control total sobre los datos y la ejecución.
- **Google Cloud Platform (GCP):**
  - Gestión de proyecto y habilitación de APIs en la consola de Google.
  - Configuración de autenticación y credenciales para acceso seguro a recursos del usuario.
- **Integraciones:**
  - **Google Calendar API:** Verificación de disponibilidad y bloqueo de slots.
  - **Gmail API:** Envío automatizado de confirmaciones HTML.
  - **Google Sheets:** Persistencia de datos y logs de transacciones.

---

## 🧩 Decisiones de Arquitectura y Patrones

### 1. Validación de Disponibilidad en Tiempo Real (Race Condition Handling)

Para evitar conflictos de concurrencia (dos usuarios intentando reservar el mismo slot simultáneamente), el sistema implementa una **doble verificación**:

1.  **Lectura:** El frontend solicita los slots disponibles calculados dinámicamente por n8n basándose en los eventos existentes en Calendar.
2.  **Escritura Atómica:** Al confirmar, el backend verifica nuevamente la disponibilidad milisegundos antes de la inserción. Si el slot fue ocupado durante el proceso de llenado del formulario, la transacción se rechaza y se notifica al usuario.

### 2. Principio de Responsabilidad Única (SRP)

El código frontend está modularizado. La lógica de presentación está separada de la lógica de negocio:

- `services/`: Encargados puramente de `fetch` y manejo de respuestas HTTP.
- `components/`: UI pura y reutilizable.

### 3. Manejo de Errores Robusto

Se implementó un sistema de manejo de errores en capas:

- **Capa de Red:** Catch de fallos de conectividad o timeouts.
- **Capa de Aplicación:** Validación de respuestas HTTP (status codes 4xx/5xx).
- **Feedback al Usuario:** Mensajes contextuales en la UI (Toasts/Alertas) para guiar al usuario en caso de fallo, evitando pantallas blancas o estados indefinidos.

---

## 🔄 Flujo de Datos (Diagrama Lógico)

1.  **Cliente** inicia solicitud `GET /availability` con una fecha específica.
2.  **n8n Webhook** recibe la petición, consulta **Google Calendar** y filtra horarios ocupados vs. configuración del negocio.
3.  **Frontend** renderiza los slots.
4.  **Cliente** envía `POST /book` con datos del usuario.
5.  **n8n** valida integridad, inserta evento en **Calendar**, registra en **Sheets** y dispara email vía **Gmail**.
6.  **Cliente y Administrador de Negocio** ambos reciben confirmación visual y correo electrónico con los detalles previamente que el usuario ha enviado.

---

## 💻 Instalación y Ejecución Local (Solo Frontend)

Este repositorio contiene el código fuente del Frontend.

### Prerrequisitos

- Node.js v18+
- npm / yarn

### Pasos

1.  Clonar el repositorio:
    ```
    git clone git@github.com:RaulSantosDev/appointment-scheduler-template.git
    ```
2.  Instalar dependencias:
    ```
    cd appointment-schedule-template
    npm install
    ```
3.  Ejecutar entorno de desarrollo:
    ```
    npm run dev
    ```

---

## 🌟 Valor Profesional

Este proyecto demuestra competencias en:

- **Ingeniería de Software:** Integración de sistemas distribuidos y consumo de APIs de terceros.
- **Automatización:** Uso avanzado de n8n para reducir costes de backend y tiempos de desarrollo.
- **Calidad de Código:** Tipado estático con TypeScript para escalabilidad y mantenibilidad.
- **Visión de Producto:** Creación de una solución que resuelve un problema de negocio real (La Choza Barber).

---

## 👨‍💻 Autor

_**Raul Santos** — Desarrollador frontend y desarrollador de automatización (n8n)_

Enfocado en crear soluciones tecnológicas eficientes que aporten valor inmediato. Apasionado por React, TypeScript y la arquitectura de microservicios con n8n.

## 🤖 Desarrollo asistido por IA 
Este proyecto implementó herramientas de Inteligencia Artificial como ChatGPT y Google Gemini para la orientación arquitectónica, la depuración y el diseño iterativo. La integración en n8n, la implementación final y la validación de producción fueron realizadas por el autor.

[LinkedIn](https://www.linkedin.com/in/raulsantosdev/)
