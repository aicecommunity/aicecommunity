import Image from "next/image";
import certificates from "@/images/certificate.png";

export default function Certificates() {
  return (
    <div className="p-4">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((each, index) => (
          <article
            key={index}
            className="bg-[#EEECEC] rounded-2xl shadow-md p-4 flex flex-col items-center gap-4"
          >
            {/* Certificate Image */}
            <div className="w-full h-[250px] flex items-center justify-center">
              <Image
                src={certificates}
                alt={`Certificate ${index + 1}`}
                className="object-contain max-h-[250px] w-auto"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <button className="bg-[#1E5F74] text-white px-4 py-2 rounded-lg w-full sm:w-[140px] hover:bg-[#174652] transition">
                View
              </button>
              <button className="bg-[#195C49] text-white px-4 py-2 rounded-lg w-full sm:w-[140px] hover:bg-[#134536] transition">
                Download
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
