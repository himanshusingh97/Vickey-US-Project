import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import BookingDialog from "@/components/BookingDialog";
import { Button } from "@/components/ui/button";
import { Users, UsersRound, GraduationCap, Video, Heart, Target, Sparkles } from "lucide-react";
import oneOnOneImage from "@assets/generated_images/One-on-one_coaching_session_98183e4a.png";
import groupImage from "@assets/generated_images/Group_fitness_class_outdoors_1839d642.png";
import workshopImage from "@assets/generated_images/Wellness_workshop_seminar_setting_8e0850f0.png";
import testimonial1 from "@assets/generated_images/Happy_client_testimonial_portrait_292a3ded.png";
import testimonial2 from "@assets/generated_images/Confident_client_portrait_smiling_52e67e4a.png";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-philosophy-title">
              A Holistic Approach to Wellness
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-philosophy-description">
              True wellness encompasses mind, body, and spirit. Our coaching philosophy integrates nutrition, fitness, and mental well-being to create lasting transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6" data-testid="card-pillar-nutrition">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Nourish Your Body</h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn to fuel your body with whole, nutritious foods that energize and sustain you.
              </p>
            </div>
            <div className="text-center p-6" data-testid="card-pillar-fitness">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Move with Purpose</h3>
              <p className="text-muted-foreground leading-relaxed">
                Discover fitness routines that align with your goals and bring joy to your journey.
              </p>
            </div>
            <div className="text-center p-6" data-testid="card-pillar-mindfulness">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultivate Mindfulness</h3>
              <p className="text-muted-foreground leading-relaxed">
                Develop mental clarity and emotional resilience through mindfulness practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-services-title">
              Personalized Coaching Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-services-description">
              Choose the coaching format that best fits your lifestyle and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Users}
              title="One-on-One Coaching"
              description="Personalized coaching sessions tailored to your unique health goals and lifestyle needs. Get dedicated support and accountability."
              image={oneOnOneImage}
            />
            <ServiceCard
              icon={UsersRound}
              title="Group Sessions"
              description="Join a supportive community of like-minded individuals working towards their wellness goals together in group fitness and nutrition classes."
              image={groupImage}
            />
            <ServiceCard
              icon={GraduationCap}
              title="Workshops & Seminars"
              description="Deep-dive into specific wellness topics with our interactive workshops covering nutrition, stress management, and healthy habits."
              image={workshopImage}
            />
          </div>

          <div className="text-center mt-12">
            <BookingDialog>
              <Button size="lg" data-testid="button-services-cta">
                Explore All Programs
              </Button>
            </BookingDialog>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-testimonials-title">
              Client Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-testimonials-description">
              Real transformations from real people who took control of their wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              name="Sarah Mitchell"
              image={testimonial1}
              transformation="Lost 30 lbs, gained confidence"
              quote="Working with this wellness coach has completely transformed my relationship with food and fitness. I feel stronger and more energized than ever before."
              rating={5}
            />
            <TestimonialCard
              name="David Chen"
              image={testimonial2}
              transformation="Reduced stress, improved sleep"
              quote="The holistic approach to wellness helped me address not just my physical health, but my mental well-being too. I'm sleeping better and feeling more balanced."
              rating={5}
            />
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" data-testid="button-all-testimonials">
              Read More Success Stories
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-cta-title">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-lg mb-8 opacity-90 leading-relaxed" data-testid="text-cta-description">
            Book a free consultation today and take the first step towards a healthier, more vibrant you.
          </p>
          <BookingDialog>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" data-testid="button-cta-booking">
              Book Free Consultation
            </Button>
          </BookingDialog>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
