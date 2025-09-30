// // import { createBrowserRouter } from 'react-router-dom'
// // import GeneralError from './pages/errors/general-error'
// // import NotFoundError from './pages/errors/not-found-error'
// // import MaintenanceError from './pages/errors/maintenance-error'
// // import UnauthorisedError from './pages/errors/unauthorised-error.tsx'

// // const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     lazy: async () => {
// //       const AppShell = await import('./components/app-shell')
// //       return { Component: AppShell.default }
// //     },
// //     errorElement: <GeneralError />,
// //     children: [
// //       {
// //         index: true,
// //         lazy: async () => ({
// //           Component: (await import('./pages/dashboard/overview')).default,
// //         }),
// //       },
// //       {
// //         path: 'kanban',
// //         lazy: async () => ({
// //           Component: (await import('@/pages/kanban')).default,
// //         }),
// //       },
// //       {
// //         path: 'product',
// //         lazy: async () => ({
// //           Component: (await import('./pages/product')).default,
// //         }),
// //         children: [
// //           {
// //             index: true,
// //             lazy: async () => ({
// //               Component: (await import('./pages/product/list')).default,
// //             }),
// //           },
// //           {
// //             path: 'add-product',
// //             lazy: async () => ({
// //               Component: (await import('./pages/product/add')).default,
// //             }),
// //           },
// //         ],
// //       },
// //       {
// //         path: 'dashboard',
// //         lazy: async () => ({
// //           Component: (await import('@/pages/dashboard')).default,
// //         }),
// //       },
// //       {
// //         path: 'chats',
// //         lazy: async () => ({
// //           Component: (await import('@/pages/chats')).default,
// //         }),
// //       },
// //       {
// //         path: 'order',
// //         lazy: async () => ({
// //           Component: (await import('@/pages/order')).default,
// //         }),
// //       },
// //       {
// //         path: 'calendar',
// //         lazy: async () => ({
// //           Component: (await import('@/pages/calendar')).default,
// //         }),
// //       },
// //       {
// //         path: 'emails',
// //         children: [
// //           {
// //             index: true,
// //             lazy: async () => ({
// //               Component: (await import('@/pages/email/list')).default,
// //             }),
// //           },
// //           {
// //             path: 'send',
// //             lazy: async () => ({
// //               Component: (await import('@/pages/email/send')).default,
// //             }),
// //           },
// //         ],
// //       },
// //       {
// //         path: 'tasks',
// //         lazy: async () => ({
// //           Component: (await import('@/pages/tasks')).default,
// //         }),
// //       },

// //       {
// //         path: 'supports',
// //         lazy: async () => ({
// //           Component: (await import('@/pages/support')).default,
// //         }),
// //       },
// //       {
// //         path: 'users',
// //         lazy: async () => ({
// //           Component: (await import('@/pages/users')).default,
// //         }),
// //       },
// //       {
// //         path: 'settings',
// //         lazy: async () => ({
// //           Component: (await import('./pages/settings')).default,
// //         }),
// //         errorElement: <GeneralError />,
// //         children: [
// //           {
// //             index: true,
// //             lazy: async () => ({
// //               Component: (await import('./pages/settings/profile')).default,
// //             }),
// //           },
// //           {
// //             path: 'account',
// //             lazy: async () => ({
// //               Component: (await import('./pages/settings/account')).default,
// //             }),
// //           },
// //           {
// //             path: 'appearance',
// //             lazy: async () => ({
// //               Component: (await import('./pages/settings/appearance')).default,
// //             }),
// //           },
// //           {
// //             path: 'notifications',
// //             lazy: async () => ({
// //               Component: (await import('./pages/settings/notifications'))
// //                 .default,
// //             }),
// //           },
// //           {
// //             path: 'display',
// //             lazy: async () => ({
// //               Component: (await import('./pages/settings/display')).default,
// //             }),
// //           },
// //           {
// //             path: 'error-example',
// //             lazy: async () => ({
// //               Component: (await import('./pages/settings/error-example'))
// //                 .default,
// //             }),
// //             errorElement: <GeneralError className='h-[50svh]' minimal />,
// //           },
// //         ],
// //       },
// //       {
// //         path: '/sign-in',
// //         lazy: async () => ({
// //           Component: (await import('./pages/auth/sign-in')).default,
// //         }),
// //       },
// //       {
// //         path: '/sign-in-2',
// //         lazy: async () => ({
// //           Component: (await import('./pages/auth/sign-in-2')).default,
// //         }),
// //       },
// //       {
// //         path: '/sign-up',
// //         lazy: async () => ({
// //           Component: (await import('./pages/auth/sign-up')).default,
// //         }),
// //       },
// //       {
// //         path: '/forgot-password',
// //         lazy: async () => ({
// //           Component: (await import('./pages/auth/forgot-password')).default,
// //         }),
// //       },
// //       {
// //         path: '/otp',
// //         lazy: async () => ({
// //           Component: (await import('./pages/auth/otp')).default,
// //         }),
// //       },
// //     ],
// //   },

