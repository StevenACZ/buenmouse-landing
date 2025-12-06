// Supported languages
export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Language = keyof typeof languages;
export const defaultLang: Language = "es";

// UI translations
export const ui = {
  es: {
    // Meta & SEO
    "meta.title":
      "BuenMouse - Revoluciona tu experiencia con mouse y trackpad en macOS",
    "meta.description":
      "BuenMouse es una aplicación de productividad open source para macOS que mejora tu experiencia con Mission Control, navegación entre Spaces, zoom dinámico y más.",

    // Header
    "nav.features": "Características",
    "nav.performance": "Rendimiento",
    "nav.privacy": "Privacidad",
    "nav.installation": "Instalación",
    "nav.download": "Descargar",

    // Hero
    "hero.version": "Versión {version} disponible",
    "hero.badge": "Open Source",
    "hero.title": "Revoluciona tu experiencia con",
    "hero.titleHighlight": "mouse y trackpad",
    "hero.titleEnd": "en macOS",
    "hero.description":
      "BuenMouse es la herramienta de productividad definitiva para macOS. Activa Mission Control, navega entre Spaces, y personaliza cada aspecto de tu mouse con latencia casi imperceptible.",
    "hero.download": "Descargar Gratis",
    "hero.github": "Ver en GitHub",
    "hero.latency": "Latencia",
    "hero.memory": "Memoria",
    "hero.license": "Licencia",
    "hero.active": "Activo",

    // Mockup toggles
    "mockup.missionControl": "Mission Control",
    "mockup.spacesNavigation": "Navegación Spaces",
    "mockup.dynamicZoom": "Zoom Dinámico",
    "mockup.invertedScroll": "Scroll Invertido",
    "mockup.autoStart": "Inicio Automático",

    // Features
    "features.label": "Características",
    "features.title": "Todo lo que necesitas para",
    "features.titleHighlight": "dominar tu mouse",
    "features.description":
      "BuenMouse transforma la forma en que interactúas con tu Mac. Características pensadas para potenciar tu productividad.",

    "features.missionControl.title": "Mission Control con Middle Click",
    "features.missionControl.description":
      "Activa Mission Control con un simple clic del botón central del mouse. Acceso instantáneo a todas tus ventanas y espacios.",

    "features.spacesNavigation.title": "Navegación entre Spaces",
    "features.spacesNavigation.description":
      "Arrastra horizontalmente con el botón central para cambiar entre espacios de trabajo de forma fluida.",

    "features.dynamicZoom.title": "Zoom Dinámico",
    "features.dynamicZoom.description":
      "Ctrl + Scroll para zoom inteligente en cualquier aplicación. Control preciso del nivel de ampliación.",

    "features.invertedScroll.title": "Scroll Invertido",
    "features.invertedScroll.description":
      "Natural scrolling personalizable para mouse. Configura la dirección que se sienta más natural para ti.",

    "features.autoStart.title": "Inicio Automático",
    "features.autoStart.description":
      "Lanzamiento con el sistema operativo. BuenMouse estará listo desde el momento que enciendes tu Mac.",

    "features.darkMode.title": "Modo Claro/Oscuro",
    "features.darkMode.description":
      "Se adapta automáticamente a la apariencia del sistema. Integración perfecta con tu configuración de macOS.",

    // Performance
    "performance.label": "Rendimiento",
    "performance.title": "Diseñado para ser",
    "performance.titleHighlight": "invisible",
    "performance.description":
      "BuenMouse está optimizado para que nunca notes que está funcionando. Máxima eficiencia con mínimo impacto en tu sistema.",
    "performance.note":
      "Métricas medidas en MacBook Pro M1 con uso normal del sistema",

    "performance.latency.label": "Latencia",
    "performance.latency.description": "Respuesta casi instantánea",

    "performance.memory.label": "Memoria",
    "performance.memory.description": "Huella mínima en RAM",

    "performance.cpu.label": "CPU",
    "performance.cpu.description": "Impacto imperceptible",

    "performance.battery.label": "Batería",
    "performance.battery.description": "Consumo despreciable",

    // Privacy
    "privacy.label": "Privacidad",
    "privacy.title": "Tu privacidad es",
    "privacy.titleHighlight": "nuestra prioridad",
    "privacy.description":
      "En un mundo donde tus datos son el producto, BuenMouse toma un enfoque diferente. Absolutamente nada de lo que haces sale de tu Mac.",

    "privacy.zeroTelemetry.title": "Cero telemetría",
    "privacy.zeroTelemetry.description":
      "No recopilamos ningún dato de uso ni información personal",

    "privacy.localProcessing.title": "Procesamiento 100% local",
    "privacy.localProcessing.description":
      "Todo se ejecuta en tu Mac. Ningún dato sale de tu dispositivo",

    "privacy.openSource.title": "Código abierto",
    "privacy.openSource.description":
      "Revisa cada línea de código en GitHub. Transparencia total",

    "privacy.minimalPermissions.title": "Permisos mínimos",
    "privacy.minimalPermissions.description":
      "Solo solicitamos acceso a Accesibilidad, estrictamente necesario",

    // Installation
    "installation.label": "Instalación",
    "installation.title": "Listo en",
    "installation.titleHighlight": "3 simples pasos",
    "installation.description":
      "Sin configuraciones complicadas. Descarga, instala y comienza a disfrutar de una mejor experiencia.",

    "installation.step1.title": "Descarga",
    "installation.step1.description":
      "Obtén la última versión desde GitHub Releases",

    "installation.step2.title": "Instala",
    "installation.step2.description":
      "Arrastra BuenMouse a tu carpeta de Aplicaciones",

    "installation.step3.title": "Configura",
    "installation.step3.description":
      "Otorga permisos de Accesibilidad cuando se solicite",

    "installation.downloadButton": "Descargar Última Versión",

    // Tech Specs
    "techSpecs.label": "Especificaciones",
    "techSpecs.title": "Construido con",
    "techSpecs.titleHighlight": "tecnología nativa",
    "techSpecs.description":
      "Desarrollado 100% en Swift y SwiftUI para máxima integración con macOS.",

    "techSpecs.os.label": "Sistema Operativo",
    "techSpecs.os.value": "macOS 13.0+",

    "techSpecs.tech.label": "Tecnología",
    "techSpecs.tech.value": "Swift + SwiftUI",

    "techSpecs.arch.label": "Arquitectura",
    "techSpecs.arch.value": "Universal (Intel + Apple Silicon)",

    "techSpecs.license.label": "Licencia",
    "techSpecs.license.value": "MIT (Open Source)",

    "techSpecs.github.title": "Código Abierto",
    "techSpecs.github.description":
      "Explora, contribuye y aprende del código fuente en GitHub",
    "techSpecs.github.button": "Ver Repositorio",

    // Final CTA
    "cta.title": "¿Listo para transformar tu",
    "cta.titleHighlight": "experiencia en macOS",
    "cta.titleEnd": "?",
    "cta.description":
      "Únete a miles de usuarios que ya mejoraron su productividad con BuenMouse. Gratis, open source, y sin telemetría.",
    "cta.download": "Descargar para macOS",
    "cta.github": "Ver en GitHub",
    "cta.requirement": "Requiere macOS 13.0 (Ventura) o posterior",

    // Footer
    "footer.tagline":
      "Revoluciona tu experiencia con mouse y trackpad en macOS",
    "footer.product": "Producto",
    "footer.resources": "Recursos",
    "footer.developer": "Desarrollador",
    "footer.downloads": "Descargas",
    "footer.reportBug": "Reportar Bug",
    "footer.licenseMIT": "Licencia MIT",
    "footer.contributors": "Contribuidores",
    "footer.copyright": "© {year} BuenMouse. Todos los derechos reservados.",
    "footer.madeWith": "Hecho con ❤️ para macOS",
  },

  en: {
    // Meta & SEO
    "meta.title":
      "BuenMouse - Revolutionize your mouse and trackpad experience on macOS",
    "meta.description":
      "BuenMouse is an open source productivity app for macOS that enhances your experience with Mission Control, Spaces navigation, dynamic zoom, and more.",

    // Header
    "nav.features": "Features",
    "nav.performance": "Performance",
    "nav.privacy": "Privacy",
    "nav.installation": "Installation",
    "nav.download": "Download",

    // Hero
    "hero.version": "Version {version} available",
    "hero.badge": "Open Source",
    "hero.title": "Revolutionize your experience with",
    "hero.titleHighlight": "mouse and trackpad",
    "hero.titleEnd": "on macOS",
    "hero.description":
      "BuenMouse is the ultimate productivity tool for macOS. Activate Mission Control, navigate between Spaces, and customize every aspect of your mouse with near-imperceptible latency.",
    "hero.download": "Download Free",
    "hero.github": "View on GitHub",
    "hero.latency": "Latency",
    "hero.memory": "Memory",
    "hero.license": "License",
    "hero.active": "Active",

    // Mockup toggles
    "mockup.missionControl": "Mission Control",
    "mockup.spacesNavigation": "Spaces Navigation",
    "mockup.dynamicZoom": "Dynamic Zoom",
    "mockup.invertedScroll": "Inverted Scroll",
    "mockup.autoStart": "Auto Start",

    // Features
    "features.label": "Features",
    "features.title": "Everything you need to",
    "features.titleHighlight": "master your mouse",
    "features.description":
      "BuenMouse transforms how you interact with your Mac. Features designed to boost your productivity.",

    "features.missionControl.title": "Mission Control with Middle Click",
    "features.missionControl.description":
      "Activate Mission Control with a simple middle button click. Instant access to all your windows and spaces.",

    "features.spacesNavigation.title": "Spaces Navigation",
    "features.spacesNavigation.description":
      "Drag horizontally with the middle button to switch between workspaces fluidly.",

    "features.dynamicZoom.title": "Dynamic Zoom",
    "features.dynamicZoom.description":
      "Ctrl + Scroll for smart zoom in any application. Precise control over magnification level.",

    "features.invertedScroll.title": "Inverted Scroll",
    "features.invertedScroll.description":
      "Customizable natural scrolling for mouse. Configure the direction that feels most natural to you.",

    "features.autoStart.title": "Auto Start",
    "features.autoStart.description":
      "Launch with the operating system. BuenMouse will be ready from the moment you turn on your Mac.",

    "features.darkMode.title": "Light/Dark Mode",
    "features.darkMode.description":
      "Automatically adapts to system appearance. Perfect integration with your macOS settings.",

    // Performance
    "performance.label": "Performance",
    "performance.title": "Designed to be",
    "performance.titleHighlight": "invisible",
    "performance.description":
      "BuenMouse is optimized so you never notice it's running. Maximum efficiency with minimal system impact.",
    "performance.note":
      "Metrics measured on MacBook Pro M1 with normal system usage",

    "performance.latency.label": "Latency",
    "performance.latency.description": "Near-instant response",

    "performance.memory.label": "Memory",
    "performance.memory.description": "Minimal RAM footprint",

    "performance.cpu.label": "CPU",
    "performance.cpu.description": "Imperceptible impact",

    "performance.battery.label": "Battery",
    "performance.battery.description": "Negligible consumption",

    // Privacy
    "privacy.label": "Privacy",
    "privacy.title": "Your privacy is",
    "privacy.titleHighlight": "our priority",
    "privacy.description":
      "In a world where your data is the product, BuenMouse takes a different approach. Absolutely nothing you do leaves your Mac.",

    "privacy.zeroTelemetry.title": "Zero telemetry",
    "privacy.zeroTelemetry.description":
      "We don't collect any usage data or personal information",

    "privacy.localProcessing.title": "100% local processing",
    "privacy.localProcessing.description":
      "Everything runs on your Mac. No data leaves your device",

    "privacy.openSource.title": "Open source",
    "privacy.openSource.description":
      "Review every line of code on GitHub. Total transparency",

    "privacy.minimalPermissions.title": "Minimal permissions",
    "privacy.minimalPermissions.description":
      "We only request Accessibility access, strictly necessary",

    // Installation
    "installation.label": "Installation",
    "installation.title": "Ready in",
    "installation.titleHighlight": "3 simple steps",
    "installation.description":
      "No complicated configurations. Download, install, and start enjoying a better experience.",

    "installation.step1.title": "Download",
    "installation.step1.description":
      "Get the latest version from GitHub Releases",

    "installation.step2.title": "Install",
    "installation.step2.description":
      "Drag BuenMouse to your Applications folder",

    "installation.step3.title": "Configure",
    "installation.step3.description":
      "Grant Accessibility permissions when prompted",

    "installation.downloadButton": "Download Latest Version",

    // Tech Specs
    "techSpecs.label": "Specifications",
    "techSpecs.title": "Built with",
    "techSpecs.titleHighlight": "native technology",
    "techSpecs.description":
      "Developed 100% in Swift and SwiftUI for maximum macOS integration.",

    "techSpecs.os.label": "Operating System",
    "techSpecs.os.value": "macOS 13.0+",

    "techSpecs.tech.label": "Technology",
    "techSpecs.tech.value": "Swift + SwiftUI",

    "techSpecs.arch.label": "Architecture",
    "techSpecs.arch.value": "Universal (Intel + Apple Silicon)",

    "techSpecs.license.label": "License",
    "techSpecs.license.value": "MIT (Open Source)",

    "techSpecs.github.title": "Open Source",
    "techSpecs.github.description":
      "Explore, contribute, and learn from the source code on GitHub",
    "techSpecs.github.button": "View Repository",

    // Final CTA
    "cta.title": "Ready to transform your",
    "cta.titleHighlight": "macOS experience",
    "cta.titleEnd": "?",
    "cta.description":
      "Join thousands of users who have already improved their productivity with BuenMouse. Free, open source, and no telemetry.",
    "cta.download": "Download for macOS",
    "cta.github": "View on GitHub",
    "cta.requirement": "Requires macOS 13.0 (Ventura) or later",

    // Footer
    "footer.tagline":
      "Revolutionize your mouse and trackpad experience on macOS",
    "footer.product": "Product",
    "footer.resources": "Resources",
    "footer.developer": "Developer",
    "footer.downloads": "Downloads",
    "footer.reportBug": "Report Bug",
    "footer.licenseMIT": "MIT License",
    "footer.contributors": "Contributors",
    "footer.copyright": "© {year} BuenMouse. All rights reserved.",
    "footer.madeWith": "Made with ❤️ for macOS",
  },
} as const;

export type TranslationKey = keyof typeof ui.es;
