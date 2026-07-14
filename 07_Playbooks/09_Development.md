# Playbook 09 — Development

## Goal
把設計方向變成一個可以運行的數位身份。

## Input
- 設計方向文件（來自 Playbook 07）
- 客戶的三個關鍵詞
- 內容（文案、照片）
- `02_Design_System/`
- `03_Engineering_System/`

## Process

### Step 1: 專案設置（30 分鐘）
- 選擇模板或從頭開始（`03_Engineering_System/`）
- 設定設計 Token
- 設定字體（next/font）

### Step 2: 建立結構（1–2 天）
- 頁面路由（如需要）
- Section 組件（一個 section = 一個檔案）
- Layout 組件（Header, Footer 等）

### Step 3: 設計實作（2–3 天）
- 從 Hero 開始（最重要的第一印象）
- 由上到下建立每個 Section
- 每個 Section 完成後截圖
- 使用 AI 輔助程式碼（`05_AI_System/prompts/Code/React_Component.md`）

### Step 4: 動畫（1 天）
- 使用 WKALAN curve: `cubic-bezier(0.16, 1, 0.3, 1)`
- Scroll reveals: `whileInView`
- Parallax: `useScroll` + `useTransform`
- 遵循 `02_Design_System/015 Animation Library.md`

### Step 5: 響應式（0.5 天）
- 手機 (< 640px): 1 column
- 平板 (640–1024px): 2 columns
- 桌面 (> 1024px): full layout
- 每個 breakpoint 測試

### Step 6: 效能優化（0.5 天）
- 圖片：Next.js `<Image>`, lazy loading
- 字體：`display: swap`
- 動畫：`once: true` on scroll reveals

### Step 7: 每日更新給客戶
- 截圖或 staging 連結
- 「今天完成了 [Section]。明天做 [Section]。」
- 不要沉默超過 24 小時

## Output
- Staging 部署
- 所有 Section 完成
- 響應式驗證通過
- 效能檢查通過

## Quality Gate
- [ ] 所有顏色來自 WKALAN Color System
- [ ] 所有字體來自 WKALAN Typography System
- [ ] 所有動畫使用 WKALAN curve
- [ ] 鍵盤可訪問
- [ ] 手機測試通過
- [ ] LCP < 2.5s
- [ ] 客戶在過程中收到每日更新

## Time
3–6 天（依方案而定）
