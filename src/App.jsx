import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom';

import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import AppBreadcrumbs from './components/AppBreadcrumbs';

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
