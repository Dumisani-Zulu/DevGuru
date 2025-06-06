import { cn } from "@/lib/utils";
import Image from "next/image";
import {ClerkLoaded, ClerkLoading, UserButton} from "@clerk/nextjs"
import Link from "next/link";
import { Loader } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
type Props = {
    className?: string;
};

export const Sidebar = ({className}: Props) => {
    return (
        <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
                className,

        )}>
        <Link href="/learn">
            <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                <Image src="/mascot.png" height={40} width={40} alt="Mascot"className="rounded-xl"/>
                <h1 className="text-2xl font-extrabold text-cyan-500 tracking-wide">
                    DevGuru
                </h1>
            </div>
          </Link>  
          <div className="flex flex-col gap-y-2 flex-1">
            <SidebarItem label={"Learn"}  href="/learn" iconSrc="/home.png" />
            <SidebarItem label={"Leaderboard"}  href="/leaderboard" iconSrc="/leaderboard.png" />
            <SidebarItem label={"Quests"}  href="/quests" iconSrc="/quests.png" />
            <SidebarItem label={"Shop"}  href="/shop" iconSrc="/shop.png" />
            
          </div>

          <div className="p-4">
            <ClerkLoading>
                <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
            </ClerkLoading>
            <ClerkLoaded>
                <UserButton afterSwitchSessionUrl="/" afterSignOutUrl="/"/>
                
            </ClerkLoaded>
          </div>
        </div>
    )
}; 