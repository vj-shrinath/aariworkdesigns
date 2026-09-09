You are working on the existing **aariworkdesigns.com** website.

Your task is to design and implement a complete monetization, payment, premium-content, Telegram-growth, and push-notification system for the existing website.

## 1. First: Analyze the Existing Project

Before making any changes:

- Inspect the complete existing codebase and architecture.
- Identify the frontend framework, backend/API structure, database, authentication system, storage system, existing product/content structure, payment-related code, and deployment configuration.
- Understand how Aari designs, PDFs, images, categories, blog posts, products, users, and downloads are currently handled.
- Do NOT unnecessarily rewrite or replace the existing architecture.
- Reuse existing components, APIs, database structures, authentication, styling, and utilities wherever possible.
- Identify anything already implemented for Cashfree and determine exactly what needs to be removed/replaced.
- Create a clear implementation plan before modifying files.

The existing site is an Aari/embroidery design website. The business objective is to generate revenue through:
1. Individual digital-product/PDF sales
2. Premium membership/subscription
3. Free traffic monetized through AdSense where appropriate
4. Telegram audience growth
5. Web push notifications
6. Organic traffic from Google/SEO
7. Instagram/social traffic

---

# 2. Replace Cashfree With PayU

We are using **PayU instead of Cashfree**.

Implement PayU as the primary payment gateway.

Requirements:

- Remove/disable the Cashfree payment flow where it is no longer required.
- Do not leave conflicting or duplicate payment logic.
- Implement PayU using the appropriate integration for the project's backend architecture.
- NEVER expose PayU merchant key, salt, secret, or other sensitive credentials in frontend code.
- Store credentials securely using environment variables/secrets.
- Implement server-side payment/order creation.
- Implement PayU success/failure handling.
- Implement server-side verification of payment responses/signatures/hash according to the current PayU integration requirements.
- Never trust a frontend success message alone to unlock premium content.
- Payment status must be verified server-side.
- Make payment processing idempotent so refreshing/calling callbacks multiple times cannot create duplicate purchases or subscriptions.
- Store transaction/order/payment details in the database.
- Store:
  - user ID
  - order ID
  - PayU transaction ID
  - product/subscription ID
  - amount
  - currency
  - payment status
  - payment method if available
  - timestamps
  - gateway response/reference information required for reconciliation
- Implement proper states:
  - pending
  - successful
  - failed
  - cancelled
  - refunded, if supported
- Do not unlock premium content until payment has been verified.
- Handle failed payments gracefully.
- Allow users to retry failed payments.
- Make the payment UI mobile-friendly because a large percentage of traffic may come from mobile/Instagram.

Use the official PayU documentation/API requirements applicable to the selected integration rather than guessing undocumented parameters.

Create a clear environment-variable example such as:

PAYU_MERCHANT_KEY=
PAYU_MERCHANT_SALT=
PAYU_BASE_URL=
PAYU_SUCCESS_URL=
PAYU_FAILURE_URL=

Use the actual variable naming conventions of the existing project if appropriate.

---

# 3. Design the Premium Content Strategy

Do not make the entire website paid.

The objective is to use FREE content for SEO and audience acquisition while creating strong reasons to purchase premium content.

Create the following content hierarchy:

## FREE

Keep these accessible to everyone:

- Individual Aari design previews
- Selected blouse designs
- Selected sleeve designs
- Selected neck designs
- Selected tracing designs
- Design inspiration pages
- Some free PDFs/design samples
- Blog/tutorial content
- A limited number of downloadable designs
- SEO landing pages for important design categories

Free content should provide genuine value and should be indexable by Google where appropriate.

## PREMIUM

Reserve high-value collections for paying users.

Potential premium products:

### Premium PDF Collections

Examples:

- 100 Aari blouse designs
- 200 Aari tracing designs
- 500 Aari embroidery designs
- Bridal blouse design collection
- Sleeve design mega collection
- Neck design mega collection
- Latest trending Aari designs
- Festival/wedding collections
- Beginner Aari design collection
- Advanced embroidery design collection

