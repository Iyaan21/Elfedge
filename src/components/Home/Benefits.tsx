import { Building2, TrendingUp, Wrench, DollarSign, Lock, Zap } from "lucide-react"

export default function Benefits() {

  const benefits = [
    {
      title: "Industry Expertise",
      description: "Specialized knowledge across healthcare, finance, retail, manufacturing, and more.",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      title: "Scalable Solutions",
      description: "Technology that grows with your business, from startup to enterprise.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Dedicated Support",
      description: "24/7 technical assistance and ongoing maintenance for peace of mind.",
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: "Cost Efficiency",
      description: "Strategic solutions that maximize ROI and minimize operational costs.",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      title: "Security Focus",
      description: "Built-in security measures that protect your data and comply with regulations.",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      title: "Rapid Deployment",
      description: "Efficient development cycles that bring your ideas to market faster.",
      icon: <Zap className="w-6 h-6" />,
    },
  ]

  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="title">Why Businesses Trust Us</h2>
          <p className="sub-title">
            Don&apos;t just take our word for it. See what our clients have to say about working with our team.
          </p>
        </div>
        <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-8">
            The Benefits of Choosing Our IT Services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-5 flex flex-col h-40 rounded-lg bg-transparent hover:bg-primary/10 border border-border transition-all duration-200 group">
                <div className="flex items-center gap-x-2">
                  <div className="mb-3 bg-secondary text-secondary-foreground rounded-full p-2 group-hover:p-4 transition-all duration-300">{benefit.icon}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
                </div>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Ready to transform your business with custom technology solutions tailored to your specific needs?
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

