# Email Setup Guide for Shubhhampers Contact Form

## Environment Variables Required

Create a `.env.local` file in your project root with the following variables:

```bash
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password

# Business email where contact form submissions will be sent
BUSINESS_EMAIL=connect@shubhhampers.com
```

## Recommended Email Providers (No 2FA Required)

### Option 1: SendGrid (Recommended - Professional & Reliable)

**Best for production websites**

```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
BUSINESS_EMAIL=connect@shubhhampers.com
```

**Setup Steps:**

1. Sign up at [SendGrid.com](https://sendgrid.com) (Free tier: 100 emails/day)
2. Go to Settings > API Keys > Create API Key
3. Choose "Restricted Access" and enable "Mail Send" permission
4. Copy the API key and use it as `SMTP_PASS`
5. Set `SMTP_USER` to exactly `apikey`

### Option 2: Outlook/Hotmail (Simple Setup)

```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
BUSINESS_EMAIL=connect@shubhhampers.com
```

**Setup Steps:**

1. Create an Outlook.com account if you don't have one
2. Use your regular email and password (no app passwords needed)
3. Make sure "Less secure app access" is enabled in account settings

### Option 3: Gmail (Alternative Setup)

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password
BUSINESS_EMAIL=connect@shubhhampers.com
```

**Setup Steps:**

1. Go to [Google Account Settings](https://myaccount.google.com/security)
2. Turn ON "Less secure app access" (No 2FA needed)
3. Use your regular Gmail password
4. **Note**: Google may disable this in the future, so SendGrid is recommended

## Alternative Email Providers

### SendGrid (Recommended for production)

```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Outlook/Hotmail

```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

## Testing

After setup, test the contact form on your website. You should receive:

1. **Business notification email** with the inquiry details
2. **Customer confirmation email** sent to the person who submitted the form

## Troubleshooting

- **"Authentication failed"**: Check your email/password or API key
- **"Connection timeout"**: Verify SMTP_HOST and SMTP_PORT are correct
- **"Invalid credentials"**: Double-check username and password
- **Gmail issues**: Try enabling "Less secure app access" or switch to SendGrid
- **SendGrid issues**: Verify API key has "Mail Send" permission enabled
