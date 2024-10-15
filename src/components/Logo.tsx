import Image from "next/image";
import Link from "next/link";

export default function Logo({homePageLink}: {
    homePageLink?: boolean
}) {
    return (
        <>
            {homePageLink ? (
                <Link href={"/"}>
                    <ImagePart/>
                </Link>
            ) : (
                <ImagePart/>
            )}
        </>
    )
}

function ImagePart() {
    return (
        <Image
            className="dark:invert"
            src="/logobig.png"
            alt="Next.js logo"
            width={270}
            height={80}
        />
    )
}