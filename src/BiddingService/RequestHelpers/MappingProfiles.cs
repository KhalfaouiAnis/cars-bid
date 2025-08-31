using AutoMapper;
using Contracts;
using BiddingService.Models;
using BiddingService.DTOs;

namespace BiddingService.RequestHelpers;

public class MappingProfiles : Profile
{
    public MappingProfiles(){
        CreateMap<Bid, BidDto>();
        CreateMap<Bid, BidPlaced>();
    }
}