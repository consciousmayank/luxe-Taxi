import ContactUsForm from "../(home)/_components/Contact-us-form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact us for any queries or feedback",
};

export default function ContactUs() {
  return <div><ContactUsForm /></div>;
}
