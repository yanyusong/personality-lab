import type { Item } from "../adaptive";
import { PERSONALITY_ITEMS } from "./personality";
import { WORK_ITEMS } from "./work";
import { LEARNING_ITEMS } from "./learning";
import { CONFLICT_ITEMS } from "./conflict";

export const BANKS: Record<string, Item[]> = {
  personality: PERSONALITY_ITEMS,
  work: WORK_ITEMS,
  learning: LEARNING_ITEMS,
  conflict: CONFLICT_ITEMS,
};

export function getBank(dim: string): Item[] {
  return BANKS[dim] ?? [];
}

export { PERSONALITY_ITEMS, WORK_ITEMS, LEARNING_ITEMS };
