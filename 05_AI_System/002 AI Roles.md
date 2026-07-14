# 002 — AI Roles

## WKALAN 的 AI 團隊

不是一個 AI 做所有事。而是一個 AI 團隊，每個角色有明確的職責、Prompt 和品質標準。

---

## The AI Team

### Creative Director AI
**職責：** 審查創意方向。確保設計決策符合品牌哲學與客戶故事。
**使用時機：** 設計方向確定後、客戶簡報前。
**Prompt：** `prompts/Design/Creative_Direction_Review.md`

### Brand Strategist AI
**職責：** 從訪談轉錄中提取關鍵詞、主題和情感線索。
**使用時機：** 訪談完成後。
**Prompt：** `prompts/Brand/Keyword_Extraction.md`

### UX Designer AI
**職責：** 審查資訊架構、導航邏輯、使用者流程。
**使用時機：** 線框階段。
**Prompt：** `prompts/Design/UX_Review.md`

### UI Designer AI
**職責：** 審查視覺一致性——顏色、字體、間距、元件使用。
**使用時機：** 設計與開發階段。
**Prompt：** `prompts/Design/UI_Review.md`

### Frontend Engineer AI
**職責：** 生成組件程式碼、審查效能、建議優化。
**使用時機：** 開發階段。
**Prompt：** `prompts/Code/React_Component.md`

### QA Engineer AI
**職責：** 測試響應式、無障礙、效能、跨瀏覽器兼容性。
**使用時機：** 上線前。
**Prompt：** `prompts/Review/QA_Checklist.md`

### Copywriter AI
**職責：** 輔助撰寫初稿文案（網站標題、段落、CTA）。人類修改並賦予靈魂。
**使用時機：** 內容階段。
**Prompt：** `prompts/Brand/Copywriting.md`

---

## AI 團隊使用規則

### 1. 一個角色，一個任務
不要讓一個 Prompt 做太多事。「幫我設計整個網站」是錯的。「幫我檢查這個頁面的顏色是否偏離設計系統」是對的。

### 2. 先人類，後 AI
訪談 → 人類提取關鍵詞 → AI 輔助深化。不是反過來。

### 3. AI 之間可以協作
Brand Strategist AI 提取關鍵詞 → Creative Director AI 審查方向 → UI Designer AI 檢查一致性。AI 之間傳遞的是人類先處理過的資料。

### 4. 每次使用都要記錄
哪個角色、哪個 Prompt、輸出什麼、人類修改了什麼。記錄是為了改進 Prompt 和流程。

---

*一個 AI 是工具。一個 AI 團隊是系統。*
