"use client";

import { FormEvent, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
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
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_6ieymt3',
          'template_9me5hxl',
          form.current,
          {
            publicKey: 'w10-xFzmNOqNr4NQC',
          }
        )
        .then(
          () => {
            console.log('SUCCESS!');
            toast({
              title: "Message Sent!",
              description: "Thank you for reaching out. We'll get back to you soon.",
            });
            form.current?.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem sending your message. Please try again.",
            });
          }
        );
    }
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
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="from_name">Name</Label>
                <Input id="from_name" name="from_name" required placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="from_email">Email</Label>
                <Input
                  id="from_email"
                  type="email"
                  name="from_email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
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
