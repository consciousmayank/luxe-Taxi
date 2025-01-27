import Image from "next/image";

const taxiDetails = [
  {
    title: "Taxi Details",
    description: "Taxi Details Description",
    image: "/images/square-image-1.jpg",
  },
  {
    title: "Taxi Details",
    description: "Taxi Details Description",
    image: "/images/square-image-2.jpg",
  },
  {
    title: "Taxi Details",
    description: "Taxi Details Description",
    image: "/images/square-image-3.jpg",
  },
  {
    title: "Taxi Details",
    description: "Taxi Details Description",
    image: "/images/square-image-4.jpg",
  },
  {
    title: "Taxi Details",
    description: "Taxi Details Description",
    image: "/images/square-image-3.jpg",
  },
  {
    title: "Taxi Details",
    description: "Taxi Details Description",
    image: "/images/square-image-4.jpg",
  },
    
];
export default function TaxiDetails() {
  return (
    <>
    <div ><h1 className="text-center text-4xl font-bold mt-8">Our Cars</h1></div>
    <div ><h1 className="text-center text-2xl font-light mt-2 py-4">Best ones for you</h1></div>
      <div className="md:max-w-5xl   mx-auto flex justify-center items-center">
        <div className="grid md:grid-cols-3 grid-cols-1 mx-8 my-4 gap-4 justify-center items-center overflow-hidden">
          {taxiDetails.map((detail, index) => (
            <div key={index} className="flexself-end">
              <div>
                <div className="relative transition-all duration-300">
                <Image
                    src={detail.image}
                    alt={detail.title}
                    width={1000}
                    height={1000}
                    className="flex-1 self-start w-full rounded-tl-2xl rounded-tr-2xl"
                  />
                  <div className="flex flex-1 flex-col justify-center items-center bg-slate-400 rounded-bl-2xl rounded-br-2xl">
                    <p>{detail.title}</p>
                    <p>{detail.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
