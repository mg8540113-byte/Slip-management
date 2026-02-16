# מערכת ניהול תלושים

מערכת לניהול תלושים למוסדות וקבוצות - בנוי בטכנולוגיות מודרניות.

## 📋 טכנולוגיות

- **Next.js 14** - React Framework עם App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible UI components
- **Supabase** - Backend & Database
- **Lucide React** - Icons

## 📁 מבנה הפרויקט

```
Slip_management/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/               # Reusable UI components (shadcn/ui style)
│   └── dashboard/        # Dashboard-specific components
├── lib/
│   ├── utils.ts          # Utility functions
│   └── supabase.ts       # Supabase client
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

## 🚀 התקנה והרצה מקומית

### דרישות מוקדמות
- Node.js 18+ 
- npm או yarn

### שלבי התקנה

1. **התקנת Dependencies**
```bash
npm install
```

2. **הגדרת משתני סביבה**
   
   צור קובץ `.env.local` בשורש הפרויקט:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. **הרצת שרת הפיתוח**
```bash
npm run dev
```

האתר יהיה זמין ב: `http://localhost:3000`

## 📦 Deployment לורסל

### משתני סביבה בורסל
הגדר את המשתנים הבאים ב-Vercel Dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### שלבים
1. חבר את הריפו לורסל
2. Vercel יזהה אוטומטית את Next.js
3. הגדר את משתני הסביבה
4. לחץ Deploy

## 📝 מצב נוכחי

✅ **מה עובד:**
- מבנה פרויקט מלא ומקצועי
- כל קבצי התצורה
- כל ה-UI Components
- Dashboard מעוצב עם:
  - Header עם חיפוש והתראות
  - Sidebar מתקפל
  - Stats Cards
  - טבלת מוסדות

⏸️ **מה חסר (עתידי):**
- לוגיקת חיבור ל-Supabase
- ניהול State
- API Routes
- כפתורים תפקודיים
- אימות משתמשים

## 🎨 עיצוב

העיצוב כולל:
- מערכת צבעים עקבית
- Dark mode support (מוכן ב-CSS)
- RTL Support מלא
- Responsive design
- Hover effects ואנימציות
- Typography מאופטמת

## 📱 רספונסיביות

האתר מותאם לכל הגדלי מסכים:
- 📱 Mobile
- 💻 Tablet  
- 🖥️ Desktop

---

**גרסה:** 0.1.0  
**סטטוס:** תשתית בסיסית מוכנה ✅
