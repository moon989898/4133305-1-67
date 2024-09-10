import { FC } from "react";
import { FormFieldProps } from "./typse";

const FormField: React.FC<FormFieldProps> = ({
    type,
    register,
    name,
    error,
    
    placeholder,
    valueAsNumber,
    required,
}) => (
    <>
        <input
            type={type}
            placeholder={placeholder}
            required={required}
            {...register(name, { valueAsNumber })}
        />
        {error && <span>{error.message}</span>}
    </>
);

    FormField.defaultProps = {
    required: false,
};

export default FormField;