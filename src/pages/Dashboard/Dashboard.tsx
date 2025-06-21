import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Card className="text-center py-12 shadow border border-dashed border-muted mt-5">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Work in progress</h3>
              <p className="text-muted-foreground mb-4">Hang tight! We’re building something awesome for you.</p>
              <Link to="/" className={cn(
                    buttonVariants({ variant: "default" }),
                  )}>
            Create new link
          </Link>
            </CardContent>
          </Card>
      
    </div>
  )
}

export default Dashboard