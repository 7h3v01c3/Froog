# Froog

A simple blog/website platform built with HTML and Netlify functions.

## Project Structure

```
├── index.html          # Main homepage
├── post.html           # Template for displaying blog posts
├── admin.html          # Admin interface for creating/editing posts
├── favicon.ico         # Site favicon
├── /img/               # Images directory
│   └── header.jpg      # Header image
├── /includes/          # Reusable HTML components
│   ├── header.html     # Site header
│   └── footer.html     # Site footer
├── /posts/             # Directory for blog post content
├── /netlify/           # Netlify configuration
│   └── functions/      # Serverless functions
│       └── createPost.js # Function to create new posts
└── site.webmanifest    # Web app manifest file
```

## Getting Started

1. Clone this repository
2. Make changes to the HTML files as needed
3. Deploy to Netlify for serverless functionality

## Development

- The site is built with plain HTML
- Netlify Functions are used for server-side operations
- Posts are managed through the admin interface 