import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Logo</div>
        <div className="space-x-4">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Contact</Button>
          <Button>Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="mb-6 text-5xl font-extrabold">
          Welcome to Our Platform
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Revolutionize your workflow with our cutting-edge solution
        </p>
        <Button size="lg" className="mr-4">
          Get Started <ArrowRight className="ml-2" size={16} />
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold">Key Features</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              "Advanced Analytics",
              "Real-time Collaboration",
              "Secure Data Storage",
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <CheckCircle className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">{feature}</h3>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">
          What Our Customers Say
        </h2>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {[
              {
                name: "John Doe",
                role: "CEO, TechCorp",
                content:
                  "This platform has transformed the way we work. Highly recommended!",
              },
              {
                name: "Jane Smith",
                role: "CTO, InnovateCo",
                content:
                  "The features and support are unparalleled. A game-changer for our team.",
              },
              {
                name: "Alex Johnson",
                role: "Founder, StartupX",
                content:
                  "Intuitive, powerful, and constantly improving. Couldn't be happier!",
              },
            ].map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="mb-4">{testimonial.content}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-xl">
            Join thousands of satisfied customers today!
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-full max-w-sm">
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                className="bg-primary-foreground text-primary"
              />
            </div>
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              Sign Up Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8">
        <div className="container mx-auto">
          <Separator className="mb-8" />
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-muted-foreground">
              © 2024 Your Company. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost">Privacy Policy</Button>
              <Button variant="ghost">Terms of Service</Button>
              <Button variant="ghost">Contact Us</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
