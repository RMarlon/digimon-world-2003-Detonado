import { Introdution } from "@/types/Introdution";

type IntroProps = {
    opening: Introdution[];
}

export const Intro = ({ opening }: IntroProps) => {
    return (
        <>
            {opening.map(item => (
                <div key={item.id}>
                    <div className="font-display text-center mt-10 font-bold">
                        <h1 className="text-3xl text-[#81c896] text-[16px] sm:text-2xl">{item.title}</h1>
                        <p className="text-2xl text-[#dead39] text-[16px] sm:text-2xl">{item.subTitle}</p>

                        <video src={item.videoIntro[0]} autoPlay controls
                            className="w-[300px] sm:w-full m-auto mt-4 rounded-md shadow shadow-[#81c896]"
                        />

                    </div>
                </div>
            ))}
        </>
    );
}