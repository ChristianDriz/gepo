"use client"

import { useEffect, useState } from 'react'
import Loader from './Loader'

export default function Wrapper({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.body.classList.add('overflow-hidden')
        const timer = setTimeout(() => {
            setLoading(false)
            document.body.classList.remove('overflow-hidden')
        }, 4500)

        return () => {
            clearTimeout(timer)
            document.body.classList.remove('overflow-hidden')
        }
    }, [])

  return (
    <div className="relative">
        {loading && (
            <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
                <Loader />
            </div>
        )}
        <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}>
            {children}
        </div>
    </div>
  )
}
