import Lane from "../components/Lane";
import Activity from "../components/Activity";
export default function Index() {
  function handleWithDragElement(dragElement) {}

  return (
    <>
      <div className="min-w-full min-h-screen bg-neutral-200 text-neutral-800 p-16 text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 ">
        <Lane title="Segunda">
          <Activity title="CBIO220001">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et,
            quibusdam assumenda dolore ipsa accusantium reprehenderit
            consequatur tempore.
          </Activity>
          <Activity title="CBIO220001">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et,
            quibusdam assumenda dolore ipsa accusantium reprehenderit
            consequatur tempore.
          </Activity>
        </Lane>
        <Lane title="Terça">
          <Activity title="CBIO220001">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et,
            quibusdam assumenda dolore ipsa accusantium reprehenderit
            consequatur tempore.
          </Activity>
          <Activity title="CBIO220001">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et,
            quibusdam assumenda dolore ipsa accusantium reprehenderit
            consequatur tempore.
          </Activity>
          <Activity title="CBIO220001">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et,
            quibusdam assumenda dolore ipsa accusantium reprehenderit
            consequatur tempore.
          </Activity>
          <Activity title="CBIO220001">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et,
            quibusdam assumenda dolore ipsa accusantium reprehenderit
            consequatur tempore.
          </Activity>
        </Lane>
        <Lane title="Quarta">
          <Activity title="CBIO220001">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et,
            quibusdam assumenda dolore ipsa accusantium reprehenderit
            consequatur tempore.
          </Activity>
          <Activity title="CBIO220001">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et,
            quibusdam assumenda dolore ipsa accusantium reprehenderit
            consequatur tempore.
          </Activity>
        </Lane>
        <Lane title="Quinta">
          <Activity title="CBIO220001">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et,
            quibusdam assumenda dolore ipsa accusantium reprehenderit
            consequatur tempore.
          </Activity>
          <Activity title="CBIO220001">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et,
            quibusdam assumenda dolore ipsa accusantium reprehenderit
            consequatur tempore.
          </Activity>
          <Activity title="CBIO220001">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et,
            quibusdam assumenda dolore ipsa accusantium reprehenderit
            consequatur tempore.
          </Activity>
        </Lane>
        <Lane title="Sexta">
          <Activity title="CBIO220001">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et,
            quibusdam assumenda dolore ipsa accusantium reprehenderit
            consequatur tempore.
          </Activity>
        </Lane>
        <Lane title="Sabado"></Lane>
      </div>
    </>
  );
}
