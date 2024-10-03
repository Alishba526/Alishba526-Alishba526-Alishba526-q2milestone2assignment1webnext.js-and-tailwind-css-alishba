function Hero() {
  return (
    <main className="p-4 bg-yellow-500">
      <div className="bg-yellow-500 p-5 sm:p-8 md:p-10 rounded flex flex-col lg:flex-row lg:items-center">
        <img
          src="https://www.myhomesplan.com/images/MHP2/MHP20061.png"
          alt="img"
          className="mt-3 mb-10 h-64 w-[100%] sm:h-80 md:h-96 lg:w-[53%] lg:mr-8 border-red-900 border-8"
        />
        
        {/* Text section on the right */}
        <div className="flex flex-col">
          <h1 className="text-orange-900 text-right text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            HOME AGENCY WEBSITE
          </h1>
          <p className="text-right text-lg sm:text-xl md:text-2xl">
            Digital Silk is a full-service agency comprised of leading web
            designers from around the globe. Whether building a website from
            scratch or redesigning your current digital presence, our web
            design services include:
          </p>
        </div>
      </div>

      <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-5 mt-10">
        Buy Now
      </h2>

      {/* Flexbox layout for images */}
<div className="flex flex-wrap justify-center gap-5 p-2 sm:p-4 w-full object-cover rounded border-8 border-orange-900  ">  
  <img
    src="https://photos.zillowstatic.com/fp/b8b30e6cc1d04335d3b4b9a6fbb9df38-cc_ft_960.jpg"
    className="h-40 sm:h-48 md:h-64 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900 ease-in-out hover:scale-105"
  />
  <img
    src="https://1.bp.blogspot.com/-PnLhR7vaVHM/W0TBStmfIMI/AAAAAAAACJY/LuXFnpu1FzAxEhy5VUAMit8TrlO_7L41gCLcBGAs/s640/2bedroom-latest-model-budget-home-with-free-plan.jpg"
    className="h-40 sm:h-48 md:h-64 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900  ease-in-out hover:scale-105"
  />
  <img
    src="https://i.insider.com/55cb9463371d22a40e8bf1cb?width=600&format=jpeg&auto=webp"
    className="h-40 sm:h-48 md:h-64 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900  ease-in-out hover:scale-105"
  />
  <img
    src="https://i0.wp.com/www.ps71.org/wp-content/uploads/2017/08/dgdfhgfhgffhgfhfghfgh.jpg?w=960&ssl=1"
    className="h-40 sm:h-48 md:h-64 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900  ease-in-out hover:scale-105"
  />
  <img
    src="https://media.istockphoto.com/id/1567429058/photo/landscaping-on-middleclass-homes-aerial-neighborhood-fresh-cut-lawns.jpg?s=612x612&w=0&k=20&c=XnYq0Vcl34LsM2V4Jto2_4rZSaDWwSGqW5-oSOHWz-s="
    className="h-40 sm:h-48 md:h-64 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900  ease-in-out hover:scale-105"
  />
  <img
    src="https://media.licdn.com/dms/image/D5612AQF-RIHf-4j_zw/article-cover_image-shrink_600_2000/0/1708358503876?e=2147483647&v=beta&t=VgEDixklcwOzYDCmvyr-BqfmvRHzWrxPMgLQNUhi6nk"
    className="h-40 sm:h-48 md:h-64 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900  ease-in-out hover:scale-105"
  />
</div>

    </main>
  );
}

export default Hero;
















