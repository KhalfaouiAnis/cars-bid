using AutoMapper;
using Contracts;
using SearchService.Models;

namespace AuctionService.RequestHelpers;

public class MappingProfiles : Profile
{
    public MappingProfiles(){
        CreateMap<AuctionCreated, Item>();
        CreateMap<AuctionUpdated, Item>();
    }
}