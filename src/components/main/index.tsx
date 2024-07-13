import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import hunt from "@/assets/main/hunt.png";
import PlayerDialog from "./player-dialog";
import { usePlayerDialog } from "@/hooks/use-player-dialog";

export default function Main() {
  const { setIsOpen } = usePlayerDialog();

  return (
    <div className="text-2xl font-primary p-6">
      <div>
        <h1>КОМУ НАДРАТЬ ЗАД?</h1>
        <Command className="mt-4">
          <CommandInput placeholder="Type a username to search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandSeparator />
            <CommandGroup heading="Quick Pick">
              <CommandItem
                className="flex w-full justify-between"
                key={"1"}
                value={"Nagibator123"}
                onSelect={() => setIsOpen(true)}
              >
                <span>Nagibator123</span>
                <span>FIGHT!?!?!</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
        <PlayerDialog />
        <img src={hunt} className="w-[300px] mx-auto mt-10 h-[300px] " alt="" />
      </div>
    </div>
  );
}
