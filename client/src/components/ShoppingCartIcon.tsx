"use client"

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const ShoppingCartIcon = () => {
  return (
    <Link href="/cart" className="relative">
        <ShoppingCart className="w-4 h-4"/>
        <span className="absolute -top-3 -right-3 bg-accent rounded-full text-gray-600 font-semibold w-4 h-4 text-center text-xs">0</span>
    </Link>
  )
}

export default ShoppingCartIcon