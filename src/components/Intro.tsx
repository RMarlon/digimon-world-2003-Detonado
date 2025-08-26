import { Introdution } from "@/types/Introdution";

type IntroProps = {
    opening: Introdution[];
}

export const Intro = ({ opening }: IntroProps) => {
    return (
        <>
            {opening.map(item => (
                <div className="font-digi text-center mt-10 font-bold">
                    <h1 className="text-3xl text-[#81c896]">{item.title}</h1>
                    <p className="text-2xl text-[#dead39]">{item.subTitle}</p>
                    <video src={item.videoIntro[0]}></video>
                </div>
            ))}
        </>
    );
}