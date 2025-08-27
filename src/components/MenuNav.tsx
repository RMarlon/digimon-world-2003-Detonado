import { Navmenu } from "@/types/NavMenu";
import Link from "next/link";

type Props = {
    head: Navmenu[];
}

export const MenuNav = ({ head }: Props) => {
    return (
        <>

            {head.map(item => (
                <div key={item.id}>
                    <header className="flex flex-col items-center font-display px-3 py-2 bg-[#005594] md:flex-row md:pl-0 md:justify-between lg:rounded-full shadow shadow-[#8bb97e]"> {/* início header  */}
                        <div className="flex items-center ">

                            <Link href={item.logo[0]} target="_blank">
                                <img src={item.logo[1]} alt="" className="w-30 h-30 rounded-full shadow shadow-[#8bb97e] md:ml-2" />
                            </Link>

                        </div>

                        <nav className="flex flex-col items-center lg:flex-row pr-10 py-10 lg:py-0"> {/* início nav  */}
                            <div>
                                <img src={item.imgNav} alt="imagem do gabumon" className="w-40 " />
                            </div>
                            <ul className="flex flex-col md:flex-row gap-4 shadow shadow-[#17ccd6] p-10 md:p-4">
                                <li>
                                    <Link href={item.linkStart[0]} target="_blank" className="hover:text-[#ffdd2f] hover:border-b hover:border-[#8bb97e] hover:pb-2 duration-300 ease-in-out">{item.linkStart[1]}</Link>
                                </li>
                                <li>
                                    <Link href={item.linkHistory[0]} target="_blank" className="hover:text-[#ffdd2f] hover:border-b hover:border-[#8bb97e] hover:pb-2 duration-300 ease-in-out" >{item.linkHistory[1]}</Link>
                                </li>
                                <li>
                                    <Link href={item.linkItems[0]} target="_blank" className="hover:text-[#ffdd2f] hover:border-b hover:border-[#8bb97e] hover:pb-2 duration-300 ease-in-out" >{item.linkItems[1]}</Link>
                                </li>
                                <li>
                                    <Link href={item.linkEvolution[0]} target="_blank" className="hover:text-[#ffdd2f] hover:border-b hover:border-[#8bb97e] hover:pb-2 duration-300 ease-in-out" >{item.linkEvolution[1]}</Link>
                                </li>
                                <li>
                                    <Link href={item.linkCadGame[0]} target="_blank" className="hover:text-[#ffdd2f] hover:border-b hover:border-[#8bb97e] hover:pb-2 duration-300 ease-in-out" >{item.linkCadGame[1]}</Link>
                                </li>
                            </ul>
                        </nav> {/* Fim nav  */}

                    </header> {/* Fim header  */}
                </div>
            ))}
        </>
    );
}