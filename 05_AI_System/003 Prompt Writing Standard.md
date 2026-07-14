# 003 — Prompt Writing Standard

## 好的 Prompt = 好的產出。

WKALAN 的每一個 Prompt 都遵循同樣的結構。不是為了整齊。是為了讓 AI 真正理解 WKALAN 的標準。

---

## Prompt 結構

### Section 1: Role
告訴 AI 它是誰。
```
You are a Creative Director at WKALAN, a digital identity studio.
Your role is to review design work against WKALAN's philosophy:
"品味人生，雕刻身份" (Savor the life. Carve the identity.)
```

### Section 2: Context
告訴 AI 這個專案的背景。
```
Project: Digital identity for [Client Name]
Client type: [Creator Persona]
Keywords extracted from interview: [3 words]
Design direction: [summary]
```

### Section 3: Task
明確、具體的任務。不是「幫我看看這個設計」。而是：
```
Review the hero section of this page against the following criteria:
1. Does the typography reflect the client's keywords?
2. Is the spacing consistent with WKALAN Spacing System?
3. Does the motion serve the narrative or distract from it?
```

### Section 4: Constraints
告訴 AI 不能做什麼。
```
- Do not suggest new design directions. Only review the existing one.
- Do not comment on copywriting. Focus on visual design only.
- Reference WKALAN Design System tokens where applicable.
```

### Section 5: Output Format
告訴 AI 怎麼輸出。
```
Provide your review in this format:
✅ What works:
❌ What needs attention:
💡 Suggestions (optional):
📋 WDS tokens referenced:
```

### Section 6: Quality Gate
告訴 AI 什麼樣的輸出才合格。
```
A good review:
- References specific WKALAN Design System tokens
- Connects feedback to the client's keywords
- Is constructive, not just critical
- Suggests, does not dictate
```

---

## Prompt 寫作原則

### 1. 具體，不要模糊
不是：「幫我看看這個設計」
而是：「檢查這個頁面的顏色是否全部來自 WKALAN Color System。列出任何偏離的色值。」

### 2. 給 AI 身分
不是：「幫我寫文案」
而是：「你是 WKALAN 的 Copywriter。你的文案風格是安靜、溫暖、不賣弄。現在請為這位創作者寫一段 About 頁面的開頭。」

### 3. 給 AI 限制
不是：「給我一些建議」
而是：「給我三個建議。每個建議必須引用 WKALAN Design System 的具體規範。不要建議增加新顏色或新字體。」

### 4. 要求標註來源
「當你引用 WKALAN 的設計規範時，請標註是哪一份文件（例如：004 Spacing System）。」

### 5. 總是包含客戶的關鍵詞
每個 Prompt 都應該出現客戶的三個關鍵詞。這樣 AI 的輸出才會緊扣這個人，而不是泛泛而談。

---

## 不好的 Prompt vs. 好的 Prompt

### ❌ 不好
> 幫我檢查這個網站有沒有問題。

### ✅ 好
> You are a QA Engineer at WKALAN. Review this page for accessibility issues against WCAG 2.2 AA standards. Check: color contrast, keyboard navigation, focus visibility, alt text, and heading hierarchy. List issues by severity (Critical / Major / Minor). For each issue, suggest a fix that respects WKALAN's design tokens.

---

*Prompt 的品質 = AI 輸出的品質。Garbage in, garbage out. Precision in, precision out.*
