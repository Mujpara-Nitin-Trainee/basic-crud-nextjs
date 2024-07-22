import { shutterDetails } from "@/redux/shutter/shutterSlice";
import { useSelector } from "react-redux"
import ShutterBillList from "../../components/employeeList";
import { useRouter } from "next/router";

export default function Employee() {

  const shutterBills = useSelector(shutterDetails);
  const router = useRouter();

  const updateShutterBill = async (id: number) => {
    router.push(`/shutterBills/addShutterBill?id=${id}`);
  }

  return (
    <div className="flex justify-center items-center my-10">
      <div>
        <button className="my-6 ml-[460px] border-2 border-black px-2 py-1" onClick={() => router.push('/shutterBills/addShutterBill')}>Add Employee</button>
        <table>
          <thead>
            <tr className="border-2 border-black">
              <th className="py-6 px-3 border-2 border-black">Personal Name</th>
              <th className="py-6 px-3 border-2 border-black">Customer Name</th>
              <th className="py-6 px-3 border-2 border-black">Date</th>
              <th className="py-6 px-3 border-2 border-black">Action</th>
            </tr>
          </thead>
          {shutterBills.shutterBill.map((ele, index) => {
            return <ShutterBillList key={index} shutterBill={ele} updateBill={updateShutterBill}></ShutterBillList>
          })}
        </table>
      </div>
    </div>
  )
}