import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TaskItem({
  title, code, date, progress, status
}: { title: string; code: string; date: string; progress: number; status: string }) {
  return (
    <Card className="bg-[#EEECEC] p-0">
      <CardContent className="flex justify-between items-start p-3">
        <div className="w-[70%]">
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="text-xs text-gray-500">{code} • {date}</p>
          <Button className={`px-4 py-1 w-[100px] text-sm mt-3 rounded-md ${status === 'Continue' ? "bg-[#195C49]" : "bg-[#26A65B]"}`}>
            {status}
          </Button>
        </div>
        <p className="text-xs text-gray-400">{progress}% done</p>
      </CardContent>
    </Card>
  );
}