// //   { path: '/500', Component: GeneralError },
// //   { path: '/404', Component: NotFoundError },
// //   { path: '/503', Component: MaintenanceError },
// //   { path: '/401', Component: UnauthorisedError },

// //   { path: '*', Component: NotFoundError },
// // ])

// // export default router
// import { createBrowserRouter } from 'react-router-dom'
// import { ProtectedRoute } from '@/components/protected-route'
// import { PublicRoute } from '@/components/public-route'
// import GeneralError from './pages/errors/general-error'
// import NotFoundError from './pages/errors/not-found-error'
// import MaintenanceError from './pages/errors/maintenance-error'
// import UnauthorisedError from './pages/errors/unauthorised-error.tsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     lazy: async () => {
//       const { default: AppShell } = await import('./components/app-shell')
//       return { Component: AppShell }
//     },
//     errorElement: <GeneralError />,
//     children: [
//       // Protected Routes - All main app routes
//       {
//         index: true,
//         lazy: async () => {
//           const { default: Component } = await import(
//             './pages/dashboard/overview'
//           )
//           return {
//             Component: () => (
//               <ProtectedRoute>
//                 <Component />
//               </ProtectedRoute>
//             ),
//           }
//         },
//       },
//       {
//         path: 'kanban',
//         lazy: async () => {
//           const { default: Component } = await import('@/pages/kanban')
//           return {
//             Component: () => (
//               <ProtectedRoute>
//                 <Component />
//               </ProtectedRoute>
//             ),
//           }
//         },
//       },
//       {
//         path: 'product',
//         lazy: async () => {
//           const { default: Component } = await import('./pages/product')
//           return {
//             Component: () => (
//               <ProtectedRoute>
//                 <Component />
//               </ProtectedRoute>
//             ),
//           }
//         },
//         children: [
//           {
//             index: true,
//             lazy: async () => {
//               const { default: Component } = await import(
//                 './pages/product/list'
//               )
//               return { Component }
//             },
//           },
//           {
//             path: 'add-product',
//             lazy: async () => {
//               const { default: Component } = await import('./pages/product/add')
//               return { Component }
//             },
//           },
//         ],
//       },
//       {
//         path: 'dashboard',
//         lazy: async () => {
//           const { default: Component } = await import('@/pages/dashboard')
//           return {
//             Component: () => (
//               <ProtectedRoute>
//                 <Component />
//               </ProtectedRoute>
//             ),
//           }
//         },
//       },
//       {
//         path: 'chats',
//         lazy: async () => {
//           const { default: Component } = await import('@/pages/chats')
//           return {
//             Component: () => (
//               <ProtectedRoute>
//                 <Component />
//               </ProtectedRoute>
//             ),
//           }
//         },
//       },
//       {
//         path: 'order',
//         lazy: async () => {
//           const { default: Component } = await import('@/pages/order')
//           return {
//             Component: () => (
//               <ProtectedRoute>
//                 <Component />
//               </ProtectedRoute>
//             ),
//           }
//         },
//       },
//       {
//         path: 'calendar',
//         lazy: async () => {
//           const { default: Component } = await import('@/pages/calendar')
//           return {
//             Component: () => (
//               <ProtectedRoute>
//                 <Component />
//               </ProtectedRoute>
//             ),
//           }
//         },
//       },
//       {
//         path: 'emails',
//         lazy: async () => {
//           const { default: Component } = await import('@/pages/email')
//           return {
//             Component: () => (
//               <ProtectedRoute>
//                 <Component />
//               </ProtectedRoute>
//             ),
//           }
//         },
//         children: [
//           {
//             index: true,
//             lazy: async () => {
//               const { default: Component } = await import('@/pages/email/list')
//               return { Component }
//             },
//           },
//           {
//             path: 'send',
//             lazy: async () => {
//               const { default: Component } = await import('@/pages/email/send')
//               return { Component }
//             },
//           },
//         ],
//       },
//       {
//         path: 'tasks',
//         lazy: async () => {
//           const { default: Component } = await import('@/pages/tasks')
//           return {
//             Component: () => (
//               <ProtectedRoute>
//                 <Component />
//               </ProtectedRoute>
//             ),
//           }
//         },
//       },
//       {
//         path: 'supports',
//         lazy: async () => {
//           const { default: Component } = await import('@/pages/support')
//           return {
//             Component: () => (
//               <ProtectedRoute>
//                 <Component />
//               </ProtectedRoute>
//             ),
//           }
//         },
//       },
//       {
//         path: 'users',
//         lazy: async () => {
//           const { default: Component } = await import('@/pages/users')
//           return {
//             Component: () => (
//               <ProtectedRoute>
//                 <Component />
//               </ProtectedRoute>
//             ),
//           }
//         },
//       },
//       {
//         path: 'settings',
//         lazy: async () => {
//           const { default: Component } = await import('./pages/settings')
//           return {
//             Component: () => (
//               <ProtectedRoute>
//                 <Component />
//               </ProtectedRoute>
//             ),
//           }
//         },
//         errorElement: <GeneralError />,
//         children: [
//           {
//             index: true,
//             lazy: async () => {
//               const { default: Component } = await import(
//                 './pages/settings/profile'
//               )
//               return { Component }
//             },
//           },
//           {
//             path: 'account',
//             lazy: async () => {
//               const { default: Component } = await import(
//                 './pages/settings/account'
//               )
//               return { Component }
//             },
//           },
//           {
//             path: 'appearance',
//             lazy: async () => {
//               const { default: Component } = await import(
//                 './pages/settings/appearance'
//               )
//               return { Component }
//             },
//           },
//           {
//             path: 'notifications',
//             lazy: async () => {
//               const { default: Component } = await import(
//                 './pages/settings/notifications'
//               )
//               return { Component }
//             },
//           },
//           {
//             path: 'display',
//             lazy: async () => {
//               const { default: Component } = await import(
//                 './pages/settings/display'
//               )
//               return { Component }
//             },
//           },
//           {
//             path: 'error-example',
//             lazy: async () => {
//               const { default: Component } = await import(
//                 './pages/settings/error-example'
//               )
//               return { Component }
//             },
//             errorElement: <GeneralError className='h-[50svh]' minimal />,
//           },
//         ],
//       },

