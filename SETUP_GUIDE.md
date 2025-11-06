# 🚀 Portfolio Setup Guide

## Step 1: Install Node.js

### Option A: Download from Official Website (Recommended)
1. Go to **https://nodejs.org/**
2. Download the **LTS (Long Term Support)** version
3. Run the installer and follow the installation wizard
4. **Important**: Make sure to check "Add to PATH" during installation
5. Restart your terminal/PowerShell after installation

### Option B: Using Chocolatey (if you have it)
```powershell
choco install nodejs-lts
```

### Option C: Using winget (Windows Package Manager)
```powershell
winget install OpenJS.NodeJS.LTS
```

### Verify Installation
After installing, open a **new terminal** and run:
```powershell
node --version
npm --version
```

You should see version numbers like:
- `v20.x.x` (or similar)
- `10.x.x` (or similar)

---

## Step 2: Install Project Dependencies

Once Node.js is installed, open a terminal in this project folder and run:

```powershell
npm install
```

This will install all required packages (React, Three.js, Framer Motion, etc.)

---

## Step 3: Set Up EmailJS (Optional - for Contact Form)

1. Sign up at **https://www.emailjs.com/** (free account available)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Public Key

5. Create a `.env` file in the project root (same folder as `package.json`):

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id_here
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Note**: The contact form will work without this, but won't send emails.

---

## Step 4: Run the Development Server

```powershell
npm run dev
```

The portfolio will be available at: **http://localhost:5173**

---

## Troubleshooting

### "npm is not recognized"
- Node.js is not installed or not in PATH
- Restart your terminal after installing Node.js
- Verify with `node --version`

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port (5174, 5175, etc.)

### Build for Production
When ready to deploy:
```powershell
npm run build
```
This creates an optimized `dist` folder ready for hosting.

---

## 📧 Contact Information in Portfolio

The portfolio is already configured with:
- **Email**: flondonohumar@gmail.com
- **Phone**: +57 311 270 4276
- **LinkedIn**: https://www.linkedin.com/in/felipe-londo%C3%B1o-humar-13440b168/
- **Location**: Bogotá, Colombia

---

## Need More Help?

If you encounter any issues:
1. Make sure Node.js is properly installed (`node --version`)
2. Delete `node_modules` folder and `package-lock.json` (if exists)
3. Run `npm install` again
4. Try `npm run dev` again

