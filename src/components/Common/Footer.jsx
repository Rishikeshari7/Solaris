import { FooterData, navigateData } from "@/Data/Common/FooterData";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Images/Home/logo.png";
import EmailForm from "../Home/EmailForm";
const Footer = () => {
  return (
    <div className="bg-backgroundGreen flex flex-col gap-10 p-16 px-24">
      <div className="flex justify-between items-end text-white">
        <div className="space-y-5">
          <Image src={Logo} className="w-48" alt="Logo" />
          <div className="space-x-3">
            {navigateData.map(({ name, link }, index) => (
              <Link key={index} href={link}>
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <p>Get the freshest news from us</p>
          {/* form */}
         <div className="text-black">
         <EmailForm
        placeholder="Your email address..."
        buttonLabel="Subscribe"
        placeholderBgColor="bg-gray-200"
      />
         </div>
        </div>
      </div>
      <div className="flex h-[1px] bg-gray-500"></div>
      <div className="flex justify-between items-center text-textLightSecondary text-sm">
        <ul className="flex space-x-5">
          {FooterData.map(({ title }, index) => (
            <li
              key={index}
              className="relative pr-3 after:content-[''] after:absolute after:right-0 after:top-1 after:h-[70%] after:w-[1px] after:bg-textLightSecondary"
            >
              {title}
            </li>
          ))}
        </ul>
        <p>Copyright 2024 - Solaris</p>
      </div>
    </div>
  );
};

export default Footer;
