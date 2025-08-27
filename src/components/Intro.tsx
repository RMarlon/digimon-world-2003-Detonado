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
                        <h1 className="text-3xl text-[#81c896]">{item.title}</h1>
                        <p className="text-2xl text-[#dead39]">{item.subTitle}</p>
                        <video autoPlay controls className="m-auto mt-4 rounded-md shadow shadow-[#81c896]">
                            <source src={item.videoIntro[0]} type="video.mp4" />
                        </video>
                    </div>
                </div>
            ))}
        </>
    );
}