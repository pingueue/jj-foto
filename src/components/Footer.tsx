import {cn} from "@/lib/utils";

export default function Footer({className}: {className?: string}) {
    return (
        <footer className={cn(className,"flex p-10 gap-6 flex-wrap items-center justify-center")}>
            <div>future link1</div>
            <div>future link2</div>
            <div>future link3</div>
            <div>future link4</div>
        </footer>
    )
}