import fs from 'fs';

const PROJECT_ID = 'lx1zrwct';
const DATASET = 'production';
const API_VERSION = '2023-05-03';

const query = `*[_type == "post"]{
  _id,
  title,
  title_hi,
  title_mr,
  slug,
  "bodyLength": length(pt::text(body)),
  "bodyText": pt::text(body)
}`;

const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(query)}`;

try {
  const response = await fetch(url);
  const data = await response.json();
  const posts = data.result;
  
  if (!posts || posts.length === 0) {
    console.log("No posts found or API error.");
    process.exit(0);
  }

  const analysis = posts.map(post => {
    let issues = [];
    if (!post.bodyLength || post.bodyLength < 500) {
      issues.push('Thin content (less than 500 characters).');
    }
    if (!post.title_hi) {
      issues.push('Missing Hindi translation (title_hi).');
    }
    if (!post.title_mr) {
      issues.push('Missing Marathi translation (title_mr).');
    }
    
    // AI pattern matching
    const aiPatterns = [
      /in conclusion/i,
      /dive deeper/i,
      /unleash your/i,
      /testament to/i,
      /delve into/i,
      /a symphony of/i
    ];
    
    if (post.bodyText) {
      const foundPatterns = aiPatterns.filter(p => p.test(post.bodyText));
      if (foundPatterns.length > 0) {
        issues.push(`Potential AI-generated filler language detected (${foundPatterns.length} phrases matched).`);
      }
    }
    
    return {
      title: post.title || 'Untitled',
      slug: post.slug?.current || 'no-slug',
      issues
    };
  });

  const needsImprovement = analysis.filter(a => a.issues.length > 0);
  
  console.log(`Found ${needsImprovement.length} out of ${posts.length} articles needing improvement.\n`);

  if (needsImprovement.length === 0) {
    console.log("All articles look good!");
  } else {
    for (const item of needsImprovement) {
      console.log(`---`);
      console.log(`Title: ${item.title}`);
      console.log(`Slug: ${item.slug}`);
      item.issues.forEach(i => console.log(`  - ${i}`));
    }
  }
} catch(err) {
  console.error("Error fetching or analyzing: ", err);
}
