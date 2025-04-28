"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-muted py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 text-muted-foreground text-sm">
        {/* Left links */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4">
            <Link href="/identification">Identification</Link>
            <Link href="/help">Help</Link>
            <Link href="/offers">Offers</Link>
            <Link href="/sitemap">Sitemap</Link>
            <Link href="/contacts">Contacts</Link>
            <Link href="/business-solutions">Business Solutions</Link>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/business">For agents</Link>
            <Link href="/providers">For providers</Link>
            <Link href="/investors">For investors</Link>
            <Link href="/group">Afripay Group</Link>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/appstore.svg"
              alt="App Store"
              width={120}
              height={40}
            />
            <Image
              src="/googleplay.svg"
              alt="Google Play"
              width={120}
              height={40}
            />
          </div>
          <p className="max-w-md leading-relaxed">
            Payment organization Afripay LLP © 2025
            <br />
            Payment services registration number 02-17-004
            <br />
            Casablanca, Morocco
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-start gap-6">
          <div className="text-lg">+212 6 54 18 62 23</div>
          <div className="flex items-center gap-4">
            <Image src="/vk-icon.svg" alt="VK" width={32} height={32} />
            <Image src="/pci-dss.svg" alt="PCI DSS" width={50} height={32} />
          </div>
        </div>
      </div>
    </footer>
  );
}
