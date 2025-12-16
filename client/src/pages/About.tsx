import CertificationBadge from "@/components/CertificationBadge";
import BookingDialog from "@/components/BookingDialog";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Heart, Users } from "lucide-react";
import coachImage from "@assets/generated_images/Coach_professional_headshot_portrait_e36c3d9d.png";

export default function About() {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-light mb-6" data-testid="text-about-title">
                Meet Your Wellness Coach
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-intro">
                Hi, I'm Alex Rivera, and I'm passionate about helping people discover their healthiest, most vibrant selves. With over a decade of experience in holistic wellness coaching, I've guided hundreds of clients on their transformative journeys.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-philosophy">
                My approach combines evidence-based nutrition science, functional fitness, and mindfulness practices to create sustainable lifestyle changes that last. I believe that true wellness isn't about quick fixes—it's about building habits that nurture your whole self.
              </p>
              <BookingDialog>
                <Button size="lg" data-testid="button-about-booking">
                  Work With Me
                </Button>
              </BookingDialog>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={coachImage}
                alt="Wellness Coach"
                className="w-full h-full object-cover"
                data-testid="img-coach"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-certifications-title">
              Certifications & Qualifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-certifications-description">
              Backed by professional training and continuous education in wellness coaching.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CertificationBadge
              icon={Award}
              title="Certified Wellness Coach"
              organization="International Coaching Federation"
            />
            <CertificationBadge
              icon={GraduationCap}
              title="Nutrition Specialist"
              organization="Precision Nutrition"
            />
            <CertificationBadge
              icon={Heart}
              title="Mindfulness Practitioner"
              organization="Mindful Schools"
            />
            <CertificationBadge
              icon={Users}
              title="Group Fitness Instructor"
              organization="ACE Fitness"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-mission-title">
              My Mission
            </h2>
          </div>

          <div className="bg-card p-8 sm:p-12 rounded-2xl border border-card-border">
            <p className="font-serif italic text-xl sm:text-2xl text-center leading-relaxed mb-8" data-testid="text-mission-statement">
              "To empower individuals to take control of their health and well-being through personalized guidance, compassionate support, and evidence-based strategies that create lasting transformation."
            </p>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed" data-testid="text-mission-description">
                I founded my wellness coaching practice after experiencing my own health transformation. Having struggled with chronic fatigue and stress for years, I discovered the power of holistic wellness and decided to dedicate my life to helping others find their path to vitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-values-title">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="card-value-authenticity">
              <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Real results come from being genuine about where you are and where you want to go.
              </p>
            </div>
            <div className="text-center" data-testid="card-value-compassion">
              <h3 className="text-xl font-semibold mb-3">Compassion</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your wellness journey is unique, and I meet you exactly where you are with kindness.
              </p>
            </div>
            <div className="text-center" data-testid="card-value-sustainability">
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building habits that last requires patience, consistency, and realistic goal-setting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
