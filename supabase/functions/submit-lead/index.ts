import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface LeadData {
  name: string;
  phone: string;
  businessName: string;
  location: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, phone, businessName, location }: LeadData = await req.json()

    // Validate required fields
    if (!name || !phone || !businessName || !location) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Format the message for WhatsApp
    const message = `🚀 *New Lead from Ltabai Website*

👤 *Name:* ${name}
📱 *Phone:* ${phone}
🏢 *Business:* ${businessName}
📍 *Location:* ${location}

*Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Please follow up with this potential client!`

    // WhatsApp Business API endpoint (you'll need to replace with your actual endpoint)
    // For now, we'll use a placeholder URL - you'll need to set up WhatsApp Business API
    const whatsappApiUrl = `https://api.whatsapp.com/send?phone=919164060961&text=${encodeURIComponent(message)}`
    
    // In a real implementation, you would:
    // 1. Use WhatsApp Business API or a service like Twilio
    // 2. Send the message programmatically
    // 3. Store the lead in your database
    
    // For demonstration, we'll log the data and return success
    console.log('New lead received:', { name, phone, businessName, location })
    console.log('WhatsApp message:', message)

    // You can also store the lead in Supabase database here
    // const { data, error } = await supabase
    //   .from('leads')
    //   .insert([{ name, phone, business_name: businessName, location, created_at: new Date() }])

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Lead submitted successfully',
        whatsappUrl: whatsappApiUrl // You can use this for manual testing
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error processing lead:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})