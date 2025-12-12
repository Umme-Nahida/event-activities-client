import PaymentOverview from "@/components/modules/host/paymentOverview"
import { paymentOverview } from "@/services/event/allEvents"

const AdminPayment = async() => {

  const data = await paymentOverview()
  console.log("payment data", data)
  return (
    <div>
      <PaymentOverview data={data.data}/>
    </div>
  )
}

export default AdminPayment