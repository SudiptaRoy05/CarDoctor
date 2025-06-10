import dbConnect, { collectionName } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

export default async function Service() {
    // const services = [
    //     {
    //         "_id": "635a0c0b64a6d231228942ae",
    //         "service_id": "04",
    //         "title": "Engine Oil Change",
    //         "img": "https://i.ibb.co/T2cpBd5/888.jpg",
    //         "price": "20.00",
    //         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    //         "facility": [
    //             {
    //                 "name": "Instant Car Services",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "24/7 Quality Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Easy Customer Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Quality Cost Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             }
    //         ]
    //     },
    //     {
    //         "_id": "635a0c0b64a6d231228942af",
    //         "service_id": "05",
    //         "title": "Battery Charge",
    //         "img": "https://i.ibb.co/ydCbDN3/5555.jpg",
    //         "price": "20.00",
    //         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    //         "facility": [
    //             {
    //                 "name": "Instant Car Services",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "24/7 Quality Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Easy Customer Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Quality Cost Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             }
    //         ]
    //     },
    //     {
    //         "_id": "635b591a1dafe382a9da8c96",
    //         "service_id": "01",
    //         "title": "Full car Repair",
    //         "img": "https://i.ibb.co/R6Z2nFM/55.jpg",
    //         "price": "200.00",
    //         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    //         "facility": [
    //             {
    //                 "name": "Instant Car Services",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "24/7 Quality Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Easy Customer Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Quality Cost Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             }
    //         ]
    //     },
    //     {
    //         "_id": "635b5afc1dafe382a9da8c98",
    //         "service_id": "02",
    //         "title": "Engine Repair",
    //         "img": "https://i.ibb.co/5MvmD2g/88.jpg",
    //         "price": "150.00",
    //         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    //         "facility": [
    //             {
    //                 "name": "Instant Car Services",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "24/7 Quality Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Easy Customer Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Quality Cost Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             }
    //         ]
    //     },
    //     {
    //         "_id": "635b5b691dafe382a9da8c99",
    //         "service_id": "03",
    //         "title": "Automatic Services",
    //         "img": "https://i.ibb.co/wh7t3N3/555.jpg",
    //         "price": "30.00",
    //         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    //         "facility": [
    //             {
    //                 "name": "Instant Car Services",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "24/7 Quality Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Easy Customer Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Quality Cost Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             }
    //         ]
    //     },
    //     {
    //         "_id": "635b5ba51dafe382a9da8c9a",
    //         "service_id": "06",
    //         "title": "Electrical System",
    //         "img": "https://i.ibb.co/KzCG8qr/8888.jpg",
    //         "price": "20.00",
    //         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    //         "facility": [
    //             {
    //                 "name": "Instant Car Services",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "24/7 Quality Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Easy Customer Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Quality Cost Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             }
    //         ]
    //     }
    // ]
    const serviceCollection = await dbConnect(collectionName.serviceCollection)
    const services = await serviceCollection.find().toArray();
    console.log(services)

    console.log(services)


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

    );

}