import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { APP_DETAILS } from "@/constants";
import { useAuth } from "@/hooks/use-auth";
import { Box, User } from "lucide-react";
import { Link } from "react-router-dom";

export const DashboardSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const { authUser } = useAuth();

  const COMMON_PAGES = [
    {
      title: "Profile",
      path: "profle",
      icon: User,
    },
  ];

  const SYSTEM_ADMIN_PAGES = [
    {
      title: "Users",
      path: "users",
      icon: User,
    },
    {
      title: "Stores",
      path: "stores",
      icon: Box,
    },
  ];

  const NORMAL_USER__PAGES = [
    ...COMMON_PAGES,
    {
      title: "Stores",
      path: "storelisting",
      icon: Box,
    },
  ];

  const STORE_OWNER_PAGES = [
    ...COMMON_PAGES,
    {
      title: "Ratings",
      path: "ratings",
      icon: Box,
    },
  ];

  const items =
    authUser?.role === "SYSTEM_ADMIN"
      ? SYSTEM_ADMIN_PAGES
      : authUser?.role === "USER"
      ? NORMAL_USER__PAGES
      : authUser?.role === "STORE_OWNER"
      ? STORE_OWNER_PAGES
      : [];

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="p-2 w-full font-bold text-base">
          {APP_DETAILS.appName}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={`/dashboard/${item.path}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
