import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkle, Lightbulb, Rocket, Coins, BookOpen } from "lucide-react";

const services = [
  { icon: <Lightbulb />, title: "Advisory & Consulting" },
  { icon: <Rocket />, title: "Incubation & Seed Investments" },
  { icon: <Coins />, title: "Fintech & Gen AI Ventures" },
  { icon: <BookOpen />, title: "Knowledge Curation" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-gray-800 px-4 sm:px-8 md:px-16 py-12">
      <header className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-black">Boofe</span> <span className="text-blue-800">Digital Ventures</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
          Empowering the future of internet, mobile, digital, fintech, and generative AI ventures through strategic insight and early-stage support.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {services.map((service, index) => (
          <Card key={index} className="rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-blue-800">Let's Build the Future Together</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Whether you're an early-stage founder, a growing digital enterprise, or an innovator in the AI space, Boofe Digital Ventures is your strategic partner.
        </p>
        <Button className="rounded-2xl text-lg px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
