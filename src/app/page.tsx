import { MenuNav } from "@/components/MenuNav";
import { Welcome } from "@/components/History";
import { listHistory} from "@/data/listHistory";
import { listNav } from "@/data/listNav";
import { Intro } from "@/components/Intro";
import { listIntro } from "@/data/listIntro";

const Page = () => {
  return (
    <div className="bg-[url(/images/bg-image.png)] h-screen  bg-cover">
      <div className="container mx-auto py-10"> {/* star container */}

        <section>
          <MenuNav head={listNav} />
        </section>

        <section>
          <Intro opening={listIntro}/>
        </section>

         <section>
          <Welcome info={listHistory}/>
        </section>

      </div> {/* end container */}
    </div>
  );
}

export default Page;