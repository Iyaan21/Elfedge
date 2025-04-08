import FAQ from "@/components/ui/FAQ";
import { OurClients } from "@/components/ui/OurClients/OurClients";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import Services from "@/components/Home/Services/Services";
import TechStacks from "@/components/ui/TechStacks/TechStacks";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import MeetOurTeam from "@/components/ui/MeetOurTeam";
import MarqueeWrapper from "@/components/ui/Marquee/MarqueeWapper";
import { getHeroControlSettings } from "@/lib/heroControl";
import HeroSection from "@/components/Home/HeroSection";
import { Metadata } from "next";
import WhyChooseUsTabs from "@/components/ui/WhyChooseUs/WhyChooseUsTab";
import { homePageTabs } from "@/components/Home/whyChooseUsTabData";
import AboutUs from "@/components/Home/AboutUs";
// import Benefits from "@/components/Home/Benefits";
export const metadata: Metadata = {
  title: "Home | Elfedge Solutions",
  description:
    "Transform your business with our cutting-edge IT solutions and services. Expert web development, mobile apps, and digital transformation services.",
  openGraph: {
    title: "Home | Elfedge Solutions",
    description:
      "Transform your business with our cutting-edge IT solutions and services. Expert web development, mobile apps, and digital transformation services.",
  },
  twitter: {
    title: "Home | Elfedge Solutions",
    description:
      "Transform your business with our cutting-edge IT solutions and services. Expert web development, mobile apps, and digital transformation services.",
  },
};

export default async function Home() {
  const heroSettings = await getHeroControlSettings();

  return (
    <main>
      <HeroSection heroSettings={heroSettings} />
      <MarqueeWrapper
        wrapperClassName="bg-primary py-2 lg:py-3 font-medium text-primary-foreground"
        itemClassName="flex gap-x-2 items-center text-lg sm:text-xl lg:text-2xl font-semibold font-space-grotesk"
        sparkleClassName="size-4 md:size-6 mx-2 fill-primary-foreground"
      />
      <MarqueeWrapper
        direction="right"
        wrapperClassName="bg-secondary py-2 lg:py-3 font-medium text-secondary-foreground"
        itemClassName="flex gap-x-2 items-center text-lg sm:text-xl lg:text-2xl font-semibold font-space-grotesk"
        sparkleClassName="size-4 md:size-6 mx-2 fill-secondary-foreground"
      />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <WhyChooseUsTabs
        title="Why Choose Our IT Solutions"
        subtitle="Discover the advantages that set us apart and make us the preferred technology partner for businesses across industries."
        tabs={homePageTabs}
      />
      {/* <Benefits /> */}
      <TechStacks />
      <MeetOurTeam />
      <OurClients />
      <OurProcess />
      <FAQ />
      <GetInTouch />
    </main>
  );
}
