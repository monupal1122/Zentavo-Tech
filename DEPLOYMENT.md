# Deployment Guide: Vercel & EmailJS

Follow these steps to deploy your professional agency website to production.

## 1. Prerequisites
- A [GitHub](https://github.com/) account.
- A [Vercel](https://vercel.com/) account.
- An [EmailJS](https://www.emailjs.com/) account.

## 2. Setting up EmailJS
To make the contact form functional:
1. Log in to EmailJS and create a **Email Service** (e.g., Gmail).
2. Create an **Email Template** with variables: `{{user_name}}`, `{{user_email}}`, `{{user_phone}}`, `{{user_budget}}`, and `{{message}}`.
3. Go to `src/app/contact/page.js` and replace the placeholders:
   - `SERVICE_ID`: Found in your Email Service settings.
   - `TEMPLATE_ID`: Found in your Template settings.
   - `PUBLIC_KEY`: Found in Account -> Public Key.

## 3. Deploying to Vercel
1. Push your code to a GitHub repository.
2. Go to Vercel and click **Add New** -> **Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Next.js**.
5. Click **Deploy**.
6. Once deployed, any changes pushed to GitHub will automatically trigger a new production build.

## 4. Post-Deployment SEO
1. Submit your dynamic sitemap (`https://yourdomain.com/sitemap.xml`) to [Google Search Console](https://search.google.com/search-console/about).
2. Configure **Google Analytics 4** and add your measurement ID to the site.
