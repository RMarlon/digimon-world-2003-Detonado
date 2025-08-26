import { Intro } from "@/types/Intro";

type Props = {
    info: Intro[];
}

export const Welcome = ({ info }: Props) => {
    return (
        <>
            {info.map(item => (
                <>
                    <div className="my-10 text-2xl  text-gray-400 p-4 text-justify shadow shadow-[#17ccd6]">
                        <p>
                            <span className="flex items-center">
                                <img src={item.imgGoma} alt="imagem gomamon" className="w-40" />
                                {item.desc}
                            </span>

                            <span className="text-[#dead39] flex items-center font-bold">
                                {item.info}
                                <img src={item.imgTento} alt="imagem tentonmon" className="w-60" />
                            </span>

                            <span className="text-red-200">
                                {item.desc1}
                            </span>
                        </p>
                    </div>
                </>
            ))}
        </>
    );
}