import PageContainer from "@/components/PageContainer";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import HeroSection from "@/components/HeroSection";
import GameCategoryTag from "@/components/GameCategoryTag";
import GameCard from "@/components/GameCard";

export default function ReplenishmentPage() {
  return (
    <>
      <AnnouncementBanner />
      <PageContainer>
        <HeroSection />

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12">
          <GameCategoryTag
            iconSrc="/steam-icon.png"
            label="Steam"
            href="/steam"
          />
          <GameCategoryTag
            iconSrc="/roblox-icon.png"
            label="Roblox"
            href="/roblox"
          />
          <GameCategoryTag iconSrc="/pubg-icon.png" label="PUBG" href="/pubg" />
        </div>

        {/* Services / Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <GameCard
            title="Recharge Wallet Easily"
            description="Top up in Dirhams or CFA Franc."
            imageSrc="/left.png"
            buttonHref="/topup"
          />
          <GameCard
            title="Pay for Games"
            description="Steam, Free Fire, Genshin, and more."
            imageSrc="/right.png"
            buttonHref="/games"
          />
        </div>
      </PageContainer>
    </>
  );
}
