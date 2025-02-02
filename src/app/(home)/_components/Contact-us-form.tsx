import BookingForm from "./Booking-form";

export default function ContactUsForm() {
  return (
    <div className="w-full flex md:flex-row flex-col container mx-auto justify-center items-center p-10">
        <section id="contact-us" className="flex-1">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Get in Touch with Us!
            </h2>
            <p className="text-center text-gray-600 mb-12">
              We’re here to help! Whether you have questions, need assistance,
              or want to share feedback, don’t hesitate to reach out. Fill out
              the form use the contact details provided.
            </p>

            <div className="">
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Address: </span>
                  Skycity, Gulabhgarh road Dera Bassi, S.A.S Nagar, Punjab
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Phone:</span>
                  +91 9996179322
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Email:</span>
                  Gurvindersoni9311@gmail.com
                </p>
                {/* <p className="text-gray-600">
                  <span className="font-semibold">Working Hours:</span>
                  <br />
                  Monday to Friday: 9 AM - 6 PM Saturday: 10 AM - 4 PM Sunday:
                  Closed
                </p> */}
              </div>
            </div>
          </div>
        </section>
        <div className=" flex-1 h-full">
          <BookingForm />
        </div>
      </div>
  );
}
