# 🚀 Deploy pe Netlify - Ghid Pas cu Pas

## Pregătire (Dacă nu aveți deja GitHub)

### 1. Instalați Git (dacă nu este instalat)
Descărcați de la: https://git-scm.com/download/win

### 2. Creați un repository GitHub

1. Mergeți la [github.com](https://github.com)
2. Click pe **"+"** → **"New repository"**
3. Nume: `prop-firm-matchmaker`
4. Selectați **"Public"** sau **"Private"**
5. Click **"Create repository"**

### 3. Push codul pe GitHub

Deschideți PowerShell în folderul proiectului și rulați:

```powershell
# Inițializați Git
git init

# Adăugați toate fișierele
git add .

# Creați primul commit
git commit -m "Initial commit - PropFirmHub website"

# Setați branch-ul principal
git branch -M main

# Conectați la GitHub (înlocuiți USERNAME cu username-ul vostru)
git remote add origin https://github.com/USERNAME/prop-firm-matchmaker.git

# Push pe GitHub
git push -u origin main
```

**Notă:** La primul push, vi se va cere să vă autentificați cu GitHub.

---

## 🌐 Deploy pe Netlify

### Pasul 1: Creați cont Netlify

1. Mergeți la [netlify.com](https://netlify.com)
2. Click pe **"Sign up"**
3. Selectați **"Sign up with GitHub"**
4. Autorizați Netlify să acceseze GitHub

### Pasul 2: Creați un nou site

1. Click pe **"Add new site"** → **"Import an existing project"**
2. Selectați **"Deploy with GitHub"**
3. Autorizați Netlify să acceseze repositories
4. Selectați repository-ul **"prop-firm-matchmaker"**

### Pasul 3: Configurați Build Settings

Netlify va detecta automat că este Next.js, dar verificați:

- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Functions directory:** (lăsați gol)

### Pasul 4: Deploy!

1. Click pe **"Deploy prop-firm-matchmaker"**
2. Așteptați 2-3 minute
3. **GATA!** 🎉

Site-ul va fi live la: `https://random-name-123.netlify.app`

---

## 🎨 Personalizați Domeniul

### Opțiune 1: Domeniu Netlify Gratuit

1. În Netlify Dashboard → **"Site settings"**
2. Click pe **"Change site name"**
3. Introduceți: `propfirmhub` (sau alt nume disponibil)
4. Site-ul va fi: `https://propfirmhub.netlify.app`

### Opțiune 2: Domeniu Custom (Recomandat pentru producție)

1. Cumpărați un domeniu de la:
   - **Namecheap** (~$10/an) - Recomandat
   - **GoDaddy**
   - **Google Domains**

2. În Netlify:
   - **Domain settings** → **"Add custom domain"**
   - Introduceți domeniul (ex: `propfirmhub.com`)
   - Urmați instrucțiunile pentru DNS

3. Configurați DNS:
   - Adăugați un **CNAME record**:
     - Name: `www`
     - Value: `propfirmhub.netlify.app`
   - Sau folosiți **Netlify DNS** (mai simplu)

---

## 🔧 Configurări Avansate (Opțional)

### SSL Certificate
- ✅ **Activat automat** de Netlify (GRATUIT)
- Verificați: Domain settings → HTTPS

### Environment Variables
Dacă aveți API keys sau secrets:

1. **Site settings** → **"Environment variables"**
2. Click **"Add a variable"**
3. Adăugați key și value
4. Click **"Save"**

### Deploy Previews
- ✅ **Activat automat**
- Fiecare pull request va avea un preview URL

---

## 📊 Monitorizare și Analytics

### Netlify Analytics (Opțional - $9/lună)
- Trafic real-time
- Bandwidth usage
- Top pages

### Google Analytics (GRATUIT)
1. Creați cont la [analytics.google.com](https://analytics.google.com)
2. Obțineți Tracking ID
3. Adăugați în `app/layout.tsx`

---

## 🔄 Update-uri Automate

**Odată configurat, deploy-ul este AUTOMAT:**

1. Faceți modificări în cod
2. Commit și push pe GitHub:
   ```bash
   git add .
   git commit -m "Updated design"
   git push
   ```
3. Netlify va detecta automat și va redeploy în 2-3 minute! 🚀

---

## 🆘 Troubleshooting

### Build Failed?

**Verificați:**
1. `npm run build` funcționează local?
2. Node.js version în `package.json`:
   ```json
   "engines": {
     "node": ">=18.0.0"
   }
   ```

### Imagini nu se încarcă?

Adăugați în `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['logo.clearbit.com'],
  },
}

module.exports = nextConfig
```

### Site-ul arată diferit de local?

- Clear cache în Netlify: **Deploys** → **Trigger deploy** → **"Clear cache and deploy site"**

---

## 💰 Costuri

### Plan Gratuit Netlify:
- ✅ 100GB bandwidth/lună
- ✅ 300 build minutes/lună
- ✅ SSL gratuit
- ✅ CDN global
- ✅ Deploy previews

**Perfect pentru început!** Upgrade doar dacă depășiți limitele.

---

## 📞 Suport

- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Netlify Community:** [answers.netlify.com](https://answers.netlify.com)
- **Next.js pe Netlify:** [docs.netlify.com/frameworks/next-js](https://docs.netlify.com/frameworks/next-js)

---

## ✅ Checklist Final

Înainte de deploy:

- [ ] Build-ul funcționează local (`npm run build`)
- [ ] Codul este pe GitHub
- [ ] Fișierul `netlify.toml` este creat
- [ ] Toate environment variables sunt setate (dacă există)
- [ ] Google Analytics configurat (opțional)

**Gata de deploy? Urmați pașii de mai sus!** 🚀
