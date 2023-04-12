export default function Activity({
    ...props
}) {
  return (
    <div className="w-full bg-neutral-700 text-neutral-50 rounded-xl py-2 px-4 my-2">
      <div className="title flex flex-row justify-between items-center mb-2">
        <p className="py-2 font-semibold">{props.title}</p>
        <button className="bg-rose-900 text-rose-50 p-2 px-4 text-xs rounded-full cursor-pointer">
          X
        </button>
      </div>

      <p className="pb-0">
        {props.children}
      </p>
    </div>
  );
}
