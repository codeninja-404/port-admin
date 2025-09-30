import { UserAuthForm } from './components/user-auth-form'
import dpImg from '@/assets/dp.png'

export default function SignIn() {
  return (
    <>
      <div className='container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <div className='relative h-full  w-screen flex-col bg-muted p-10 text-white dark:border-b lg:flex lg:w-auto  lg:dark:border-r'>
          <div className='absolute inset-0 bg-zinc-900' />
          <div className='relative z-20 flex items-center text-lg font-medium'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mr-2 h-6 w-6'
            >
              <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
            </svg>
            S. Arefin
          </div>

          <img
            src={dpImg}
            className='relative m-auto rounded-full'
            width={301}
            height={60}
            alt='Vite'
          />

          <div className='relative z-20 mt-auto pt-4'>
            <blockquote className='space-y-2'>
              <p className='text-lg'>
                &ldquo;জিন্দেগি ঝান্ডুয়া, ফিরবি ঘামান্ডুয়া! &rdquo;
              </p>

              <footer className='text-sm'>Saidul Arefin</footer>
            </blockquote>
          </div>
        </div>
        <div className='px-4 lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-left'>
              <h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
              <p className='text-sm text-muted-foreground'>
                Enter your email and password below <br />
                to log into your account
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  )
}
