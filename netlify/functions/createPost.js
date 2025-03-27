const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = event.headers['x-api-key'];
  const serverKey = process.env.API_KEY;
  if (apiKey !== serverKey) {
    return { statusCode: 401, body: 'Unauthorized' };
  }

  const { title, content } = JSON.parse(event.body);
  const date = new Date().toISOString();
  const slug = `${date.split('T')[0]}-${title.toLowerCase().replace(/\s+/g, '-')}`;
  const filename = `${slug}.json`;

  const post = {
    title,
    date,
    slug,
    content
  };

  const repo = "YOUR_USERNAME/YOUR_REPO";
  const githubToken = process.env.GITHUB_TOKEN;
  const fileContent = Buffer.from(JSON.stringify(post, null, 2)).toString('base64');

  const githubUrl = `https://api.github.com/repos/${repo}/contents/posts/${filename}`;

  const response = await fetch(githubUrl, {
    method: 'PUT',
    headers: {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: `Add new post: ${title}`,
      content: fileContent
    })
  });

  if (!response.ok) {
    return {
      statusCode: response.status,
      body: 'Error creating post'
    };
  }

  return {
    statusCode: 201,
    body: 'Post created successfully'
  };
};
