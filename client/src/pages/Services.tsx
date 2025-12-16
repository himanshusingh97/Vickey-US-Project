import ServiceCard from "@/components/ServiceCard";
import BookingDialog from "@/components/BookingDialog";
import { Button } from "@/components/ui/button";
import { Users, UsersRound, GraduationCap, Video, Dumbbell, Apple, Brain } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import oneOnOneImage from "@assets/generated_images/One-on-one_coaching_session_98183e4a.png";
import groupImage from "@assets/generated_images/Group_fitness_class_outdoors_1839d642.png";
import workshopImage from "@assets/generated_images/Wellness_workshop_seminar_setting_8e0850f0.png";

export default function Services() {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-light mb-6" data-testid="text-services-hero-title">
            Coaching Programs Designed for You
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-services-hero-description">
            Whether you prefer one-on-one attention, the energy of group sessions, or the flexibility of online learning, we have a program that fits your lifestyle and goals.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <ServiceCard
              icon={Users}
              title="One-on-One Coaching"
              description="Personalized coaching sessions tailored to your unique health goals. Includes nutrition planning, fitness routines, and ongoing support."
              image={oneOnOneImage}
            />
            <ServiceCard
              icon={UsersRound}
              title="Group Sessions"
              description="Join a supportive community in our group fitness classes and nutrition workshops. Perfect for staying motivated together."
              image={groupImage}
            />
            <ServiceCard
              icon={GraduationCap}
              title="Workshops & Seminars"
              description="Deep-dive workshops on specific wellness topics including meal prep, stress management, and building healthy habits."
              image={workshopImage}
            />
            <ServiceCard
              icon={Video}
              title="Online Courses"
              description="Self-paced online programs that you can complete on your schedule, with lifetime access to course materials."
            />
            <ServiceCard
              icon={Dumbbell}
              title="Fitness Coaching"
              description="Customized workout plans designed for your fitness level and goals, with form checks and progressive training."
            />
            <ServiceCard
              icon={Apple}
              title="Nutrition Coaching"
              description="Learn to fuel your body with whole foods. Includes meal planning, grocery guides, and recipe collections."
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-program-details-title">
              Program Details
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-program-details-description">
              Learn more about what's included in each coaching program.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-programs">
            <AccordionItem value="one-on-one" className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline" data-testid="accordion-trigger-one-on-one">
                <span className="text-lg font-semibold">One-on-One Coaching</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed" data-testid="accordion-content-one-on-one">
                <div className="space-y-4 pt-2">
                  <p><strong>Duration:</strong> 12-week program with weekly 60-minute sessions</p>
                  <p><strong>Includes:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Comprehensive health and lifestyle assessment</li>
                    <li>Personalized nutrition and meal planning</li>
                    <li>Custom fitness routine tailored to your goals</li>
                    <li>Weekly accountability check-ins</li>
                    <li>Email and text support between sessions</li>
                    <li>Progress tracking and adjustments</li>
                  </ul>
                  <p><strong>Best for:</strong> Individuals seeking personalized attention and accountability</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="group" className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline" data-testid="accordion-trigger-group">
                <span className="text-lg font-semibold">Group Sessions</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed" data-testid="accordion-content-group">
                <div className="space-y-4 pt-2">
                  <p><strong>Duration:</strong> Ongoing, attend as many sessions as you like</p>
                  <p><strong>Includes:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>3 group fitness classes per week</li>
                    <li>Monthly nutrition workshops</li>
                    <li>Community support and motivation</li>
                    <li>Access to members-only resources</li>
                    <li>Quarterly goal-setting sessions</li>
                  </ul>
                  <p><strong>Best for:</strong> Those who thrive in community settings and enjoy group energy</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="workshops" className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline" data-testid="accordion-trigger-workshops">
                <span className="text-lg font-semibold">Workshops & Seminars</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed" data-testid="accordion-content-workshops">
                <div className="space-y-4 pt-2">
                  <p><strong>Duration:</strong> 2-4 hour sessions, various topics monthly</p>
                  <p><strong>Includes:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>In-depth exploration of specific wellness topics</li>
                    <li>Hands-on activities and practical tools</li>
                    <li>Take-home resources and action plans</li>
                    <li>Q&A sessions with the coach</li>
                  </ul>
                  <p><strong>Topics include:</strong> Meal prep mastery, stress management, sleep optimization, building sustainable habits</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="online" className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline" data-testid="accordion-trigger-online">
                <span className="text-lg font-semibold">Online Courses</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed" data-testid="accordion-content-online">
                <div className="space-y-4 pt-2">
                  <p><strong>Duration:</strong> Self-paced, lifetime access</p>
                  <p><strong>Includes:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Video lessons and demonstrations</li>
                    <li>Downloadable workbooks and guides</li>
                    <li>Recipe collections and meal plans</li>
                    <li>Private community forum access</li>
                    <li>Certificate of completion</li>
                  </ul>
                  <p><strong>Best for:</strong> Those who prefer to learn at their own pace with flexibility</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-services-cta-title">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-90 leading-relaxed" data-testid="text-services-cta-description">
            Book a free consultation to discuss which program is right for you.
          </p>
          <BookingDialog>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" data-testid="button-services-cta">
              Book Free Consultation
            </Button>
          </BookingDialog>
        </div>
      </section>
    </div>
  );
}
