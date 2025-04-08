import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "./constant";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function FeaturedPortfolio() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    adaptiveHeight: true,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          speed: 800,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          speed: 700,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          speed: 600,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          speed: 400,
        },
      },
    ],
  };

  return (
    <section
      className="relative py-6 sm:py-8 md:py-10"
      aria-label="Featured Projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="title text-left px-5">
          Featured Projects
        </h2>
      </motion.div>

      <Slider {...settings}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="outline-none focus:outline-none h-full px-2 sm:px-3 md:px-4 py-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div
              className="rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md mb-6 sm:mb-8 md:mb-10 h-[280px] sm:h-[300px] md:h-[320px]"
              style={{
                backgroundColor: project.bgColor || "#FFF8E7",
              }}
            >
              <div className="flex flex-col md:flex-row justify-between gap-3 sm:gap-4 h-full">
                {/* Left Content Section */}
                <div className="flex flex-col justify-between flex-1 space-y-3 sm:space-y-4">
                  {/* Logo and Title */}
                  <div className="flex flex-col space-y-2 sm:space-y-3">
                    <Image
                      src={project.logo || project.image}
                      alt={`${project.title} logo`}
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105"
                      priority
                    />
                    <h3 className="text-sm sm:text-base md:text-lg font-bold">
                      {project.subtitle}
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      rightIcon={<ArrowRightIcon className="w-4 h-4" />}
                      className="bg-transparent border border-border w-fit text-xs sm:text-sm transition-all duration-300"
                    >
                      View Case Study
                    </Button>
                  </div>

                  {/* Store Links */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    {project.appLinks.appStore && (
                      <Link
                        href={project.appLinks.appStore}
                        className="transition-all duration-300 hover:scale-110"
                        aria-label={`Download ${project.title} on App Store`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/appstore.svg"
                          alt="App Store"
                          width={25}
                          height={25}
                          className="w-[25px] h-[25px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]"
                          priority
                        />
                      </Link>
                    )}
                    {project.appLinks.playStore && (
                      <Link
                        href={project.appLinks.playStore}
                        className="transition-all duration-300 hover:scale-110"
                        aria-label={`Download ${project.title} on Play Store`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/playstore.svg"
                          alt="Play Store"
                          width={25}
                          height={25}
                          className="w-[25px] h-[25px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]"
                          priority
                        />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Image Section */}
                <div className="flex justify-center items-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={400}
                    className="w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[150px] transition-all duration-300 hover:scale-105 object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}