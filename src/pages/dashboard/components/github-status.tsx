import { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import {
  Star,
  GitFork,
  Eye,
  Code,
  Users,
  Calendar,
  ExternalLink,
  GitPullRequest,
  AlertCircle,
} from 'lucide-react'
import { Button } from '@/components/custom/button'
import { Skeleton } from '@/components/ui/skeleton'

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
  open_issues_count: number
  language: string
  updated_at: string
  private: boolean
}

interface GitHubUser {
  login: string
  avatar_url: string
  html_url: string
  public_repos: number
  followers: number
  following: number
  created_at: string
}

export function GitHubStatus() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Replace with your GitHub username
  const GITHUB_USERNAME = 'codeninja-404'
  const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}`
  const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true)

        // Fetch user data
        const userResponse = await fetch(GITHUB_API_URL)
        if (!userResponse.ok) throw new Error('Failed to fetch user data')
        const userData = await userResponse.json()
        setUser(userData)

        // Fetch repositories
        const reposResponse = await fetch(GITHUB_REPOS_URL)
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories')
        const reposData = await reposResponse.json()
        setRepos(reposData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [GITHUB_API_URL, GITHUB_REPOS_URL])

  if (loading) {
    return (
      <div className='space-y-4'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i}>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <Skeleton className='h-4 w-[100px]' />
                <Skeleton className='h-4 w-4' />
              </CardHeader>
              <CardContent>
                <Skeleton className='mb-1 h-8 w-[120px]' />
                <Skeleton className='h-3 w-[80px]' />
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader>
            <Skeleton className='h-6 w-[200px]' />
          </CardHeader>
          <CardContent>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className='mb-4 flex items-center space-x-4'>
                <Skeleton className='h-12 w-12 rounded-full' />
                <div className='space-y-2'>
                  <Skeleton className='h-4 w-[250px]' />
                  <Skeleton className='h-3 w-[200px]' />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <Card>
        <CardContent className='pt-6'>
          <div className='flex items-center justify-center text-destructive'>
            <AlertCircle className='mr-2 h-8 w-8' />
            <p>Error loading GitHub data: {error}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className='space-y-6'>
      {/* GitHub Stats Overview */}
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Public Repos</CardTitle>
            <Code className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{user?.public_repos || 0}</div>
            <p className='text-xs text-muted-foreground'>Total repositories</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Followers</CardTitle>
            <Users className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{user?.followers || 0}</div>
            <p className='text-xs text-muted-foreground'>GitHub followers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Stars</CardTitle>
            <Star className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>
              {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
            </div>
            <p className='text-xs text-muted-foreground'>
              Across all repositories
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Forks</CardTitle>
            <GitFork className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>
              {repos.reduce((acc, repo) => acc + repo.forks_count, 0)}
            </div>
            <p className='text-xs text-muted-foreground'>Repository forks</p>
          </CardContent>
        </Card>
      </div>
      {/* Profile Information */}
      {user && (
        <Card>
          <CardHeader>
            <CardTitle>GitHub Profile</CardTitle>
            <CardDescription>Your GitHub account information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex items-center space-x-4'>
              <img
                src={user.avatar_url}
                alt={user.login}
                className='h-16 w-16 rounded-full'
              />
              <div>
                <h3 className='font-semibold'>@{user.login}</h3>
                <div className='mt-2 flex items-center space-x-4 text-sm text-muted-foreground'>
                  <div className='flex items-center space-x-1'>
                    <Users className='h-4 w-4' />
                    <span>
                      {user.followers} followers · {user.following} following
                    </span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <Calendar className='h-4 w-4' />
                    <span>
                      Joined {new Date(user.created_at).getFullYear()}
                    </span>
                  </div>
                </div>
                <Button variant='outline' size='sm' className='mt-2' asChild>
                  <a
                    href={user.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View Profile
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      {/* Recent Repositories */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Repositories</CardTitle>
          <CardDescription>
            Your most recently updated GitHub repositories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            {repos.map((repo) => (
              <div
                key={repo.id}
                className='flex items-center justify-between rounded-lg border p-4'
              >
                <div className='flex items-center space-x-4'>
                  <div className='min-w-0 flex-1'>
                    <div className='mb-1 flex items-center space-x-2'>
                      <h3 className='truncate text-sm font-semibold'>
                        {repo.name}
                      </h3>
                      {repo.private && (
                        <Badge variant='secondary' className='text-xs'>
                          Private
                        </Badge>
                      )}
                    </div>
                    {repo.description && (
                      <p className='truncate text-sm text-muted-foreground'>
                        {repo.description}
                      </p>
                    )}
                    <div className='mt-2 flex items-center space-x-4'>
                      {repo.language && (
                        <div className='flex items-center space-x-1'>
                          <div className='h-3 w-3 rounded-full bg-blue-500'></div>
                          <span className='text-xs text-muted-foreground'>
                            {repo.language}
                          </span>
                        </div>
                      )}
                      <div className='flex items-center space-x-1'>
                        <Star className='h-3 w-3' />
                        <span className='text-xs text-muted-foreground'>
                          {repo.stargazers_count}
                        </span>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <GitFork className='h-3 w-3' />
                        <span className='text-xs text-muted-foreground'>
                          {repo.forks_count}
                        </span>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <Eye className='h-3 w-3' />
                        <span className='text-xs text-muted-foreground'>
                          {repo.watchers_count}
                        </span>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <GitPullRequest className='h-3 w-3' />
                        <span className='text-xs text-muted-foreground'>
                          {repo.open_issues_count}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant='ghost' size='sm' asChild>
                  <a
                    href={repo.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ExternalLink className='h-4 w-4' />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
