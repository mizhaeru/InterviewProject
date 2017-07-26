
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Interview.Entities
{
    public class AssetDetails 
    {
        public int? Id { get; set; }

        public int? FKAsset { get; set; }

        public string DetailsName { get; set; }


        [ForeignKey("FKAsset")]
        public virtual Asset Asset { get; set; }
    }
}
