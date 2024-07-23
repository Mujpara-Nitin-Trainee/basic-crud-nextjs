import BasicUser from "@/components/basicUser"
import Discount from "@/components/discount"
import Shutter from "@/components/shutter"
import { formAttributes } from "@/types/types";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from "@/validations/validation";
import { useDispatch, useSelector } from "react-redux";
import { addShutterBill, shutterDetails, updateShutterBill } from "@/redux/shutter/shutterSlice";
import { useRouter } from "next/router";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";
import Model from "@/components/model";

const initialValue = {
  personName: '',
  customerName: '',
  date: new Date(),
  shutter: [
    {
      shutterName: '',
      width: 0,
      height: 0,
      area: 0,
    }
  ],
  total: 0,
  discountType: '',
  discount: 0
}

export default function Employee() {

  const searchParams = useSearchParams();

  const router = useRouter();

  const id = Number(searchParams.get('id'));

  const shutterBill = useSelector(shutterDetails);

  const { register, control, handleSubmit, watch, setValue, formState: { errors }, reset } = useForm<formAttributes>({
    defaultValues: initialValue,
    resolver: yupResolver(formSchema)
  });

  useEffect(() => {
    if (id) {
      const data = shutterBill.shutterBill.find((ele) => (ele.id === id));
      reset(data);
    }
  }, [id])

  const dispatch = useDispatch();

  const [model, setModel] = useState<number>(0);

  const handleForm = (formData: formAttributes) => {

    if (id) {
      dispatch(updateShutterBill(formData));
      router.push('/shutterBills');
    } else {
      if (shutterBill.shutterBill.length === 0) {
        formData.id = 1;
      } else {
        formData.id = shutterBill.shutterBill.length + 1;
      }

      dispatch(addShutterBill(formData));
      router.push('/shutterBills');
    }

  }

  const total = watch('total');

  return <>
    <p className="text-3xl text-center">Add Details</p>
    {(model === 1) ? <Model view={setModel} /> : <></>}
    <form onSubmit={handleSubmit(handleForm)}>
      <BasicUser register={register} control={control} model={setModel} error={errors} />
      <Shutter register={register} control={control} watch={watch} setValue={setValue} error={errors} />
      <Discount register={register} error={errors} watch={watch} total={total} />
      <div className="w-[78%] flex justify-end">
        <input type="submit" value="Submit" className="border-2 border-black px-2"></input>
      </div>
    </form>
  </>
}
