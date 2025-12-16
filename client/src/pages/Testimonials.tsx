import TestimonialCard from "@/components/TestimonialCard";
import BookingDialog from "@/components/BookingDialog";
import { Button } from "@/components/ui/button";
import testimonial1 from "@assets/generated_images/Happy_client_testimonial_portrait_292a3ded.png";
import testimonial2 from "@assets/generated_images/Confident_client_portrait_smiling_52e67e4a.png";

export default function Testimonials() {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-light mb-6" data-testid="text-testimonials-hero-title">
            Real Stories, Real Results
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-testimonials-hero-description">
            See how our clients have transformed their lives through personalized wellness coaching. These are real people who took control of their health and achieved lasting results.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Mitchell"
              image={testimonial1}
              transformation="Lost 30 lbs, gained confidence"
              quote="Working with this wellness coach has completely transformed my relationship with food and fitness. I feel stronger and more energized than ever before. The personalized approach made all the difference."
              rating={5}
            />
            <TestimonialCard
              name="David Chen"
              image={testimonial2}
              transformation="Reduced stress, improved sleep"
              quote="The holistic approach to wellness helped me address not just my physical health, but my mental well-being too. I'm sleeping better and feeling more balanced in all areas of my life."
              rating={5}
            />
            <TestimonialCard
              name="Maria Rodriguez"
              image={testimonial1}
              transformation="Completed first marathon"
              quote="I never thought I could run a marathon, but with the right guidance and support, I crossed that finish line! The journey taught me that I'm capable of so much more than I believed."
              rating={5}
            />
            <TestimonialCard
              name="James Thompson"
              image={testimonial2}
              transformation="Reversed pre-diabetes"
              quote="My doctor said my blood sugar levels have improved dramatically. The nutrition coaching gave me practical tools to make sustainable changes that actually fit into my busy lifestyle."
              rating={5}
            />
            <TestimonialCard
              name="Emily Williams"
              image={testimonial1}
              transformation="Overcame emotional eating"
              quote="For years I struggled with emotional eating. Through coaching, I learned to understand my triggers and develop healthier coping strategies. I finally feel in control."
              rating={5}
            />
            <TestimonialCard
              name="Robert Johnson"
              image={testimonial2}
              transformation="Gained muscle, lost fat"
              quote="The fitness coaching was exactly what I needed. I've gained lean muscle while losing body fat, and I feel stronger and more confident than I have in years."
              rating={5}
            />
            <TestimonialCard
              name="Lisa Anderson"
              image={testimonial1}
              transformation="Improved energy levels"
              quote="I used to rely on coffee to get through the day. Now I have natural energy from morning to night. The lifestyle changes were easier than I expected with the right support."
              rating={5}
            />
            <TestimonialCard
              name="Michael Brown"
              image={testimonial2}
              transformation="Better work-life balance"
              quote="The stress management techniques I learned have been life-changing. I'm more productive at work and more present with my family. My overall quality of life has improved tremendously."
              rating={5}
            />
            <TestimonialCard
              name="Jennifer Lee"
              image={testimonial1}
              transformation="Sustainable healthy habits"
              quote="What I love most is that these changes feel sustainable. I'm not on a diet—I've changed my lifestyle in a way that feels natural and enjoyable. That's the real victory."
              rating={5}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card p-8 sm:p-12 rounded-2xl border border-card-border text-center">
            <h2 className="text-3xl font-semibold mb-4" data-testid="text-stats-title">
              Proven Results
            </h2>
            <p className="text-muted-foreground mb-12 leading-relaxed" data-testid="text-stats-description">
              Our clients' success speaks for itself
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div data-testid="stat-clients">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Lives Transformed</div>
              </div>
              <div data-testid="stat-satisfaction">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div data-testid="stat-goals">
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <div className="text-muted-foreground">Achieve Their Goals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-testimonials-cta-title">
            Your Success Story Starts Here
          </h2>
          <p className="text-lg mb-8 opacity-90 leading-relaxed" data-testid="text-testimonials-cta-description">
            Join hundreds of clients who have transformed their lives. Book your free consultation today.
          </p>
          <BookingDialog>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" data-testid="button-testimonials-cta">
              Book Free Consultation
            </Button>
          </BookingDialog>
        </div>
      </section>
    </div>
  );
}
