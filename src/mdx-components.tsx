import type { MDXComponents } from "mdx/types";
import { YouTube } from "@/components/YouTube";

const components = {
  YouTube,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
