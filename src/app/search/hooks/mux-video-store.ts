import { create } from "zustand";

type State = {
  isMuted: boolean;
  activePlaybackId: string | null;
};

type Actions = {
  toggleMuted: () => void;
  setActivePlaybackId: (id: string | null) => void;
};

export const useMuxVideoStore = create<State & Actions>((set) => ({
  isMuted: true,
  activePlaybackId: null,
  toggleMuted: () => set((state) => ({ isMuted: !state.isMuted })),
  setActivePlaybackId: (id) => set({ activePlaybackId: id }),
}));
