type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

export default function TipPercentageForm({setTip, tip} : TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form>
        {tipOptions.map((tipOptionX) => (
          <div className="flex gap-2" key={tipOptionX.id}>
            <label htmlFor={tipOptionX.id}>{tipOptionX.label}</label>
            <input id={tipOptionX.id} type="radio"
            name="tip"
            value={tipOptionX.value}
            onChange={e => setTip(+e.target.value)}
            // onChange={e => setTip(+e.target.value)} ese simbolo de + hace que el string que recibe el formulario se convierta a number.
            checked={tipOptionX.value === tip}
            // checked={tipOptionX.value === tip} con este codigo hacemos que se reinicie el option del formulario.
            />
          </div>
        ))}
      </form>
    </div>
  );
}
