// components/MeetOurTeam.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TextWithLines from "./TextWithLines";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  experience: string;
  companies: string[];
}
interface CustomArrowProps {
  onClick?: () => void;
}

const teamMembers: TeamMember[] = [
  {
    name: "ABC",
    role: "Full Stack Developer",
    image:
      "https://base.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fteam%2Fteam-02.png&w=384&q=75",
    instagram: "https://www.instagram.com/imprakashchy",
    twitter: "https://x.com/iamprakashchy",
    linkedin: "https://www.linkedin.com/in/imprakashchy",
    experience: "4+ years of experience",
    companies: [
      "/images/logo-whitebg.png",
    ],
  },
  {
    name: "ABC",
    role: "QA Engineer",
    image:
      "https://base.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fteam%2Fteam-02.png&w=384&q=75",
    instagram: "https://www.instagram.com/imprakashchy",
    twitter: "https://x.com/iamprakashchy",
    linkedin: "https://www.linkedin.com/in/imprakashchy",
    experience: "8+ years of experience",
    companies: [
      "/images/logo-whitebg.png",
    ],
  },
  {
    name: "ABC",
    role: "Angular Developer",
    image:
      "https://base.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fteam%2Fteam-02.png&w=384&q=75",
    instagram: "https://www.instagram.com/imprakashchy",
    twitter: "https://x.com/iamprakashchy",
    linkedin: "https://www.linkedin.com/in/imprakashchy",
    experience: "8+ years of experience",
    companies: [
      "/images/logo-whitebg.png",
    ],
  },
  {
    name: "ABC",
    role: "ASP .NET Developer",
    image:
      "https://base.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fteam%2Fteam-02.png&w=384&q=75",
    instagram: "https://www.instagram.com/imprakashchy",
    twitter: "https://x.com/iamprakashchy",
    linkedin: "https://www.linkedin.com/in/imprakashchy",
    experience: "8+ years of experience",
    companies: [
      "/images/logo-whitebg.png",
    ],
  },

];
// Custom Arrow Components
const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-200"
    aria-label="Previous Slide"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-200"
    aria-label="Next Slide"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);

const MeetOurTeam: React.FC = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
  };

  return (
    <section id="team" className="relative z-1 overflow-hidden py-10 sm:py-20">
      <div className="container">
        {/* Background Elements */}
        <span className="absolute left-0 top-0 -z-1 block h-3/5 w-full bg-gray-50 dark:bg-gray-900"></span>
        <Image
          src="https://base.demo.nextjstemplates.com/images/shape/shape-08.svg"
          alt="Shape Background"
          width={1621}
          height={556}
          className="absolute right-0 top-0"
        />
        <Image
          src="https://base.demo.nextjstemplates.com/images/shape/shape-09.svg"
          alt="Shape"
          width={47}
          height={54}
          className="absolute left-[10%] top-1/2 -z-1 animate-rotating"
        />
        <Image
          src="https://base.demo.nextjstemplates.com/images/shape/shape-10.svg"
          alt="Shape"
          width={54}
          height={54}
          className="absolute left-[20%] top-[5%] -z-1"
        />
        <Image
          src="https://base.demo.nextjstemplates.com/images/shape/shape-11.svg"
          alt="Shape"
          width={80}
          height={69}
          className="absolute right-[15%] top-[15%] -z-1 animate-rotating"
        />

        {/* Header Section */}
        <div className="animate-slide-up relative z-10 mx-auto max-w-7xl px-4 text-center">
          <TextWithLines
            text="Meet With Our Creative Dedicated Team"
            className="mb-4"
          />
          <h2 className="title">Meet With Our Creative Dedicated Team</h2>
          <p className="sub-title mx-auto">
            Our passionate team of tech enthusiasts, designers, and innovators
            blends creativity and expertise to transform your ideas into bold,
            cutting-edge digital solutions. Collaborate with us for impactful
            results!
          </p>
        </div>

        {/* Team Members Slider */}
        <div className="relative z-10 mt-12 max-w-7xl mx-auto px-4">
          <Slider {...sliderSettings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="px-2">
                <div className="group relative overflow-hidden rounded-xl bg-card transition-all duration-300 transform hover:-translate-y-2">
                  {/* Top accent bar */}
                  <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>

                  {/* Image container with overlay */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Social icons that appear on hover */}
                    <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-6">
                      <Link
                        href={member.instagram}
                        aria-label="Instagram"
                        className="bg-white/20 backdrop-blur-sm p-2.5 rounded-full hover:bg-primary transition-colors duration-200"
                      >
                        <FaInstagram className="size-5 text-accent" />
                      </Link>
                      <Link
                        href={member.twitter}
                        aria-label="Twitter"
                        className="bg-white/20 backdrop-blur-sm p-2.5 rounded-full hover:bg-primary transition-colors duration-200"
                      >
                        <FaXTwitter className="size-5 text-accent" />
                      </Link>
                      <Link
                        href={member.linkedin}
                        aria-label="LinkedIn"
                        className="bg-white/20 backdrop-blur-sm p-2.5 rounded-full hover:bg-primary transition-colors duration-200"
                      >
                        <FaLinkedin className="size-5 text-accent" />
                      </Link>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-6">
                    <div className="flex flex-col">
                      <h4 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                        {member.name}
                      </h4>

                      <div className="flex items-center mt-1 mb-3">
                        <span className="text-sm font-medium bg-secondary text-secondary-foreground border border-border px-3 py-1 rounded-full">
                          {member.role}
                        </span>
                        <span className="ml-auto text-xs sm:text-sm text-primary font-medium">
                          {member.experience}
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-4"></div>

                      {/* Company logos with tooltip */}
                      <div className="flex flex-col items-center gap-2 mt-2">
                        <span className="text-xs sm:text-sm text-foreground font-medium">
                          Worked with:
                        </span>
                        <div className="flex -space-x-2">
                          {member.companies.map((logo, logoIndex) => (
                            <div
                              key={logoIndex}
                              className="w-12 h-12 bg-white border overflow-hidden border-border rounded-full flex items-center justify-center hover:z-10 hover:scale-110 transition-all duration-200"
                              title={`Company ${logoIndex + 1}`}
                            >
                              <Image
                                src={logo}
                                alt="Company logo"
                                width={48}
                                height={48}
                                className="object-contain p-1"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
