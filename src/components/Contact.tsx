"use client";

import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    // In a real app, you'd handle form submission (e.g., send to an API endpoint)
    toast({
      title: "Message Sent!",
      description: "Thanks for contacting us. We'll get back to you shortly.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
          Get in Touch
        </h2>
        <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Have a question or want to get involved? Send us a message!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  placeholder="Your message..."
                  className="min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full" style={{
                backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(275, 100%, 25%))',
                borderColor: 'hsl(var(--accent))'
              }}>
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
