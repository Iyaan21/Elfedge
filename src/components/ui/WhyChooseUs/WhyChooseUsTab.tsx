"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import TextWithLines from "../TextWithLines";

interface TabContent {
    heading: string;
    description: string;
    points: string[];
    image?: string;
}

interface TabItem {
    title: string;
    icon: React.ReactNode;
    content: TabContent;
}

interface WhyChooseUsTabsProps {
    title?: string
    subtitle?: string
    tabs: TabItem[]
}

export default function WhyChooseUsTabs({
    title = "Why Choose Our IT Solutions",
    subtitle = "Discover the advantages that set us apart and make us the preferred technology partner for businesses across industries.",
    tabs
}: WhyChooseUsTabsProps) {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section className="py-8 sm:py-12 md:py-16 bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <TextWithLines text={title} className="mb-3" />
                    <h2 className="title">
                        {title}
                    </h2>
                    <p className="sub-title max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
                    {/* Mobile tab selector (dropdown style) */}
                    <div className="md:hidden p-4 border-b border-border">
                        <select
                            value={activeTab}
                            onChange={(e) => setActiveTab(Number(e.target.value))}
                            className="w-full p-2 rounded-md border border-border outline-none bg-background text-foreground focus:outline-none"
                        >
                            {tabs.map((tab, index) => (
                                <option key={index} value={index}>
                                    {tab.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Desktop tabs */}
                    <div className="hidden md:flex flex-wrap border-b border-border">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onMouseEnter={() => setActiveTab(index)}
                                className={cn(
                                    "flex items-center px-4 lg:px-6 py-3 lg:py-4 text-sm font-medium transition-all duration-300",
                                    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-inset",
                                    activeTab === index
                                        ? "text-primary border-b-2 border-primary bg-primary/5"
                                        : "text-muted-foreground hover:text-primary hover:bg-primary/5",
                                )}
                            >
                                <span className={cn(
                                    "mr-2 transition-transform duration-300",
                                    activeTab === index ? "scale-110" : ""
                                )}>
                                    {tab.icon}
                                </span>
                                <span>{tab.title}</span>
                            </button>
                        ))}
                    </div>

                    <div className="p-4 sm:p-6 md:p-8">
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "transition-all duration-300 ease-in-out",
                                    activeTab === index
                                        ? "block opacity-100 h-auto"
                                        : "hidden opacity-0 h-0"
                                )}
                                aria-hidden={activeTab !== index}
                            >
                                <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                                    <div className={cn(
                                        "order-2 md:order-1",
                                        activeTab === index ? "animate-fade-in-up" : ""
                                    )}>
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">{tab.content.heading}</h3>
                                        <p className="text-muted-foreground mb-4 md:mb-6">{tab.content.description}</p>
                                        <ul className="space-y-2 md:space-y-3">
                                            {tab.content.points.map((point, i) => (
                                                <li key={i} className="flex items-start">
                                                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">
                                                        <span className="text-xs">✓</span>
                                                    </div>
                                                    <span className="text-muted-foreground text-sm md:text-base">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={cn(
                                        "order-1 md:order-2 mb-6 md:mb-0",
                                        activeTab === index ? "animate-fade-in-down" : ""
                                    )}>
                                        <Image
                                            src={tab.content.image || "/placeholder.svg"}
                                            width={600}
                                            height={400}
                                            alt={tab.content.heading}
                                            className="rounded-lg shadow-md w-full h-auto border border-border/50"
                                            priority={index === 0}
                                            loading={index === 0 ? "eager" : "lazy"}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

