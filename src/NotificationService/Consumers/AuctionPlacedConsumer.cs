using Contracts;
using MassTransit;
using Microsoft.AspNetCore.SignalR;
using NotificationService.Hubs;

namespace NotificationService.Consumers;

public class AuctionPlacedConsumer : IConsumer<BidPlaced>
{
    private readonly IHubContext<NotificationHub> _hubContext;

    public AuctionPlacedConsumer(IHubContext<NotificationHub> hubContext)
    {
        _hubContext = hubContext;
    }
    public async Task Consume(ConsumeContext<BidPlaced> context)
    {
        Console.WriteLine("--> bid placed message received");
        await _hubContext.Clients.All.SendAsync("BidPlaced", context.Message);
    }
}