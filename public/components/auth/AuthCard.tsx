import React from 'react'
import Link from 'next/link'
import Cta from '../common/Cta'

interface AuthCardProps {
  mode: 'sign-in' | 'sign-up'
}

const AuthCard = ({ mode }: AuthCardProps) => {
  const isSignIn = mode === 'sign-in'

  return (
    <div className="min-h-screen bg-[#EBF0F5] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-125 p-8 md:p-10">

        {/* Title */}
        <h1 className="text-2xl font-bold text-text-primary mb-1">
          {isSignIn ? 'Sign in' : 'Sign up'}
        </h1>
        <p className="text-gray text-sm mb-6">
          {isSignIn
            ? 'Welcome back! Enter your mobile number'
            : 'Create your account to get started'}
        </p>

        <div className="space-y-5">

          {/* Full Name — sign up only */}
          {!isSignIn && (
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray/30 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-gray/60 outline-none focus:border-blue transition-colors"
              />
            </div>
          )}

          {/* Email — sign up only */}
          {!isSignIn && (
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray/30 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-gray/60 outline-none focus:border-blue transition-colors"
              />
            </div>
          )}

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">
              Mobile Number
            </label>
            <div className="flex gap-2 flex-wrap">
              {/* Country code */}
              <div className="flex items-center gap-1.5 border border-gray/30 rounded-xl px-3 py-3 text-sm font-medium text-text-primary bg-white max-sm:justify-between max-[420px]:w-full sm:min-w-22.5">
                <span className="text-base leading-none">🇮🇳</span>
                <div className='flex items-center gap-2'>
                <span>+91</span>
                <svg className="w-3 h-3 text-gray mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg></div>
              </div>

              {/* Number input */}
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="flex-1 border border-gray/30 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-gray/60 outline-none focus:border-blue transition-colors"
              />
            </div>
            <p className="mt-2 text-xs text-gray">We&apos;ll send an OTP to verify</p>
          </div>

          {/* Submit */}
          <Cta className='w-full! rounded-xl! justify-center!'>  Send OTP</Cta>
        </div>

        {/* Footer link */}
        <p className="text-center text-sm text-gray mt-5">
          {isSignIn ? (
            <>Don&apos;t have an account?{' '}
              <Link href="/sign-up" className="text-blue font-semibold hover:underline">Sign Up</Link>
            </>
          ) : (
            <>Already have an account?{' '}
              <Link href="/sign-in" className="text-blue font-semibold hover:underline">Sign In</Link>
            </>
          )}
        </p>

      </div>
    </div>
  )
}

export default AuthCard
