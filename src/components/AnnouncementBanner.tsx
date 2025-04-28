"use client";

interface AnnouncementBannerProps {
  message?: string;
  linkText?: string;
  linkHref?: string;
}

export default function AnnouncementBanner({
  message = "You can view information about inactive accounts in ₽, $, € and check the status of your refund request at qiwiwallet.ru",
  linkText = "Learn more",
  linkHref = "/",
}: AnnouncementBannerProps) {
  return (
    <div className="w-full bg-secondary text-secondary-foreground text-sm my-2 rounded-md px-4 py-4 flex items-center justify-center gap-2">
      <span>{message}</span>
      <a href={linkHref} className="text-primary underline font-medium">
        {linkText}
      </a>
    </div>
  );
}
