interface Props {
  arrhythmia: string;
}

function Arrhythmia({ arrhythmia }: Props) {
  return (
    <div className="relative grid items-center px-2 py-1 font-sans text-xs text-gray-800 uppercase bg-columnBgColorLight rounded-md select-none whitespace-nowrap">
      <span>{arrhythmia}</span>
    </div>
  );
}

export default Arrhythmia;
