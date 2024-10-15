import Logo from "@/components/Logo";
import {cn} from "@/lib/utils";
import Link from "next/link";

export default function NavBar() {

    return (
        <>
            <DesktopNavBar />
        </>
    )

}
function DesktopNavBar() {
    return (
        <div className={"flex p-5"}>
            <div>
                <Logo homePageLink={true}/>
            </div>
            <div className={"flex justify-end w-full gap-6 items-center"}>
            <Link href={"/"}>Home</Link>
            <Link href={"/gallery"}>Gallery</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
            </div>
        </div>
    )
}
function MobileNavBar() {
    return (
        <></>
    )
}