### Premium Membership

Consider creating membership tiers such as:

FREE:
- Free designs
- Limited downloads
- Blog/tutorial content
- Telegram updates

PREMIUM:
- Full premium design library
- Premium PDF downloads
- New collections
- Members-only designs
- Higher download limits
- No ads
- Early access to new collections

Do NOT implement multiple complicated tiers unless the existing business model requires them.

Start with a simple membership model that is easy for customers to understand.

---

# 4. Recommend the Most Effective Monetization Structure

Before implementing the final pricing, analyze the existing products/content and recommend:

- Which content should remain free
- Which content should be premium
- Which content should be sold individually
- Which content should be included in subscription
- Which content should be used as a free lead magnet
- Which pages should be optimized for AdSense
- Which pages should NOT display ads

Create a simple monetization matrix.

Example:

| Content | Free | Individual Purchase | Subscription | AdSense |
|---|---|---|---|---|
| Design preview | ✓ | | | ✓ |
| Small free PDF | ✓ | | | ✓ |
| Mega PDF | | ✓ | ✓ | |
| Premium library | | | ✓ | |
| Blog/tutorial | ✓ | | | ✓ |
| Member dashboard | | | ✓ | No |

Adjust this based on the actual website content.

The goal is to maximize:

**Traffic → Engagement → Telegram/Push → Free user → Individual purchase → Subscription**

without destroying SEO or user experience.

---

# 5. Premium Content Access Control

Implement a proper authorization system.

Premium content should NOT merely be hidden visually.

Do not rely on:

- CSS hiding
- JavaScript-only checks
- hidden download URLs
- frontend-only authentication

Premium files must be protected server-side.

A non-authorized user must not be able to access a premium PDF simply by discovering its direct URL.

Implement appropriate server-side authorization for:

- Premium pages
- Premium PDFs
- Premium downloads
- Member-only designs
- Subscription-only resources

If possible, use protected storage/private URLs or server-controlled downloads.

---

# 6. Subscription System

Implement subscription support in a way that can later support recurring billing through PayU if the selected PayU product/integration supports the required recurring-payment functionality.

Important:

- Do not fake recurring subscriptions using manual monthly payments.
- Clearly distinguish:
  - one-time purchase
  - subscription
- Store subscription status.
- Store:
  - subscription ID
  - user ID
  - plan
  - start date
  - expiry/renewal date
  - payment status
  - gateway transaction/reference IDs
  - cancellation status
- Handle expiration.
- A user whose subscription expires should automatically lose premium access unless they have separately purchased lifetime/individual products.
- Design the database/API so recurring billing can be expanded later without rewriting the entire payment system.

If automatic recurring payments require a specific PayU product or merchant configuration, clearly document the dependency rather than implementing an unsafe workaround.

---

# 7. Individual PDF/Product Purchases

Maintain the ability to sell individual digital products.

A customer should be able to:

1. Open product page
2. See preview images
3. See what's included
4. See number of designs/pages/files
5. See price
6. Click Buy Now
7. Complete PayU payment
8. Payment is verified server-side
9. Product is added to user's purchases
10. User can access/download the purchased file

Purchased one-time products should remain accessible even if the user does not have an active subscription, subject to the site's existing business rules.

---

# 8. Telegram Channel Growth Popup

We want to grow the official Telegram channel:

**https://t.me/aariworkdesigns**

Implement a non-intrusive Telegram join popup.

The popup should communicate the value clearly, for example:

"Get New Aari Designs & Updates on Telegram"

Include:

- Telegram icon
- Short benefit-oriented message
- "Join Telegram Channel" CTA
- Close button
- Don't show repeatedly after the user dismisses it
- Remember whether the user has already interacted with it using appropriate local storage/cookie logic
- Avoid showing the popup immediately on every page load
- Use a reasonable delay or engagement trigger
- Make it mobile-friendly
- Do not obstruct important content or checkout/payment screens
- Do not display it aggressively to returning users

Use the exact Telegram destination:

https://t.me/aariworkdesigns

Do not invent another Telegram URL.

---

