import type { Item } from "../adaptive";
import { PERSONALITY_ITEMS } from "./personality";
import { WORK_ITEMS } from "./work";
import { LEARNING_ITEMS } from "./learning";
import { CONFLICT_ITEMS } from "./conflict";
import { SELF_EVAL_ITEMS } from "./selfEval";
import { EMOTION_ITEMS } from "./emotion";
import { VALUES_ITEMS } from "./values";
import { TIME_ITEMS } from "./time";
import { MONEY_ITEMS } from "./money";
import { PARENTS_ITEMS } from "./parents";
import { COLLEAGUE_ITEMS } from "./colleague";
import { BOSS_ITEMS } from "./boss";
import { FRIEND_ITEMS } from "./friend";

export const BANKS: Record<string, Item[]> = {
  personality: PERSONALITY_ITEMS,
  work: WORK_ITEMS,
  learning: LEARNING_ITEMS,
  conflict: CONFLICT_ITEMS,
  selfEval: SELF_EVAL_ITEMS,
  emotion: EMOTION_ITEMS,
  values: VALUES_ITEMS,
  time: TIME_ITEMS,
  money: MONEY_ITEMS,
  parents: PARENTS_ITEMS,
  colleague: COLLEAGUE_ITEMS,
  boss: BOSS_ITEMS,
  friend: FRIEND_ITEMS,
};

export function getBank(dim: string): Item[] {
  return BANKS[dim] ?? [];
}

export { PERSONALITY_ITEMS, WORK_ITEMS, LEARNING_ITEMS, CONFLICT_ITEMS };
