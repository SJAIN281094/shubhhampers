# Environment Variables for Blog API

## Required Environment Variables

Add these environment variables to your `.env.local` file:

```env
# Blog API Configuration
NEXT_PUBLIC_BLOGS_BASE_URL=https://blogify.arhaminnovations.in
NEXT_PUBLIC_BLOGS_TENANT_ID=cf5b6a3c-fbe6-48d3-9f3b-f0e960269cc9
NEXT_PUBLIC_BLOGS_DOMAIN_ID=769fcab8-540f-45eb-a3f2-4218f72e7675
```

## Description

- **NEXT_PUBLIC_BLOGS_BASE_URL**: The base URL for the blog API
- **NEXT_PUBLIC_BLOGS_TENANT_ID**: Your tenant ID for the blog platform
- **NEXT_PUBLIC_BLOGS_DOMAIN_ID**: Your domain ID for the blog platform

## Default Values

If these environment variables are not set, the system will use these default values:

- Base URL: `https://blogify.arhaminnovations.in`
- Tenant ID: `cf5b6a3c-fbe6-48d3-9f3b-f0e960269cc9`
- Domain ID: `769fcab8-540f-45eb-a3f2-4218f72e7675`

## URL Structure

The blog API uses the following URL patterns:

### List All Articles

```
{BASE_URL}/api/articles/t/{TENANT_ID}/d/{DOMAIN_ID}
```

### Single Article by Slug

```
{BASE_URL}/api/articles/t/{TENANT_ID}/d/{DOMAIN_ID}/{SLUG}
```

### Examples

```
# List all articles
https://blogify.arhaminnovations.in/api/articles/t/cf5b6a3c-fbe6-48d3-9f3b-f0e960269cc9/d/769fcab8-540f-45eb-a3f2-4218f72e7675

# Single article
https://blogify.arhaminnovations.in/api/articles/t/cf5b6a3c-fbe6-48d3-9f3b-f0e960269cc9/d/769fcab8-540f-45eb-a3f2-4218f72e7675/how-to-curate-the-perfect-corporate-diwali-hamper-and-why-it-matters
```

## Usage

These variables are used in `src/lib/blog-api.ts` to construct the API endpoints for fetching blog posts, individual articles, and search functionality. All blog data is fetched on the server side for optimal performance.
