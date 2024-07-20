import { shutterDetails } from "@/redux/shutter/shutterSlice";
import { useSelector } from "react-redux"
import ShutterBillList from "../../components/employeeList";

export default function Employee() {

  const shutterBills = useSelector(shutterDetails);

  return (
    <div>
      {shutterBills.shutterBill.map((ele, index) => {
        return <ShutterBillList key={index} shutterBill={ele}></ShutterBillList>
      })}
    </div>
  )
}