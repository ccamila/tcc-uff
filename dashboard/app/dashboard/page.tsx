import { AppSidebar } from "~/components/app-sidebar"
import { ChartData } from "~/components/chart-data"
import { PressureChartData } from "~/components/pressure-chart-data"
import { TempChartData } from "~/components/temp-chart-data"
import { Avatar, AvatarFallback } from "~/components/ui/avatar"
import { Badge } from "~/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"
import { Separator } from "~/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar"

function getRandomTemperature() {
  return (Math.random() * (42 - 36) + 36).toFixed(1) + "°C";
}

export default function Page() { 
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Dados de Pacientes
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Monitoramento</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Leito 317</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50 p-10 h-446">
              <div className="space-y-1 justify-center">
                    <Avatar>
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="space-y-1">
                    <h2> Paciente da Silva</h2>
                    <h2> 59 anos</h2>
                    <h4><b>Entrada: </b>29/11/2021</h4>
                    <Badge variant="destructive"> Alérgico </Badge>
                    <Badge variant="secondary"> Dieta Zero </Badge>
                  </div>
            </div>
            <div className="aspect-video bg-muted/50">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                <TempChartData />
              </h1>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
            <PressureChartData />
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-muted/50">
            <ChartData />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
