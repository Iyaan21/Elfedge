import { Code, Lightbulb, Users, Clock, Shield } from "lucide-react"
import { ReactNode } from "react"

export interface TabContent {
  heading: string
  description: string
  points: string[]
  image: string
}

export interface TabItem {
  title: string
  icon: ReactNode
  content: TabContent
}

export const homePageTabs: TabItem[] = [
  {
    title: "Proven Results",
    icon: <Code className="h-5 w-5" />,
    content: {
      heading: "Growth You Can Measure",
      description:
        "We don’t just code - we build solutions that grow your business, save costs, and deliver real value you can see.",
      points: [
        "95% happy clients with success stories to back it up",
        "Tailored solutions that tackle your unique challenges",
        "Tech that grows with you and adapts to any market",
        "Clear updates so you always know how we’re winning for you",
      ],
      image: "https://img.freepik.com/premium-photo/creative-visual-technology-network_31965-16839.jpg",
    },
  },
  {
    title: "Time-to-Market00",
    icon: <Clock className="h-5 w-5" />,
    content: {
      heading: "Speed Without Stress",
      description:
        "In a fast-moving world, we get you live quicker—top-quality solutions, delivered at lightning speed.",
      points: [
        "From idea to launch in weeks, not months",
        "Flexible processes that adjust to your needs",
        "Ready-to-use tools to speed up the journey",
        "Regular updates to keep you ahead, always",
      ],
      image: "https://img.freepik.com/free-vector/flat-design-time-management-landing-page-template_23-2148813013.jpg",
    },
  },
  {
    title: "Business Partnership",
    icon: <Users className="h-5 w-5" />,
    content: {
      heading: "Your Team, Extended",
      description:
        "We’re more than a service - we’re your partners, understanding your goals and building solutions that fit perfectly.",
      points: [
        "Big-picture advice for your whole business",
        "Smart ideas to solve problems before they start",
        "Direct access to our top experts, anytime",
        "A lasting bond for your long-term success",
      ],
      image: "https://img.freepik.com/premium-photo/investor-double-exposure-image-investor-business-man-handshake-with-partner-successful-meeting-deal-with-sunrise-cityscape-background-investment-partnership-teamwork-concept_33829-388.jpg",
    },
  },
  {
    title: "Technical Excellence",
    icon: <Lightbulb className="h-5 w-5" />,
    content: {
      heading: "Built for Tomorrow",
      description:
        "Our smart, modern solutions are ready for the future—strong, secure, and designed to keep you ahead.",
      points: [
        "Cloud-powered systems that scale effortlessly",
        "Latest tools like React, Next.js, and more",
        "Top-notch security, tested regularly",
        "Clean code that saves you money down the road",
      ],
      image: "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595850.jpg",
    },
  },
  {
    title: "End-to-End Support",
    icon: <Shield className="h-5 w-5" />,
    content: {
      heading: "We’ve Got You Covered",
      description:
        "From start to finish and beyond, we’re your one-stop partner—no hassle, just complete support.",
      points: [
        "A plan that matches your business dreams",
        "Full journey from design to live and running",
        "24/7 help for your critical needs",
        "Regular upgrades to stay competitive",
      ],
      image: "https://img.freepik.com/premium-photo/technical-support-center-customer-service-internet-business-technology-concept_218381-5114.jpg",
    },
  },
]