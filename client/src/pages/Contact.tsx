import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-light mb-6" data-testid="text-contact-hero-title">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-contact-hero-description">
            Have questions about our coaching programs? Ready to start your wellness journey? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6" data-testid="text-contact-form-title">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed" data-testid="text-contact-form-description">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6" data-testid="text-contact-info-title">
                Contact Information
              </h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4" data-testid="contact-email">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@wellnesscoach.com</p>
                    <p className="text-muted-foreground">support@wellnesscoach.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-location">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">123 Wellness Way</p>
                    <p className="text-muted-foreground">San Francisco, CA 94102</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4" data-testid="text-office-hours-title">Office Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between" data-testid="hours-weekday">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between" data-testid="hours-saturday">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between" data-testid="hours-sunday">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-12 leading-relaxed" data-testid="text-faq-description">
            Find quick answers to common questions about our coaching programs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div data-testid="faq-duration">
              <h3 className="font-semibold mb-2">How long are coaching programs?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our one-on-one programs typically run for 12 weeks, but we offer flexible options to fit your needs.
              </p>
            </div>
            <div data-testid="faq-online">
              <h3 className="font-semibold mb-2">Do you offer online coaching?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! We offer both in-person and virtual coaching sessions to accommodate your lifestyle.
              </p>
            </div>
            <div data-testid="faq-nutrition">
              <h3 className="font-semibold mb-2">Will I get a meal plan?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, nutrition coaching includes personalized meal planning and guidance based on your goals and preferences.
              </p>
            </div>
            <div data-testid="faq-experience">
              <h3 className="font-semibold mb-2">What if I'm a complete beginner?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Perfect! We work with clients at all fitness levels and customize everything to where you are right now.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
