import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import banner from "../../../../public/assets/images/banner/6.jpg";

export default async function ServiceDetails({ params }) {
    console.log(params);
    const servicesCollection = await dbConnect(collectionName.serviceCollection);
    const serviceDetails = await servicesCollection.findOne({ _id: new ObjectId(params.id) });
    console.log(serviceDetails);

    if (!serviceDetails) {
        return (
            <div className="flex justify-center items-center h-screen text-2xl font-bold text-error">
                Service not found
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            {/* Top Banner */}
            <section className="mb-10">
                <div className="relative overflow-hidden shadow-lg" style={{ height: "250px" }}>
                    <Image
                        src={banner}
                        fill
                        alt="Service Banner"
                        className="object-cover"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50 z-10"></div>

                    {/* Text in center */}
                    <div className="absolute inset-0 flex justify-center items-center z-20">
                        <h1 className="text-4xl font-bold text-white drop-shadow-lg">{serviceDetails.title}</h1>
                    </div>
                </div>
            </section>

            {/* Service Card */}
            <div className="card bg-base-100 shadow-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
                {/* Image */}
                <figure className="relative h-[400px] w-full overflow-hidden">
                    <Image
                        src={serviceDetails.img}
                        fill
                        alt={serviceDetails.title}
                        className="object-cover"
                    />
                </figure>

                {/* Card Body */}
                <div className="card-body p-8 space-y-6">
                    {/* <h1 className="card-title text-4xl font-bold text-primary">{serviceDetails.title}</h1> */}

                    <div className="flex items-center gap-3">
                        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                            ${serviceDetails.price}
                        </span>
                        <span className="badge badge-outline badge-accent">Best Deal</span>
                    </div>

                    <div className="prose max-w-none text-gray-700">
                        <p>{serviceDetails.description}</p>
                    </div>

                    {serviceDetails.facility?.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-semibold text-secondary mb-2">Facilities Included:</h2>
                            <ul className="list-disc list-inside space-y-1 text-base text-gray-600">
                                {serviceDetails.facility.map((facility, index) => (
                                    <li key={index}>
                                        <span className="font-medium text-neutral">{facility.name}</span>: {facility.details}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="card-actions mt-6 justify-end">
                        <Link href="/services" className="btn btn-primary btn-wide">
                            ⬅ Back to Services
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}
