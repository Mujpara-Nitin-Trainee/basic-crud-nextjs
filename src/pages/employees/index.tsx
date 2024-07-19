import BasicUser from "@/components/basicUser"
import Discount from "@/components/discount"
import Shutter from "@/components/shutter"
import { formAttributes } from "@/types/types";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from "@/validations/validation";

const initialValue = {
  personName: '',
  customerName: 0,
  date: new Date(),
  shutter: [{
    shutterName: 0,
    width: 0,
    height: 0,
    area: 0,
  }],
  total: 0,
  discount: '',
  amount: 0,
  percentage: 0
}

export default function About() {

  const { register, control, handleSubmit, watch, setValue, formState: { errors } } = useForm<formAttributes>({
    defaultValues: initialValue,
    resolver: yupResolver(formSchema)
  });

  const handleForm = (formData: formAttributes) => {
    console.log(formData);
  }

  console.log(errors);

  return <>
    <p className="text-3xl text-center">Add Details</p>
    <form onSubmit={handleSubmit(handleForm)}>
      <BasicUser register={register} control={control} error={errors} />
      <Shutter register={register} control={control} watch={watch} setValue={setValue} error={errors} />
      <Discount register={register} error={errors} />
      {/* <div className="text-center my-10">
        <input type="submit" value="Submit" className="border-2 border-black px-2"></input>
      </div> */}
    </form>
  </>
}