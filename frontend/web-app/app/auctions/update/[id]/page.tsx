import { getDetailedViewData } from "@/app/actions/auctionActions";
import Heading from "@/app/components/Heading";
import AuctionForm from "../../AuctionForm";

export default async function Update({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const auction = await getDetailedViewData(id);

    return (
        <div className="mx-auto max-w-[70%] shadow-lg p-10 bg-white rounded-lg">
            <Heading
                title="Update your auctions"
                subtitle="Please update the details of your car (only these properties can be updated)" />

            <AuctionForm auction={auction} />
        </div>
    )
}