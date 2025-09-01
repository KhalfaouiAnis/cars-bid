"use client";

import AuctionCard from "./AuctionCard";
import { Fragment, useEffect, useState } from "react";
import AppPagination from "../components/AppPagination";
import { getData } from "../actions/auctionActions";
import Filters from "./Filters";
import { useParamsStore } from "@/hooks/useParamsStore";
import { useShallow } from "zustand/shallow";
import qs from "query-string";
import EmptyFilter from "../components/EmptyFilter";
import { useAuctionStore } from "@/hooks/useAuctionStore";

export default function Listings() {
    const params = useParamsStore(useShallow(state => ({
        pageNumber: state.pageNumber,
        pageSize: state.pageSize,
        searchTerm: state.searchTerm,
        orderBy: state.orderBy,
        filterBy: state.filterBy,
        seller: state.seller,
        winner: state.winner,
    })))

    const { auctions, totalCount, pageCount, setData } = useAuctionStore(useShallow(state => state))
    const [loading, setLoading] = useState(true);
    const setParams = useParamsStore(state => state.setParams)

    const url = qs.stringifyUrl({ url: '', query: params }, { skipEmptyString: true })

    function setPageNumber(pageNumber: number) {
        setParams({ pageNumber })
    }

    useEffect(() => {
        getData(url).then(data => {
            setData(data);
            setLoading(false)
        })
    }, [url, setData])

    if (loading) return <h3>Loading...</h3>

    return (
        <Fragment>
            <Filters />
            {
                totalCount === 0 ? (
                    <EmptyFilter showReset />
                ) : (
                    <Fragment>
                        <div className="grid grid-cols-4 gap-6">
                            {auctions && auctions.map((auction) => (
                                <AuctionCard auction={auction} key={auction.id} />
                            ))}
                        </div>
                        <div className="flex justify-center mt-4">
                            <AppPagination
                                pageChanged={setPageNumber}
                                currentPage={params.pageNumber}
                                pageCount={pageCount}
                            />
                        </div>
                    </Fragment>
                )
            }
        </Fragment>
    )
}