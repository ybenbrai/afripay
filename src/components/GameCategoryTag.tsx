"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface GameCategoryTagProps {
  iconSrc: string;
  label: string;
  href: string;
}

export default function GameCategoryTag({
  iconSrc,
  label,
  href,
}: GameCategoryTagProps) {
  return (
    <Button
      variant="outline"
      asChild
      className="h-20 w-full flex items-center justify-start px-6 gap-4 rounded-[10px] bg-background shadow-md text-secondary-foreground transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:opacity-90"
    >
      <a href={href} className="flex items-center gap-4 w-full">
        <Image src={iconSrc} alt={label} width={40} height={40} />
        <span className="text-lg font-semibold">{label}</span>
      </a>
    </Button>
  );
}
