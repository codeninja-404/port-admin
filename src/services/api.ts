import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  RegisterResponse,
  About,
  UpdateAboutRequest,
  SkillCategory,
  CreateSkillCategoryRequest,
  ContactInfo,
  ContactMessage,
  SendMessageRequest,
  HealthStatus,
} from '@/types/api'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      headers.set('content-type', 'application/json')
      return headers
    },
  }),
  tagTypes: ['About', 'Skills', 'Contact', 'Auth', 'Messages'],
  endpoints: (builder) => ({
    // Auth endpoints - NO transformResponse since backend returns data directly
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/api/auth/login',
        method: 'POST',
        body: credentials,
      }),
      // Remove transformResponse - backend returns { token, user } directly
      invalidatesTags: ['Auth'],
    }),

    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (userData) => ({
        url: '/api/auth/register',
        method: 'POST',
        body: userData,
      }),
      // Remove transformResponse - backend returns { message } directly
      invalidatesTags: ['Auth'],
    }),

    // About endpoints - check if these also return data directly
    getAbout: builder.query<About, void>({
      query: () => '/api/about',
      // Remove transformResponse initially, add back if needed
      providesTags: ['About'],
    }),

    updateAbout: builder.mutation<About, UpdateAboutRequest>({
      query: (data) => ({
        url: '/api/about',
        method: 'PUT',
        body: data,
      }),
      // Remove transformResponse initially, add back if needed
      invalidatesTags: ['About'],
    }),

    // Skills endpoints
    getSkills: builder.query<SkillCategory[], void>({
      query: () => '/api/skills',
      // Remove transformResponse initially, add back if needed
      providesTags: ['Skills'],
    }),

    createSkillCategory: builder.mutation<
      SkillCategory,
      CreateSkillCategoryRequest
    >({
      query: (data) => ({
        url: '/api/skills',
        method: 'POST',
        body: data,
      }),
      // Remove transformResponse initially, add back if needed
      invalidatesTags: ['Skills'],
    }),

    // Contact endpoints
    getContactInfo: builder.query<ContactInfo, void>({
      query: () => '/api/contact/info',
      // Remove transformResponse initially, add back if needed
      providesTags: ['Contact'],
    }),

    sendMessage: builder.mutation<void, SendMessageRequest>({
      query: (data) => ({
        url: '/api/contact/message',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Messages'],
    }),

    getMessages: builder.query<ContactMessage[], void>({
      query: () => '/api/contact/messages',
      // Remove transformResponse initially, add back if needed
      providesTags: ['Messages'],
    }),

    // System endpoints
    healthCheck: builder.query<HealthStatus, void>({
      query: () => '/api/health',
      // Remove transformResponse initially, add back if needed
    }),
  }),
})

export const {
  // Auth
  useLoginMutation,
  useRegisterMutation,

  // About
  useGetAboutQuery,
  useUpdateAboutMutation,

  // Skills
  useGetSkillsQuery,
  useCreateSkillCategoryMutation,

  // Contact
  useGetContactInfoQuery,
  useSendMessageMutation,
  useGetMessagesQuery,

  // System
  useHealthCheckQuery,
} = api
