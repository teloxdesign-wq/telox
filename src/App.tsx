import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { ContactPage } from './pages/ContactPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/work" component={WorkPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/:rest*">
              <NotFound />
            </Route>
          </Switch>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function NotFound() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-black text-white px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-white/60 mb-6">This page doesn't exist.</p>
        <a
          href="/"
          className="inline-flex items-center justify-center min-h-12 px-8 rounded-full bg-white text-black font-semibold hover:bg-blue-500 hover:text-white transition-colors"
        >
          Back home
        </a>
      </div>
    </div>
  );
}

export default App;
