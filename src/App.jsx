import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Printer, Users, Wifi, Briefcase, 
  Settings, MonitorUp, Cloud, ShieldCheck, 
  Smartphone, Globe, Code, Server, 
  Terminal, Mail, Facebook, MessageSquare, ChevronRight
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enlaces de contacto
  const contactLinks = {
    whatsapp: "https://wa.me/523318319515?text=Hola,%20me%20interesa%20información.",
    email: "mailto:contacto@afsoluciones.com",
    facebook: "https://facebook.com/afsolucionestec"
  };

  return (
    <div className="min-h-screen bg-[#030508] text-gray-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      
      {/* Estilos globales para Scroll Suave */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      {/* Fondo de cuadrícula estilo "Plano de ingeniería / Sistema" */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Luces de neón difuminadas en el fondo */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Navegación Flotante (Estilo Píldora Moderna) */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
        <nav className={`pointer-events-auto flex items-center gap-6 px-6 py-3 rounded-full border transition-all duration-300 ${scrolled ? 'bg-[#0a0f18]/80 backdrop-blur-xl border-white/10 shadow-lg shadow-black/50' : 'bg-transparent border-transparent'}`}>
          <div className="flex items-center gap-2 mr-4">
             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-xs">AF</span>
              </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#hero" className="text-gray-400 hover:text-white transition-colors">Inicio</a>
            <a href="#soluciones" className="text-gray-400 hover:text-white transition-colors">Soluciones</a>
            <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
          </div>
          <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="ml-2 bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold hover:bg-cyan-400 transition-colors flex items-center gap-2">
            Iniciar <ArrowRight className="w-4 h-4" />
          </a>
        </nav>
      </div>

      <main className="relative z-10">
        
        {/* HERO SECTION: Diseño asimétrico y tipográfico */}
        <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono">
                <Terminal className="w-3 h-3" />
                <span>SYS_READY // OPTIMIZED</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Optimizamos tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">núcleo digital.</span>
              </h1>
              
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                Consultoría, desarrollo y soporte técnico. Implementamos infraestructura y software que hace que las personas y los negocios funcionen más rápido y seguros.
              </p>
              
              <div className="pt-4 flex items-center gap-6">
                <a href="#soluciones" className="group flex items-center gap-3 text-white font-semibold">
                  Explorar servicios
                  <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>

            {/* Hero Image (Logo) */}
            <div className="relative hidden lg:block">
              <div className="w-full max-w-md mx-auto relative flex items-center justify-center">
                {/* Glow effect behind the logo */}
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[100px] -z-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
                <img 
                  src="/logo.png" 
                  alt="AF Soluciones Logo" 
                  className="w-full h-auto drop-shadow-[0_0_30px_rgba(34,211,238,0.2)] transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID SECTION (Especialidades reinventadas) */}
        <section id="soluciones" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Arquitectura de <span className="text-cyan-400">Soluciones</span></h2>
            <p className="text-gray-400 max-w-2xl">Un ecosistema completo de servicios tecnológicos adaptados a las necesidades reales de tu proyecto.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[220px]">
            
            {/* Bloque 1: Grande (Web/Apps) */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-[#0a0f18] border border-white/5 p-8 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.3)] flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <Globe className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-2">Desarrollo Web y Apps</h3>
                <p className="text-gray-400">Creamos páginas web modernas, profesionales y aplicaciones personalizadas para negocios, emprendimientos y proyectos de alto impacto.</p>
              </div>
              <div className="relative z-10 mt-8 flex items-center text-sm font-mono text-blue-400">
                <span>[ FRONTEND_ & _BACKEND ]</span>
              </div>
            </div>

            {/* Bloque 2: Consultoría */}
            <div className="md:col-span-2 rounded-3xl bg-gradient-to-br from-[#0a0f18] to-[#111827] border border-white/5 p-8 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(34,211,238,0.2)] flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Consultoría Tecnológica</h3>
                <p className="text-gray-400 text-sm">Asesoramos a personas y empresas para elegir e implementar las mejores soluciones digitales.</p>
              </div>
            </div>

            {/* Bloque 3: Redes / WiFi */}
            <div className="rounded-3xl bg-[#0a0f18] border border-white/5 p-6 hover:bg-white/[0.02] hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(34,211,238,0.2)] flex flex-col justify-between group">
              <Wifi className="w-8 h-8 text-gray-300 mb-4 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Redes WiFi</h3>
                <p className="text-gray-400 text-sm leading-tight">Configuración segura y optimizada para hogares y negocios.</p>
              </div>
            </div>

            {/* Bloque 4: Seguridad */}
            <div className="rounded-3xl bg-[#0a0f18] border border-white/5 p-6 hover:bg-white/[0.02] hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(34,211,238,0.2)] flex flex-col justify-between group">
              <ShieldCheck className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Ciberseguridad</h3>
                <p className="text-gray-400 text-sm leading-tight">Protección de cuentas, redes y dispositivos.</p>
              </div>
            </div>

            {/* Bloque 5: Nube */}
            <div className="rounded-3xl bg-[#0a0f18] border border-white/5 p-6 hover:bg-white/[0.02] hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(34,211,238,0.2)] flex flex-col justify-between group">
              <Cloud className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Migración Cloud</h3>
                <p className="text-gray-400 text-sm leading-tight">Mueve sistemas y archivos a la nube para acceso global y seguro.</p>
              </div>
            </div>

            {/* Bloque 6: Largo (Automatización & Optimización) */}
            <div className="md:col-span-2 lg:col-span-3 rounded-3xl bg-[#0a0f18] border border-white/5 p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(34,211,238,0.2)] h-full group">
              <div className="flex flex-col md:flex-row gap-8 md:gap-0 md:divide-x divide-white/5 h-full items-start md:items-center">
                <div className="space-y-4 md:pr-6 w-full flex-1">
                  <Settings className="w-8 h-8 text-gray-300 group-hover:text-cyan-400 group-hover:rotate-45 transition-all duration-500" />
                  <h3 className="text-xl font-bold text-white">Automatización</h3>
                  <p className="text-gray-400 text-sm">Automatizamos tareas digitales para ahorrar tiempo y mejorar la eficiencia operativa.</p>
                </div>
                <div className="space-y-4 md:px-6 w-full flex-1">
                  <MonitorUp className="w-8 h-8 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
                  <h3 className="text-xl font-bold text-white">Optimización PC</h3>
                  <p className="text-gray-400 text-sm">Mejoramos el rendimiento de equipos, eliminando virus y configuraciones innecesarias.</p>
                </div>
                <div className="space-y-4 md:pl-6 w-full flex-1">
                  <Printer className="w-8 h-8 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
                  <h3 className="text-xl font-bold text-white">Periféricos</h3>
                  <p className="text-gray-400 text-sm">Integración e instalación de impresoras inalámbricas y dispositivos de oficina.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CINTA DE CREDENCIALES (Estilo Ticker / Marquee animado) */}
        <section className="py-10 border-y border-white/5 bg-[#05080f] overflow-hidden relative flex items-center">
          <style>
            {`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-scroll {
                animation: scroll 30s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}
          </style>

          {/* Difuminado lateral para suavizar la entrada/salida */}
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#030508] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#030508] to-transparent z-10 pointer-events-none"></div>

          <div className="flex whitespace-nowrap animate-scroll w-max">
            {/* Grupo 1 */}
            <div className="flex items-center gap-16 px-8 text-sm font-mono text-gray-500 uppercase tracking-widest">
              <span className="flex items-center gap-2"><Server className="w-4 h-4 text-cyan-500/50" /> Soluciones Digitales</span>
              <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-cyan-500/50" /> Consultoría Negocios</span>
              <span className="flex items-center gap-2"><Code className="w-4 h-4 text-cyan-500/50" /> Desarrollo Web</span>
              <span className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-cyan-500/50" /> Aplicaciones</span>
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-cyan-500/50" /> Ciberseguridad</span>
              <span className="flex items-center gap-2"><Cloud className="w-4 h-4 text-blue-500/50" /> Migración Cloud</span>
            </div>
            {/* Grupo 2 (Copia exacta para el loop infinito) */}
            <div className="flex items-center gap-16 px-8 text-sm font-mono text-gray-500 uppercase tracking-widest">
              <span className="flex items-center gap-2"><Server className="w-4 h-4 text-cyan-500/50" /> Soluciones Digitales</span>
              <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-cyan-500/50" /> Consultoría Negocios</span>
              <span className="flex items-center gap-2"><Code className="w-4 h-4 text-cyan-500/50" /> Desarrollo Web</span>
              <span className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-cyan-500/50" /> Aplicaciones</span>
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-cyan-500/50" /> Ciberseguridad</span>
              <span className="flex items-center gap-2"><Cloud className="w-4 h-4 text-blue-500/50" /> Migración Cloud</span>
            </div>
          </div>
        </section>

        {/* CONTACTO MINIMALISTA */}
        <section id="contacto" className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none rounded-full blur-3xl"></div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Iniciemos tu actualización.</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Mándanos un mensaje y platiquemos sobre lo que tu equipo, red o negocio necesita para operar al máximo nivel.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-cyan-50 transition-colors group">
              <MessageSquare className="w-5 h-5 text-[#25D366]" />
              Contactar por WhatsApp
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={contactLinks.facebook} target="_blank" rel="noreferrer" className="bg-[#0a0f18] border border-white/10 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/5 transition-colors">
              <Facebook className="w-5 h-5 text-[#1877F2]" />
              Visitar Facebook
            </a>
            <a href={contactLinks.email} className="bg-[#0a0f18] border border-white/10 text-white px-6 py-4 rounded-2xl flex items-center justify-center hover:bg-white/5 transition-colors">
              <Mail className="w-5 h-5 text-gray-400" />
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER ULTRA LIMPIO */}
      <footer className="border-t border-white/5 bg-[#030508] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-white font-bold tracking-wider text-sm">
             <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-[10px]">AF</span>
              </div>
            AF SOLUCIONES
          </div>
          <p className="text-xs text-gray-600 font-mono">
            © {new Date().getFullYear()} AF Soluciones Tecnológicas. ROOT_ACCESS_GRANTED.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;
