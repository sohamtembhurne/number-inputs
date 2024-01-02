import { useState } from "react";

const NumberInput = ({ type }) => {
    const [inputText, setInputText] = useState("");

    const handleChange = (e) => {
        const newText = e.target.value;
        const filteredText = newText.replace(/[^0-9]/g, '');

        const formattedValue = (type === 'percentage')
            ? filteredText
            : filteredText.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        setInputText(formattedValue);
    };

    return (
        <div className="flex flex-col items-center justify-center pt-10">
            <h1 className="text-white mb-5 text-xl">Input type : {type}</h1>
            <input
                className="bg-transparent text-xl text-purple-400 border border-purple-400 w-1/4 p-2 rounded-md text-center outline-none focus:border-purple-800 focus:ring hover:border-purple-600 transition-all duration-300"
                type="text"
                value={
                    (type === 'currency' ? `$ ${inputText}`
                        : (type === 'percentage' ? `${inputText} %`
                            : (type === 'regular' ? `${inputText}` : '')))
                }
                onChange={(e) => handleChange(e)}
                placeholder="Enter number"
            />
        </div>
    );
};

export default NumberInput;
