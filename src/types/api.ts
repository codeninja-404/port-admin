// Auth Types
export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
}

export interface AuthResponse {
  token: string
  user: {
    id: string
    email: string
    role: string
  }
}

export interface RegisterResponse {
  message: string
}

export interface User {
  id: string
  email: string
  role: string
}

// About Types
export interface About {
  id: string
  title: string
  description: string
  image: string
  stats: Stat[]
  socialLinks: SocialLink[]
  createdAt: string
  updatedAt: string
}

export interface Stat {
  id: string
  label: string
  value: string
  icon: string
}

export interface SocialLink {
  id: string
  platform: string
  url: string
  icon: string
}

export interface UpdateAboutRequest {
  title?: string
  description?: string
  image?: string
  stats?: Omit<Stat, 'id'>[]
  socialLinks?: Omit<SocialLink, 'id'>[]
}

// Skills Types
export interface SkillCategory {
  id: string
  name: string
  description: string
  skills: Skill[]
  createdAt: string
  updatedAt: string
}

export interface Skill {
  id: string
  name: string
  level: number // 1-5 or 1-100
  icon?: string
  categoryId: string
}

export interface CreateSkillCategoryRequest {
  name: string
  description: string
  skills?: Omit<Skill, 'id' | 'categoryId'>[]
}

// Contact Types
export interface ContactInfo {
  id: string
  email: string
  phone: string
  address: string
  website: string
  createdAt: string
  updatedAt: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  read: boolean
  createdAt: string
}

export interface SendMessageRequest {
  name: string
  email: string
  subject: string
  message: string
}

// System Types
export interface HealthStatus {
  status: 'healthy' | 'unhealthy'
  timestamp: string
  uptime: number
  version: string
}

// API Response Wrapper
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

export interface ApiError {
  message: string
  status: number
  errors?: Record<string, string[]>
}
