import Image from "next/image";
import { redirect } from "next/navigation";


import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { getUserProgress } from "@/db/queries";



import { Items } from "./items";
import { Quests } from "@/components/quests";

const ShopPage = async () => {
  const userProgressData = getUserProgress();
  

  const [
    userProgress,
    
  ] = await Promise.all([
    userProgressData,
    
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  

  return ( 
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          gems={userProgress.gems}
        />
        
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image
            src="/shop.png"
            alt="Shop"
            height={90}
            width={90}
          />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Shop
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Spend your gems on different rewards.
          </p>
          <Items
            hearts={userProgress.hearts}
            gems = {userProgress.gems}
          />
        </div>
      </FeedWrapper>
    </div>
  );
};
 
export default ShopPage;
