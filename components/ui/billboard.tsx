import { type Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-xl relative aspect-square md:aspect-[2.1/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold font-[Timeless] text-white text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs absolute top-6 left-6 text-left">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
