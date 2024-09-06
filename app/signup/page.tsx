'use client'

import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../firebase/config'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import backgroundImage from '../login/background.webp'
import googleLogo from '../login/google.png'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (password !== confirmPassword) {
      setError("Passwords don't match")
      return
    }
    
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      router.push('/dashboard')
    } catch (error) {
      console.error('Error signing up:', error)
      setError('Failed to create an account. Please try again.')
    }
  }

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
      router.push('/dashboard')
    } catch (error) {
      console.error('Error signing up with Google:', error)
      // Handle error (e.g., show error message to user)
    }
  }

  return (
    <div className="flex h-screen">
      {/* Left side - Signup Form (1/3 width) */}
      <div className="flex-1 flex items-center justify-center bg-orange-200">
        <div className="max-w-md w-full p-6">
          <h1 className="text-xl font-bold mb-6 text-left text-orange-950">Sign Up</h1>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border-none rounded bg-orange-100 text-red-600"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border-none rounded bg-orange-100 text-red-600"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-4 border-none rounded bg-orange-100 text-red-600"
              required
            />
            <button type="submit" className="w-full bg-orange-950 text-white p-2 rounded hover:bg-orange-900">
              Sign Up
            </button>
          </form>
          <button
            onClick={handleGoogleSignUp}
            className="w-full mt-4 bg-white text-gray-700 p-2 rounded hover:bg-gray-100 border-none flex items-center justify-center"
          >
            <Image src={googleLogo} alt="Google logo" width={20} height={20} className="mr-2" />
            Sign up with Google
          </button>
          <p className="mt-4 text-sm text-center text-orange-950">
            Already have an account? <Link href="/login" className="text-orange-700 hover:text-orange-900">Login</Link>
          </p>
        </div>
      </div>

      {/* Right side - Background Image (2/3 width) */}
      <div className="hidden md:flex md:flex-[2] relative">
        <Image
          src={backgroundImage}
          alt="Signup background"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}