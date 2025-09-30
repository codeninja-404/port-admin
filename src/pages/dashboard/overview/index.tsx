import { Layout } from '@/components/custom/layout'

import { Tabs, TabsContent } from '@/components/ui/tabs'

import { GitHubStatus } from '../components/github-status'

export default function DashboardPage() {
  return (
    <Layout>
      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>
        </div>
        <Tabs
          orientation='vertical'
          defaultValue='overview'
          className='space-y-4'
        >
          <TabsContent value='overview' className='space-y-4'>
            <GitHubStatus />
          </TabsContent>
        </Tabs>
      </Layout.Body>
    </Layout>
  )
}