# 9. Web Push Notifications

Add web push notification support.

Objective:

Notify users about:

- New Aari design collections
- New PDF collections
- New premium content
- Important website updates
- New blog/tutorial content
- Special offers
- Limited-time promotions where appropriate

Implement proper browser permission UX.

Do NOT immediately trigger a browser notification permission request on the first page load.

Instead:

1. User visits website
2. User interacts with the website
3. Explain the benefit of notifications
4. User clicks an explicit "Enable Notifications" action
5. Then request browser permission

Handle:

- granted
- denied
- default
- unsupported browser
- revoked permissions

Create a reusable notification subscription architecture.

If a push provider/service is required, use an appropriate production-ready solution and keep credentials server-side.

Do not send notifications without user opt-in.

---

# 10. Telegram + Push + Email/Account Strategy

Design these as separate retention channels.

Preferred funnel:

Google / Instagram
        ↓
Free design/content
        ↓
Telegram + Push opt-in
        ↓
Returning visitor
        ↓
Premium collection/product
        ↓
Purchase
        ↓
Subscription/member

Avoid forcing users to register before they can view normal free content.

Registration/login should primarily become necessary for:

- Purchases
- Download history
- Premium membership
- Saved designs
- User dashboard
- Notification preferences

---

# 11. AdSense Strategy

The site may use Google AdSense.

Do NOT place ads blindly across the entire website.

Recommended:

Ads on:
- Free design pages
- Blog articles
- Informational pages
- High-traffic SEO pages

Avoid/minimize ads on:
- Checkout
- Payment pages
- Login/register
- Member dashboard
- Premium content
- Download pages
- Pages where ads could interfere with the primary user action

Do not create thin pages solely to generate ad impressions.

Maintain strong original content and good UX.

Premium subscribers should ideally have an ad-free experience.

If an existing ad implementation exists, audit it and improve placement without damaging Core Web Vitals or user experience.

---

# 12. SEO / GEO / AEO Preservation

Do not damage the existing SEO implementation.

Audit and preserve:

- title tags
- meta descriptions
- canonical URLs
- Open Graph metadata
- Twitter/X metadata if present
- structured data
- sitemap
- robots.txt
- internal linking
- breadcrumbs
- image alt text
- category pages
- clean URLs
- Core Web Vitals

Premium content should be handled carefully.

Do not accidentally expose private/premium content to search engines if it is supposed to be member-only.

Free preview pages can remain indexable and should provide enough useful content to rank.

Use appropriate schema types based on the actual page:

- Article
- BreadcrumbList
- Product
- Organization
- WebSite
- FAQPage only where the FAQ content genuinely exists and complies with search-engine requirements

Do not add fake structured data.

---

# 13. Conversion Optimization

Improve the website's conversion funnel.

Premium content pages should clearly show:

- Preview images
- Number of designs
- What customer receives
- File format
- Number of pages/designs
- Who the collection is for
- Price
- Subscription benefit
- Individual purchase option where applicable
- CTA
- Trust/reassurance information

Example CTA:

"Get Full Design Collection"

or

"Unlock Premium Designs"

Avoid misleading urgency or fake scarcity.

---

# 14. User Dashboard

Create/improve a user dashboard containing:

### My Purchases
- Purchased PDFs/products
- Download buttons

### Membership
- Current plan
- Status
- Start date
- Expiry/renewal date
- Upgrade/renew option

### Saved/Favourite Designs
If technically feasible within the existing architecture.

### Notifications
- Push notification status
- Enable/disable preference

### Account
- Basic account information
- Logout

---

# 15. Admin / Content Management

If an admin system already exists, extend it rather than creating another one.

Admin should be able to:

- Create/edit premium products
- Upload PDF
- Set price
- Mark content as free/premium
- Create membership plans
- View orders
- View payment status
- View subscription status
- Manually verify/review transactions if necessary
- See failed payments
- See purchases
- Manage premium collections
- Create promotional banners
- Create notification campaigns if the push system supports it

Design the database so future content can be marked:

