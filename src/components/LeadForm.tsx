import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  businessName: string;
  location: string;
}

interface LeadFormProps {
  id?: string;
}

export default function LeadForm({ id = "contact" }: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    businessName: '',
    location: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage('Name is required');
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Phone number is required');
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      setErrorMessage('Please enter a valid 10-digit phone number');
      return false;
    }
    if (!formData.businessName.trim()) {
      setErrorMessage('Business name is required');
      return false;
    }
    if (!formData.location.trim()) {
      setErrorMessage('Location is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Clean phone number (remove any non-digits)
      const cleanPhone = formData.phone.replace(/\D/g, '');
      
      // Get current Indian time
      const currentTime = new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'short'
      });

      // Create a shorter, more reliable message format
      const message = `New Lead from Ltabai:
Name: ${formData.name}
Phone: +91${cleanPhone}
Business: ${formData.businessName}
Location: ${formData.location}
Time: ${currentTime}`;

      // Create WhatsApp URL with simple encoding
      const whatsappNumber = '916000683808';
      
      // Use simple URI encoding
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Log for debugging
      console.log('📱 WhatsApp URL length:', whatsappUrl.length);
      console.log('💬 Message:', message);
      console.log('🔗 Full URL:', whatsappUrl);
      
      // Simulate processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Try multiple methods to ensure it works
      try {
        // Method 1: Direct window.open
        const opened = window.open(whatsappUrl, '_blank');
        if (!opened) {
          // Method 2: Create a temporary link and click it
          const link = document.createElement('a');
          link.href = whatsappUrl;
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } catch (error) {
        console.error('Error opening WhatsApp:', error);
        // Fallback: redirect current window
        window.location.href = whatsappUrl;
      }
      
      // Show success message
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        businessName: '',
        location: ''
      });
      
      console.log('✅ Lead submitted successfully');
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please contact us directly at +91 6000683808.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-yellow-400">Grow Your Business</span>?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get a free consultation and discover how we can transform your digital presence. 
            Fill out the form below and we'll contact you immediately via WhatsApp.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your information has been sent to our WhatsApp! We'll contact you immediately 
                to discuss how we can help grow your business.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Enter your business name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter your city/location"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {submitStatus === 'error' && errorMessage && (
                <div className="flex items-center text-red-600 bg-red-50 p-4 rounded-lg">
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="text-sm">{errorMessage}</span>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                
                <p className="text-sm text-gray-500 mt-2">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}