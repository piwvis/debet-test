import { Player } from "@/types/player";
import { create } from "zustand";

export const usePlayerDialog = create<{
  isOpen: boolean;
  playerData: Player;
  setIsOpen: (value: boolean) => void;
  setPlayerData: (value: Player) => void;
}>((set) => ({
  isOpen: false,
  playerData: {} as Player,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
  setPlayerData: (value: Player) => set({ playerData: value }),
}));
