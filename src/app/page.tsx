import { MenuNav } from "@/components/MenuNav";
import { Welcome } from "@/components/History";
import { listHistory} from "@/data/listHistory";
import { listNav } from "@/data/listNav";
import { Intro } from "@/components/Intro";
import { listIntro } from "@/data/listIntro";

const Page = () => {
  return (
    <div className="bg-[url(/images/bg-image.png)] bg-cover">
      <div className="container mx-auto py-10"> {/* star container */}
          <MenuNav head={listNav} />
          <Intro opening={listIntro}/>
          <Welcome info={listHistory}/>
      </div> {/* end container */}
    </div>
  );
}

export default Page;