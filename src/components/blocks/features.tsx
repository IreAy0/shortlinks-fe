import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featuresList: FeaturesProps[] = [
  {
    icon: "Lightbulb",
    title: "Fast Shortening",
    description:
      "Generate concise, memorable links in an instant, boosting shareability.",
  },
  {
    icon: "LineChart",
    title: "Detailed Analytics",
    description:
      "Track clicks, geographic data, and referral sources for every link.",
  },
  {
    icon: "Link",
    title: "Custom Aliases",
    description:
      "Create branded and custom short links that reflect your unique identity.",
  },
  {
    icon: "ShieldCheck",
    title: "Secure & Reliable",
    description:
      "Our robust platform ensures your links are always secure and accessible.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 relative pb-20 pt-20 md:pb-32 md:pt-32 container mx-auto overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-24 items-start">
        {/* Header Section */}
        <div className="text-start space-y-6 pb-8 mx-auto lg:sticky lg:top-8">
          <div className="space-y-4">
          <Badge>
              FEATURES
            </Badge>
            <h2 className="text-4xl font-bold sm:text-6xl tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
                Instantly shorten, customize, and track your links—all with advanced analytics, 
                secure sharing, and built-in QR code generation for effortless sharing online or offline.
            </p>
          </div>

          {/* Decorative line */}
          <div className="flex items-center gap-4 pt-4">
            <div className="h-px bg-gradient-to-r from-primary to-transparent flex-1"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-6 w-full">
          {featuresList.map(({ icon, title, description }, index) => {
              const SpecificLucideIcon = LucideIcons[icon as keyof typeof LucideIcons] as React.ElementType;
            return (
              <Card
                key={title}
                className="group relative bg-gradient-to-br from-background to-muted/30 border border-border/50 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30"
              >
                {/* Card background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>

                <CardHeader className="relative pb-4">
                  <div className="flex justify-between items-start">
                    <div className="relative">
                      {SpecificLucideIcon && (
                        <div className="relative">
                          {/* Icon background glow */}
                          <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                          <div className="relative bg-primary/10 p-3 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                            <SpecificLucideIcon
                              size={28}
                              className="text-primary group-hover:scale-110 transition-transform duration-300"
                            />
                            {/* <Icon className="h-6 w-6 text-primary" /> */}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Animated number */}
                    <span className="text-6xl font-bold text-muted-foreground/10 group-hover:text-primary/20 transition-all duration-500 group-hover:scale-110">
                      0{index + 1}
                    </span>
                  </div>

                  <CardTitle className="text-xl font-semibold mt-4 group-hover:text-primary transition-colors duration-300">
                    {title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="flex justify-center mt-16">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <div className="w-8 h-px bg-gradient-to-r from-primary to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse delay-300"></div>
          <div className="w-8 h-px bg-gradient-to-r from-primary/60 to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse delay-700"></div>
        </div>
      </div>
    </section>
  );
}
