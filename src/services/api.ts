import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  About,
  UpdateAboutRequest,
  SkillCategory,
  CreateSkillCategoryRequest,
  ContactInfo,
  ContactMessage,
  SendMessageRequest,
  HealthStatus,
  ApiResponse,
} from '@/types/api'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

// Helper to extract data from our API response format
const transformResponse = <T>(response: ApiResponse<T>): T => {
  console.log(response)
  return response
}

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
    // Auth endpoints
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/api/auth/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse,
      invalidatesTags: ['Auth'],
    }),

    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (userData) => ({
        url: '/api/auth/register',
        method: 'POST',
        body: userData,
      }),
      transformResponse,
      invalidatesTags: ['Auth'],
    }),

    // About endpoints
    getAbout: builder.query<About, void>({
      query: () => '/api/about',
      transformResponse,
      providesTags: ['About'],
    }),

    updateAbout: builder.mutation<About, UpdateAboutRequest>({
      query: (data) => ({
        url: '/api/about',
        method: 'PUT',
        body: data,
      }),
      transformResponse,
      invalidatesTags: ['About'],
    }),

    // Skills endpoints
    getSkills: builder.query<SkillCategory[], void>({
      query: () => '/api/skills',
      transformResponse,
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
      transformResponse,
      invalidatesTags: ['Skills'],
    }),

    // Contact endpoints
    getContactInfo: builder.query<ContactInfo, void>({
      query: () => '/api/contact/info',
      transformResponse,
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
      transformResponse,
      providesTags: ['Messages'],
    }),

    // System endpoints
    healthCheck: builder.query<HealthStatus, void>({
      query: () => '/api/health',
      transformResponse,
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
