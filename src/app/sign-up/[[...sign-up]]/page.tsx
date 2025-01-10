import {SignUp} from '@clerk/nextjs'

export default function SignUpPage() {
  return (
  <main className='flex items-center justify-center  bg-[#F5F5F5] w-full h-screen '>
    <div className='mx-5'>
      <SignUp/>
    </div>
  </main>
  )
}

export function generateStaticParams() {
  return [{ 'sign-up': [] }];
}