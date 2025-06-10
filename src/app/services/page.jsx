import dbConnect, { collectionName } from "@/lib/dbConnect"
import Image from "next/image";
import Link from "next/link";

export default async function AllService() {
    const allService = await dbConnect(collectionName.serviceCollection)
    const services = await allService.find().toArray();
    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Our Auto Services
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                        Professional car care services at competitive prices
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <div key={service._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 overflow-hidden">
                                <Image
                                    src={service.img}
                                    width={600}
                                    height={400}

                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                                        ${service.price}
                                    </span>

                                </div>

                                <div className="mt-6">
                                    <Link
                                        href={`/services/${service._id}`}
                                        className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                                    >
                                        Book Service
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
