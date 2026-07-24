'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Icons from '@/public/components/common/Icons'
import Cta from '../common/Cta'

interface AuthCardProps {
  mode: 'sign-in' | 'sign-up'
}

const AuthCard = ({ mode }: AuthCardProps) => {
  const isSignIn = mode === 'sign-in'

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handleChange = async (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(formData)
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(formData),
      })
      const data  = await res.json();
      if (res.ok) {
        alert("signup successfully")
        console.log(data)
      } else{
        alert(data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen bg-[#EBF0F5] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-125 p-8 md:p-10">

        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-blue transition-colors mb-6 group"
        >
          <Icons icon="arrowRight" className="w-4 h-4 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
          Back
        </Link>

        {/* Title */}
        <h1 className="text-2xl font-bold text-text-primary mb-1">
          {isSignIn ? 'Sign in' : 'Sign up'}
        </h1>
        <p className="text-gray text-sm mb-6">
          {isSignIn
            ? 'Welcome back! Enter your credentials'
            : 'Create your account to get started'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name — sign up only */}
          {!isSignIn && (
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Full Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray/30 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-gray/60 outline-none focus:border-blue transition-colors"
              />
            </div>
          )}

          {/* Email — all modes */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full border border-gray/30 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-gray/60 outline-none focus:border-blue transition-colors"
            />
          </div>

          {/* Password — all modes */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray/30 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-gray/60 outline-none focus:border-blue transition-colors"
            />
          </div>

          {/* Submit */}
          <Cta type='submit' className='w-full! rounded-xl! justify-center!'>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Cta>
        </form>

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
