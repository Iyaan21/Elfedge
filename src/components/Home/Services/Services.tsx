import ServicesCard from "@/components/ui/ServicesCard";
import { homeServicesData } from "./constant";
import Image from "next/image";

export default function Services() {
  return (
    <div className="relative py-12 md:py-16 lg:py-20">
      <div className="absolute top-1/2 left-0 w-full h-full">
        <Image
          src="https://infoteknextjs.vercel.app/assets/img/service/line-shape-2.png"
          alt="background"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
      <ServicesCard {...homeServicesData} />
    </div>
  );
}
