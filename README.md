# Ltabai Lead Generation Landing Page

A beautiful, responsive landing page for Ltabai's digital marketing services with WhatsApp lead integration.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **WhatsApp Integration** - Leads automatically formatted for WhatsApp
- **Video Integration** - YouTube video player with fallback
- **Modern UI** - Beautiful gradients and animations
- **Lead Form** - Captures customer information
- **Global Reach** - Showcases international presence

## 📋 Setup Instructions

### 1. Supabase Configuration (Required for WhatsApp Integration)

To enable WhatsApp lead integration, you need to set up Supabase:

1. **Click the "Supabase" button** in the Bolt settings (top right settings icon)
2. **Create/Connect your Supabase project**
3. **The Edge Function will be automatically deployed**

### 2. Environment Variables

The following environment variables will be automatically configured when you set up Supabase:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. WhatsApp Number Configuration

The WhatsApp number is currently set to: **+91 9164060961**

To change it, update the `whatsappNumber` variable in:
`supabase/functions/submit-lead/index.ts`

## 🔧 How WhatsApp Integration Works

1. **Customer fills form** on your website
2. **Data is sent** to Supabase Edge Function
3. **WhatsApp message is formatted** with lead details
4. **WhatsApp opens automatically** with the message ready to send
5. **You receive the lead** instantly on WhatsApp

## 📱 WhatsApp Message Format

```
🚀 *New Lead from Ltabai Website*

👤 *Name:* [Customer Name]
📱 *Phone:* +91 [Phone Number]
🏢 *Business:* [Business Name]
📍 *Location:* [Location]

*Submitted:* [Date and Time]

Please follow up with this potential client ASAP! 🎯
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📞 Support

For any issues with the WhatsApp integration or website functionality, contact:
- **Phone:** +91 9164060961
- **Email:** info@ltabai.in

## 🎯 Current Status

- ✅ Landing page design complete
- ✅ Responsive mobile optimization
- ✅ Video integration working
- ⚠️ **WhatsApp integration requires Supabase setup**

**Next Step:** Click the Supabase button in settings to enable WhatsApp lead integration!