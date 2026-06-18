import { FaPaperPlane, FaPhoneAlt, FaUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";


export default async function Header() {
    const cookieStore = await cookies();
    const isLoggedIn = cookieStore.has("token");
    const userName = cookieStore.get("username")?.value;
    return (
<header>
          <div className="bg-primary text-white p-3">
            <div className="container mx-auto flex justify-between">
          <div className="left-group items-center gap-2 flex"><FaPaperPlane /> 4000@dinmaegler.com <FaPhoneAlt className="ml-4" />+45 7070 4000  </div> 
          {isLoggedIn 
          ? <div className="flex gap-2 items-center"><FaUser /> {userName}</div> 
          : <Link 
            href="/login"
            className="flex gap-2 items-center"
          >
            <FaUser />log ind
           </Link>
           }
            </div>
          </div>
          <div className="p-4">
              <div className="container mx-auto flex justify-between">
              <Link href="/">
                    <Image src={"/din_maegler_logo.png"} width={296} height={49} alt="Din Mægler" />
              </Link>
              <nav className="flex items-end sm:hidden">
                <button className="text-3xl" >&#9776;</button>
              </nav>
                <nav className="gap-8 items-end hidden sm:flex">
                  <Link href="/boliger">Boliger til salg</Link>
                  <Link href="/maeglere">Mæglere</Link>
                  <Link href="/kontakt">Kontakt os</Link>
                </nav>
              </div>
          </div>
        </header>
    )
}