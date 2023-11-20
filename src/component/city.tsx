const Citys = [
  {
    name: "台北市",
  },
  {
    name: "新北市",
  },
  {
    name: "基隆市",
  },
  {
    name: "宜蘭縣",
  },
  {
    name: "新竹市",
  },
  {
    name: "新竹縣",
  },
  {
    name: "桃園市",
  },
  {
    name: "苗栗縣",
  },
  {
    name: "台中市",
  },
  {
    name: "彰化縣",
  },
  {
    name: "南投縣",
  },
  {
    name: "嘉義縣",
  },
  {
    name: "嘉義市",
  },
  {
    name: "雲林縣",
  },
  {
    name: "台南市",
  },
  {
    name: "高雄市",
  },
  {
    name: "屏東縣",
  },
  {
    name: "台東縣",
  },
  {
    name: "花蓮縣",
  },
  {
    name: "金門縣",
  },
  {
    name: "連江縣",
  },
  {
    name: "澎湖縣",
  },
];
import { SelectGroup, SelectItem } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area"
export function City() {
  return (
    <>
    <ScrollArea className="h-72 w-48 rounded-md">
      <SelectGroup>
        {Citys.map((city) => (
          <SelectItem value={city.name}>{city.name}</SelectItem>
        ))}
      </SelectGroup>
      </ScrollArea>
    </>
  );
}
