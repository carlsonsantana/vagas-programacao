import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom';

import AppHeader from './components/layout/AppHeader';
import AppContent from './components/layout/AppContent';
import AppBreadcrumbs from './components/layout/AppBreadcrumbs';

function App() {
  return (
    <div className="container-fluid">
      <Router basename="/vagas-programacao/">
        <AppHeader />
        <AppBreadcrumbs />
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
