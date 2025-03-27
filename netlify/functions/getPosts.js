const fetch = require('node-fetch');

exports.handler = async (event) => {
  const slug = new URLSearchParams(event.rawQuery).get('slug');
  const repo = "YOUR_USERNAME/YOUR_REPO";
  const token = process.env.GITHUB_TOKEN;

  if (!slug) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing slug" })
    };
  }

  const fileUrl = `https://api.github.com/repos/${repo}/contents/posts/${slug}.json`;

  const res = await fetch(fileUrl, {
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3+json"
    }
  });

  if (!res.ok) {
    return {
      statusCode: res.status,
      body: JSON.stringify({ error: "Post not found" })
    };
  }

  const fileData = await res.json();
  const contentDecoded = Buffer.from(fileData.content, 'base64').toString('utf-8');
  const post = JSON.parse(contentDecoded);

  return {
    statusCode: 200,
    body: JSON.stringify(post)
  };
};
