# دليل تخصيص قالب WELD BLED

> هذا القالب مبني بـ Next.js + TypeScript + Tailwind CSS
> تقدر تخصصه بالكامل من غير ما تفهم في البرمجة

---

## 🎯 القاعدة الأساسية

**الملف الوحيد اللي تحتاج تبدله هو:**
```
config/site.config.ts
```
غير هنا، وكل شيء يتبدل في الموقع تلقائيا.

---

## 1️⃣ كيفاش تبدل المعلومات الأساسية

افتح الملف `config/site.config.ts` وغير هذه القيم:

```typescript
brandName: "اسم براندك هنا",
tagline: "شعارك هنا",
productName: "اسم المنتج",
price: "3 500 DA",
whatsappNumber: "213550123456",  // رقمك بدون +
instagramHandle: "@براندك",
```

---

## 2️⃣ كيفاش تبدل الصور

1. روح لمجلد `public/images/`
2. احذف الصور الموجودة
3. حط صورك بنفس الأسماء:
   - `hero.jpg` ← الصورة الكبيرة (1080×1350px)
   - `gallery-1.jpg` ← صورة من الأمام
   - `gallery-2.jpg` ← صورة من الخلف
   - `gallery-3.jpg` ← تفصيل المنتج
   - `gallery-4.jpg` ← صورة ملبوسة

> **مهم:** خلي نفس الأسماء، غير بدل المحتوى فقط

---

## 3️⃣ كيفاش تبدل الألوان

في `config/site.config.ts`:

```typescript
primaryColor: "#C8F135",      // لون الأزرار
backgroundColor: "#0A0A0A",  // خلفية الموقع
textColor: "#FFFFFF",         // لون النص
```

باش تلقى لون معين، استعمل: **https://htmlcolorcodes.com**
اختر اللون واكتب الكود اللي يبدا بـ `#`

---

## 4️⃣ كيفاش تبدل المقاسات والألوان المتاحة

```typescript
sizes: ["S", "M", "L", "XL", "XXL"],
colors: ["أسود", "بيج", "زيتي"],
```

زيد أو حذف حسب منتجك.

---

## 5️⃣ كيفاش تضيف تعليقات العملاء

```typescript
testimonials: [
  {
    name: "اسم الزبون",
    wilaya: "ولايته",
    rating: 5,           // من 1 لـ 5
    text: "تعليقه هنا"
  },
  // انسخ والصق باش تضيف أكثر
]
```

---

## 6️⃣ كيفاش تشغل الموقع محليا

افتح terminal في مجلد المشروع واكتب:

```bash
npm install
npm run dev
```

بعدها افتح المتصفح على: **http://localhost:3000**

---

## 7️⃣ كيفاش تنشر الموقع مجانا على Vercel

1. روح لـ **https://vercel.com** وسجل بـ GitHub
2. اضغط "Add New Project"
3. ارفع مجلد المشروع
4. اضغط "Deploy"
5. موقعك يكون حاضر في دقيقة! 🚀

---

## ✅ Checklist قبل ما تسلم

- [ ] بدلت `brandName` و `tagline`
- [ ] بدلت `price` و `originalPrice`
- [ ] بدلت `whatsappNumber`
- [ ] بدلت `instagramHandle`
- [ ] بدلت الصور في مجلد `public/images/`
- [ ] بدلت `primaryColor` للون البراند ديالك
- [ ] عدلت `testimonials` بتعليقات حقيقية
- [ ] عدلت `sizes` و `colors` للمنتج ديالك
- [ ] جربت الموقع على الموبايل قبل النشر

---

## 🆘 للمساعدة

واتساب: **+213 XX XX XX XX**
إنستغرام: **@WELD.BLED**

---

*تم بناء هذا القالب بـ Next.js 14 + TypeScript + Tailwind CSS*
