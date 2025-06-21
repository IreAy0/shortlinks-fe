import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CTA() {
  return (
    <section className="pb-20 pt-20 md:pb-32 md:pt-32 bg-primary/10 min-w-full">
      <div className="relative container mx-auto max-w-7xl">
        {/* Header Text */}
        <div className="text-center space-y-4 pb-6 mx-auto">
          <Badge>Get Started</Badge>
          <p className="text-xl text-muted-foreground pt-1">Shorten, customize, and share your links in seconds.</p>
          <h2 className="text-3xl font-bold sm:text-5xl tracking-tight xl:text-6xl/none">
             Start creating smarter links today
          </h2>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
          <Button variant="outline">Learn More</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
}
