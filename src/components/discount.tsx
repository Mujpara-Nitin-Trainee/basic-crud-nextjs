import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import Input from "./common/input";
import Label from "./common/label";
import Radio from "./common/radio";
import { formAttributes } from "@/types/types";
import { useEffect, useState } from "react";

export default function Discount({ register, error, watch, total }: { register: UseFormRegister<formAttributes>, error: FieldErrors<formAttributes>, watch: UseFormWatch<formAttributes>, total: number }) {

  const discountType = watch('discountType');
  const discount = watch('discount');


  const [payableAmount, SetPayableAmount] = useState<number>(0);

  const handleDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    let userValue = +e.target.value;
    if (discountType === 'amount') {
      SetPayableAmount(total - userValue);
    } else {
      let deductionValue = ((total * userValue) / 100);
      SetPayableAmount(total - deductionValue);
    }
  }

  useEffect(() => {
    console.log('Hello', total);
  }, [total])


  return (
    <>
      <h3 className="text-2xl my-6 mx-10">Discount Details</h3>

      <div className="flex my-3 w-3/4">
        <div className="w-1/4 flex items-center justify-between mx-10 ">
          <Label name="Type of Discount"></Label>
        </div>
        <div className="flex w-[8%] justify-between">
          <Radio name="discountType" register={register} error={error} value="amount" />
          <Label name="Amount"></Label>
        </div>
        <div className="flex w-[9%] justify-between mx-10">
          <Radio name="discountType" register={register} error={error} value="percentage" />
          <Label name="percentage"></Label>
        </div>
      </div>

      <div className="flex my-6 w-1/4 mx-10 items-center justify-between">
        <Label name="Amount"></Label>
        <Input name="discount" register={register} handleChange={(e) => handleDiscount(e)} error={error} placeholder="enter Value" />
      </div>

      <div className="my-6 mx-20 w-1/4 float-right">
        <p>Total :- {total}</p>
        <p>Discount :- {discount}{(discountType === 'percentage') ? '%' : ''}</p>
        <p>Grand Discount :- {payableAmount}</p>
      </div>

    </>
  )
}