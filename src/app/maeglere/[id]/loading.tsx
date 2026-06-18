

export default function MaeglerLoading() {
    return (
        <section className="bg-white px-3 py-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-[3fr_1fr] gap-6">
          <div>
            <div className="animate-pulse bg-gray-200 h-64 w-full mb-4"></div>
            <div className="animate-pulse bg-gray-200 h-6 w-1/2 mb-2"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-1/3 mb-2"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-full mb-2"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-full mb-2"></div>
          </div>
          <section className="bg-primary text-white p-6 text-center self-start">
            <h2 className="text-2xl text-balance font-bold mb-4 ">
              DinMægler formidler lokalområdet
            </h2>
            <p className="mb-6">Salg eller leje </p>
            <p>
              Kontakt os på <br />
              tlf +45 7070 4000
            </p>
          </section>
        </div>
      </div>
    </section>
    )
}