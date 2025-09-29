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

Deno.serve(async (req) => {
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

    // Create WhatsApp URL for direct messaging
    const whatsappNumber = '919164060961'; // Your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Log the lead data for your records
    console.log('New lead received:', { 
      name, 
      phone, 
      businessName, 
      location, 
      timestamp: new Date().toISOString() 
    });
    
    console.log('WhatsApp message prepared:', message);
    console.log('WhatsApp URL:', whatsappUrl);

    // In a production environment, you could also:
    // 1. Store the lead in a database
    // 2. Send email notifications
    // 3. Integrate with CRM systems
    // 4. Use WhatsApp Business API for automated sending

    // For now, we'll return success with the WhatsApp URL
    // The frontend can optionally use this URL to open WhatsApp
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Lead submitted successfully! You will be contacted via WhatsApp shortly.',
        whatsappUrl: whatsappUrl,
        leadData: { name, phone, businessName, location }
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error processing lead:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error. Please try again or contact us directly at +91 9164060961.' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})