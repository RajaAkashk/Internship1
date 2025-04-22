import React from "react";
import NavbarComponent from "../components/NavbarComponent";

function Page1() {
  return (
    <>
      <NavbarComponent />
      <div className="px-4 py-8 md:px-20 lg:px-32 bg-[#F9FAFB] text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-green-600">
          Overview of Our Website
        </h1>

        <section className="space-y-6">
          <p className="text-lg font-semibold text-green-600">
            Your One-Stop Fitness Partner
          </p>
          <p>
            Welcome to your all-in-one destination for health, fitness, and
            well-being. Whether you’re aiming to lose fat, gain muscle, or
            simply stay fit, our platform is designed to support your journey
            every step of the way.
          </p>
          <p>
            With personalized tools and human-centered design, we ensure that
            your fitness goals are within reach—no matter your background or
            budget.
          </p>

          <p className="text-lg font-semibold text-green-600">
            Diet Plans That Don’t Burn a Hole in Your Pocket
          </p>
          <p>
            Staying healthy doesn’t have to be expensive. Our budget-friendly
            diet plan feature crafts accurate and nutritious meal suggestions
            that align with your goals and your wallet. Whether you're a college
            student or a working professional, our diet solutions are completely
            free and personalized just for you. No hidden fees, no fine
            print—just clean, honest support.
          </p>

          <p className="text-lg font-semibold text-green-600">
            Guidance That Fits Your Schedule
          </p>
          <p>
            Life can be busy, but that shouldn’t stop your progress. With our
            smart scheduling tools, you can plan workouts and fitness activities
            around your daily routine with ease. Plus, our interactive query
            section lets you connect directly with our team for fast, thoughtful
            responses to your health and fitness questions.
          </p>

          <p className="text-lg font-semibold text-green-600">
            Fitness With a Purpose
          </p>
          <p>
            When you get stronger, someone else gets support. We proudly donate
            a portion of our profits to orphanages and provide meaningful
            employment opportunities to senior citizens and specially-abled
            individuals.
          </p>
          <p>
            Many of our fitness products—like gym wear, gear, and
            accessories—are handcrafted by these talented individuals. Every
            purchase you make helps uplift a life in need.
          </p>

          <p className="text-lg font-semibold text-green-600">
            Helping Hands, Helping Hearts
          </p>
          <p>
            Our initiative goes beyond fitness. When you make a purchase, you'll
            receive a special message:{" "}
            <span className="italic">
              "Your helping hands help to feed a needy."
            </span>{" "}
            It’s our way of showing that your journey toward better health is
            also a journey of kindness and community support.
          </p>

          <p className="text-lg font-semibold text-green-600">
            Unisex. Inclusive. For Everyone.
          </p>
          <p>
            Fitness belongs to all. That’s why our platform is 100% unisex,
            inclusive, and easy to use. Whether you’re a beginner or a seasoned
            fitness enthusiast, you’ll find valuable tips, updates, and features
            tailored just for you.
          </p>
          <p>
            We strive to make fitness simple, accessible, and enjoyable for
            everyone.
          </p>

          <p className="text-lg font-semibold text-green-600">
            Your Voice Matters
          </p>
          <p>
            We believe that communication is key to improvement. That’s why
            we’ve built a feedback system that creates a strong connection
            between users and developers. Share your experience, suggestions, or
            queries—and if your question is valuable, expect a fast and direct
            reply from our team.
          </p>
          <p>You’re not just a user here; you’re part of our fitness family.</p>

          <p className="text-lg font-semibold text-green-600">
            Stay Updated. Stay Motivated.
          </p>
          <p>
            Our platform is regularly updated with expert tips, motivational
            content, and smart tools to keep you moving forward. From workout
            routines to wellness advice, you’ll always have something new to
            explore. We're not just a website—we’re your daily dose of
            motivation, guidance, and care.
          </p>
        </section>
      </div>
    </>
  );
}

export default Page1;
