import React from "react";

const ExclusiveDeals = () => {
  return (
    <section className="exclusive-deals">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Exclusive Deal Card 1 */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Exclusive Deal 1"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Special Island Getaway
            </h3>
            <p className="text-gray-600 mb-4">
              Relax on pristine beaches and enjoy the island life.
            </p>
            <div className="text-primary font-semibold">$999</div>
            <button className="mt-4 py-2 px-4 bg-primary text-white rounded-full hover:bg-primary-dark">
              Book Now
            </button>
          </div>

          {/* Exclusive Deal Card 2 */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1682695798522-6e208131916d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MjJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Exclusive Deal 2"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Mountain Adventure Package
            </h3>
            <p className="text-gray-600 mb-4">
              Explore the breathtaking beauty of the mountains.
            </p>
            <div className="text-primary font-semibold">$799</div>
            <button className="mt-4 py-2 px-4 bg-primary text-white rounded-full hover:bg-primary-dark">
              Book Now
            </button>
          </div>

          {/* Exclusive Deal Card 3 */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img
              src="https://plus.unsplash.com/premium_photo-1679830513990-82a4280f41b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Exclusive Deal 3"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">City Escape Package</h3>
            <p className="text-gray-600 mb-4">
              Experience the charm of vibrant city life.
            </p>
            <div className="text-primary font-semibold">$699</div>
            <button className="mt-4 py-2 px-4 bg-primary text-white rounded-full hover:bg-primary-dark">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDeals;
