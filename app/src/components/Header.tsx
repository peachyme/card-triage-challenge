interface Props {
  arrhythmias: string[];
  patientName: string;
  selectedArrhythmia: string;
  setPatientName: React.Dispatch<React.SetStateAction<string>>;
  setSelectedArrhythmia: React.Dispatch<React.SetStateAction<string>>;
}

function Header({ arrhythmias, patientName, selectedArrhythmia, setPatientName, setSelectedArrhythmia }: Props) {

  // set the search attributes states on input change :
  // patient name
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPatientName(event.target.value);
  };
  // arrhythmia
  const handleArrhythmiaChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedArrhythmia(event.target.value);
  };

  return (
    <nav className="block w-full max-w-screen-xl px-4 my-5 mb-10 py-4 mx-auto shadow-md rounded-xl bg-columnBgColorDark">
      <div className="flex flex-wrap items-center justify-between text-gray-700 gap-y-4">
        <a
          href="#"
          className="mr-4 ml-2 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal antialiased"
        >
          Patient Cards
        </a>
        <div className="relative flex w-full gap-2 sm:w-max">
          <div className="relative h-10 w-full min-w-[200px]">
            <div className="absolute grid place-items-center top-2/4 right-3 -translate-y-2/4">
              <svg
                width="13"
                height="14"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2666666/svg"
              >
                <path
                  d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                  fill="nonz"
                ></path>
                <path
                  d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <input
              type="text" value={patientName} onChange={handleSearchChange}
              className="peer h-full w-full rounded-[7px] bg-columnBgColorLight px-3 py-2.5 pr-20 font-sans text-sm font-normal  !text-gray-700 outline outline-0 transition-all focus:border-2 focus:border-gray-500 focus:border-t-columnBgColorDark focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight !text-gray transition-all before:pointer-events-none before:mt-[6.5px]  before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-400">
              Patient Name
            </label>
          </div>
          <div className="relative h-10 w-72 min-w-[200px]">
            <select value={selectedArrhythmia} onChange={handleArrhythmiaChange} className="peer h-full w-full rounded-[7px] bg-columnBgColorLight px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all focus:border-2 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
              <option value={""}>
                Arrythmia
              </option>
              {arrhythmias.map((arrhythmia) => (
                <option key={arrhythmia} value={arrhythmia}>{arrhythmia}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
