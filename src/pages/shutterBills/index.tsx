import { shutterDetails } from "@/redux/shutter/shutterSlice";
import { useDispatch, useSelector } from "react-redux"
import ShutterBillList from "../../components/shutterBillList";
import { deleteShutterBill } from "../../redux/shutter/shutterSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ShutterBill() {

  const router = useRouter();

  const dispatch = useDispatch();

  const shutterBills = useSelector(shutterDetails);


  const updateShutterBill = async (id: number) => {
    router.push(`/shutterBills/addShutterBill?id=${id}`);
  }

  const removeShutterBill = async (id: number) => {
    dispatch(deleteShutterBill(id));
  }

  return (
    <div className="flex justify-center items-center my-10">
      <ShutterBillList shutterBill={shutterBills.shutterBill} updateBill={updateShutterBill} removeBill={removeShutterBill}></ShutterBillList>
    </div>
  )
}