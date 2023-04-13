export default function Lane({
    ...props
}) {
  return (
    <div className="lane">
      <p className="mb-2">{props.title}</p>
      {props.children}
    </div>
  );
}
