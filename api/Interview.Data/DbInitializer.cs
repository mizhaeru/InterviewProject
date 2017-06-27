using System.Linq;
using Interview.Entities;

namespace Interview.Data
{
  public static class DbInitializer
  {
    public static void Initialize(InterviewDbContext context)
    {
      context.Database.EnsureCreated();
      SeedData(context);
    }

    private static void SeedData(InterviewDbContext context)
    {
      if(context.Assets.Any())
      {
        return;
      };
      context.Assets.AddRange(Asset.GetSeedData());
      context.SaveChanges();
    }
  }
}