import React from 'react';
import { Heart, Brain, RotateCcw, User } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-lg font-semibold">PNJI</a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-500 transition-colors">Testimonials</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-500 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pacific Nerve and Joint Institute
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Non-Surgical Regenerative Treatment for
              <br />Joint, Spine, and Nerve Pain
            </p>
            <a 
              href="mailto:nerveandjoint@gmail.com?subject=Consultation Request"
              className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition-all transform hover:scale-105"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Heart className="w-12 h-12 text-blue-500" />}
              title="Regenerative Medicine"
            />
            <ServiceCard
              icon={<Brain className="w-12 h-12 text-blue-500" />}
              title="Neuropathy Treatment"
            />
            <ServiceCard
              icon={<RotateCcw className="w-12 h-12 text-blue-500" />}
              title="Pain Relief"
            />
            <ServiceCard
              icon={<User className="w-12 h-12 text-blue-500" />}
              title="Physical Rehabilitation"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Dr. Jianxun Zhou (Dr. Jo), specializes in Physical Medicine and Rehabilitation (PM&R). 
                  He creates personalized treatment plans to address spine, nerve, and chronic pain conditions.
                </p>
                <p className="text-xl text-blue-600 italic font-medium">
                  "Helping patients live pain-free, active lives through personalized, evidence-based care."
                </p>
              </div>
            </div>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Education and Experience</h3>
              <ul className="space-y-4">
                <ExperienceItem title="Residency Training" content="Albany Medical Center" />
                <ExperienceItem title="Fellowship" content="University of Massachusetts (Interventional Spinal and Electrodiagnostic Medicine)" />
                <ExperienceItem title="PhD" content="University of Pittsburgh" />
                <ExperienceItem title="Postdoc Training" content="University of Michigan (Neuroscience Research)" />
                <ExperienceItem title="Experience" content="Illinois Neurosurgical Institute Spine Center (8 years)" />
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Patient Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <Card className="p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button className="w-full bg-blue-500 text-white py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition-all transform hover:scale-105">
                Submit
              </button>
            </form>
          </Card>
          <div className="text-center mt-12 space-y-2">
            <p className="text-xl font-medium text-gray-900">Start Your Journey to Pain-Free Living Today!</p>
            <p className="text-gray-600">
              Call us at (916) 741-0848 or email nerveandjoint@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title }) => (
  <Card className="p-6 text-center hover:shadow-lg transition-shadow">
    <CardContent>
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </CardContent>
  </Card>
);

const ExperienceItem = ({ title, content }) => (
  <li className="flex flex-col space-y-1">
    <span className="font-medium text-gray-900">{title}</span>
    <span className="text-gray-600">{content}</span>
  </li>
);

const testimonials = [
  {
    text: "Dr. Jianxun Zhou, is awesome, very professional, respectful, very honest, he listens your needs. He took my workes comp case, he did a great job on my case, I highly recommend him. May God bless him."
  },
  {
    text: "Dr. Zhou helped me with my neuropathy when no one else could. His treatments gave me my life back. I can't thank him enough!"
  },
  {
    text: "After my spinal injury, I thought I'd never recover. Dr. Zhou's care and support got me walking again. He's the best!"
  }
];

export default LandingPage;