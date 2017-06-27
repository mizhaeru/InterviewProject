﻿using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Interview.Entities.Interfaces;

namespace Interview.Entities
{
  public class Asset : IEntityBase
  {
    public Asset()
    {
      Fields = new HashSet<AssetFields>();
    }

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int? Id { get; set; }
    public string Name { get; set; }

    public ICollection<AssetFields> Fields { get; set; }

    public static List<Asset> GetSeedData()
    {
      return new List<Asset>()
      {
        new Asset()
        {
          Name = "test",
          Fields = new List<AssetFields>()
          {
            new AssetFields()
            {
              Name = "test asset field",
              StringVal = "string val"
            }
          }
        }
      };
    }
  }
}