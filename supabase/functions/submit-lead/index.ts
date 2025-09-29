const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
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
    // Check if request has body
    if (!req.body) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'No data provided' 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Parse JSON data
    let leadData: LeadData;
    try {
      leadData = await req.json();
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid JSON data provided' 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const { name, phone, businessName, location } = leadData;

    // Validate required fields
    if (!name || !phone || !businessName || !location) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'All fields are required (name, phone, businessName, location)' 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Clean phone number (remove any non-digits)
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Format the message for WhatsApp
    const message = `🚀 *New Lead from Ltabai Website*

👤 *Name:* ${name}
📱 *Phone:* +91 ${cleanPhone}
🏢 *Business:* ${businessName}
📍 *Location:* ${location}

*Submitted:* ${new Date().toLocaleString('en-IN', { 
  timeZone: 'Asia/Kolkata',
  dateStyle: 'medium',
  timeStyle: 'short'
})}

Please follow up with this potential client ASAP! 🎯`;

    // Create WhatsApp URL for direct messaging
    const whatsappNumber = '919164060961'; // Your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Log the lead data for debugging
    console.log('✅ New lead received:', { 
      name, 
      phone: cleanPhone, 
      businessName, 
      location, 
      timestamp: new Date().toISOString() 
    });
    
    console.log('📱 WhatsApp message prepared successfully');
    console.log('🔗 WhatsApp URL generated:', whatsappUrl.substring(0, 100) + '...');

    // Return success response with proper JSON structure
    const responseData = {
      success: true,
      message: 'Lead submitted successfully! Check your WhatsApp for the lead details.',
      data: {
        name,
        phone: cleanPhone,
        businessName,
        location,
        submittedAt: new Date().toISOString()
      },
      whatsappUrl: whatsappUrl
    };

    return new Response(
      JSON.stringify(responseData),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('❌ Error processing lead:', error);
    
    // Return proper error response
    const errorResponse = {
      success: false,
      error: 'Internal server error. Please try again or contact us directly at +91 9164060961.',
      details: error instanceof Error ? error.message : 'Unknown error'
    };

    return new Response(
      JSON.stringify(errorResponse),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})