import AdminAnalytics from "@/components/modules/Admin/AdminAnalytics"
import { analyticsData } from "@/services/admin/analytics"

const AdminDashboard = async() => {
  const analytics = await analyticsData()
  console.log("data",analytics)
  return (
    <div>
      <AdminAnalytics analyticsData = {analytics}/>
    </div>
  )
}

export default AdminDashboard