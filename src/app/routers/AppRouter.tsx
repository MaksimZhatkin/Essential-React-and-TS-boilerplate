import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import React from 'react';

import { Layout } from 'app/layout/';
import { Fallback } from 'shared/ui/Fallback';

export function AppRouter() {
  const routers = createRoutesFromElements(
    <Route path="/" element={<Layout />} hydrateFallbackElement={<Fallback />}>
      <Route
        path="/"
        lazy={async () => {
          const m = await import('pages/HomePage');
          return { Component: m.HomePage };
        }}
      />
    </Route>
  );

  const router = createHashRouter(routers, {});

  return <RouterProvider router={router} />;
}
