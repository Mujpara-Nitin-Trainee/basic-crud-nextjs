import { useRouter } from "next/router";
import { shutterBillAttribute } from "@/types/types";

export default function ShutterBillList({ shutterBill, updateBill, removeBill }: { shutterBill: shutterBillAttribute, updateBill: (id: number) => Promise<void>, removeBill: (id: number) => Promise<void> }) {

  return (
    <tbody>
      <tr className="border-2 border-black">
        <td className="py-6 px-3 border-2 border-black">{shutterBill.personName}</td>
        <td className="py-6 px-3 border-2 border-black">{shutterBill.customerName}</td>
        <td className="py-6 px-3 border-2 border-black">{shutterBill.date.toString()}</td>
        <td className="py-6 px-3 border-2 border-black">
          <button onClick={() => (shutterBill.id) && updateBill(shutterBill.id)}>
            <svg className="w-6 h-6 text-gray-800 dark:text-black hover:opacity-55 hover:bg-cyan-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
            </svg>
          </button>
          <button type="button" className="flex float-right" onClick={() => (shutterBill.id) && removeBill(shutterBill.id)}>
            <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
            </svg>
          </button>
        </td>
      </tr>
    </tbody >
  )
}