import { FaBolt, FaLock, FaBook, FaMobileAlt } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 ">Why Choose Us</h2>

        <p className="text-gray-600 mb-10">
          Discover what makes our platform unique and powerful
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-linear-to-b from-white to-purple-50 shadow-md hover:shadow-xl transition">
            <div className="h-14 w-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto">
              <FaBolt size={28} />
            </div>
            <h3 className="font-semibold text-lg mt-4 mb-2 text-gray-800">
              Fast Access
            </h3>
            <p className="text-gray-600 text-sm">
              Borrow books instantly anytime without delay.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-linear-to-b from-white to-purple-50 shadow-md hover:shadow-xl transition">
            <div className="h-14 w-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto">
              <FaLock size={28} />
            </div>
            <h3 className="font-semibold text-lg mt-4 mb-2 text-gray-800">
              Secure System
            </h3>
            <p className="text-gray-600 text-sm">
              Protected authentication with modern security.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-linear-to-b from-white to-purple-50 shadow-md hover:shadow-xl transition">
            <div className="h-14 w-14  bg-purple-100 rounded-full text-purple-600 flex items-center justify-center mx-auto">
              <FaBook size={28} />
            </div>
            <h3 className="font-semibold text-lg mt-4 mb-2 text-gray-800">
              Huge Collection
            </h3>
            <p className="text-gray-600 text-sm">
              Explore a wide range of books in different categories.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-linear-to-b from-white to-purple-50 shadow-md hover:shadow-xl transition">
            <div className="h-14 w-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto">
              <FaMobileAlt size={28} />
            </div>
            <h3 className="font-semibold text-lg mt-4 mb-2 text-gray-800">
              Fully Responsive
            </h3>
            <p className="text-gray-600 text-sm">
              Seamless experience across all devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
