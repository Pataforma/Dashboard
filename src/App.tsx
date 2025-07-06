
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Dashboard imports
import VeterinarioDashboard from "./components/veterinario/VeterinarioDashboard";
import TutorDashboard from "./components/tutor/TutorDashboard";
import ParceiroDashboard from "./components/parceiro/ParceiroDashboard";
import AnuncianteDashboard from "./components/anunciante/AnuncianteDashboard";

// Tutor pages
import TutorPets from "./pages/tutor/TutorPets";
import TutorConsultas from "./pages/tutor/TutorConsultas";
import TutorVacinas from "./pages/tutor/TutorVacinas";
import TutorServicos from "./pages/tutor/TutorServicos";
import TutorPerfil from "./pages/tutor/TutorPerfil";

// Veterinario pages
import VeterinarioPacientes from "./pages/veterinario/VeterinarioPacientes";
import VeterinarioConsultas from "./pages/veterinario/VeterinarioConsultas";
import VeterinarioProntuarios from "./pages/veterinario/VeterinarioProntuarios";
import VeterinarioFinanceiro from "./pages/veterinario/VeterinarioFinanceiro";

// Parceiro pages
import ParceiroEventos from "./pages/parceiro/ParceiroEventos";
import ParceiroInteressados from "./pages/parceiro/ParceiroInteressados";
import ParceiroRelatorios from "./pages/parceiro/ParceiroRelatorios";

// Anunciante pages
import AnuncianteEventos from "./pages/anunciante/AnuncianteEventos";
import AnuncianteInscritos from "./pages/anunciante/AnuncianteInscritos";
import AnuncianteDivulgacao from "./pages/anunciante/AnuncianteDivulgacao";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Tutor routes */}
          <Route path="/tutor" element={<TutorDashboard />} />
          <Route path="/tutor/pets" element={<TutorPets />} />
          <Route path="/tutor/consultas" element={<TutorConsultas />} />
          <Route path="/tutor/vacinas" element={<TutorVacinas />} />
          <Route path="/tutor/servicos" element={<TutorServicos />} />
          <Route path="/tutor/perfil" element={<TutorPerfil />} />
          
          {/* Veterinario routes */}
          <Route path="/veterinario" element={<VeterinarioDashboard />} />
          <Route path="/veterinario/pacientes" element={<VeterinarioPacientes />} />
          <Route path="/veterinario/consultas" element={<VeterinarioConsultas />} />
          <Route path="/veterinario/prontuarios" element={<VeterinarioProntuarios />} />
          <Route path="/veterinario/financeiro" element={<VeterinarioFinanceiro />} />
          
          {/* Parceiro routes */}
          <Route path="/parceiro" element={<ParceiroDashboard />} />
          <Route path="/parceiro/eventos" element={<ParceiroEventos />} />
          <Route path="/parceiro/interessados" element={<ParceiroInteressados />} />
          <Route path="/parceiro/relatorios" element={<ParceiroRelatorios />} />
          
          {/* Anunciante routes */}
          <Route path="/anunciante" element={<AnuncianteDashboard />} />
          <Route path="/anunciante/eventos" element={<AnuncianteEventos />} />
          <Route path="/anunciante/inscritos" element={<AnuncianteInscritos />} />
          <Route path="/anunciante/divulgacao" element={<AnuncianteDivulgacao />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
