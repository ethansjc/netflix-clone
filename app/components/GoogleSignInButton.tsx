"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import GoogleIcon from "../../public/google-icon.svg"

export default function GoogleSignInButton() {
    return (
        <Button variant="outline" size="icon">
            <Image src={GoogleIcon} alt="Google icon" className="w-4 h-4" />
        </Button>
    )
}