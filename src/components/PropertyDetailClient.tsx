"use client"

import { useState } from "react"
import type { Property } from "@/lib/types"
import AgentCard from "@/components/AgentCard"
import Image from "next/image"
import Modal from "@/components/Modal"
import { IoImagesOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { IoMapOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

import 'mapbox-gl/dist/mapbox-gl.css';
import LocationMap from "@/components/LocationMap";
import PropertyGallery from "@/components/PropertyGallery";

type ModalType = 'gallery' | 'floorplan' | 'map' | null

type PropertyDetailClientProps = {
    property: Property;
    mapToken: string;
}

export default function PropertyDetailClient({ property, mapToken }: PropertyDetailClientProps) {
    const [activeModal, setActiveModal] = useState<ModalType>(null)

    return (
        <>
        <figure className="aspect-video lg:aspect-none lg:h-[70vh] lg:w-full">
            <Image className={`w-full h-full object-cover ${property.id=="61572ad4251a8a42ec8cb544" ? "object-bottom" : ""}`} src={property.images[0].url} width={property.images[0].width} height={property.images[0].height} alt={property.adress1} />
        </figure>
        <section className="px-3 mb-16">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid md:grid-cols-3 gap-2 mb-8 -mt-6 md:mt-8">
                    <div className="flex justify-center md:flex-col md:justify-start order-2 md:order-1 ">
                        <h1 className="text-base font-bold">{property.adress1}</h1>
                        <p className="text-base font-bold">{property.postalcode} {property.city}</p>
                    </div>
                    <div className=" self-center flex justify-center gap-8 order-1 md:order-2 bg-white md:bg-transparent w-fit py-2 px-8 rounded-full shadow-md md:shadow-none mx-auto mb-4 md:mb-0">     

                        <button 
                            className="cursor-pointer" 
                            onClick={() => setActiveModal('gallery')}
                        >
                            <IoImagesOutline color="#ccc" size={32} />
                        </button>
                        <button 
                            className="cursor-pointer" 
                            onClick={() => setActiveModal('floorplan')}
                        >
                            <IoGridOutline color="#ccc" size={32} />
                        </button>
                        <button 
                            className="cursor-pointer" 
                            onClick={() => setActiveModal('map')}
                        >
                            <IoMapOutline color="#ccc" size={32} />
                        </button>
                        <button title="Gem som favorit">
                            <IoHeartOutline color="#ccc" size={32} />
                        </button>
                    </div>
                    <div className="self-center order-3">
                    <p className="font-bold text-xl text-center md:text-right">Kr. {property.price.toLocaleString("da-DK")}</p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-20 md:gap-x-40 lg:gap-x-40 xl:gap-x-60 mb-16">

                        <div className="flex justify-between"><span>Sagsnummer:</span><span>1234567898</span></div>
                        <div className="flex justify-between"><span>Boligareal:</span><span>{property.livingspace} m²</span></div>
                        <div className="flex justify-between"><span>Grundareal:</span><span>{property.lotsize} m²</span></div>
                        <div className="flex justify-between"><span>Rum/værelser:</span><span>{property.rooms}</span></div>
                        <div className="flex justify-between"><span>Antal plan:</span><span>2</span></div>
                        <div className="flex justify-between"><span>Kælder:</span><span>{property.basementsize ? property.basementsize : "-"}</span></div>
                        <div className="flex justify-between"><span>Byggeår:</span><span>{property.built} m²</span></div>
                        <div className="flex justify-between"><span>Ombygget:</span><span>{property.remodel} m²</span></div>
                        <div className="flex justify-between"><span>Energimærke:</span><span>{property.energylabel}</span></div>
                        <div className="flex justify-between"><span>Udbetaing:</span><span>{property.payment}</span></div>
                        <div className="flex justify-between"><span>Brutto ex ejerudgift:</span><span>{property.gross}</span></div>
                        <div className="flex justify-between"><span>Netto ex ejerudgift:</span><span>{property.netto}</span></div>
                        <div className="flex justify-between"><span>Ejerudgifter:</span><span>{property.cost}</span></div>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Beskrivelse</h3>
                        <p>{property.description}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Ansvarlig mægler</h3>
                        <AgentCard data={property.agent} horizontal={true} />
                    </div>
                </div>
                </div>
        </section>

        {/* Gallery Modal */}
        <Modal 
            isOpen={activeModal === 'gallery'} 
            onClose={() => setActiveModal(null)}
            size="xl"
        >
            <PropertyGallery images={property.images} />
        </Modal>

        {/* Floorplan Modal */}
        <Modal 
            isOpen={activeModal === 'floorplan'} 
            onClose={() => setActiveModal(null)}
            size="lg"
        >
            <div className="flex justify-center">
                <Image 
                    src={property.floorplan.url} 
                    width={property.floorplan.width} 
                    height={property.floorplan.height}
                    className="object-contain max-w-full max-h-[70vh] p-8" 
                    alt="Plantegning af boligen" 
                />
            </div>
        </Modal>

        {/* Map Modal */}
        <Modal 
            isOpen={activeModal === 'map'} 
            onClose={() => setActiveModal(null)}
            size="xl"
        >
            <div className="h-120 w-[90vw]">
                <LocationMap mapboxToken={mapToken} lat={property.lat} long={property.long} />
            </div>
        </Modal>
        </>
    )
}
