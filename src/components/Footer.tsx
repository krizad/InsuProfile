import Link from "next/link";
import { Facebook, ShieldCheck, MessageCircle } from "lucide-react";

interface FooterProps {
    dict: {
        tagline: string;
        contact: string;
        quickLinks: string;
        followMe: string;
        rights: string;
        inspiration: string;
    };
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                 <ShieldCheck className="h-6 w-6 text-primary" />
                 <span className="text-xl font-bold text-primary tracking-tight">SecureLife Agent</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              {dict.tagline}
            </p>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{dict.contact}</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>08x-xxx-xxxx</li>
              <li>agent.sarah@Example.com</li>
              <li>Line ID: @agent.sarah</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{dict.quickLinks}</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Me</Link></li>
              <li><Link href="#products" className="hover:text-primary transition-colors">Insurance Plans</Link></li>
              <li><Link href="#join" className="hover:text-primary transition-colors">Join Our Team</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{dict.followMe}</h3>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-full bg-background hover:text-primary hover:shadow-md transition-all">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-background hover:text-primary hover:shadow-md transition-all">
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} SecureLife Agent. {dict.rights}</p>
        <p>{dict.inspiration}</p>
      </div>
      </div>
    </footer>
  );
}
