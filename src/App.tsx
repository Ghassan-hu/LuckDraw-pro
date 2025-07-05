import React, { useState, createContext, useContext, useRef, useEffect, useMemo, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// Authentication Context
interface AuthContextType {
  isAuthenticated: boolean;
  login: (userData: any) => void;
  logout: () => void;
  user: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// 3D Interactive Hook
const useInteractive3D = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return { cardRef, handleMouseMove, handleMouseLeave };
};

// Countries data with flags
const countries = [
  { name: "Afghanistan", flag: "🇦🇫", code: "+93" },
  { name: "Albania", flag: "🇦🇱", code: "+355" },
  { name: "Algeria", flag: "🇩🇿", code: "+213" },
  { name: "Argentina", flag: "🇦🇷", code: "+54" },
  { name: "Australia", flag: "🇦🇺", code: "+61" },
  { name: "Austria", flag: "🇦🇹", code: "+43" },
  { name: "Bahrain", flag: "🇧🇭", code: "+973" },
  { name: "Bangladesh", flag: "🇧🇩", code: "+880" },
  { name: "Belgium", flag: "🇧🇪", code: "+32" },
  { name: "Brazil", flag: "🇧🇷", code: "+55" },
  { name: "Bulgaria", flag: "🇧🇬", code: "+359" },
  { name: "Canada", flag: "🇨🇦", code: "+1" },
  { name: "Chile", flag: "🇨🇱", code: "+56" },
  { name: "China", flag: "🇨🇳", code: "+86" },
  { name: "Colombia", flag: "🇨🇴", code: "+57" },
  { name: "Croatia", flag: "🇭🇷", code: "+385" },
  { name: "Cyprus", flag: "🇨🇾", code: "+357" },
  { name: "Czech Republic", flag: "🇨🇿", code: "+420" },
  { name: "Denmark", flag: "🇩🇰", code: "+45" },
  { name: "Egypt", flag: "🇪🇬", code: "+20" },
  { name: "Estonia", flag: "🇪🇪", code: "+372" },
  { name: "Finland", flag: "🇫🇮", code: "+358" },
  { name: "France", flag: "🇫🇷", code: "+33" },
  { name: "Germany", flag: "🇩🇪", code: "+49" },
  { name: "Greece", flag: "🇬🇷", code: "+30" },
  { name: "Hong Kong", flag: "🇭🇰", code: "+852" },
  { name: "Hungary", flag: "🇭🇺", code: "+36" },
  { name: "Iceland", flag: "🇮🇸", code: "+354" },
  { name: "India", flag: "🇮🇳", code: "+91" },
  { name: "Indonesia", flag: "🇮🇩", code: "+62" },
  { name: "Iran", flag: "🇮🇷", code: "+98" },
  { name: "Iraq", flag: "🇮🇶", code: "+964" },
  { name: "Ireland", flag: "🇮🇪", code: "+353" },
  { name: "Israel", flag: "🇮🇱", code: "+972" },
  { name: "Italy", flag: "🇮🇹", code: "+39" },
  { name: "Japan", flag: "🇯🇵", code: "+81" },
  { name: "Jordan", flag: "🇯🇴", code: "+962" },
  { name: "Kazakhstan", flag: "🇰🇿", code: "+7" },
  { name: "Kuwait", flag: "🇰🇼", code: "+965" },
  { name: "Latvia", flag: "🇱🇻", code: "+371" },
  { name: "Lebanon", flag: "🇱🇧", code: "+961" },
  { name: "Libya", flag: "🇱🇾", code: "+218" },
  { name: "Lithuania", flag: "🇱🇹", code: "+370" },
  { name: "Luxembourg", flag: "🇱🇺", code: "+352" },
  { name: "Malaysia", flag: "🇲🇾", code: "+60" },
  { name: "Maldives", flag: "🇲🇻", code: "+960" },
  { name: "Malta", flag: "🇲🇹", code: "+356" },
  { name: "Mexico", flag: "🇲🇽", code: "+52" },
  { name: "Monaco", flag: "🇲🇨", code: "+377" },
  { name: "Morocco", flag: "🇲🇦", code: "+212" },
  { name: "Netherlands", flag: "🇳🇱", code: "+31" },
  { name: "New Zealand", flag: "🇳🇿", code: "+64" },
  { name: "Norway", flag: "🇳🇴", code: "+47" },
  { name: "Oman", flag: "🇴🇲", code: "+968" },
  { name: "Pakistan", flag: "🇵🇰", code: "+92" },
  { name: "Palestine", flag: "🇵🇸", code: "+970" },
  { name: "Panama", flag: "🇵🇦", code: "+507" },
  { name: "Peru", flag: "🇵🇪", code: "+51" },
  { name: "Philippines", flag: "🇵🇭", code: "+63" },
  { name: "Poland", flag: "🇵🇱", code: "+48" },
  { name: "Portugal", flag: "🇵🇹", code: "+351" },
  { name: "Qatar", flag: "🇶🇦", code: "+974" },
  { name: "Romania", flag: "🇷🇴", code: "+40" },
  { name: "Russia", flag: "🇷🇺", code: "+7" },
  { name: "Saudi Arabia", flag: "🇸🇦", code: "+966" },
  { name: "Serbia", flag: "🇷🇸", code: "+381" },
  { name: "Singapore", flag: "🇸🇬", code: "+65" },
  { name: "Slovakia", flag: "🇸🇰", code: "+421" },
  { name: "Slovenia", flag: "🇸🇮", code: "+386" },
  { name: "South Africa", flag: "🇿🇦", code: "+27" },
  { name: "South Korea", flag: "🇰🇷", code: "+82" },
  { name: "Spain", flag: "🇪🇸", code: "+34" },
  { name: "Sweden", flag: "🇸🇪", code: "+46" },
  { name: "Switzerland", flag: "🇨🇭", code: "+41" },
  { name: "Syria", flag: "🇸🇾", code: "+963" },
  { name: "Taiwan", flag: "🇹🇼", code: "+886" },
  { name: "Thailand", flag: "🇹🇭", code: "+66" },
  { name: "Tunisia", flag: "🇹🇳", code: "+216" },
  { name: "Turkey", flag: "🇹🇷", code: "+90" },
  { name: "Ukraine", flag: "🇺🇦", code: "+380" },
  { name: "United Arab Emirates", flag: "🇦🇪", code: "+971" },
  { name: "United Kingdom", flag: "🇬🇧", code: "+44" },
  { name: "United States", flag: "🇺🇸", code: "+1" },
  { name: "Uruguay", flag: "🇺🇾", code: "+598" },
  { name: "Venezuela", flag: "🇻🇪", code: "+58" },
  { name: "Vietnam", flag: "🇻🇳", code: "+84" },
  { name: "Yemen", flag: "🇾🇪", code: "+967" }
];

// Optimized avatar URLs with WebP format and smaller sizes
const getOptimizedAvatar = (name: string, size: number = 32) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=FFD700&color=fff&size=${size}&format=webp`;
};

// Memoized winner data to prevent unnecessary re-renders
const winnersData = [
  { name: "Sarah Johnson", prize: "$50,000", emoji: "👑" },
  { name: "Ahmed Hassan", prize: "$25,000", emoji: "🥈" },
  { name: "Maria Garcia", prize: "$15,000", emoji: "🥉" },
  { name: "David Chen", prize: "$10,000", emoji: "💎" },
  { name: "Fatima Al-Zahra", prize: "$5,000", emoji: "⭐" },
  { name: "John Smith", prize: "$3,000", emoji: "🎯" },
  { name: "Lisa Wang", prize: "$2,500", emoji: "🎪" },
  { name: "Carlos Rodriguez", prize: "$2,000", emoji: "🎨" },
  { name: "Emma Wilson", prize: "$1,500", emoji: "🎭" },
  { name: "Mohammed Ali", prize: "$1,000", emoji: "🎪" }
];

// Memoized Winner Item Component for better performance
const WinnerItem = React.memo(({ winner, index }: { winner: any; index: number }) => (
  <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
    <img src={getOptimizedAvatar(winner.name)} alt={winner.name} className="w-8 h-8 rounded-full border-2 border-yellow-300" loading="lazy" />
    <div className="flex-1">
      <div className="font-semibold text-gray-800">{winner.name}</div>
      <div className="text-sm text-green-600 font-bold">{winner.prize}</div>
    </div>
    <div className="text-yellow-500 text-lg">{winner.emoji}</div>
  </div>
));

// Landing Page Components
type TopBarProps = { onSignIn: () => void; onSignUp: () => void };
const TopBar = React.memo(({ onSignIn, onSignUp }: TopBarProps) => {
  const handleSignIn = useCallback(() => onSignIn(), [onSignIn]);
  const handleSignUp = useCallback(() => onSignUp(), [onSignUp]);
  
  return (
    <div className="w-full flex justify-between items-center py-3 sm:py-4 px-4 sm:px-6 font-bold text-base sm:text-lg text-gray-900 border-b-2 border-yellow-500 shadow-sm">
      <span className="font-extrabold text-xl sm:text-2xl tracking-wide">LuckDraw-pro</span>
      <div className="space-x-2 sm:space-x-3 md:space-x-6">
        <button className="hover:underline text-xs sm:text-sm md:text-base" onClick={handleSignIn}>Sign In</button>
        <button className="hover:underline text-xs sm:text-sm md:text-base" onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
});

type LotteryCardProps = { onBuy: () => void };
const LotteryCard = React.memo(({ onBuy }: LotteryCardProps) => {
  const { cardRef, handleMouseMove, handleMouseLeave } = useInteractive3D();
  const handleBuyClick = useCallback(() => onBuy(), [onBuy]);
  
  return (
    <div 
      ref={cardRef}
      className="flex flex-col justify-between bg-white/90 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md min-h-[300px] sm:min-h-[340px] mx-auto transform hover:scale-105 transition-all duration-300 card-container"
      style={{ 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 215, 0, 0.1)',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,220,0.9) 100%)'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-700">Monthly Lottery</h2>
        <ol className="space-y-2 text-base sm:text-lg text-gray-800">
          <li>1️⃣ Buy ticket for $10</li>
          <li>2️⃣ Enter monthly draw</li>
          <li>3️⃣ Win up to $50,000</li>
        </ol>
      </div>
      <button onClick={handleBuyClick} className="mt-4 sm:mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-sm sm:text-base transition-optimized" style={{ boxShadow: '0 10px 25px -5px rgba(255, 193, 7, 0.4)' }}>Buy for $10</button>
    </div>
  );
});

const WinnerCard = React.memo(() => {
  const { cardRef, handleMouseMove, handleMouseLeave } = useInteractive3D();
  
  const winnersList = useMemo(() => (
    <div className="space-y-3 overflow-hidden h-32 relative">
      <div className="winners-scroll">
        {winnersData.map((winner, index) => (
          <WinnerItem key={index} winner={winner} index={index} />
        ))}
      </div>
    </div>
  ), []);
  
  return (
    <div 
      ref={cardRef}
      className="flex flex-col justify-between bg-white/90 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md min-h-[300px] sm:min-h-[340px] mx-auto transform hover:scale-105 transition-all duration-300 card-container"
      style={{ 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 215, 0, 0.1)',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,220,0.9) 100%)'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-700 text-center">🏆 Winners Showcase</h2>
        <p className="text-gray-600 mb-4 sm:mb-6 text-center text-sm sm:text-base">See our recent lucky winners and their amazing prizes. Your name could be next on this list!</p>
        {winnersList}
      </div>
    </div>
  );
});

const MotivationalText = React.memo(() => {
  return (
    <div className="w-full text-center mt-6 sm:mt-10 mb-4 sm:mb-6 px-4">
      <span className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 drop-shadow">Your next big win is just one click away!</span>
    </div>
  );
});

const HeroSection = React.memo(() => {
  return (
    <div className="w-full text-center mb-8 sm:mb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Hero Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 drop-shadow-sm">
          🍀 <span className="text-yellow-600">LuckDraw-pro</span> 🍀
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-6 sm:mb-8 font-medium">
          Where Dreams Turn Into <span className="text-yellow-600 font-bold">Reality</span>
        </p>
        
        {/* Description */}
        <div className="bg-white/80 rounded-2xl p-6 sm:p-8 shadow-xl mb-6 sm:mb-8 backdrop-blur-sm">
          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            Welcome to the most exciting monthly lottery platform! Join thousands of players worldwide in our 
            <span className="text-yellow-600 font-semibold"> secure, transparent, and fair</span> lottery system. 
            For just <span className="text-green-600 font-bold">$10</span>, you could win life-changing prizes up to 
            <span className="text-green-600 font-bold"> $50,000</span>!
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6">
            <div className="flex flex-col items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-sm sm:text-base font-semibold text-yellow-800">Easy to Play</div>
              <div className="text-xs sm:text-sm text-gray-600 text-center">Simple 3-step process</div>
            </div>
            <div className="flex flex-col items-center p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl mb-2">💰</div>
              <div className="text-sm sm:text-base font-semibold text-green-800">Big Prizes</div>
              <div className="text-xs sm:text-sm text-gray-600 text-center">Up to $50,000</div>
            </div>
            <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl mb-2">🛡️</div>
              <div className="text-sm sm:text-base font-semibold text-blue-800">100% Secure</div>
              <div className="text-xs sm:text-sm text-gray-600 text-center">Safe & transparent</div>
            </div>
          </div>
        </div>
        

        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Change Your Life?</h3>
          <p className="text-yellow-100 mb-4 sm:mb-6 text-sm sm:text-base">
            Join thousands of winners who have already transformed their lives with LuckDraw-pro!
          </p>
          <button className="bg-white text-yellow-600 font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-lg sm:text-xl transition-optimized">
            Start Your Journey Today! 🚀
          </button>
        </div>
      </div>
    </div>
  );
});

type ModalProps = { open: boolean; onClose: () => void; onSuccess?: (userData: any) => void };

function SignInModal({ open, onClose, onSuccess }: ModalProps) {
  if (!open) return null;
  return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-sm shadow-2xl relative">
          <button className="absolute top-2 sm:top-3 right-2 sm:right-3 text-gray-500 hover:text-gray-700 text-lg" onClick={onClose}>✕</button>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center text-yellow-700">Sign In</h2>
          <div className="text-gray-500 text-sm text-center mb-3">(Form fields go here)</div>
          <button 
            onClick={() => onSuccess?.({ name: 'Demo User' })}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-sm"
          >
            Demo Sign In
          </button>
      </div>
    </div>
  );
}

function SignUpModal({ open, onClose, onSuccess }: ModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    password: '',
    confirmPassword: '',
    age: '',
    acceptTerms: false,
    profileImage: null as File | null
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [passwordStrength, setPasswordStrength] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Clean up image preview when modal closes
  useEffect(() => {
    if (!open) {
      setImagePreview(null);
      setFormData(prev => ({ ...prev, profileImage: null }));
    }
  }, [open]);

  // Regex patterns
  const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[+]?[1-9][\d]{0,15}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    fullName: /^[a-zA-Z\s]{2,50}$/
  };

  const validateField = (name: string, value: string) => {
    let error = '';
    
    switch (name) {
      case 'email':
        if (!patterns.email.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'phone':
        if (!patterns.phone.test(value)) {
          error = 'Please enter a valid phone number';
        }
        break;
      case 'password':
        if (value.length < 8) {
          error = 'Password must be at least 8 characters';
        } else if (!patterns.password.test(value)) {
          error = 'Password must contain uppercase, lowercase, number, and special character';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;
      case 'fullName':
        if (!patterns.fullName.test(value)) {
          error = 'Name must be 2-50 characters, letters only';
        }
        break;
      case 'age':
        const age = parseInt(value);
        if (age < 18) {
          error = 'Must be at least 18 years old';
        } else if (age > 120) {
          error = 'Please enter a valid age';
        }
        break;
    }
    
    return error;
  };

  const checkPasswordStrength = (password: string) => {
    if (password.length === 0) return '';
    if (password.length < 8) return 'weak';
    if (patterns.password.test(password)) return 'strong';
    return 'medium';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    // Check password strength
    if (name === 'password') {
      setPasswordStrength(checkPasswordStrength(value));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, profileImage: 'Please select a valid image file' }));
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, profileImage: 'Image size must be less than 5MB' }));
        return;
      }

      setFormData(prev => ({ ...prev, profileImage: file }));
      setImagePreview(URL.createObjectURL(file));
      setErrors(prev => ({ ...prev, profileImage: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: {[key: string]: string} = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'acceptTerms') {
        const error = validateField(key, formData[key as keyof typeof formData] as string);
        if (error) newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission
    onSuccess?.({ 
      name: formData.fullName, 
      email: formData.email,
      profileImage: formData.profileImage,
      imagePreview: imagePreview
    });
    onClose();
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 'weak': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'strong': return 'text-green-500';
      default: return 'text-gray-400';
    }
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-xl w-full max-w-sm shadow-2xl relative max-h-[90vh] flex flex-col">
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <button className="absolute top-2 sm:top-3 right-2 sm:right-3 text-gray-500 hover:text-gray-700 text-lg" onClick={onClose}>✕</button>
          <h2 className="text-lg sm:text-xl font-bold text-center text-yellow-700">Sign Up</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-xs sm:text-sm ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Profile Picture (Optional)</label>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex-shrink-0">
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Profile preview" 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-yellow-300"
                  />
                ) : (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300">
                    <span className="text-gray-500 text-xs">📷</span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full text-xs text-gray-500 file:mr-2 sm:file:mr-4 file:py-1 file:px-2 sm:file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
                />
                <p className="text-xs text-gray-500 mt-1">Max size: 5MB. JPG, PNG, GIF</p>
              </div>
            </div>
            {errors.profileImage && <p className="text-red-500 text-xs mt-1">{errors.profileImage}</p>}
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-xs sm:text-sm ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-xs sm:text-sm ${
                errors.country ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            >
              <option value="">Select your country</option>
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.flag} {country.name} ({country.code})
                </option>
              ))}
            </select>
            {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-xs sm:text-sm ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              onBlur={handleBlur}
              min="18"
              className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-xs sm:text-sm ${
                errors.age ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-xs sm:text-sm ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {formData.password && (
              <p className={`text-xs mt-1 ${getPasswordStrengthColor()}`}>
                Password strength: {passwordStrength}
              </p>
            )}
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-xs sm:text-sm ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleInputChange}
              className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
              required
            />
            <label className="ml-2 block text-xs text-gray-700">
              I accept the <button type="button" className="text-yellow-600 hover:underline bg-transparent border-none cursor-pointer">Privacy Policy</button> and <button type="button" className="text-yellow-600 hover:underline bg-transparent border-none cursor-pointer">Terms & Conditions</button>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-1.5 sm:py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-xs sm:text-sm"
          >
            Create Account
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}

// Privacy Policy Modal
function PrivacyPolicyModal({ open, onClose }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">Privacy Policy</h2>
        
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            At <strong>LuckDraw-pro</strong>, we value your privacy and are committed to protecting your personal information.
          </p>
          
          <p>
            We only collect the necessary details to provide you with our lottery services, such as your name, email, phone number, and country.
          </p>
          
          <p>
            Your data is never shared or sold to third parties. All payment transactions are processed securely through trusted payment gateways.
          </p>
          
          <p>
            By using our service, you consent to this privacy policy.
          </p>
          
          <p>
            For any concerns, please contact us directly.
          </p>
        </div>
      </div>
    </div>
  );
}

// Terms & Conditions Modal
function TermsConditionsModal({ open, onClose }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">Terms & Conditions</h2>
        
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Welcome to <strong>LuckDraw-pro</strong>. By purchasing a lottery ticket or using this site, you agree to the following:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be at least 18 years old to participate.</li>
            <li>All purchases are final and non-refundable.</li>
            <li>Winners are selected fairly based on random draws held monthly.</li>
            <li>Prizes must be claimed within 30 days of the draw.</li>
            <li>We reserve the right to modify or terminate the service at any time.</li>
          </ul>
          
          <p>
            By continuing, you accept these terms.
          </p>
        </div>
      </div>
    </div>
  );
}

// Contact Us Modal
function ContactUsModal({ open, onClose }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">Contact Us</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-2">📧 Email Contact</h3>
            <p className="text-sm text-gray-700 mb-2"><strong>General Inquiries:</strong></p>
            <p className="text-blue-600 font-mono">info@luckdraw-pro.com</p>
            <p className="text-sm text-gray-700 mb-2 mt-3"><strong>Customer Support:</strong></p>
            <p className="text-blue-600 font-mono">support@luckdraw-pro.com</p>
            <p className="text-sm text-gray-700 mb-2 mt-3"><strong>Business Inquiries:</strong></p>
            <p className="text-blue-600 font-mono">business@luckdraw-pro.com</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">📞 Phone Support</h3>
            <p className="text-sm text-gray-700 mb-2"><strong>Customer Service:</strong></p>
            <p className="text-green-600 font-mono">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-700 mb-2 mt-3"><strong>Technical Support:</strong></p>
            <p className="text-green-600 font-mono">+1 (555) 123-4568</p>
            <p className="text-xs text-gray-500 mt-2">Available Monday-Friday, 9 AM - 6 PM EST</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-yellow-800 mb-2">📍 Office Address</h3>
            <p className="text-sm text-gray-700">
              <strong>LuckDraw-pro Headquarters</strong><br />
              123 Lottery Street<br />
              Gaming District<br />
              Las Vegas, NV 89101<br />
              United States
            </p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="font-bold text-purple-800 mb-2">⏰ Response Times</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <strong>Email:</strong> Within 24 hours</li>
              <li>• <strong>Phone:</strong> Immediate during business hours</li>
              <li>• <strong>Urgent Issues:</strong> Within 2 hours</li>
              <li>• <strong>Weekend Support:</strong> Email only</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">💡 Before Contacting Us</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Check our FAQ section for quick answers</li>
              <li>• Have your account email ready</li>
              <li>• Include relevant ticket numbers if applicable</li>
              <li>• Be specific about your issue or question</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Responsible Gaming Modal
function ResponsibleGamingModal({ open, onClose }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">Responsible Gaming</h2>
        
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            At <strong>LuckDraw-pro</strong>, we are committed to promoting responsible gaming practices and ensuring the well-being of our players.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-yellow-800 mb-2">🎯 Our Commitment</h3>
            <ul className="space-y-1 text-sm">
              <li>• We promote responsible gaming behavior</li>
              <li>• We provide tools for self-exclusion and limits</li>
              <li>• We offer support for problem gambling</li>
              <li>• We ensure fair and transparent gaming</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-2">🛡️ Player Protection</h3>
            <ul className="space-y-1 text-sm">
              <li>• Set spending limits on your account</li>
              <li>• Take regular breaks from gaming</li>
              <li>• Never chase losses</li>
              <li>• Keep gaming as entertainment, not income</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">📞 Support Resources</h3>
            <p className="text-sm">
              If you or someone you know is experiencing gambling-related problems, help is available:
            </p>
            <ul className="space-y-1 text-sm mt-2">
              <li>• National Problem Gambling Helpline: 1-800-522-4700</li>
              <li>• Gamblers Anonymous: www.gamblersanonymous.org</li>
              <li>• Contact our support team for assistance</li>
            </ul>
          </div>
          
          <p>
            Remember: Gaming should always be fun and entertaining. If it stops being fun, it's time to take a break.
          </p>
        </div>
      </div>
    </div>
  );
}

// Help Center Modal
function HelpCenterModal({ open, onClose }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">Help Center</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">🎯 Getting Started</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>How to create an account:</strong> Click "Sign Up" and fill in your details</li>
              <li><strong>How to buy tickets:</strong> Navigate to the lottery page and click "Buy Ticket"</li>
              <li><strong>How to check results:</strong> Use your ticket number during draw time</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">💰 Payment & Prizes</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Payment methods:</strong> Credit cards, PayPal, and bank transfers</li>
              <li><strong>Prize distribution:</strong> Winners are notified within 24 hours</li>
              <li><strong>Payment processing:</strong> 3-5 business days for prize payments</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">🔒 Security & Privacy</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Account security:</strong> Use strong passwords and enable 2FA</li>
              <li><strong>Data protection:</strong> Your information is encrypted and secure</li>
              <li><strong>Fair play:</strong> All draws are conducted transparently</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-yellow-800 mb-2">📞 Need More Help?</h3>
            <p className="text-sm text-gray-700 mb-2">
              If you can't find what you're looking for, our support team is here to help:
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Email Support Modal
function EmailSupportModal({ open, onClose }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>✕</button>
        <h2 className="text-xl font-bold mb-4 text-center text-yellow-700">Email Support</h2>
        
        <div className="space-y-4 text-sm text-gray-700">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-2">📧 Contact Information</h3>
            <p className="mb-2"><strong>General Support:</strong></p>
            <p className="text-blue-600 font-mono">support@luckdraw-pro.com</p>
            <p className="mb-2 mt-3"><strong>Technical Issues:</strong></p>
            <p className="text-blue-600 font-mono">tech@luckdraw-pro.com</p>
            <p className="mb-2 mt-3"><strong>Payment Issues:</strong></p>
            <p className="text-blue-600 font-mono">payments@luckdraw-pro.com</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">⏰ Response Times</h3>
            <ul className="space-y-1 text-sm">
              <li>• General inquiries: Within 24 hours</li>
              <li>• Technical issues: Within 12 hours</li>
              <li>• Payment issues: Within 6 hours</li>
              <li>• Urgent matters: Within 2 hours</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-yellow-800 mb-2">💡 Tips for Faster Support</h3>
            <ul className="space-y-1 text-sm">
              <li>• Include your account email</li>
              <li>• Describe the issue clearly</li>
              <li>• Attach screenshots if needed</li>
              <li>• Mention your ticket number if applicable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// How to Play Modal
function HowToPlayModal({ open, onClose }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">How to Play</h2>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-bold text-yellow-800 mb-4 text-center">🎯 Simple 3-Step Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Sign Up & Buy</h4>
                <p className="text-sm text-gray-600">Create your account and purchase tickets for $10 each</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Wait for Draw</h4>
                <p className="text-sm text-gray-600">Monthly draws happen on the 1st of each month at 8 PM</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Check & Win</h4>
                <p className="text-sm text-gray-600">Use your ticket number to check if you're a winner</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-2">📧 Ticket Information</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Each ticket costs $10</li>
              <li>• You'll receive a unique ticket number via email</li>
              <li>• Keep your ticket number safe for checking results</li>
              <li>• You can buy multiple tickets to increase your chances</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">⏰ Important Times</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Draw Date:</strong> 1st of each month</li>
                              <li>• <strong>Draw Time:</strong> 8:00 AM to 12:00 AM (local time)</li>
              <li>• <strong>Result Checking:</strong> Available immediately after draw</li>
              <li>• <strong>Prize Payment:</strong> Within 3-5 business days</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="font-bold text-purple-800 mb-2">🏆 Winning Tips</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Buy tickets early to avoid missing the draw</li>
              <li>• Check your results promptly after the draw</li>
              <li>• Keep your account information updated</li>
              <li>• Play responsibly and within your budget</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Winners Gallery Modal
function WinnersGalleryModal({ open, onClose }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-4xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">🏆 Winners Gallery</h2>
        
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-gray-600 text-lg">
              Meet our amazing winners who have changed their lives with LuckDraw-pro!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {winnersData.map((winner, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <img src={getOptimizedAvatar(winner.name)} alt={winner.name} className="w-12 h-12 rounded-full border-2 border-yellow-300" />
                  <div>
                    <div className="font-bold text-gray-800">{winner.name}</div>
                    <div className="text-sm text-green-600 font-bold">{winner.prize}</div>
                  </div>
                  <div className="text-2xl">{winner.emoji}</div>
                </div>
                <div className="text-xs text-gray-600">
                  "Winning this prize has completely changed my life. Thank you LuckDraw-pro!"
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-center">
            <h3 className="font-bold text-yellow-800 mb-2">🎉 Join Our Winners!</h3>
            <p className="text-sm text-gray-700">
              Your name could be next on this list! Buy your ticket today and start your journey to becoming a winner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Prize Structure Modal
function PrizeStructureModal({ open, onClose }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">💰 Prize Structure</h2>
        
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-2">🏆 Grand Prize</h3>
            <p className="text-3xl font-bold">$50,000</p>
            <p className="text-sm opacity-90">1 Lucky Winner</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">🥈 Mega Prize</h4>
              <p className="text-xl font-bold text-green-600">$10,000</p>
              <p className="text-sm text-gray-600">2 Winners</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">🥉 Big Prize</h4>
              <p className="text-xl font-bold text-blue-600">$1,000</p>
              <p className="text-sm text-gray-600">5 Winners</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">💎 Lucky Prize</h4>
              <p className="text-xl font-bold text-purple-600">$500</p>
              <p className="text-sm text-gray-600">10 Winners</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-bold text-orange-800 mb-2">⭐ Small Prize</h4>
              <p className="text-xl font-bold text-orange-600">$100</p>
              <p className="text-sm text-gray-600">50 Winners</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">📊 Total Prize Pool</h3>
            <p className="text-2xl font-bold text-green-600">$150,000+</p>
            <p className="text-sm text-gray-600">Distributed monthly to lucky winners</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-yellow-800 mb-2">🎯 How Prizes Are Awarded</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Prizes are awarded based on random number generation</li>
              <li>• Each ticket has an equal chance of winning</li>
              <li>• Winners are notified within 24 hours of the draw</li>
              <li>• All prizes are paid within 3-5 business days</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// FAQ Modal
function FAQModal({ open, onClose }: ModalProps) {
  if (!open) return null;
  
  const faqs = [
    {
      question: "How much does a ticket cost?",
      answer: "Each lottery ticket costs $10. You can purchase multiple tickets to increase your chances of winning."
    },
    {
      question: "When are the draws held?",
      answer: "Monthly draws are held on the 1st of each month from 8:00 AM to 12:00 AM local time. Results are available immediately after the draw."
    },
    {
      question: "How do I check if I won?",
      answer: "Use your unique ticket number to check results on our website during and after the draw time. You'll also receive an email notification if you win."
    },
    {
      question: "How are prizes paid out?",
      answer: "Winners are notified within 24 hours and prizes are paid via bank transfer, PayPal, or check within 3-5 business days."
    },
    {
      question: "Is this lottery legal and regulated?",
      answer: "Yes, LuckDraw-pro operates under strict regulations and is fully licensed. All draws are conducted transparently and fairly."
    },
    {
      question: "Can I buy tickets from any country?",
      answer: "We accept players from most countries. Please check our terms and conditions for specific eligibility requirements."
    },
    {
      question: "What if I lose my ticket number?",
      answer: "Your ticket number is sent to your registered email address. You can also find it in your account dashboard."
    },
    {
      question: "Are there any age restrictions?",
      answer: "You must be at least 18 years old to participate in our lottery games."
    }
  ];
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">❓ Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-700">{faq.answer}</p>
            </div>
          ))}
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-center">
            <h3 className="font-bold text-yellow-800 mb-2">Still Have Questions?</h3>
            <p className="text-sm text-gray-700 mb-3">
              Can't find what you're looking for? Our support team is here to help!
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Footer = React.memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showResponsibleGaming, setShowResponsibleGaming] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showHelpCenter, setShowHelpCenter] = useState(false);
  const [showEmailSupport, setShowEmailSupport] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showWinnersGallery, setShowWinnersGallery] = useState(false);
  const [showPrizeStructure, setShowPrizeStructure] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  
  return (
    <>
      <div className="w-full bg-gray-900 text-white py-6 sm:py-8 px-4 sm:px-6 border-t-2 border-yellow-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-yellow-500 mb-3 sm:mb-4">LuckDraw-pro</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-3">
                The most trusted monthly lottery platform with life-changing prizes.
              </p>
              <div className="flex space-x-3">
                <span className="text-2xl">🍀</span>
                <span className="text-2xl">💰</span>
                <span className="text-2xl">🏆</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                <li><button onClick={() => setShowHowToPlay(true)} className="hover:text-yellow-400 transition-colors text-left">How to Play</button></li>
                <li><button onClick={() => setShowWinnersGallery(true)} className="hover:text-yellow-400 transition-colors text-left">Winners Gallery</button></li>
                <li><button onClick={() => setShowPrizeStructure(true)} className="hover:text-yellow-400 transition-colors text-left">Prize Structure</button></li>
                <li><button onClick={() => setShowFAQ(true)} className="hover:text-yellow-400 transition-colors text-left">FAQ</button></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                <li><button onClick={() => setShowContact(true)} className="hover:text-yellow-400 transition-colors text-left">Contact Us</button></li>
                <li><button onClick={() => setShowHelpCenter(true)} className="hover:text-yellow-400 transition-colors text-left">Help Center</button></li>
                <li><button onClick={() => setShowEmailSupport(true)} className="hover:text-yellow-400 transition-colors text-left">Email Support</button></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Legal</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                <li><button onClick={() => setShowPrivacy(true)} className="hover:text-yellow-400 transition-colors text-left">Privacy Policy</button></li>
                <li><button onClick={() => setShowTerms(true)} className="hover:text-yellow-400 transition-colors text-left">Terms & Conditions</button></li>
                <li><button onClick={() => setShowResponsibleGaming(true)} className="hover:text-yellow-400 transition-colors text-left">Responsible Gaming</button></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-4 sm:pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <p className="text-sm text-gray-400">
                © {currentYear} LuckDraw-pro. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm text-gray-400">
                <span>🔒 SSL Secured</span>
                <span>✅ Licensed</span>
                <span>🛡️ Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <PrivacyPolicyModal open={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsConditionsModal open={showTerms} onClose={() => setShowTerms(false)} />
      <ResponsibleGamingModal open={showResponsibleGaming} onClose={() => setShowResponsibleGaming(false)} />
      <ContactUsModal open={showContact} onClose={() => setShowContact(false)} />
      <HelpCenterModal open={showHelpCenter} onClose={() => setShowHelpCenter(false)} />
      <EmailSupportModal open={showEmailSupport} onClose={() => setShowEmailSupport(false)} />
      <HowToPlayModal open={showHowToPlay} onClose={() => setShowHowToPlay(false)} />
      <WinnersGalleryModal open={showWinnersGallery} onClose={() => setShowWinnersGallery(false)} />
      <PrizeStructureModal open={showPrizeStructure} onClose={() => setShowPrizeStructure(false)} />
      <FAQModal open={showFAQ} onClose={() => setShowFAQ(false)} />
    </>
  );
});

// Landing Page Component
const LandingPage = React.memo(() => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  const handleBuy = useCallback(() => {
    if (!user) {
      setShowSignIn(true);
    } else {
      navigate('/lottery');
    }
  }, [user, navigate]);

  const handleSuccessfulAuth = useCallback((userData: any) => {
    setUser(userData);
    setShowSignIn(false);
    setShowSignUp(false);
    navigate('/lottery');
  }, [navigate]);

  const handleSignIn = useCallback(() => setShowSignIn(true), []);
  const handleSignUp = useCallback(() => setShowSignUp(true), []);
  const handleCloseSignIn = useCallback(() => setShowSignIn(false), []);
  const handleCloseSignUp = useCallback(() => setShowSignUp(false), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <TopBar onSignIn={handleSignIn} onSignUp={handleSignUp} />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <HeroSection />
        <MotivationalText />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <LotteryCard onBuy={handleBuy} />
          <WinnerCard />
        </div>
      </main>
      
      <Footer />
      
      <SignInModal open={showSignIn} onClose={handleCloseSignIn} onSuccess={handleSuccessfulAuth} />
      <SignUpModal open={showSignUp} onClose={handleCloseSignUp} onSuccess={handleSuccessfulAuth} />
    </div>
  );
});

// Lottery Page Component
const LotteryPage = React.memo(() => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showTicketCheck, setShowTicketCheck] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name || 'User',
    email: user?.email || 'user@email.com',
    age: user?.age || '',
    image: user?.image || null
  });
  const profileImageUrl = profile.image ? profile.image : `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=FFD700&color=fff&size=64`;
  const ticketCheckRef = useRef<HTMLDivElement>(null);

  const getNextDrawDate = useCallback(() => {
    const now = new Date();
    // تاريخ 1 الشهر القادم الساعة 00:00
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    nextMonth.setHours(0, 0, 0, 0); // منتصف الليل
    return nextMonth;
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const target = getNextDrawDate();
      const diff = target.getTime() - now.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [getNextDrawDate]);

  const handleLogout = useCallback(() => {
    logout();
    navigate('/');
  }, [logout, navigate]);

  const handleCheckTicket = useCallback(() => {
    setShowTicketCheck(true);
    setTimeout(() => {
      ticketCheckRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100); // delay to ensure section is rendered
  }, []);

  const countdownItems = useMemo(() => [
    { label: 'Days', value: countdown.days },
    { label: 'Hours', value: countdown.hours },
    { label: 'Minutes', value: countdown.minutes },
    { label: 'Seconds', value: countdown.seconds }
  ], [countdown]);

  // دالة تتحقق إذا الوقت الحالي يسمح بفحص الكرت
  const isCheckTime = () => {
    const now = new Date();
    const isFirstDay = now.getDate() === 1;
    const hour = now.getHours();
    return isFirstDay && hour >= 8 && hour < 24;
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #FFF8DC 0%, #FFE4B5 50%, #FFDAB9 100%)' }}>
      {/* Header with Profile */}
      <header className="w-full flex justify-between items-center py-3 sm:py-4 px-4 sm:px-6 border-b-2 border-yellow-500 shadow-sm relative">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">LuckDraw-pro</h1>
        <div className="flex items-center space-x-4">
          <button onClick={handleCheckTicket} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs sm:text-sm transition-colors">
            Check Ticket
          </button>
          <button 
            onClick={() => navigate('/my-cards')}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs sm:text-sm transition-colors"
          >
            My Cards
          </button>
          {/* Profile Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 focus:outline-none"
              onClick={() => setShowProfileMenu((v) => !v)}
            >
              <img
                src={profileImageUrl}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-yellow-400 object-cover"
              />
              <span className="hidden sm:inline text-sm font-semibold text-gray-800">{profile.name}</span>
              <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                <button
                  className="w-full text-left px-4 py-2 text-sm hover:bg-yellow-50 rounded-t-lg"
                  onClick={() => { setShowProfileModal(true); setShowProfileMenu(false); }}
                >
                  Edit Profile
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-sm hover:bg-yellow-50 rounded-b-lg text-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      {/* Profile Modal */}
      {showProfileModal && (
        <ProfileModal
          open={showProfileModal}
          onClose={() => setShowProfileModal(false)}
          profile={profile}
          setProfile={setProfile}
        />
      )}

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-2 py-6 sm:py-8">
        {/* Main Title */}
        <div className="text-center mb-6 sm:mb-8 px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Monthly Lottery</h1>
          <div className="text-base sm:text-xl text-gray-800 mb-2">Next Draw: <span className="font-bold text-yellow-700">{getNextDrawDate().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })} from 8:00 AM to 12:00 AM</span></div>
        </div>

        {/* Two Cards Layout - Same as Landing Page */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 w-full max-w-5xl mb-6 sm:mb-8">
          {/* Lottery Purchase Card - Same as Landing Page */}
          <div className="flex flex-col justify-between bg-white/90 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md min-h-[300px] sm:min-h-[340px] mx-auto transform hover:scale-105 transition-all duration-300" style={{ 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 215, 0, 0.1)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,220,0.9) 100%)'
          }}>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-700">🎯 Lottery Purchase</h2>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Join our monthly lottery! For just $10, you could win amazing prizes ranging from $100 to $50,000!</p>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Ticket Price:</span>
                  <span className="font-bold text-green-600">$10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Draw Frequency:</span>
                  <span className="font-bold text-yellow-700">Monthly</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Max Prize:</span>
                  <span className="font-bold text-green-600">$50,000</span>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">🏆 Prize Tiers:</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>• $100 - Multiple winners</div>
                  <div>• $500 - Lucky winners</div>
                  <div>• $1,000 - Big winners</div>
                  <div>• $10,000 - Mega winners</div>
                  <div>• $50,000 - Grand prize (1 winner)</div>
                </div>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-200">
              Buy Tickets Now
            </button>
          </div>

          {/* Winners Showcase Card - Same as Landing Page */}
          <div className="bg-white/90 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-auto transform hover:scale-105 transition-all duration-300" style={{ 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 215, 0, 0.1)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,220,0.9) 100%)'
          }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-700 text-center">🏆 Winners Showcase</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-center text-sm sm:text-base">See our recent lucky winners and their amazing prizes. Your name could be next on this list!</p>
            <div className="space-y-3 overflow-hidden h-32 relative">
              <div className="winners-scroll">
                {winnersData.map((winner, index) => (
                  <WinnerItem key={index} winner={winner} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Check Card with Live Countdown - Always Visible */}
        <div ref={ticketCheckRef} className="w-full max-w-5xl mb-6 sm:mb-8">
          <div className="bg-white/90 rounded-2xl shadow-2xl p-6 sm:p-8 transform hover:scale-105 transition-all duration-300" style={{ 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 215, 0, 0.1)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,220,0.9) 100%)'
          }}>
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-yellow-700">🎫 Check Ticket & Live Countdown</h2>
              {/* Live Countdown Timer */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 text-gray-800">
                  ⏰ Time Until Next Draw
                </h3>
                <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto mb-4">
                  <div className="text-white rounded-lg p-2 sm:p-3 text-center bg-yellow-500">
                    <div className="text-lg sm:text-xl font-bold">{countdown.days.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Days</div>
                  </div>
                  <div className="text-white rounded-lg p-2 sm:p-3 text-center bg-yellow-500">
                    <div className="text-lg sm:text-xl font-bold">{countdown.hours.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Hours</div>
                  </div>
                  <div className="text-white rounded-lg p-2 sm:p-3 text-center bg-yellow-500">
                    <div className="text-lg sm:text-xl font-bold">{countdown.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Minutes</div>
                  </div>
                  <div className="text-white rounded-lg p-2 sm:p-3 text-center bg-yellow-500">
                    <div className="text-lg sm:text-xl font-bold">{countdown.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Seconds</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Next draw: {getNextDrawDate().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} from 8:00 AM to 12:00 AM
                </p>
              </div>

              {/* Ticket Check */}
              <div className="max-w-md mx-auto space-y-4">
                <h3 className="text-lg font-bold text-gray-800">Check Your Ticket</h3>
                <input
                  type="text"
                  placeholder="Enter Your Ticket Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  disabled={!isCheckTime()}
                />
                <button
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!isCheckTime()}
                >
                  Check My Ticket
                </button>
                {!isCheckTime() && (
                  <div className="text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-sm text-center mt-2">
                    Ticket checking is only available on the 1st of each month from 8:00 AM to 12:00 AM.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
});

// أضف مكون نافذة البروفايل في نفس الملف
const ProfileModal = ({ open, onClose, profile, setProfile }: { open: boolean; onClose: () => void; profile: any; setProfile: (p: any) => void }) => {
  const [form, setForm] = useState({ ...profile });
  const [imagePreview, setImagePreview] = useState(profile.image || null);

  useEffect(() => {
    setForm({ ...profile });
    setImagePreview(profile.image || null);
  }, [profile, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files[0]) {
      const file = files[0];
      setForm((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onload = (ev) => setImagePreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    setProfile({
      ...form,
      image: imagePreview || profile.image,
      email: profile.email // لا تغير الإيميل
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-xs sm:max-w-sm shadow-2xl relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg" onClick={onClose}>✕</button>
        <h2 className="text-lg font-bold mb-4 text-center text-yellow-700">Edit Profile</h2>
        <div className="flex flex-col items-center mb-4">
          <label htmlFor="profile-image-upload" className="cursor-pointer flex flex-col items-center">
            <img
              src={imagePreview || `https://ui-avatars.com/api/?name=${encodeURIComponent(form.name)}&background=FFD700&color=fff&size=64`}
              alt="Profile Preview"
              className="w-20 h-20 rounded-full border-2 border-yellow-400 object-cover mb-2"
            />
            <input
              id="profile-image-upload"
              name="image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
            <span className="flex items-center text-xs text-gray-500 mt-1">
              <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2a2.828 2.828 0 11-4-4 2.828 2.828 0 014 4z" /></svg>
              Click the photo to change
            </span>
          </label>
        </div>
        <div className="space-y-3">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
          />
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone || ''}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
          />
          <select
            name="country"
            value={form.country || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm bg-white"
          >
            <option value="">Select Country</option>
            <option value="Jordan">Jordan</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="UAE">UAE</option>
            <option value="Qatar">Qatar</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Egypt">Egypt</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed text-sm"
            readOnly
            disabled
          />
        </div>
        <button
          onClick={handleSave}
          className="w-full mt-5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-sm"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

// MyCardsPage - صفحة بطاقاتي
const mockCards = [
  { id: '1234567890', status: 'Pending', date: '2024-06-01T10:15:00Z' },
  { id: '9876543210', status: 'Winner', date: '2024-06-01T10:20:00Z' },
  { id: '555566667777', status: 'Lost', date: '2024-06-01T10:25:00Z' },
  { id: '111122223333', status: 'Pending', date: '2024-06-01T10:30:00Z' },
];

const statusColors: Record<string, string> = {
  Pending: 'bg-yellow-100 text-yellow-800',
  Winner: 'bg-green-100 text-green-800',
  Lost: 'bg-red-100 text-red-700',
};

const MyCardsPage = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-8 px-2">
      {showToast && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-yellow-500 text-white font-bold px-6 py-3 rounded-xl shadow-2xl text-lg animate-fade-in-out">
            Card ID copied to clipboard!
          </div>
        </div>
      )}
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Cards</h1>
          <button
            onClick={() => navigate('/lottery')}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-md text-sm sm:text-base"
          >
            Home
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mockCards.map(card => (
            <div key={card.id} className="bg-white/90 rounded-xl shadow-lg border border-yellow-100 p-5 flex flex-col items-start">
              <div className="flex items-center justify-between w-full mb-2">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-800 mr-2">Card</span>
                  <span className="text-base font-mono text-gray-600">•••• {card.id.slice(-4)}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(card.id)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-1 rounded text-xs transition-colors"
                  title="Copy full card ID"
                >
                  📋
                </button>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold mb-2 ${statusColors[card.status]}`}>{card.status === 'Pending' ? 'Waiting for Draw' : card.status === 'Winner' ? 'Winner!' : 'Not Winner'}</div>
              <div className="text-xs text-gray-500">Purchased: {new Date(card.date).toLocaleString()}</div>
            </div>
          ))}
        </div>
        {mockCards.length === 0 && (
          <div className="text-center text-gray-500 mt-10">You have no cards yet.</div>
        )}
      </div>
    </div>
  );
};

// Main App Component with Router and Auth Context
const App = React.memo(() => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);

  const login = useCallback((userData: any) => {
    setUser(userData);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  const authValue = useMemo(() => ({
    isAuthenticated,
    login,
    logout,
    user
  }), [isAuthenticated, login, logout, user]);

  return (
    <AuthContext.Provider value={authValue}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/lottery" element={<LotteryPage />} />
          <Route path="/my-cards" element={<MyCardsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
});

export default App;
