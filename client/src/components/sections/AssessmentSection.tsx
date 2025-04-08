import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const AssessmentSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    }
  });
  
  const submitAssessmentMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest('POST', '/api/assessment-leads', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your assessment has been sent. Check your email shortly.",
        variant: "default",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit form",
        variant: "destructive",
      });
    },
  });
  
  const onSubmit = async (data: FormData) => {
    submitAssessmentMutation.mutate(data);
  };

  return (
    <section id="assessment" className="py-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              How Does Your Business Measure Up?
            </h2>
            <p className="text-lg text-neutral-700 mb-6">
              Take our free Real Estate Business Assessment to discover:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-3"><i className="fas fa-check-circle text-xl"></i></span>
                <span>Where your business stands compared to industry benchmarks</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3"><i className="fas fa-check-circle text-xl"></i></span>
                <span>Your biggest opportunities for growth and improvement</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3"><i className="fas fa-check-circle text-xl"></i></span>
                <span>Specific action steps to take your business to the next level</span>
              </li>
            </ul>
            <p className="text-sm text-neutral-700 italic">
              You'll receive your personalized results immediately, along with resources to help you implement improvements.
            </p>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-display text-2xl font-bold text-primary mb-6 text-center">
                Free Real Estate Business Assessment
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register('firstName')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastName')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={submitAssessmentMutation.isPending}
                  className="w-full bg-primary text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-primary/90 transition duration-300 disabled:opacity-70"
                >
                  {submitAssessmentMutation.isPending ? "Submitting..." : "Take Assessment"}
                </button>
                
                <p className="text-xs text-neutral-700 text-center">
                  We'll never share your information. You'll also receive resources & exclusive offers from Clockwork Coaching. <a href="#" className="text-accent hover:underline">Privacy Policy</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;
