"use server";

import { fetchWrapper } from "@/lib/fetchWrapper";
import { Auction, PagedResult } from "@/types";
import { FieldValues } from "react-hook-form";

export async function getData(query: string): Promise<PagedResult<Auction>> {
  return fetchWrapper.get(`search${query}`);
}

export async function updateAuctionTest(): Promise<{
  status: number;
  message: string;
}> {
  const data = {
    mileage: Math.floor(Math.random() * 10000) + 1,
  };

  return fetchWrapper.put("auctions/466e4744-4dc5-4987-aae0-b621acfc5e39", data);
}

export async function createAuction(data: FieldValues) {
  return fetchWrapper.post("auctions", data);
}

export async function getDetailedViewData(id: string): Promise<Auction> {
  return fetchWrapper.get(`auctions/${id}`);
}

export async function deleteAuction(id: string) {
  return fetchWrapper.del(`auctions/${id}`);
}

export async function updateAuction(
  data: FieldValues,
  id: string
): Promise<Auction> {
  return fetchWrapper.put(`auctions/${id}`, data);
}
