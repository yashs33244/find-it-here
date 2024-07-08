import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui/components/ui/card";
import Link from "next/link";
import { ReactElement } from "react";

interface InfoCardProps {
  icon: ReactElement;
  title: string;
  items: {
    href: string;
    label: string;
    description: string;
  }[];
}

export default function InfoCard({ icon, title, items }: InfoCardProps) {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <Link href={item.href} className="group grid gap-2" prefetch={false} key={index}>
            <div className="text-sm font-medium leading-none group-hover:underline flex items-center gap-2">
              {icon}
              {item.label}
            </div>
            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {item.description}
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
