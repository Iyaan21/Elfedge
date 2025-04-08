import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../ui/button";
import { IoIosArrowForward } from "react-icons/io";
import TextWithLines from "../ui/TextWithLines";

const AboutUs: FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="flex flex-col container gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Left Column - Images */}
        <div className="relative w-full max-w-[415px] mx-auto xl:max-w-full">
          {/* Counter Shape */}
          <div className="absolute flex items-center gap-3 p-3 bg-background rounded-lg shadow-lg bottom-4 left-0 sm:p-4 sm:bottom-7 sm:-left-12 animate-bounce z-10">
            <Image
              src="https://gramentheme.com/html/infotek/assets/img/about/icon-1.svg"
              alt="Counter icon"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <h3 className="text-xl font-bold sm:text-2xl">6,561+</h3>
          </div>

          {/* Video Button */}
          <div className="absolute z-20 w-24 h-24 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-32 sm:h-32">
            <Link
              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
              className="flex items-center justify-center w-full h-full p-2 transition-colors bg-primary rounded-full hover:bg-primary/90"
            >
              <Play className="w-5 h-5 text-accent sm:size-6" />
              <Image
                src="https://gramentheme.com/html/infotek/assets/img/about/circle-text.png"
                alt="Circular text"
                width={110}
                height={110}
                className="absolute w-[90px] h-[90px] animate-spin-slow sm:w-[110px] sm:h-[110px]"
              />
            </Link>
          </div>

          {/* Main Images */}
          <div
            className="relative w-full lg:max-w-[300px] xl:max-w-[415px] h-[300px] animate-fadeIn bg-no-repeat bg-cover bg-center sm:h-[445px]"
            style={{
              backgroundImage:
                "url(https://gramentheme.com/html/infotek/assets/img/about/01.jpg)",
            }}
          >
            <div className="absolute w-full max-w-[200px] bottom-[-10%] right-0 animate-fadeUp sm:max-w-[249px] sm:bottom-[-13%] sm:right-[-35%]">
              <div className="relative">
                <Image
                  src="https://gramentheme.com/html/infotek/assets/img/about/02.jpg"
                  alt="About us secondary image"
                  width={249}
                  height={272}
                  className="relative z-10 w-full h-auto shadow-xl"
                />
                <div className="absolute w-full h-[88%] border-2 border-primary right-[-20px] top-[15%] sm:right-[-55px] sm:top-[20%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6 sm:space-y-8">
          <div className="animate-fadeUp">
            <TextWithLines text="About Us" className="mb-4" />
            <h2 className="title lg:text-left">
              We Are Increasing Business Success With{" "}
              <span className="text-primary">Technology</span>
            </h2>
          </div>

          <p className="text-muted-foreground font-poppins">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at layout the point.
          </p>

          {/* Icon Items */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 xl:flex-row border-b border-border pb-14">
            {[
              {
                icon: "https://gramentheme.com/html/infotek/assets/img/about/icon-2.svg",
                title: "Problem Solving",
                description: "Aliquam erat volutpat Nullam imperdiet",
              },
              {
                icon: "https://gramentheme.com/html/infotek/assets/img/about/icon-3.svg",
                title: "Mission & Vision",
                description: "Aliquam erat volutpat Nullam imperdiet",
              },
            ].map((item, index) => (
              <div key={index} className="flex lg:flex-col xl:flex-row gap-4">
                <div className="flex items-center justify-center p-2 w-12 h-12 bg-primary rounded-full sm:w-16 sm:h-16">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="w-10 h-10 sm:w-16 sm:h-16"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold sm:text-xl">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Author Section */}
          <div className="flex flex-col gap-6 animate-fadeUp sm:flex-row sm:items-center sm:gap-6 mt-8">
            <Link href="/about">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<IoIosArrowForward className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Explore More
              </Button>
            </Link>

            <div className="flex items-center gap-3">
              <div className="border-2 border-secondary rounded-full">
                <Image
                  src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                  alt=""
                  width={60}
                  height={60}
                  className="rounded-full w-12 h-12 sm:w-[60px] sm:h-[60px]"
                />
              </div>
              <div className="flex flex-col">
                <h6 className="text-base font-semibold sm:text-lg">
                  SM Ayetullah
                </h6>
                <p className="text-xs text-muted-foreground font-poppins sm:text-sm">
                  CEO & Co-Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
