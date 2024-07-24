import { shutterDetails } from "@/redux/shutter/shutterSlice";
import { useDispatch, useSelector } from "react-redux"
import ShutterBillList from "../../components/shutterLists/shutterBillList";
import { deleteShutterBill } from "../../redux/shutter/shutterSlice";
import { useRouter } from "next/router";

export default function ShutterBill() {

  const dispatch = useDispatch();

  const router = useRouter();

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