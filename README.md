# Appointment Schedule

## Descripción del proyecto

**Appointment Schedule** es una aplicación web de agenda de citas diseñada para automatizar la gestión de reservas de servicios de forma clara y confiable. Permite a los clientes visualizar en tiempo real los horarios disponibles según el día y el servicio seleccionado, verificando la disponibilidad antes de confirmar una cita.

La aplicación se integra con **Google Calendar** para evitar conflictos de horarios y garantizar que cada reserva sea válida, actualizada y consistente con la agenda real del negocio.

---

## Público objetivo

- **Cliente final**: usuarios que desean agendar una cita de forma rápida y sin fricción.
- **Negocio**: comercios que operan bajo un esquema de citas.
- **Administrador**: responsable de supervisar y gestionar las reservas.

### Contexto de uso

El proyecto fue creado inicialmente para una **barbería**, pero su lógica de negocio es reutilizable para cualquier tipo de negocio que requiera una **gestión automática de citas**, como consultorios, salones de belleza o servicios profesionales.

---

## Funcionalidades actuales

- Creación de citas en tiempo real  
- Verificación de disponibilidad por día y servicio  
- Integración con Google Calendar  
- Validación básica de formularios  
- Selección dinámica de servicios  
- Diseño responsive (mobile-first)  

---

## Arquitectura y decisiones técnicas

El proyecto está construido priorizando **legibilidad, mantenibilidad y claridad arquitectónica**.

- Frontend desarrollado con **React + TypeScript**
- Manejo de estado local para formularios y flujo de UI
- Separación clara de responsabilidades
- Componentes reutilizables y código refactorizado
- Uso de hooks nativos de React
- Frontend desacoplado del backend

La aplicación consume una API externa encargada de la lógica de negocio, manteniendo el frontend enfocado exclusivamente en la experiencia de usuario.

---

## Stack tecnológico

### Frontend
- React
- TypeScript
- Tailwind CSS

### Backend / Automatización
- **n8n** como orquestador de backend
- Integración con:
  - Google Calendar API (verificación y creación de eventos)
  - Gmail API (envío de correos de confirmación)
  - Google Docs como almacenamiento temporal de citas *

El frontend consume una **API real** expuesta por workflows de n8n que retorna los horarios disponibles en tiempo real.  
Actualmente **no se requieren variables de entorno** para ejecutar la aplicación.

---

## Instalación y ejecución local

### Requisitos
- Node.js
- npm

### Instalación
```bash
npm install
