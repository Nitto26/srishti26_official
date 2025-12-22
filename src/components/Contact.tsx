"use client";

import { FormEvent, useState } from "react";
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real application, you would send this data to a backend endpoint.
    // For this example, we'll just log it and show a success message.
    console.log("Form submitted:", { name, email, message });

    // Here you would typically use fetch() to POST to your backend API
    // e.g., await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, message }) });

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
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
                <Input id="name" required placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  placeholder="Your message..."
                  className="min-h-[120px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
