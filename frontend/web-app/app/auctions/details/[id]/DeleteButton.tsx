"use client"

import { deleteAuction } from "@/app/actions/auctionActions"
import { Button, Spinner } from "flowbite-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

type Props = {
    id: string
}
export default function DeleteButton({ id }: Props) {
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    function handleDelete() {
        setLoading(true)
        deleteAuction(id).then(res => {
            if (res.error) throw res.error
            router.push("/")
        }).catch(error => {
            toast.error(error.status + ' ' + error.message)
        }).finally(() => setLoading(false))
    }
    return (
        <Button outline color={'red'} onClick={handleDelete}>
            <Link href={`/auctions/update/${id}`}>
                {loading && <Spinner size="sm" className="mr-3" />}
                Delete Auction
            </Link>
        </Button>
    )

}