
export default function PropertyDetailLoading() {
  return (
    <>
      {/* Hero image skeleton */}
      <div className="aspect-video lg:aspect-none lg:h-[70vh] lg:w-full bg-gray-200 animate-pulse" />
      
      <section className="px-3 mb-16">
        <div className="container mx-auto px-4 md:px-12">
          {/* Header section with address, buttons, and price */}
          <div className="grid md:grid-cols-3 gap-2 mb-8 -mt-6 md:mt-8">
            {/* Address skeleton */}
            <div className="flex justify-center md:flex-col md:justify-start order-2 md:order-1">
              <div className="animate-pulse bg-gray-200 h-6 w-32 mb-2"></div>
              <div className="animate-pulse bg-gray-200 h-5 w-24"></div>
            </div>
            
            {/* Action buttons skeleton */}
            <div className="self-center flex justify-center gap-8 order-1 md:order-2 bg-white md:bg-transparent w-fit py-2 px-8 rounded-full shadow-md md:shadow-none mx-auto mb-4 md:mb-0">
              <div className="animate-pulse bg-gray-200 h-8 w-8 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-8 w-8 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-8 w-8 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-8 w-8 rounded"></div>
            </div>
            
            {/* Price skeleton */}
            <div className="self-center order-3">
              <div className="animate-pulse bg-gray-200 h-7 w-40 mx-auto md:ml-auto"></div>
            </div>
          </div>

          {/* Property info grid skeleton */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-20 md:gap-x-40 lg:gap-x-40 xl:gap-x-60 mb-16">
            {Array.from({ length: 13 }).map((_, i) => (
              <div key={i} className="flex justify-between mb-4">
                <div className="animate-pulse bg-gray-200 h-5 w-24"></div>
                <div className="animate-pulse bg-gray-200 h-5 w-16"></div>
              </div>
            ))}
          </div>

          {/* Description and agent card skeleton */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Description skeleton */}
            <div>
              <div className="animate-pulse bg-gray-200 h-6 w-32 mb-4"></div>
              <div className="space-y-2">
                <div className="animate-pulse bg-gray-200 h-4 w-full"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-full"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-3/4"></div>
              </div>
            </div>
            
            {/* Agent card skeleton */}
            <div>
              <div className="animate-pulse bg-gray-200 h-6 w-40 mb-4"></div>
              <div className="animate-pulse bg-gray-200 h-32 w-full rounded"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}