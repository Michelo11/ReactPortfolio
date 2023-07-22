export type FormInput = {
  type: "text" | "number" | "textarea" | "select" | "range";
  label: string;
  placeholder?: string;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  value: string | number;
  onChange: (value: any) => void;
};

export type DisplayProps = {
  title: string;
  description: string;
  items: {
    name: string;
    value: string | number;
  }[];
  price: number;
  button: {
    text: string;
    description?: string;
    onClick: () => void;
  };
};

export type FormProps = {
  inputs: FormInput[];
  display: DisplayProps;
};

export const BaseForm = function BaseForm({ inputs, display }: FormProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-10 2xl:w-3/5 gap-4 h-full">
      <div className="flex w-full md:w-1/2 h-full flex-col gap-4">
        {inputs.map((input) => (
          <div className="input-card" key={input.label}>
            <p className="text-gray-400 uppercase">{input.label}</p>
            {input.type === "select" ? (
              <select
                onChange={(e) => input.onChange(e.target.value)}
                value={input.value}
                className="bg-[#313a4e] select p-2 w-full md:w-1/2"
              >
                {input.options?.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : input.type === "range" ? (
              <div className="w-full md:w-1/2">
                <p className="text-gray-400">{input.value}</p>
                <input
                  type="range"
                  min={input.min}
                  max={input.max}
                  className="range range-primary w-full"
                  value={input.value}
                  onChange={(e) => input.onChange(Number(e.target.value))}
                  step={input.step}
                />
              </div>
            ) : (
              <input
                className="input bg-[#313a4e] appearance-none w-full md:w-1/2"
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                onChange={(e) => input.onChange(e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
      <div className="custom-card flex-col h-full p-4 w-full md:w-1/3">
        <h1 className="text-2xl text-primary uppercase text-center">
          {display.title}
        </h1>
        <p className="text-gray-500 text-center text-sm">
          {display.description}
        </p>
        <div className="flex flex-col gap-4 mt-4">
          {display.items.map((item) => (
            <div key={item.name} className="flex flex-col justify-between">
              <p className="text-gray-500 uppercase">{item.name}</p>
              <p className="text-gray-400 text-ellipsis whitespace-nowrap overflow-hidden">
                {item.value}
              </p>
            </div>
          ))}

          {display.price > 0 && (
            <h1 className="text-primary text-4xl text-center font-light">
              €{display.price}
            </h1>
          )}
          {display.button.description && (
            <p className="text-gray-500 text-center text-sm">
              {display.button.description}
            </p>
          )}
          <button onClick={display.button.onClick} className="custom-button">
            {display.button.text}
          </button>
        </div>
      </div>
    </div>
  );
};
