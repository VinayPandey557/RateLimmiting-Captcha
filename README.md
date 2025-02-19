1. Rate Limiting
Purpose: Prevents excessive requests from a single user or IP address within a specific time frame.
How it works:

Limits API requests per second/minute/hour (e.g., 100 requests per minute per IP).
Uses libraries like:
Express-rate-limit (Node.js/Express)
Redis-based rate limiting (for distributed apps)
Cloudflare, AWS WAF, or Nginx for advanced rate limiting.


2. CAPTCHAs
Purpose: Prevents automated bots from interacting with your website.
How it works:

Requires users to complete a challenge (e.g., identifying objects in images, solving a puzzle).
Used for login, signup, and form submissions.
Popular services:
Google reCAPTCHA (v2 & v3)
hCaptcha



3. DDoS Protection
Purpose: Protects against Distributed Denial-of-Service (DDoS) attacks by mitigating a flood of malicious traffic.
How it works:

Traffic filtering (Cloudflare, AWS Shield, Akamai)
Rate limiting (see above)
Web Application Firewalls (WAF) (Cloudflare, AWS WAF)
Bot protection (reCAPTCHA, hCaptcha)
