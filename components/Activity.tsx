export default function Activity({ ...props }) {
  const modalityColor = props.modality == "P" ? "orange" : "emerald";

  return (
    <div
      className="w-full h-60 bg-neutral-700 text-neutral-50 rounded-xl py-2 px-4 my-2"
      key={props.discipline}
    >
      <div className="card">
        <div className="flex flex-row w-full justify-between gap-2">
          <div className="py-2 font-semibold">{props.title} </div>
          {(() => {
            let classes = [`pillButton`, `ml-auto`,`w-6`,`h-6`,`text-sm`];
            if (props.modality == "P") {
              classes.push("modalityPresential");
            } else if (props.modality) {
              classes.push("modalityRemote");
            }
            return (
              <button className={classes.join(" ")}>{props.modality}</button>
            );
          })()}
          {(() => {
            let classes = [`pillButton`, `grid-cols-1`,`w-6`,`h-6`];
            if (props.ucType == "C") {
              classes.push("ucTypeCore");
            } else if (props.ucType == "F") {
              classes.push("ucTypeFlex");
            }
            if (!props.modality) {
              classes.push("ml-auto");
            }
            if (props.ucType) {
              return (
                <button className={classes.join(" ")}>{props.ucType}</button>
              );
            }
          })()}
          {(() => {
            if (props.discipline) {
              return (
                <button
                  className="pillRecButton info w-10 h-6 mr-[-30px]"
                  onClick={(e) => props.handleWithModalOpen(true)}
                >
                  <i className="fa-solid fa-info"></i>
                </button>
              );
            }
          })()}
        </div>
      </div>
      <div className="py-1 h-36">{props.children}</div>
      <div className="flex flex-row-reverse relative align-bottom">
        {(() => {
          if (props.discipline) {
            return (
              <button
                className="pillButton delete"
                onClick={(e) =>
                  props.handleWithActivityRemoval({
                    discipline: props.discipline,
                  })
                }
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            );
          } else {
            return (
              <button
                className="pillButton add"
                onClick={(e) =>
                  props.handleWithActivityRemoval({
                    discipline: props.discipline,
                  })
                }
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            );
          }
        })()}
      </div>
    </div>
  );
}
