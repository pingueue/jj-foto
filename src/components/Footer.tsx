import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Footer({ className }: { className?: string }) {
    return (
        <footer className={cn(className, "flex p-10 gap-6 flex-col border-t")}>
            <div><Link href="/bartek">
                link 1 </Link></div>
            <div><Link href="/bartek">
            link 2 </Link></div>
            <div><Link href="/bartek">
            link 3 </Link></div>
        </footer>
    )
}