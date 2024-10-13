import { useForm } from "react-hook-form";
import { FormData, LoginSchema } from "./typse";
import FormField from "./FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "dns";

function Form() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        setError, 
    } = useForm<FormData>({
        resolver: zodResolver(LoginSchema),
    });

const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
};

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>Zod & React-Hook-Form</h1>
                <FormField
                    type="email"
                    placeholder="Email"
                    name="email"
                    register={register}
                    required
                    error={errors.email}
            />
                <FormField
                    type="text"
                    placeholder="GitHub URL"
                    name="githubUrl"
                    register={register}
                    error={errors.githubUrl}
            />

                <FormField
                type="number"
                placeholder="Years of Experience (1-10)"
                name="yearsOfExperience"
                register={register}
                error={errors.yearsOfExperience}
                valueAsNumber
            />

                <FormField
                type="password"
                placeholder="Password"
                name="password"
                register={register}
                error={errors.password}
            />

                <FormField
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                register={register}
                error={errors.confirmPassword}
            />

            <button type="submit" className="submit-button">
                Submit
            </button>
        </div>
    </form>
    );
}

export default Form;