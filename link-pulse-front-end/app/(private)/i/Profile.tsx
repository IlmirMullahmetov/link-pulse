'use client'

import { Loader } from "@/components/UI/Loader"
import { useProfile } from "@/hooks/useProfile"

export default function Profile() {
  const { profile, isLoading } = useProfile(); 
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="h-full">
        </div>
      )}
    </>
  )
}

