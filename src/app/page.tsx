import CardPostItems from "@/components/CardPostItems";
import CardTopicItems from "@/components/CardTopicItems";
import CreateForm from "@/components/CreateForm";
import { SiApostrophe } from "react-icons/si";

export default function Home() {

  return (
    <div className='min-h-screen wrapper flex justify-center w-full gap-14 pt-40'>
      <div className="w-full flex flex-col gap-6">
        <div className="flex gap-4 items-center text-green-500">
          <SiApostrophe className="w-12 h-12" />
          <h1 className="text-[32px] font-bold">
            Top Post
          </h1>
        </div>
        <div className='flex flex-col gap-4'>
          <CardPostItems />
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 max-w-xs">
        <CreateForm />

        <div className='bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-[12px] flex flex-col gap-6'>
          <h3 className='text-[20px] font-semibold text-gray-50 tracking-wide'>
            Recent Topics
          </h3>

          <div className='flex flex-col gap-2 text-gray-100 ml-4'>
            <CardTopicItems />
          </div>
        </div>
      </div>
    </div>
  )
}
