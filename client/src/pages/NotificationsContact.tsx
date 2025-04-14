
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/shared/CookieConsent';
import { toast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';

const NotificationsContact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notifyGeneral: false,
    notifyClub: false,
    notifyLab: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/booking-leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          type: 'notifications',
          message: `Notifications requested: ${[
            formData.notifyGeneral && 'General Updates',
            formData.notifyClub && 'Club Launch',
            formData.notifyLab && 'Clockwork Lab'
          ].filter(Boolean).join(', ')}`
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thanks for signing up! We'll keep you updated.",
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          notifyGeneral: false,
          notifyClub: false,
          notifyLab: false
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Navigation />
      <main className="pt-24">
        <div className="elegant-container py-12">
          <h1 className="text-3xl md:text-4xl font-display font-medium mb-6 text-center">
            Stay Connected
          </h1>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-8"></div>
          
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 bg-primary/5 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Notify me about:
                </label>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="general"
                    checked={formData.notifyGeneral}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, notifyGeneral: checked as boolean }))
                    }
                  />
                  <label htmlFor="general">General Updates</label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="club"
                    checked={formData.notifyClub}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, notifyClub: checked as boolean }))
                    }
                  />
                  <label htmlFor="club">Club Launch</label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="lab"
                    checked={formData.notifyLab}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, notifyLab: checked as boolean }))
                    }
                  />
                  <label htmlFor="lab">Clockwork Lab</label>
                </div>
              </div>

              <button type="submit" className="elegant-button w-full">
                Sign Up for Updates
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default NotificationsContact;
