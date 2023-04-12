export default function Lane({
    ...props
}) {
  return (
    <div className="w-full h-max bg-neutral-800 text-neutral-50 rounded-xl p-5 pt-5 ">
      <p className="mb-2">{props.title}</p>
      {props.children}

      <div className="w-full bg-neutral-950 text-neutral-50 rounded-xl font-semibold p-4 text-base text-center">
        Adicionar
      </div>
    </div>
  );
}
