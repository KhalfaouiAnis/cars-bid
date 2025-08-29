"use client"
import { useParamsStore } from "@/hooks/useParamsStore";
import { AiOutlineCar } from "react-icons/ai";

export default function Logo() {
    const reset = useParamsStore(state => state.reset)

    return (
        <div 
            className="flex items-center gap-2 text-3xl font-semibold text-red-400 cursor-pointer"
            onClick={reset}
            >
            <AiOutlineCar size={34} />
            <div>Carsties Auctions</div>
        </div>
    )
}