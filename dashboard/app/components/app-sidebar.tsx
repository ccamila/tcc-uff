import * as React from "react"
import {
  AudioWaveform, Command, GalleryVerticalEnd, SquareTerminal
} from "lucide-react"

import { NavMain } from "~/components/nav-main"
import { NavUser } from "~/components/nav-user"
import { TeamSwitcher } from "~/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar"

const data = {
  user: {
    name: "Dr. Médico",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Hospital A",
      logo: GalleryVerticalEnd,
      plan: "Unidade A",
    },
    {
      name: "Hospital B",
      logo: AudioWaveform,
      plan: "Unidade B",
    },
    {
      name: "Hospital C",
      logo: Command,
      plan: "Unidade C",
    },
  ],
  navMain: [
    {
      title: "Monitoramento",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Pacientes",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