//       // Public Routes - Authentication pages
//       {
//         path: '/sign-in',
//         lazy: async () => {
//           const { default: Component } = await import('./pages/auth/sign-in')
//           return {
//             Component: () => (
//               <PublicRoute>
//                 <Component />
//               </PublicRoute>
//             ),
//           }
//         },
//       },
//       {
//         path: '/sign-in-2',
//         lazy: async () => {
//           const { default: Component } = await import('./pages/auth/sign-in-2')
//           return {
//             Component: () => (
//               <PublicRoute>
//                 <Component />
//               </PublicRoute>
//             ),
//           }
//         },
//       },
//       {
//         path: '/sign-up',
//         lazy: async () => {
//           const { default: Component } = await import('./pages/auth/sign-up')
//           return {
//             Component: () => (
//               <PublicRoute>
//                 <Component />
//               </PublicRoute>
//             ),
//           }
//         },
//       },
//       {
//         path: '/forgot-password',
//         lazy: async () => {
//           const { default: Component } = await import(
//             './pages/auth/forgot-password'
//           )
//           return {
//             Component: () => (
//               <PublicRoute>
//                 <Component />
//               </PublicRoute>
//             ),
//           }
//         },
//       },
//       {
//         path: '/otp',
//         lazy: async () => {
//           const { default: Component } = await import('./pages/auth/otp')
//           return {
//             Component: () => (
//               <PublicRoute>
//                 <Component />
//               </PublicRoute>
//             ),
//           }
//         },
//       },
//     ],
//   },

//   // Error pages (public)
//   { path: '/500', Component: GeneralError },
//   { path: '/404', Component: NotFoundError },
//   { path: '/503', Component: MaintenanceError },
//   { path: '/401', Component: UnauthorisedError },

//   { path: '*', Component: NotFoundError },
// ])

// export default router
import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from '@/components/protected-route'
import { PublicRoute } from '@/components/public-route'
import GeneralError from './pages/errors/general-error'
import NotFoundError from './pages/errors/not-found-error'
import MaintenanceError from './pages/errors/maintenance-error'
import UnauthorisedError from './pages/errors/unauthorised-error.tsx'

