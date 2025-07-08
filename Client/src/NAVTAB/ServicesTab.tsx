import React from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';

const ServicesTab: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Space for navbar */}
      <div className="h-20 w-full"></div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-light mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent leading-tight">
            Our AI Models
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Advanced artificial intelligence solutions for autism support and detection
          </p>
        </div>

        {/* Premium Model Cards Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Emotion Detection Model - Featured Card */}
          <div className="mb-16">
            <ModelCard
              title="Emotion Detection Model"
              description="Our advanced emotion detection AI model uses computer vision and machine learning to accurately identify and analyze facial expressions and emotional states. This model is specifically designed to support individuals with autism by providing real-time emotional feedback and assistance in social interactions."
              imageSrc="\assets\emo-detection.png"
              featured={true}
              tags={['Computer Vision', 'Machine Learning', 'Autism Support', 'Real-time']}
              metrics={{
                accuracy: '94.2%',
                latency: '120ms',
                models: '15+'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Premium Model Card Component
interface ModelCardProps {
  title: string;
  description: string;
  imageSrc: string;
  featured?: boolean;
  tags: string[];
  metrics: {
    accuracy: string;
    latency: string;
    models: string;
  };
}

const ModelCard: React.FC<ModelCardProps> = ({ 
  title, 
  description, 
  imageSrc, 
  featured = false, 
  tags, 
  metrics 
}) => {
  if (featured) {
    return (
      <div className="group relative">
        <div className="relative rounded-3xl border border-white/10 p-1 transition-all duration-500 hover:border-white/20 group-hover:scale-[1.02]">
          <GlowingEffect
            spread={80}
            glow={true}
            disabled={false}
            proximity={100}
            inactiveZone={0.01}
            borderWidth={2}
          />
          
          <div className="relative h-full rounded-2xl bg-black backdrop-blur-sm p-12 transition-all duration-500 border border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Image Section */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 p-4 transition-all duration-500 group-hover:from-gray-900/40 group-hover:to-gray-800/40">
                  <img 
                    src={imageSrc} 
                    alt={title}
                    className="w-full h-auto rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
                </div>
                
                {/* Floating Metrics */}
                <div className="absolute -top-4 -right-4 space-y-2">
                  <MetricBadge label="Accuracy" value={metrics.accuracy} color="cyan" />
                  <MetricBadge label="Latency" value={metrics.latency} color="blue" />
                  <MetricBadge label="Models" value={metrics.models} color="purple" />
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                    {title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed font-light">
                    {description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {tags.map((tag, index) => (
                    <GlowSpan key={index} className="text-cyan-200 text-sm font-medium">
                      {tag}
                    </GlowSpan>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex gap-4">
                  <PremiumButton primary>
                    Use Model
                  </PremiumButton>
                  <PremiumButton>
                    Learn More
                  </PremiumButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

// Premium Button Component
interface PremiumButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  small?: boolean;
  onClick?: () => void;
}

const PremiumButton: React.FC<PremiumButtonProps> = ({ 
  children, 
  primary = false, 
  small = false, 
  onClick 
}) => {
  const baseClasses = "relative group font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer border rounded-lg overflow-hidden";
  const sizeClasses = small ? "px-5 py-2 text-sm" : "px-6 py-3 text-base";
  const colorClasses = primary 
    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-cyan-500/15"
    : "bg-transparent text-gray-300 border-white/20 hover:bg-white/5 hover:border-white/30 hover:text-white";

  return (
    <button 
      className={cn(baseClasses, sizeClasses, colorClasses)}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {primary && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
    </button>
  );
};

// Metric Badge Component
interface MetricBadgeProps {
  label: string;
  value: string;
  color: 'cyan' | 'blue' | 'purple';
}

const MetricBadge: React.FC<MetricBadgeProps> = ({ label, value, color }) => {
  const colorClasses = {
    cyan: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-300',
    blue: 'bg-blue-500/20 border-blue-400/30 text-blue-300',
    purple: 'bg-purple-500/20 border-purple-400/30 text-purple-300'
  };

  return (
    <div className={cn("px-3 py-2 rounded-lg border backdrop-blur-sm transition-all duration-300 hover:scale-105", colorClasses[color])}>
      <div className="text-xs font-medium">{label}</div>
      <div className="text-sm font-bold">{value}</div>
    </div>
  );
};

// Glowing Span Component (from About.tsx)
interface GlowSpanProps {
  children: React.ReactNode;
  className?: string;
}

const GlowSpan: React.FC<GlowSpanProps> = ({ children, className }) => {
  return (
    <div className="inline-flex px-3 py-1 bg-white/5 border border-white/10 rounded-full relative group cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:scale-105">
      <span className={cn("relative z-10 transition-all duration-300 group-hover:text-white", className)}>
        {children}
      </span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ServicesTab;