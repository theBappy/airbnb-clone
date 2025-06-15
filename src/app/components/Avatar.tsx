'use client'

import Image from "next/image"

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar = ({src}:AvatarProps) => {
  return (
    <Image src={src || "/images/placeholder.jpg"} className="rounded-full" width={30} height={30} alt="avatar" />
  )
}

export default Avatar