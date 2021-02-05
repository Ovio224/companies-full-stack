import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import CompanyView from 'src/views/company/CompanyView';
import CustomerListView from 'src/views/job/JobListView';
import DashboardView from 'src/views/dashboard/DashboardView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProposalListView from 'src/views/proposal/ProposalListView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'company', element: <CompanyView /> },
      { path: 'proposals', element: <ProposalListView /> },
      { path: 'jobs', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
