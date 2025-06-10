import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";

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
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <Image
                        src={serviceDetails.img}
                        width={1000}
                        height={600}
                        alt={serviceDetails.title}
                        className="object-cover w-full h-auto"
                    />
                </figure>

                <div className="card-body">
                    <h1 className="card-title text-4xl mb-4">{serviceDetails.title}</h1>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="badge badge-primary text-lg p-4">
                            ${serviceDetails.price}
                        </div>
                    </div>

                    <div className="prose mb-6 max-w-none">
                        <p>{serviceDetails.description}</p>
                    </div>

                    {serviceDetails.facility && serviceDetails.facility.length > 0 && (
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold mb-4">Facilities Included:</h2>
                            <ul className="list-disc list-inside space-y-2 text-base">
                                {serviceDetails.facility.map((facility, index) => (
                                    <li key={index}>
                                        <span className="font-medium">{facility.name}</span>: {facility.details}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="card-actions justify-end">
                        <Link href="/" className="btn btn-primary">
                            Back to Services
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
