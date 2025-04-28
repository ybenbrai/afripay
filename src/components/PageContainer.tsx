"use client";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full max-w-6xl mx-auto p-4">{children}</div>;
}
