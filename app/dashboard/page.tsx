'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'

export default function Dashboard() {
  const [children, setChildren] = useState([])
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    } else {
      // Fetch children data for the authenticated user
    }
  }, [user, router])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      router.push('/login')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <div className="flex h-screen bg-white">
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-orange-950">Dashboard</h1>
            <button
              onClick={handleSignOut}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <LogOut className="mr-2" size={18} />
              Sign Out
            </button>
          </div>
          {children.length === 0 ? (
            <div className="text-center">
              <p className="mb-4 text-orange-950">No children added yet.</p>
              <Link 
                href="/add-child" 
                className="bg-orange-950 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <Plus className="mr-2" />
                Add Child
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {children.map((child, index) => (
                <li key={index} className="bg-orange-100 p-4 rounded">
                  {/* Display child information and link to child's page */}
                  <p className="text-orange-950">Child {index + 1}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}