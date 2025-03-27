
# 📘 `README.md` – GitHub-Powered Static Blog on Netlify

> ⚠️ **Note**: This is a creative exploration, not a commercial product.  
It is meant for discovery, experimentation, and fun. **Not recommended for production use**.

---

## 🌟 What Is This?

This is a lightweight, fully static blog template powered by:

- 🧾 **Markdown-style posts stored as JSON in GitHub**
- ✨ **HTML/CSS/JavaScript** (styled with Bootstrap)
- 🧠 **TinyMCE** for rich-text blog editing
- ⚙️ **Netlify Functions** to commit posts directly to GitHub
- 📦 **No database or CMS**
- 🔐 Simple static **admin auth**
- 📁 Fully static frontend, deployable on **Netlify Free Tier**

---

## 📁 Project Structure

```
/
├── index.html              # Blog homepage (lists posts)
├── post.html               # Single post viewer
├── admin.html              # Rich-text editor form
├── /includes/              # Shared layout
│   ├── header.html
│   └── footer.html
├── /posts/                 # Blog posts (one JSON file per post)
├── /img/
│   └── header.jpg          # Blog banner image (1920x250px recommended)
├── favicon.ico             # Base favicon
├── site.webmanifest        # PWA favicon support
└── /netlify/functions/     # Backend API handlers
    ├── getPosts.js
    ├── getPost.js
    └── createPost.js
```

---

## ⚙️ Features

- ✅ Fully static
- ✅ Secure post publishing via GitHub commits
- ✅ JSON-powered blog engine
- ✅ Modular header/footer
- ✅ Mobile responsive via Bootstrap
- ✅ Rich content with TinyMCE editor

---

## 🚀 Installation

### 1. 🔁 Clone the Repo
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

---

### 2. 🧑‍🔧 Setup GitHub Repo
This blog pulls post files from your GitHub repo (`/posts/*.json`) via the GitHub API.  
Ensure the repo is **public** OR use a GitHub token to access private repos.

---

### 3. 🛠 Setup Netlify
#### Option A: CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

#### Option B: Dashboard
- Go to [Netlify](https://netlify.com)
- Connect GitHub repo
- Choose root folder
- Set build = `N/A` (it's static)

---

### 4. 🔐 Setup Netlify Environment Variables

| Key            | Value                    | Purpose                     |
|----------------|--------------------------|-----------------------------|
| `GITHUB_TOKEN` | your GitHub PAT (scoped to repo) | Commits JSON post files    |
| `API_KEY`      | any secret (e.g. `blogmaster123`) | Admin password              |

---

## 🖼️ Asset Notes

- 📸 `/img/header.jpg` = 1920x250 recommended
- 🧠 Favicons: generate at [RealFaviconGenerator](https://realfavicongenerator.net/)
- Place all icons + manifest in root:
  - `favicon.ico`
  - `favicon-16x16.png`
  - `favicon-32x32.png`
  - `apple-touch-icon.png`
  - `site.webmanifest`

---

## ✍️ Writing Posts

### 1. Go to `/admin.html`
### 2. Enter:
- Admin password (matches `API_KEY`)
- Title
- Rich content (TinyMCE)
- Hit "Publish"

✅ Your post is committed to `/posts/` as a JSON file  
📝 The `slug` is auto-generated as: `YYYY-MM-DD-title-slug.json`

---

## 📖 Reading Posts

- `index.html` fetches all post metadata from GitHub and lists them (newest first)
- Clicking a post opens `post.html?slug=...`
- `post.html` loads and renders the full blog post from GitHub

---

## 🔒 Security

- All post writes require `API_KEY` in header: `x-api-key`
- Admin page uses a basic password input — not secure for production
- All GitHub interactions are server-side via Netlify Functions
- GitHub token is **never exposed** to the client

---

## 🧪 Philosophy

> This is a creative tool, not a production-grade CMS.

It is meant for:
- Exploring JAMStack-style static content
- Building with GitHub + Netlify + serverless APIs
- Fun, experimentation, and inspiration ✨

---

## 🛠 Powered By

- [Netlify](https://netlify.com)
- [TinyMCE](https://www.tiny.cloud/)
- [Bootstrap](https://getbootstrap.com)
- [GitHub API](https://docs.github.com/en/rest)
