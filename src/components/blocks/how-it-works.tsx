"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Link,
  ChartNoAxesCombined,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Plus,
    title: "Paste Your URL",
    description:
      "Simply paste your long and complex URL into our input field.",
  },
  {
    icon: Link,
    title: "Get Short Link",
    description:
      "Instantly generate a compact, shareable short link and a QR code.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Track & Manage",
    description:
      "Monitor clicks and engagement from your personalized dashboard.",
  },
  
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "transition-all duration-300 border border-spacing-10 border-primary/20 bg-background/60 backdrop-blur-sm",
        "shadow-lg shadow-primary/5",
        className
      )}
    >
      <CardHeader>
        <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function HowItWorks() {
  const columnMargins = ["mt-0", "md:mt-8", "md:mt-16", "md:mt-24"];
  const numColumns = 3;
  const featuresPerColumn = features.length / numColumns;

  return (
    <section className="bg-gradient-to-br from-blue-50 via-violet-50 to-white px-6">
 <div id="how-it-works" className="pb-20 pt-20 md:pb-32 md:pt-32 container mx-auto relative ">

      <div className="text-center space-y-4 pb-16 mx-auto max-w-4xl">
        <Badge>How it Works</Badge>
        <h2 className="mx-auto mt-4 text-3xl font-bold sm:text-5xl tracking-tight">
          Shorten, Share, Track—In Seconds
        </h2>
        <p className="text-xl text-muted-foreground pt-1">
         Paste your link, get a short URL and QR code, and monitor your results—all in one simple workflow.
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />

        <div className="flex flex-col md:flex-row gap-6">
          {Array.from({ length: numColumns }).map((_, columnIndex) => (
            <div
              key={columnIndex}
              className={cn(
                "flex-1 flex flex-col gap-6",
                columnMargins[columnIndex]
              )}
            >
              {features
                .slice(
                  columnIndex * featuresPerColumn,
                  (columnIndex + 1) * featuresPerColumn
                )
                .map((feature, featureIndex) => (
                  <FeatureCard
                    key={`${columnIndex}-${featureIndex}`}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
   
  );
}
