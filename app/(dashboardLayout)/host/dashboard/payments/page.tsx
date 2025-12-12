import PaymentOverview from '@/components/modules/host/paymentOverview'
import { paymentOverview } from '@/services/event/allEvents'

const HostPayment = async() => {

  const data = await paymentOverview()
  return (
    <div>
      <PaymentOverview data={data.data}/>
    </div>
  )
}

export default HostPayment