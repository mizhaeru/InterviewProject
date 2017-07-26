using Interview.Data;
using Interview.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Interview.Api.Controllers
{
    [Route("api/[controller]")]

    public class AssetDetailsController : Controller
    {

        private InterviewDbContext _dbContext;

        public AssetDetailsController(InterviewDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [Route("postassetdetails")]
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] AssetDetails newAssetDetail)
        {
            _dbContext.AssetDetails.Add(newAssetDetail);
            await _dbContext.SaveChangesAsync();
            return Ok(newAssetDetail);
        }


        [Route("putsetdetails")]
        [HttpPut]
        public async Task<IActionResult> CreateAsync([FromBody] AssetDetails newAssetDetail)
        {

            var val = await _dbContext.AssetDetails.FirstOrDefaultAsync(x => x.Id == newAssetDetail.Id);
            if (val != null)
            {
                val.DetailsName = newAssetDetail.DetailsName;
                await _dbContext.SaveChangesAsync();
                return Ok(newAssetDetail);
            }
            else
                return BadRequest();
        }

        [Route("getallassetDetails")]
        [HttpGet]
        public async Task<IActionResult> GetAllAssetDetailsAsync()
        {
            return Ok(await _dbContext.AssetDetails.ToListAsync<AssetDetails>());
        }
        [Route("getassetdetailId/{assetDetailId}")]
        [HttpGet]
        public async Task<IActionResult> GetAsync(int assetDetailId)
        {
            var val = await _dbContext.AssetDetails.FirstOrDefaultAsync(x => x.Id == assetDetailId);
            return Ok(val);
        }



        [Route("deleteassetdetail/{assetDetailId}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteAsync(int assetDetailId)
        {
            var valToRemove = await _dbContext.AssetDetails.FirstOrDefaultAsync(x => x.Id == assetDetailId);
            _dbContext.AssetDetails.Remove(valToRemove);
            await _dbContext.SaveChangesAsync();
            return Ok(valToRemove);
        }



    }
}
