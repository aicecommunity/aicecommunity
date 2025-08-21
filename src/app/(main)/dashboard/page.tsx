import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

// ✅ Dashboard sub-components
import WelcomeBanner from "./WelcomeBanner";
import TaskItem from "./TaskItem";
import Syllabus from "./Syllabus";

// ✅ Images
import dashboard_banner from '@/images/dashboard_banner.png'
import dashboard_id_mark from '@/images/dashboard_id_mark.png'
import dashboard_certificate_mark from '@/images/dashboard_certificate_mark.png'

export default function Dashboard() {

  return (
      <section>
        {/* Welcome Banner */}
        <div className="w-full px-6">
          <WelcomeBanner banner={dashboard_banner} />
        </div>

        {/* Info Cards */}
        <div className="mt-6 grid grid-cols-1  lg:grid-cols-4 gap-4 mx-6">
        {/* ID Card */}
        <Card className="h-[120px] bg-[#26A65B] flex justify-center py-0 px-3">
        <CardContent className="text-white flex gap-2 items-center p-0">
            <Image src={dashboard_id_mark} alt="id" className="w-[40px]" />
            <div>
            <h3 className="text-lg font-semibold">AiCE ID</h3>
            <p className="text-sm font-bold">AiCE/2025/001/0043</p>
            </div>
        </CardContent>
        </Card>

        {/* Current Course */}
        <Card className="h-[120px] bg-[#0077B5]  lg:col-span-2 flex justify-center py-0 px-3">
        <CardContent className="text-white p-0 w-full">
            <h3 className="text-sm font-semibold">Current Course</h3>
            <div className="flex justify-between items-center">
            <p className="text-lg font-bold">TypeScript Programming</p>
            <p className="text-xs">(Cohort 2)</p>
            </div>
            <Progress value={60} className="mt-2 [&>div]:bg-[#55C7FF]" />
            <p className="text-xs pt-2">Progress: 60%</p>
        </CardContent>
        </Card>

        {/* Certificates */}
        <Card className="h-[120px] bg-[#9C27B0] flex justify-center py-0 px-3">
        <CardContent className="flex gap-2 text-white items-center p-0">
            <Image src={dashboard_certificate_mark} alt="cert" className="w-[40px]" />
            <div>
            <h3 className="text-sm font-semibold">Certificates Earned</h3>
            <p className="text-3xl font-bold">2</p>
            </div>
        </CardContent>
        </Card>
        </div>


        {/* Current Tasks & Syllabus */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-4 mx-6 pb-6">
          {/* Tasks */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Current Tasks</h3>
            <div className="space-y-4">
              <TaskItem
                title="Typing function parameters and return types"
                code="AiCE-INT-TS-2.1"
                date="Aug 12, 2025"
                progress={90.2}
                status="Continue"
              />
              <TaskItem
                title="Optional and default parameters"
                code="AiCE-INT-TS-2.2"
                date="Aug 13, 2025"
                progress={40}
                status="Continue"
              />
              <TaskItem
                title="Object types and nested type structures"
                code="AiCE-INT-TS-2.3"
                date="Aug 14, 2025"
                progress={0}
                status="Start"
              />
            </div>
          </div>
            <Syllabus/>
         
        </div>
      </section>
  );
}
