using Interview.Entities;
using Microsoft.EntityFrameworkCore;

namespace Interview.Data
{
  public class InterviewDbContext : DbContext
  {

    public InterviewDbContext(DbContextOptions<InterviewDbContext> options)
      : base(options)
    {
      
    }

    public DbSet<Asset> Assets { get; set; }
    public DbSet<AssetFields> AssetFields { get; set; }
  }
}