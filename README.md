<div align="center">

# 🚀 Bruno Cardales - Portfolio

### Full Stack Developer | React Specialist | TypeScript Enthusiast

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://brunocarda2005.github.io/Bruno/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

<p align="center">
  <em>Un portafolio moderno, interactivo y completamente bilingüe (ES/EN) construido con las últimas tecnologías web</em>
</p>

[Características](#-características-principales) •
[Tecnologías](#-stack-tecnológico) •
[Instalación](#-instalación) •
[Estructura](#-estructura-del-proyecto) •
[Contacto](#-contacto)

</div>

---

## 📋 Sobre el Proyecto

Este es mi portafolio personal desarrollado con **React + Vite**, diseñado para mostrar mis habilidades como desarrollador Full Stack. El proyecto destaca por su **sistema de internacionalización completo**, **diseño responsive** y **arquitectura modular**.

### ✨ Características Principales

- 🌐 **Sistema de Internacionalización (i18n)** - Cambio fluido entre Español e Inglés
- 🎨 **Diseño Responsive** - Adaptado perfectamente a móvil, tablet y desktop
- ⚡ **Performance Optimizada** - Carga rápida con Vite y React optimizado
- 🔄 **Context API** - Gestión de estado global eficiente
- 📱 **Navegación Intuitiva** - Experiencia de usuario fluida con Wouter
- 🎯 **Código Modular** - Arquitectura limpia y mantenible
- 🌦️ **API Weather Integration** - Información climática en tiempo real
- 📅 **Calendar Widget** - Fecha y hora actualizadas dinámicamente
- 💼 **Sección de Proyectos** - Filtrado inteligente por tecnologías
- 🎓 **Experiencia Profesional** - Timeline con empresas y logros

## 🛠️ Stack Tecnológico

### Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

### Herramientas & Librerías

- **Vite** - Build tool ultra rápido
- **React Icons** - Biblioteca de iconos
- **Wouter** - Router ligero para React
- **Context API** - Gestión de estado global
- **LocalStorage** - Persistencia de preferencias

### Backend Skills (Proyectos destacados)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white)

## 🚀 Instalación

### Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn

### Pasos de Instalación

```bash
# Clonar el repositorio
git clone https://github.com/brunocarda2005/Bruno.git

# Navegar al directorio
cd Bruno

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:5173
```

### Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run preview  # Previsualiza la build de producción
npm run deploy   # Despliega a GitHub Pages
npm run lint     # Ejecuta ESLint
```

## 📁 Estructura del Proyecto

```
Bruno/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes de React
│   │   ├── header/      # Cabecera y navegación
│   │   ├── start/       # Sección inicio (About, Setup, Tools)
│   │   ├── skills/      # Habilidades técnicas
│   │   ├── ProyectAndWorks/ # Proyectos y trabajos
│   │   ├── contact/     # Información de contacto
│   │   └── footer/      # Pie de página
│   ├── context/         # Context API (Estado global)
│   │   ├── Context.jsx
│   │   ├── useContext.jsx
│   │   └── LanguageContext.jsx  # Sistema i18n
│   ├── utils/           # Utilidades
│   │   ├── translations.js      # Traducciones ES/EN
│   │   └── useTranslation.js    # Hook de traducción
│   ├── static/          # Datos estáticos
│   │   ├── const/       # Constantes y datos
│   │   ├── fotos/       # Imágenes
│   │   └── svg/         # Iconos SVG
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🌟 Características Destacadas

### 🌐 Sistema de Internacionalización

- Cambio de idioma en tiempo real (Español ↔ Inglés)
- Persistencia de preferencia en LocalStorage
- Traducciones en todas las secciones del sitio
- Soporte para pluralización (años, meses)
- Context API para gestión de idioma global

### 🎯 Sección de Proyectos Inteligente

- Filtrado dinámico por tecnologías
- Visualización de detalles de proyecto
- Descripciones bilingües
- Tags interactivos
- Enlaces a proyectos en vivo

### 🛠️ Tools Widget Interactivo

- **Reloj en tiempo real** con fecha y hora actualizada
- **Widget de clima** con información de temperatura y ubicación
- Traducción automática de días y meses según idioma

### 💼 Experiencia Profesional

- Timeline de empresas con las que he trabajado
- Logros destacados en cada posición
- Descripciones traducidas automáticamente

## 🎨 Secciones del Portfolio

1. **🏠 Inicio (Start)**
   - Presentación personal bilingüe
   - Links a redes sociales
   - Setup y herramientas de desarrollo
   - Widgets de calendario y clima

2. **💻 Habilidades (Skills)**
   - 16+ tecnologías con descripciones bilingües
   - Niveles de competencia
   - Empresas donde las he aplicado

3. **📂 Proyectos (Projects & Works)**
   - 9 proyectos destacados
   - Filtrado por tecnología
   - Descripciones completas en ambos idiomas
   - Links a demos y repositorios

4. **📧 Contacto (Contact)**
   - Información profesional
   - Timeline de experiencia laboral
   - Links de contacto directo

## 🔧 Personalización

### Cambiar Traducciones

Edita el archivo `src/utils/translations.js`:

```javascript
export const translations = {
  es: {
    // Tus traducciones en español
  },
  en: {
    // Tus traducciones en inglés
  },
};
```

### Agregar Nuevos Proyectos

Edita `src/components/ProyectAndWorks/service/dataProyect.js`:

```javascript
{
  icon: tuIcono,
  img: tuImagen,
  tags: [...],
  key: 10,
  detail: {
    titulo: {
      es: "Título en Español",
      en: "Title in English"
    },
    descripcion: {
      es: "Descripción en español",
      en: "Description in English"
    },
    a: "https://tu-proyecto.com"
  }
}
```

## 📱 Responsive Design

El portfolio está optimizado para:

- 📱 **Móviles** - 320px - 767px
- 📱 **Tablets** - 768px - 1023px
- 💻 **Desktop** - 1024px+

## 🚀 Deployment

Este proyecto está configurado para despliegue automático en **GitHub Pages**.

```bash
# Desplegar a GitHub Pages
npm run deploy
```

## 📊 Performance

- ⚡ **First Contentful Paint** < 1.5s
- ⚡ **Time to Interactive** < 3s
- ⚡ **Lighthouse Score** > 90

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún bug o tienes sugerencias:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**Bruno Cardales**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bruno-cardales/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/brunocarda2005)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://brunocarda2005.github.io/Bruno/)

---

<div align="center">

### ⭐ Si te gustó este proyecto, dale una estrella!

**Desarrollado con ❤️ por Bruno Cardales**

</div>
