"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface GameCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonHref: string;
  buttonText?: string;
}

export default function GameCard({
  title,
  description,
  imageSrc,
  buttonHref,
  buttonText = "Read more",
}: GameCardProps) {
  return (
    <Card className="w-full h-full py-0">
      <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-3xl font-extrabold ">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
          <Button
            asChild
            variant="outline"
            className="rounded-full w-fit px-6 py-2 text-lg"
          >
            <a href={buttonHref}>{buttonText}</a>
          </Button>
        </div>
        <div className="flex-1">
          <Image
            src={imageSrc}
            alt={title}
            width={300}
            height={300}
            className="object-contain w-full h-full"
          />
        </div>
      </CardContent>
    </Card>
  );
}
