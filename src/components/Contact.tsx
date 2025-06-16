
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Sending email with EmailJS...");
      
      const result = await emailjs.send(
        'service_dyvagam', // Service ID
        'template_8rvu9eg', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Meet Solanki',
        },
        '9UtgKZEeYy0huIoRX' // Public Key
      );

      console.log("Email sent successfully:", result);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message. Please try again or contact me directly at meetsolanki8989@gmail.com");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-portfolio-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-white/90 text-sm font-medium">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities and projects. Whether you have a question, 
            a project idea, or just want to connect, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email me at</p>
                  <a 
                    href="mailto:meetsolanki8989@gmail.com" 
                    className="text-white font-medium hover:text-portfolio-accent transition-colors"
                  >
                    meetsolanki8989@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Connect on LinkedIn</p>
                  <a 
                    href="#" 
                    className="text-white font-medium hover:text-portfolio-accent transition-colors"
                  >
                    linkedin.com/in/meetsolanki
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Check out my code</p>
                  <a 
                    href="#" 
                    className="text-white font-medium hover:text-portfolio-accent transition-colors"
                  >
                    github.com/meetsolanki
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-white/60">Ready to start something amazing together?</p>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-portfolio-accent"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-portfolio-accent"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-portfolio-accent resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90 text-white py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
