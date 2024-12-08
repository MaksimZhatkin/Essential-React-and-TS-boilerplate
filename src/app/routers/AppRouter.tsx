import { createHashRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import React from 'react';

import { Layout } from 'app/layout/';
import { Fallback } from 'shared/ui/Fallback';

export function AppRouter() {
  const routers = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="/articles/1" replace />} />
      <Route
        path="/articles/:page"
        lazy={async () => {
          const m = await import('pages/HomePage');
          return { Component: m.HomePage };
        }}
      />

      <Route path="*" element={<Fallback />} />
    </Route>
  );

  const router = createHashRouter(routers, {});

  return <RouterProvider router={router} />;
}
