import {SignIn} from '@clerk/nextjs'

export default function SignUpPage() {
  return (
  <main className='flex items-center justify-center  bg-[#F5F5F5] w-full h-screen '>
    <SignIn/>
  </main>
  )
}

export function generateStaticParams() {
  return [{ 'sign-in': [] }];
}