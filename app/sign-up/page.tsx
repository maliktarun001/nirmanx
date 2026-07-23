import AuthCard from '@/public/components/auth/AuthCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up | NirmanX',
  description: 'Create your NirmanX account',
}

export default function SignUpPage() {
  return <AuthCard mode="sign-up" />
}
