import { Intro } from "@/types/Tale";

type Props = {
    info: Intro[];
}

export const Welcome = ({ info }: Props) => {
    return (
        <>
            {info.map(item => (
                <div key={item.id}>
                    <div id="history" className="my-10 text-2xl  text-gray-400 p-4 text-justify shadow shadow-[#17ccd6] font-display">
                        <p>
                            <span className="sm:flex sm:items-center text-[16px] sm:text-2xl">
                                <img src={item.imgGoma} alt="imagem gomamon" className="w-40 m-auto" />
                                {item.desc}
                            </span>

                            <span className="text-[#dead39] font-bold sm:flex sm:items-center sm:flex-row-reverse text-[16px] sm:text-2xl">
                                <img src={item.imgTento} alt="imagem tentonmon" className="w-40 m-auto" />
                                {item.info}
                            </span>

                            <span className="text-[#d33b49] text-[16px] sm:text-2xl">
                                {item.desc1}
                            </span>
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}