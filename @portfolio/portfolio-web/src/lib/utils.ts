import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function parsePx(value: string) {
  return parseFloat(value.replace("px", ""));
}

export type Unpacked<T> = T extends (infer U)[] ? U : T;
