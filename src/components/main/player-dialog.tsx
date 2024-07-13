import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { usePlayerDialog } from "@/hooks/use-player-dialog";
import swords from "@/assets/main/swords.png";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";

export default function PlayerDialog() {
  const { isOpen, setIsOpen } = usePlayerDialog();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[350px] rounded-lg bg-black">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription className="flex flex-col text-white justify-start items-start gap-2 text-xl font-primary">
            <span>NAGIBATOR</span>
            <span>БАЛАНС: 346000 $GO </span>
            <span>WIN RATE: 73%</span>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <div className="grid w-full font-primary text-white items-center gap-1.5">
              <Label className="text-xl" htmlFor="bet">
                Сумма ставки
              </Label>
              <Input tabIndex={-1} autoFocus={false} type="number" id="bet" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <button
            onClick={() => {
              setIsOpen(false);
              toast({
                title: "Ready to fight!",
                description: "Your bet was sent to Nagibator123",
              });
            }}
            className="font-primary flex justify-center text-white text-2xl uppercase"
          >
            go пари <img src={swords} className="w-8 ml-2 h-8" alt="" />
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