FREE
PREMIUM
ONE_TIME_PURCHASE
SUBSCRIPTION_ONLY

---

# 16. Security Requirements

Perform a security review while implementing this system.

Pay particular attention to:

- PayU credentials
- Payment verification
- Webhook/callback verification
- Authentication
- Authorization
- Premium file access
- Download URLs
- API endpoints
- Rate limiting where appropriate
- Input validation
- CSRF protection where applicable
- XSS protection
- SQL/NoSQL injection prevention
- Sensitive information in logs
- Environment variables
- Admin endpoints

Never put secrets in:

- frontend JavaScript
- public repositories
- HTML
- client-side environment variables

---

# 17. Mobile-First UX

The majority of visitors may come from Instagram and mobile devices.

Therefore test:

- homepage
- design pages
- premium product pages
- Telegram popup
- login/register
- checkout
- PayU redirect/return flow
- payment success
- payment failure
- downloads
- member dashboard

at mobile widths.

Avoid:

- intrusive popups
- horizontal scrolling
- tiny buttons
- slow-loading preview images
- excessive ad density

---

# 18. Analytics / Tracking

Implement or audit analytics so we can understand:

- Free page visits
- Telegram CTA clicks
- Push opt-ins
- Product page views
- Buy Now clicks
- Checkout starts
- Successful purchases
- Failed payments
- Subscription conversions
- Premium content views
- Downloads

Use privacy-conscious tracking and do not expose payment credentials or sensitive personal/payment data.

Create a clear event naming convention.

Example:

telegram_join_click
push_permission_prompt
push_permission_granted
premium_view
purchase_click
checkout_started
payment_success
payment_failed
subscription_started
premium_download

---

# 19. Implementation Process

Follow this exact process:

### Phase 1 — Audit
Inspect the entire project.

### Phase 2 — Architecture
Explain the proposed:

- payment flow
- database changes
- premium-access model
- subscription model
- Telegram popup architecture
- push notification architecture
- AdSense placement strategy

### Phase 3 — Implement
Make the changes incrementally.

### Phase 4 — Test
Test:

- successful payment
- failed payment
- duplicate callback
- payment refresh
- unauthorized premium access
- expired subscription
- active subscription
- individual purchase access
- Telegram popup persistence
- push permission states
- mobile UX

### Phase 5 — Security Audit
Verify that premium content cannot be accessed without authorization and that PayU secrets are not exposed.

### Phase 6 — SEO Audit
Ensure no accidental `noindex`, broken canonical URLs, broken sitemap, broken structured data, or indexing of private premium resources.

### Phase 7 — Production Readiness
Provide:

- environment variables required
- database migrations
- deployment steps
- PayU configuration requirements
- webhook/callback URLs
- push notification configuration
- testing checklist
- rollback considerations

---

# 20. IMPORTANT DEVELOPMENT RULES

- Do not rewrite working parts of the website unnecessarily.
- Do not remove existing SEO functionality.
- Do not break existing URLs.
- Do not expose premium files publicly.
- Do not trust frontend payment status.
- Do not hardcode PayU credentials.
- Do not implement fake subscription logic.
- Do not force Telegram membership to access the website.
- Do not request push permission immediately on page load.
- Do not create aggressive popups.
- Do not put AdSense where it harms checkout/conversion.
- Do not create thin SEO pages purely for advertising.
- Do not introduce unnecessary dependencies.
- Keep the implementation production-ready.
- Maintain the existing visual identity of aariworkdesigns.com.
- Make the system scalable so additional design collections and subscription plans can be added later.

## Final Deliverables

After implementation, provide:

1. Summary of what was changed
2. Files/components changed
3. Database/schema changes
4. PayU integration flow
5. Premium-content access model
6. Subscription model
7. Telegram popup implementation
8. Push notification implementation
9. AdSense recommendations
10. SEO impact
11. Security considerations
12. Required environment variables
13. PayU dashboard configuration required
14. Testing results
15. Any remaining manual configuration
16. Recommended next steps for maximizing revenue

Do not just describe what should be done. Inspect the existing project and implement the required changes wherever possible.