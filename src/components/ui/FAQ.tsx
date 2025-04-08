"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Code,
  Headphones,
  Check,
  HelpCircle,
  Bot,
  X,
  Smartphone,
  Truck,
  Building2,
  Briefcase,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import ChatbotFAQ from "@/components/ui/chatbot-faq";
import TextWithLines from "./TextWithLines";

type Step = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  questions: {
    id: string;
    question: string;
    answer: string;
  }[];
};

export default function WizardFAQ() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const steps: Step[] = [
    {
      id: "about",
      title: "About Us",
      description: "Learn about Elfedge Solutions and our services",
      icon: <Building2 className="h-6 w-6" />,
      questions: [
        {
          id: "about-1",
          question:
            "What services does Elfedge Solutions provide and what range of clients do you cater to?",
          answer:
            "Elfedge Solutions is a leading mobile app development firm established in 2013. Our expertise lies in mobile app development, web app development, website development, UX/UI designing, and marketing services. We cater to a diverse clientele, including individuals, small to medium enterprises (SMEs), startups, entrepreneurs, and multinational corporations (MNCs) worldwide. Whether you're an individual with an innovative app concept or a multinational company aiming for digital transformation, Elfedge Solutions is dedicated to bringing your vision to life.",
        },
        {
          id: "about-2",
          question: "What types of industries does Elfedge Solutions serve?",
          answer:
            "No matter your industry, we have the expertise and experience to develop tailored solutions to meet your specific needs and goals. Elfedge Solutions serves a wide array of industries, including: Education, Fitness, Healthcare, Logistics, Dating App Development, Social Networking, Finance, Game Development, Sports Betting, E-commerce, Real Estate, AR/VR, On-Demand Apps, and Marketplace Solutions.",
        },
        {
          id: "about-3",
          question: "What are the advantages of working with Elfedge Solutions?",
          answer:
            "By choosing Elfedge Solutions as your development partner, you can expect a seamless experience, innovative solutions, and tangible results that drive your business forward. Our advantages include: 1) Expertise: Years of experience and skilled professionals in mobile app development, website development, and digital marketing services. 2) Tailored Solutions: We offer personalized solutions aligned with your vision and goals. 3) Quality Assurance: Rigorous processes ensure highest standards of performance, security, and reliability. 4) Diverse Industry Experience: Extensive experience across various sectors enables innovative solutions. 5) Transparent Communication: Regular updates, feedback sessions, and open communication throughout the development process.",
        },
      ],
    },
    {
      id: "web-dev",
      title: "Web Development",
      description: "Learn about our custom web development solutions",
      icon: <Code className="h-6 w-6" />,
      questions: [
        {
          id: "web-1",
          question: "What types of websites can you develop?",
          answer:
            "We develop all types of websites including e-commerce platforms, corporate websites, web applications, progressive web apps (PWAs), and custom web solutions. Our team specializes in modern technologies like React, Next.js, and Node.js to create responsive, scalable, and user-friendly websites tailored to your business needs.",
        },
        {
          id: "web-2",
          question: "How long does it take to develop a website?",
          answer:
            "Development timeline varies based on project complexity. A basic website typically takes 4-6 weeks, while complex web applications may take 3-6 months. We follow an agile methodology, providing regular updates and maintaining transparent communication throughout the development process.",
        },
        {
          id: "web-3",
          question: "Can you redesign my existing website?",
          answer:
            "Yes, we offer website redesign services to modernize your online presence. Our process includes analyzing your current website, identifying improvements, and implementing modern design principles while maintaining your brand identity. We ensure smooth migration of existing content and SEO value.",
        },
      ],
    },
    {
      id: "mobile-dev",
      title: "Mobile Development",
      description: "Explore our mobile app development services",
      icon: <Smartphone className="h-6 w-6" />,
      questions: [
        {
          id: "mobile-1",
          question: "Can you develop a mobile app from my existing website?",
          answer:
            "Yes, we can convert your website into a mobile app while optimizing the user experience for mobile devices. We can develop native apps for iOS and Android, or cross-platform solutions using React Native or Flutter to maintain consistency across platforms.",
        },
        {
          id: "mobile-2",
          question: "What platforms do you develop for?",
          answer:
            "We develop for both iOS and Android platforms, using either native development (Swift/Kotlin) or cross-platform frameworks (React Native, Flutter). Our approach is tailored to your specific needs, considering factors like performance requirements, budget, and time-to-market.",
        },
        {
          id: "mobile-3",
          question: "How do you ensure app security?",
          answer:
            "We implement comprehensive security measures including encrypted data storage, secure API communications, biometric authentication, and regular security updates. Our apps comply with platform-specific security guidelines and industry standards.",
        },
      ],
    },
    {
      id: "ondemand",
      title: "On-Demand Solutions",
      description: "Discover our on-demand delivery app solutions",
      icon: <Truck className="h-6 w-6" />,
      questions: [
        {
          id: "ondemand-1",
          question:
            "What would be the cost to develop an on-demand delivery app?",
          answer:
            "The cost varies based on features, complexity, and platforms. Basic apps start from $15,000, while feature-rich solutions can range from $30,000 to $100,000+. Contact our team for a detailed quote based on your specific requirements.",
        },
        {
          id: "ondemand-2",
          question: "How quickly can you develop a delivery app?",
          answer:
            "A basic on-demand delivery app typically takes 3-4 months to develop. This includes planning, design, development, testing, and deployment. Complex applications with custom features may take 6-8 months. We can provide a detailed timeline after understanding your requirements.",
        },
        {
          id: "ondemand-3",
          question: "What features can you include in my delivery app?",
          answer:
            "We can implement features like real-time tracking, multiple payment options, driver/delivery partner apps, admin dashboards, analytics, push notifications, rating systems, and more. The feature set is customizable based on your business model and requirements.",
        },
      ],
    },
    {
      id: "support",
      title: "Maintenance & Support",
      description: "Learn about our ongoing support services",
      icon: <Headphones className="h-6 w-6" />,
      questions: [
        {
          id: "support-1",
          question: "Do you provide maintenance and support?",
          answer:
            "Yes, we offer comprehensive maintenance and support packages including regular updates, bug fixes, security patches, and feature enhancements. Our support team is available 24/7 to address any issues and ensure your application runs smoothly.",
        },
        {
          id: "support-2",
          question: "What does the maintenance package include?",
          answer:
            "Our maintenance packages include regular monitoring, performance optimization, security updates, backup management, technical support, and minor feature updates. We offer different tiers of support based on your needs and budget.",
        },
        {
          id: "support-3",
          question: "How do you handle urgent issues?",
          answer:
            "We have a dedicated emergency response team available 24/7 for critical issues. Our standard response time for urgent matters is within 2-4 hours, and we provide regular updates until the issue is resolved.",
        },
      ],
    },
    {
      id: "services",
      title: "Services",
      description: "Explore our marketing services",
      icon: <Briefcase className="h-6 w-6" />,
      questions: [
        {
          id: "services-1",
          question: "Can Elfedge Solutions help improve my existing app?",
          answer:
            "Yes. We have helped individuals and organizations all over the globe to improve various aspects of their existing apps. This includes UI/UX improvement, functionality refinement, and enhancement, converting apps into websites and vice-versa, optimizing app performance, and so on.",
        },
        {
          id: "services-2",
          question:
            "If I have the design ready, can you start right from the development stage?",
          answer:
            "Yes. We offer flexibility in our services, which allows our clients to either get everything developed from scratch or only work on certain specific aspects or anything in between. In order to minimize risks and failures, we analyze your design and then provide you with suggestions. Once everything is agreed upon, our professionals proceed with the development.",
        },
        {
          id: "services-3",
          question:
            "Can I have a dedicated team that works exclusively on my project?",
          answer:
            "Yes, we have dedicated software development teams that can work exclusively on your project. Moreover, you get the freedom to pick the professionals. We follow three dedicated team models, namely Full Team, On-Demand, and Maintenance Only.",
        },
      ],
    },
  ];

  const currentStep = steps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentStepIndex(currentStepIndex + 1);
      setExpandedQuestions([]);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentStepIndex(currentStepIndex - 1);
      setExpandedQuestions([]);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const toggleQuestion = (id: string) => {
    setExpandedQuestions((prev) =>
      prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
    );
  };

  const goToStep = (index: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentStepIndex(index);
      setExpandedQuestions([]);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  // Custom navigation button component
  const NavigationButton = ({
    onClick,
    disabled,
    direction,
  }: {
    onClick: () => void;
    disabled: boolean;
    direction: "prev" | "next";
  }) => (
    <button
      onClick={onClick}
      disabled={disabled || isTransitioning}
      className={`
                flex items-center justify-center rounded-full h-12 w-12 font-medium transition-all
                ${
                  disabled || isTransitioning
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:translate-y-[-2px]"
                }
                ${
                  direction === "prev"
                    ? "bg-background text-primary border border-primary hover:bg-primary/5"
                    : "bg-primary text-background hover:bg-primary/90 shadow-sm hover:shadow-md rounded-full"
                }
            `}
      aria-label={direction === "prev" ? "Previous step" : "Next step"}
    >
      {direction === "prev" && <ChevronLeft className="h-6 w-6" />}
      {direction === "next" && <ChevronRight className="h-6 w-6" />}
    </button>
  );

  return (
    <div className="py-10 bg-background relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <TextWithLines text="Frequently Asked Questions" className="mb-4" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked&nbsp;
            <span className="text-primary mt-2">Questions</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base font-light max-w-2xl mx-auto">
            Find answers to common questions about our IT services, support
            options, and solutions
          </p>
        </div>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-sm sm:text-base">
              Step {currentStepIndex + 1} of {steps.length}
            </span>
            <span className="text-sm sm:text-base">{currentStep.title}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step navigation */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-8">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => goToStep(index)}
              disabled={isTransitioning}
              className={`
                                flex flex-col items-center justify-center p-3 rounded-lg border text-center transition-all
                                ${
                                  isTransitioning
                                    ? "cursor-not-allowed"
                                    : "hover:scale-105"
                                }
                                ${
                                  currentStepIndex === index
                                    ? "bg-primary text-primary-foreground text-sm border-primary"
                                    : "bg-card hover:bg-muted/50 border-muted-foreground/20"
                                }
                            `}
              aria-label={`Go to ${step.title}`}
            >
              <div className="mb-2">{step.icon}</div>
              <span className="text-xs md:text-sm">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Current step content */}
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-card border rounded-xl p-6 mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {currentStep.icon}
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">
                {currentStep.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {currentStep.description}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {currentStep.questions.map((q) => (
              <div
                key={q.id}
                className="rounded-lg overflow-hidden border border-border shadow-sm"
              >
                <button
                  onClick={() => toggleQuestion(q.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">
                      {q.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{
                      rotate: expandedQuestions.includes(q.id) ? 90 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedQuestions.includes(q.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-4 pt-0 border-t">
                        <div className="flex gap-3">
                          <div className="mt-1 flex-shrink-0">
                            <Check className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {q.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Custom navigation buttons */}
        <div className="flex justify-end gap-3">
          <NavigationButton
            onClick={prevStep}
            disabled={currentStepIndex === 0}
            direction="prev"
          ></NavigationButton>

          <NavigationButton
            onClick={nextStep}
            disabled={currentStepIndex === steps.length - 1}
            direction="next"
          ></NavigationButton>
        </div>
      </div>

      {/* Chatbot floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsChatbotOpen(!isChatbotOpen)}
          className={`
                        h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-all
                        ${
                          isChatbotOpen
                            ? "bg-destructive text-destructive-foreground rotate-90"
                            : "bg-primary text-primary-foreground hover:bg-primary/90"
                        }
                    `}
          aria-label={isChatbotOpen ? "Close chatbot" : "Open chatbot"}
        >
          {isChatbotOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Bot className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Chatbot dialog */}
      <AnimatePresence>
        {isChatbotOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100%-3rem)] sm:w-[400px] md:w-[450px] max-w-md mx-auto"
          >
            <ChatbotFAQ />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
