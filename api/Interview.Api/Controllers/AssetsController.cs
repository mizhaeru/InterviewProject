using System.Collections.Generic;
using Interview.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Interview.Api.Controllers
{
  [Route("api/[controller]")]
  public class AssetsController : Controller
  {
    // GET api/values
    [HttpGet]
    public IEnumerable<Asset> Get()
    {
      var asset = new Asset()
      {
        Id = 1,
        Name = "test",
        Fields = new List<AssetFields>()
        {
          new AssetFields()
          {
            Id = 1,
            Name = "test asset field",
            StringVal = "string val"

          }
        }
      };
      var list = new List<Asset>();
      list.Add(asset);
      return list;
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public Asset Get(int id)
    {
      return new Asset()
      {
        Id = 1,
        Name = "test",
        Fields = new List<AssetFields>()
        {
          new AssetFields()
          {
            Id = 1,
            Name = "test asset field",
            StringVal = "string val"

          }
        }
      };
    }

    // POST api/values
    [HttpPost]
    public void Post([FromBody] Asset value)
    {
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Asset value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}