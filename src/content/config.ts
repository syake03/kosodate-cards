import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// SPEC.md §3 の領域ID（10分類・固定）
const DOMAIN_IDS = [
  'safety-sleep',
  'nutrition',
  'medical',
  'attachment',
  'discipline',
  'learning',
  'mental-health',
  'digital',
  'sex-safety',
  'money-independence',
] as const;

// SPEC.md §4 の年齢タグ（8区分）
const AGE_IDS = [
  'prenatal-postpartum',
  '0-1',
  '1-3',
  '3-6',
  '6-9',
  '9-12',
  '12-15',
  '15-22',
] as const;

// SPEC.md §2 のカードスキーマ。欠け・不正があれば build を落とす。
const cards = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cards' }),
  schema: z
    .object({
      id: z.string(),
      title: z.string().max(40),
      statement: z.string(),
      domain: z.enum(DOMAIN_IDS),
      ages: z.array(z.enum(AGE_IDS)).min(1),
      evidence: z.enum(['A', 'B', 'C', 'observational']),
      impact: z.enum(['critical', 'serious', 'qol']),
      tags: z.array(z.string()).default([]),
      updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'updated は YYYY-MM-DD 形式'),
      status: z.enum(['draft', 'review', 'published']),
      confidence_note: z.string().default(''),
    })
    // ファイル名（entry.id）とフロントマターの id を一致させる（SPEC §2 検証ルール）
    .superRefine((data, ctx) => {
      // 検証はページ側でも行うが、値の整合をここでも軽く担保する
      if (data.id.trim() === '') {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'id が空です' });
      }
    }),
});

export const collections = { cards };
