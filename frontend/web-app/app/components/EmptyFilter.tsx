import { useParamsStore } from "@/hooks/useParamsStore";
import Heading from "./Heading";
import { Button } from "flowbite-react";

type Props = {
    title?: string;
    subtitle?: string;
    showReset?: boolean
}
export default function EmptyFilter({
    title = 'No matches for this filter',
    subtitle = 'try changing the filter or search term',
    showReset
}: Props) {
    const {reset} = useParamsStore(state => state)

    return (
        <div className="flex flex-col gap-2 items-center justify-center h-[40vh] shadow-lg">
            <Heading title={title} subtitle={subtitle} center />
            <div className="mt-4">
                {
                    showReset && (
                        <Button outline onClick={reset}>Remove filters</Button>
                    )
                }
            </div>
        </div>
    )
}