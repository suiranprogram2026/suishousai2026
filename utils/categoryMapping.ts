// utils/categoryMapping.ts

import { Drum, Ent, Disp, Food, LucideIcon } from "lucide-react";

export type Category = "ステージ団体" | "娯楽団体" | "展示団体" | "調理食販団体";

export const categoryIconMap: Record<string, LucideIcon> = {
    "ステージ団体": Drum,      
    "娯楽団体": Ent,    
    "展示団体": Disp,   
    "調理食販団体": Food,         
};
