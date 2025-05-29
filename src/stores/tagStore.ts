import { create } from "zustand";

export interface Tag {
    value: string;
    title: string;
}

interface TagState {
    tags: Tag[];
    setTags: (tags: Tag[]) => void;
}


const useTagStore = create<TagState>()((set) => ({
    tags: [],
    setTags: (tags) => set({tags})
}))

export const useTags = () => useTagStore((state) => state.tags)
