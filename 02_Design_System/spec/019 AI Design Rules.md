# 019 — AI Design Rules

## Philosophy

**AI accelerates execution. Humans create meaning.**

WKALAN uses AI as a tool — never as a designer. AI can generate options. AI can review consistency. AI can suggest improvements. But AI cannot understand a person. It cannot savor a life. It cannot make the final call.

---

## Principles

### AI provides options. Humans decide.
AI: "Here are 5 color palettes derived from the client's keywords." Human: "Palette 3. That amber tone — it's exactly what he meant by 'golden afternoon.'"

### AI reviews. Humans judge.
AI: "This section's spacing is 96px. The Rhythm System specifies 120px." Human: "Fix it." OR: "Leave it. This section is intentionally tighter — it's a bridge between two heavy narratives."

### AI never touches the interview.
The interview is WKALAN's moat. AI does not generate questions. AI does not analyze emotions. AI does not participate. The interview is human-to-human.

### AI output = draft. Human output = final.
Every AI output is labeled, reviewed, and modified before it reaches a client. Transparency is not weakness. It's trust.

---

## Specification

### What AI Can Do

| Task | AI Role | Human Role |
|------|---------|------------|
| Keyword extraction | First pass from transcript | Review, refine, finalize 3 keywords |
| Design review | Check against WDS tokens | Judge whether deviations are intentional |
| Code generation | Scaffold components | Review, modify, ensure quality |
| Accessibility audit | Flag contrast, focus, alt text issues | Fix and verify |
| Performance audit | Flag LCP, CLS, bundle issues | Optimize and verify |

### What AI Cannot Do

| Task | Why |
|------|-----|
| Design decisions | AI doesn't understand the client's story |
| Final copywriting | AI can't capture a person's voice |
| Client communication | Every client touch is human |
| Image generation | WKALAN rejects AI imagery entirely |
| Interview participation | The moat is human |

### AI Quality Gate
Every AI output must pass the AI Quality Checklist (`05_AI_System/020 AI Quality Checklist.md`).

---

## Examples

### ✅ Correct
> Designer: "AI, extract recurring themes from this transcript."
> AI: [Outputs 8 themes with supporting quotes]
> Designer: Reviews. Removes 3 generic themes. Keeps 5. Selects final 3 keywords.
>
> **Why:** AI accelerated the extraction. Human made the final judgment. Each keyword traces back to a specific quote.

### ❌ Incorrect
> Designer: "AI, design a homepage for this client."
> AI: [Outputs complete design]
> Designer: Ships without review.
>
> **Why:** AI generated. Human didn't judge. The design may look good but it won't feel like the person. It will feel like AI — generic, smooth, soulless.
