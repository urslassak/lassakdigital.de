# Deployment Guide - GitHub Pages & Namecheap

The website is hosted as a static site using **GitHub Pages** and mapped to the custom domain **www.lassakdigital.de** registered at **Namecheap.com**.

## GitHub Pages Configuration

1. **Repository Settings**:
   - Go to your repository `urslassak/lassakdigital.de` on GitHub.
   - Go to **Settings** > **Pages** tab.
   - Under **Build and deployment**, select **Deploy from a branch** and set the branch to `main` and directory to `/` (root).
   - Under **Custom domain**, enter `www.lassakdigital.de` and save. This updates/verifies the `CNAME` file in your repository.
   - Check **Enforce HTTPS** to secure the site with SSL/TLS.

2. **Jekyll Bypass**:
   - The `.nojekyll` file in the root directory signals GitHub Pages to serve static files exactly as they are without processing them through Jekyll. This increases build times and guarantees all directories are public.

## Namecheap DNS Configuration

To route your domain to the GitHub Pages servers, log into your Namecheap dashboard, select your domain, and add these DNS settings in the **Advanced DNS** tab:

### 1. Subdomain Routing (www)
Create a **CNAME Record** to map `www` to your GitHub user domain:
- **Type**: CNAME Record
- **Host**: `www`
- **Value**: `urslassak.github.io.` (make sure to include the trailing dot if Namecheap demands it)
- **TTL**: Automatic/1 hour

### 2. Apex Domain Routing (lassakdigital.de)
Configure your apex domain to point directly to the GitHub Pages IP addresses. Create four **A Records** with host `@`:
- **Type**: A Record | **Host**: `@` | **Value**: `185.199.108.153`
- **Type**: A Record | **Host**: `@` | **Value**: `185.199.109.153`
- **Type**: A Record | **Host**: `@` | **Value**: `185.199.110.153`
- **Type**: A Record | **Host**: `@` | **Value**: `185.199.111.153`

*Note: GitHub Pages automatically handles redirecting `lassakdigital.de` to `www.lassakdigital.de` once DNS propagation is complete (usually taking between 10 minutes and 24 hours).*