const router = createBrowserRouter([
  // Public routes without layout (auth pages)
  {
    path: '/sign-in',
    lazy: async () => {
      const { default: Component } = await import('./pages/auth/sign-in')
      return {
        Component: () => (
          <PublicRoute>
            <Component />
          </PublicRoute>
        ),
      }
    },
  },
  {
    path: '/sign-in-2',
    lazy: async () => {
      const { default: Component } = await import('./pages/auth/sign-in-2')
      return {
        Component: () => (
          <PublicRoute>
            <Component />
          </PublicRoute>
        ),
      }
    },
  },
  {
    path: '/sign-up',
    lazy: async () => {
      const { default: Component } = await import('./pages/auth/sign-up')
      return {
        Component: () => (
          <PublicRoute>
            <Component />
          </PublicRoute>
        ),
      }
    },
  },
  {
    path: '/forgot-password',
    lazy: async () => {
      const { default: Component } = await import(
        './pages/auth/forgot-password'
      )
      return {
        Component: () => (
          <PublicRoute>
            <Component />
          </PublicRoute>
        ),
      }
    },
  },
  {
    path: '/otp',
    lazy: async () => {
      const { default: Component } = await import('./pages/auth/otp')
      return {
        Component: () => (
          <PublicRoute>
            <Component />
          </PublicRoute>
        ),
      }
    },
  },

  // Main app routes with layout (protected)
  {
    path: '/',
    lazy: async () => {
      const { default: AppShell } = await import('./components/app-shell')
      return { Component: AppShell }
    },
    errorElement: <GeneralError />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Component } = await import(
            './pages/dashboard/overview'
          )
          return {
            Component: () => (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            ),
          }
        },
      },
      {
        path: 'kanban',
        lazy: async () => {
          const { default: Component } = await import('@/pages/kanban')
          return {
            Component: () => (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            ),
          }
        },
      },
      {
        path: 'project',
        lazy: async () => {
          const { default: Component } = await import('./pages/project')
          return {
            Component: () => (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            ),
          }
        },
      },
      {
        path: 'dashboard',
        lazy: async () => {
          const { default: Component } = await import('@/pages/dashboard')
          return {
            Component: () => (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            ),
          }
        },
      },
      {
        path: 'chats',
        lazy: async () => {
          const { default: Component } = await import('@/pages/chats')
          return {
            Component: () => (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            ),
          }
        },
      },
      {
        path: 'order',
        lazy: async () => {
          const { default: Component } = await import('@/pages/order')
          return {
            Component: () => (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            ),
          }
        },
      },
      {
        path: 'calendar',
        lazy: async () => {
          const { default: Component } = await import('@/pages/calendar')
          return {
            Component: () => (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            ),
          }
        },
      },
      {
        path: 'emails',
        lazy: async () => {
          const { default: Component } = await import('@/pages/email')
          return {
            Component: () => (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            ),
          }
        },
        children: [
          {
            index: true,
            lazy: async () => {
              const { default: Component } = await import('@/pages/email/list')
              return { Component }
            },
          },
          {
            path: 'send',
            lazy: async () => {
              const { default: Component } = await import('@/pages/email/send')
              return { Component }
            },
          },
        ],
      },
      {
        path: 'tasks',
        lazy: async () => {
          const { default: Component } = await import('@/pages/tasks')
          return {
            Component: () => (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            ),
          }
        },
      },
      {
        path: 'supports',
        lazy: async () => {
          const { default: Component } = await import('@/pages/support')
          return {
            Component: () => (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            ),
          }
        },
      },
      {
        path: 'users',
        lazy: async () => {
          const { default: Component } = await import('@/pages/users')
          return {
            Component: () => (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            ),
          }
        },
      },
      {
        path: 'settings',
        lazy: async () => {
          const { default: Component } = await import('./pages/settings')
          return {
            Component: () => (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            ),
          }
        },
        errorElement: <GeneralError />,
        children: [
          {
            index: true,
            lazy: async () => {
              const { default: Component } = await import(
                './pages/settings/profile'
              )
              return { Component }
            },
          },
          {
            path: 'account',
            lazy: async () => {
              const { default: Component } = await import(
                './pages/settings/account'
              )
              return { Component }
            },
          },
          {
            path: 'appearance',
            lazy: async () => {
              const { default: Component } = await import(
                './pages/settings/appearance'
              )
              return { Component }
            },
          },
          {
            path: 'notifications',
            lazy: async () => {
              const { default: Component } = await import(
                './pages/settings/notifications'
              )
              return { Component }
            },
          },
          {
            path: 'display',
            lazy: async () => {
              const { default: Component } = await import(
                './pages/settings/display'
              )
              return { Component }
            },
          },
          {
            path: 'error-example',
            lazy: async () => {
              const { default: Component } = await import(
                './pages/settings/error-example'
              )
              return { Component }
            },
            errorElement: <GeneralError className='h-[50svh]' minimal />,
          },
        ],
      },
    ],
  },

  // Error pages (public - no layout)
  { path: '/500', Component: GeneralError },
  { path: '/404', Component: NotFoundError },
  { path: '/503', Component: MaintenanceError },
  { path: '/401', Component: UnauthorisedError },

  { path: '*', Component: NotFoundError },
])

export default router
