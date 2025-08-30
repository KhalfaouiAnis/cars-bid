import { getDetailedViewData } from "@/app/actions/auctionActions"
import Heading from "@/app/components/Heading";
import CountdownTimer from "../../CountdownTimer";
import { Fragment } from "react";
import CarImage from "../../CarImage";
import DetailedSpecs from "./DetailedSpecs";

export default async function Details({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const auction = await getDetailedViewData(id);

    return (
        <Fragment>
            <div className="flex justify-between">
                <Heading title={`${auction.make} ${auction.model}`} />
                <div className="flex gap-3">
                    <h3 className="text-2xl font-semibold">Time remaining:</h3>
                    <CountdownTimer auctionEnd={auction.auctionEnd} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-3">
                <div className="relative w-full bg-gray-200 aspect-[4/3] rounded-lg overflow-hidden">
                    <CarImage imageUrl={auction.imageUrl} />
                </div>
                <div className="border-2 rounded-lg p-2 bg-gray-200">
                    <Heading title="Bids" />
                </div>
            </div>
            <div className="mt-3 grid grid-cols-1 rounded-lg">
                <DetailedSpecs auction={auction} />
            </div>
        </Fragment>
    )
}