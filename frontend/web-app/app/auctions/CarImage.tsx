"use client"

import Image from "next/image";
import { useState } from "react";

type Props = {
    imageUrl: string
}

export default function CarImage({ imageUrl }: Props) {
    const [loading, setLoading] = useState(true)

    return (
        <Image
            fill
            priority
            src={imageUrl}
            alt="Car image"
            onLoad={() => setLoading(false)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className={`object-cover duration-700 ease-in-out ${loading ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}
        />
    )
}