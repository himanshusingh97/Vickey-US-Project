import BlogCard from "@/components/BlogCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import nutritionImage from "@assets/generated_images/Healthy_nutrition_bowl_overhead_54da4269.png";
import meditationImage from "@assets/generated_images/Peaceful_meditation_by_lake_9f5689a2.png";
import fitnessImage from "@assets/generated_images/Fitness_equipment_morning_light_c201e985.png";

export default function Blog() {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-light mb-6" data-testid="text-blog-hero-title">
            Wellness Insights & Tips
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-blog-hero-description">
            Evidence-based articles on nutrition, fitness, mental wellness, and holistic health to support your journey.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-8" data-testid="text-featured-title">Featured Article</h2>
            <div className="max-w-4xl">
              <BlogCard
                title="10 Nutritious Foods to Boost Your Energy Naturally"
                excerpt="Discover the power of whole foods that can transform your energy levels throughout the day. Learn how to fuel your body with nature's best ingredients for sustained vitality, mental clarity, and overall wellness. These nutrient-dense foods will help you feel energized without the afternoon crash."
                image={nutritionImage}
                category="Nutrition"
                date="Oct 15, 2025"
                readTime="5 min read"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-8" data-testid="text-recent-title">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BlogCard
                title="The Power of Mindful Eating for Weight Management"
                excerpt="Learn how paying attention to your eating habits can transform your relationship with food and support sustainable weight management goals."
                image={nutritionImage}
                category="Nutrition"
                date="Oct 12, 2025"
                readTime="7 min read"
              />
              <BlogCard
                title="5 Morning Meditation Practices to Start Your Day"
                excerpt="Discover simple meditation techniques that can set a positive tone for your entire day and reduce stress before it starts."
                image={meditationImage}
                category="Mental Wellness"
                date="Oct 8, 2025"
                readTime="6 min read"
              />
              <BlogCard
                title="Building a Home Workout Routine That Actually Works"
                excerpt="No gym? No problem. Create an effective fitness routine at home with minimal equipment and maximum results."
                image={fitnessImage}
                category="Fitness"
                date="Oct 5, 2025"
                readTime="8 min read"
              />
              <BlogCard
                title="Understanding Macronutrients: A Beginner's Guide"
                excerpt="Break down the basics of proteins, carbohydrates, and fats to make informed choices about your nutrition."
                image={nutritionImage}
                category="Nutrition"
                date="Oct 1, 2025"
                readTime="10 min read"
              />
              <BlogCard
                title="Sleep Hygiene: 7 Habits for Better Rest"
                excerpt="Improve your sleep quality with these evidence-based practices that promote deeper, more restorative rest."
                image={meditationImage}
                category="Mental Wellness"
                date="Sep 28, 2025"
                readTime="6 min read"
              />
              <BlogCard
                title="Progressive Overload: The Key to Fitness Gains"
                excerpt="Learn the science-backed principle that drives muscle growth and strength improvements in your training."
                image={fitnessImage}
                category="Fitness"
                date="Sep 24, 2025"
                readTime="9 min read"
              />
              <BlogCard
                title="Meal Prep Made Easy: A Step-by-Step Guide"
                excerpt="Save time and eat healthier with these practical meal prep strategies that fit any lifestyle."
                image={nutritionImage}
                category="Nutrition"
                date="Sep 20, 2025"
                readTime="12 min read"
              />
              <BlogCard
                title="Managing Stress Through Breathwork Techniques"
                excerpt="Harness the power of your breath to calm your nervous system and reduce stress in minutes."
                image={meditationImage}
                category="Mental Wellness"
                date="Sep 17, 2025"
                readTime="5 min read"
              />
              <BlogCard
                title="Functional Fitness: Training for Real Life"
                excerpt="Discover how functional exercises prepare your body for everyday activities and reduce injury risk."
                image={fitnessImage}
                category="Fitness"
                date="Sep 13, 2025"
                readTime="7 min read"
              />
            </div>
          </div>
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
