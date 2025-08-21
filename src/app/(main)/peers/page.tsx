import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import profile_pic from '@/images/profile_pic.png'
import small_logo from '@/images/small_logo.png'
import linkedin from '@/images/linkedin.png'

const peers = [
  {
    id: 1,
    name: "Adekunle Akanji Adedeji",
    studentId: "AiCE/2025/001/0043",
    email: "adekunle@gmail.com",
    phone: "+2348103230934",
    avatar: profile_pic.src,
  },
  {
    id: 2,
    name: "Adekunle Akanji Adedeji",
    studentId: "AiCE/2025/001/0043",
    email: "adekunle@gmail.com",
    phone: "+2348103230934",
    avatar: profile_pic.src,
  },
  {
    id: 3,
    name: "Adekunle Akanji Adedeji",
    studentId: "AiCE/2025/001/0043",
    email: "adekunle@gmail.com",
    phone: "+2348103230934",
    avatar: profile_pic.src,
  },
  {
    id: 4,
    name: "Adekunle Akanji Adedeji",
    studentId: "AiCE/2025/001/0043",
    email: "adekunle@gmail.com",
    phone: "+2348103230934",
    avatar: profile_pic.src,
  },
  {
    id: 5,
    name: "Adekunle Akanji Adedeji",
    studentId: "AiCE/2025/001/0043",
    email: "adekunle@gmail.com",
    phone: "+2348103230934",
    avatar: profile_pic.src,
  },
  {
    id: 6,
    name: "Adekunle Akanji Adedeji",
    studentId: "AiCE/2025/001/0043",
    email: "adekunle@gmail.com",
    phone: "+2348103230934",
    avatar: profile_pic.src,
  },
]

export default function PeersPage() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
        {peers.map((peer) => (
          <Card key={peer.id} className="flex md:flex-row flex-col items-center p-4 rounded-2xl shadow-md bg-[#EEECEC]">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full overflow-hidden mr-4 flex-shrink-0">
              <img
                src={peer.avatar}
                alt={peer.name}
                className="w-full h-full"
              />
            </div>

            {/* Info + Actions */}
            <CardContent className="flex-1 p-0 w-full">
              <h3 className="text-lg font-semibold">{peer.name}</h3>
              <p className="text-sm text-gray-600">{peer.studentId}</p>
              <p className="text-sm text-gray-600">{peer.email}</p>
              <p className="text-sm text-gray-600 mb-3">{peer.phone}</p>

              {/* Action buttons */}
              <div className="flex md:flex-row flex-col gap-2">
                <Button className="bg-[#195C49] hover:bg-emerald-700 flex items-center gap-2 ">
                  <Image src={small_logo} alt="phone" className="w-5 h-auto"/>
                  Open Chat
                </Button>
                <Button className="bg-[#0077B5] hover:bg-sky-700 flex items-center gap-2 ">
                  <Image src={linkedin} alt="phone" className="w-5 h-auto"/>
                  Connect
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
