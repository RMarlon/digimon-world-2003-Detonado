import { MenuNav } from "@/components/MenuNav";
import { Welcome } from "@/components/History";
import { listIntro } from "@/data/listHistory";
import { listNav } from "@/data/listNav";

const Page = () => {
  return (
    <div className="bg-[url(/images/bg-image.png)] h-screen  bg-cover">
      <div className="container mx-auto py-10"> {/* star container */}

        <section>
          <MenuNav head={listNav} />
        </section>

         <section>
          <Welcome info={listIntro}/>
        </section>

      </div> {/* end container */}
    </div>
  );
}

export default Page;