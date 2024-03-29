/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as CameraImport } from './routes/camera'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutFormIndexImport } from './routes/_layout/form/index'

// Create/Update Routes

const CameraRoute = CameraImport.update({
  path: '/camera',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutFormIndexRoute = LayoutFormIndexImport.update({
  path: '/form/',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/camera': {
      preLoaderRoute: typeof CameraImport
      parentRoute: typeof rootRoute
    }
    '/_layout/': {
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/form/': {
      preLoaderRoute: typeof LayoutFormIndexImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  LayoutRoute.addChildren([LayoutIndexRoute, LayoutFormIndexRoute]),
  CameraRoute,
])

/* prettier-ignore-end */
