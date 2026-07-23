import AuthCard from '@/public/components/auth/AuthCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In | NirmanX',
  description: 'Sign in to your NirmanX account',
}

export default function SignInPage() {
  return <AuthCard mode="sign-in" />
}
