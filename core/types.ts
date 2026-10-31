// 核心类型 —— Web 与微信小程序共用，不依赖任何 UI 框架
export type Dim = "O" | "C" | "E" | "A" | "N";
export type Bias = "loss" | "anchor" | "herd" | "sunk" | "maximize" | "procrastinate";

export interface OptionScore {
  dims?: Partial<Record<Dim, number>>;
  biases?: Partial<Record<Bias, number>>;
  risk?: number;
}

export interface Option {
  id: string;
  label: string;
  score: OptionScore;
}

export interface Question {
  id: string;
  kind: "sjt" | "self" | "bias";
  title: string;
  scene?: string;      // 场景画面描述（出图用）
  motion?: string;     // 动效描述
  text: string;
  weight?: number;     // 自评题权重
  dim?: Dim;           // 自评题对应维度
  options: Option[];
}

export interface Role {
  id: string;
  no: string;
  name: string;
  en: string;
  color: string;
  accent: string;
  image: string;
  thumb: string;
  axes: { speed: number; risk: number; relation: number }; // 0-1
  verdict: string;
  oneLine: string;
  strengths: string[];
  reefs: string[];
  scripts: { scene: string; defaultMove: string; trap: string; fix: string }[];
  pressure: { name: string; desc: string; signals: string[] };
  partners: { easy: string; hard: string; tip: string };
}

export interface Profile {
  dims: Record<Dim, number>;
  biases: Record<Bias, number>;
  axes: { speed: number; risk: number; relation: number };
  consistency: number;
}

export interface Result {
  primary: Role;
  secondary: Role;
  confidence: number;
  profile: Profile;
}
