import React, { useState, createContext, useContext, useRef, useEffect } from 'react';
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

// Landing Page Components
type TopBarProps = { onSignIn: () => void; onSignUp: () => void };
function TopBar({ onSignIn, onSignUp }: TopBarProps) {
  return (
    <div className="w-full flex justify-between items-center py-4 px-6 font-bold text-lg text-gray-900">
      <span className="font-extrabold text-2xl tracking-wide">LuckDraw-pro</span>
      <div className="space-x-6">
        <button className="hover:underline" onClick={onSignIn}>Sign In</button>
        <button className="hover:underline" onClick={onSignUp}>Sign Up</button>
      </div>
    </div>
  );
}

type LotteryCardProps = { onBuy: () => void };
function LotteryCard({ onBuy }: LotteryCardProps) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useInteractive3D();
  
  return (
    <div 
      ref={cardRef}
      className="flex flex-col justify-between bg-white/90 rounded-2xl shadow-2xl p-8 w-full max-w-md min-h-[340px] mx-auto transform hover:scale-105 transition-all duration-300"
      style={{ 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 215, 0, 0.1)',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,220,0.9) 100%)'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <h2 className="text-2xl font-bold mb-4 text-yellow-700">Monthly Lottery</h2>
        <ol className="space-y-2 text-lg text-gray-800">
          <li>1️⃣ Buy ticket for $10</li>
          <li>2️⃣ Enter monthly draw</li>
          <li>3️⃣ Win up to $50,000</li>
        </ol>
      </div>
      <button onClick={onBuy} className="mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200" style={{ boxShadow: '0 10px 25px -5px rgba(255, 193, 7, 0.4)' }}>Buy for $10</button>
    </div>
  );
}

function WinnerCard() {
  const { cardRef, handleMouseMove, handleMouseLeave } = useInteractive3D();
  
  return (
    <div 
      ref={cardRef}
      className="flex flex-col items-center justify-between bg-white/90 rounded-2xl shadow-2xl p-8 w-full max-w-md min-h-[340px] mx-auto transform hover:scale-105 transition-all duration-300"
      style={{ 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 215, 0, 0.1)',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,220,0.9) 100%)'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <img src="https://ui-avatars.com/api/?name=Yousef+Zain&background=FFD700&color=fff&size=96" alt="Winner" className="rounded-full w-24 h-24 mb-4 border-4 border-yellow-500 shadow-lg transform hover:scale-110 transition-transform duration-200" style={{ boxShadow: '0 10px 25px -5px rgba(255, 193, 7, 0.5)' }} />
          <div className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">👑</div>
        </div>
        <div className="text-xl font-semibold text-yellow-700">Yousef Zain</div>
        <div className="text-2xl font-bold text-green-700 mt-2 drop-shadow-sm">$50,000</div>
        <div className="italic text-gray-700 mt-2">"Jackpot Winner!"</div>
      </div>
    </div>
  );
}

function MotivationalText() {
  return (
    <div className="w-full text-center mt-10 mb-6">
      <span className="text-2xl md:text-3xl font-bold text-gray-900 drop-shadow">Your next big win is just one click away!</span>
    </div>
  );
}

type ModalProps = { open: boolean; onClose: () => void; onSuccess?: (userData: any) => void };

function SignInModal({ open, onClose, onSuccess }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-2xl relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>✕</button>
        <h2 className="text-xl font-bold mb-4">Sign In</h2>
        <div className="text-gray-500">(Form fields go here)</div>
        <button 
          onClick={() => onSuccess?.({ name: 'Demo User' })}
          className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-sm"
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
    acceptTerms: false
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [passwordStrength, setPasswordStrength] = useState('');

  // Regex patterns
  const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[\+]?[1-9][\d]{0,15}$/,
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
    onSuccess?.({ name: formData.fullName, email: formData.email });
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-2xl relative">
        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg" onClick={onClose}>✕</button>
        <h2 className="text-xl font-bold mb-4 text-center text-yellow-700">Sign Up</h2>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm ${
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              onBlur={handleBlur}
              min="18"
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm ${
                errors.age ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm ${
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm ${
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
              I accept the <a href="#" className="text-yellow-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-yellow-600 hover:underline">Terms & Conditions</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-sm"
          >
            Create Account
          </button>
        </form>
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
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">Contact Us</h2>
        
        <div className="space-y-4 text-sm text-gray-700">
          <p className="text-center">
            Need assistance or have any questions?<br />
            Reach out to us anytime:
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-xl">📧</span>
              <div>
                <div className="font-medium">Email:</div>
                <div className="text-yellow-600">support@luckdraw-pro.com</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-xl">📞</span>
              <div>
                <div className="font-medium">Phone:</div>
                <div className="text-yellow-600">+1 555 123 4567</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-xl">🌐</span>
              <div>
                <div className="font-medium">Support:</div>
                <div className="text-yellow-600">Available 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <footer className="w-full py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-900">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          {/* Optional logo */}
          <span className="font-extrabold text-lg">🍀</span>
        </div>
        <div className="space-x-4">
          <button onClick={() => setShowPrivacy(true)} className="hover:underline">Privacy Policy</button>
          <span>|</span>
          <button onClick={() => setShowTerms(true)} className="hover:underline">Terms & Conditions</button>
          <span>|</span>
          <button onClick={() => setShowContact(true)} className="hover:underline">Contact</button>
        </div>
      </footer>
      
      <PrivacyPolicyModal open={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsConditionsModal open={showTerms} onClose={() => setShowTerms(false)} />
      <ContactUsModal open={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}

// Landing Page Component
function LandingPage() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleBuy = () => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      setShowSignIn(true);
    } else {
      navigate('/lottery');
    }
  };

  const handleSuccessfulAuth = (userData: any) => {
    login(userData);
    navigate('/lottery');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #FFF8DC 0%, #FFE4B5 50%, #FFDAB9 100%)' }}>
      <TopBar onSignIn={() => setShowSignIn(true)} onSignUp={() => setShowSignUp(true)} />
      <main className="flex-1 flex flex-col items-center justify-center px-2 py-8">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
          <WinnerCard />
          <LotteryCard onBuy={handleBuy} />
        </div>
        <MotivationalText />
      </main>
      <Footer />
      <SignInModal open={showSignIn} onClose={() => setShowSignIn(false)} onSuccess={handleSuccessfulAuth} />
      <SignUpModal open={showSignUp} onClose={() => setShowSignUp(false)} onSuccess={handleSuccessfulAuth} />
    </div>
  );
}

// Lottery Page Component
function LotteryPage() {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [ticketNumber, setTicketNumber] = useState('');
  const [checkResult, setCheckResult] = useState('');
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isDrawTime, setIsDrawTime] = useState(false);

  // Calculate next draw date (last day of current month at 6 AM)
  const getNextDrawDate = () => {
    const now = new Date();
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const drawDate = new Date(lastDay.getFullYear(), lastDay.getMonth(), lastDay.getDate(), 6, 0, 0);
    
    // If we're past this month's draw, get next month's draw
    if (now > drawDate) {
      const nextMonth = new Date(now.getFullYear(), now.getMonth() + 2, 0);
      return new Date(nextMonth.getFullYear(), nextMonth.getMonth(), nextMonth.getDate(), 6, 0, 0);
    }
    
    return drawDate;
  };

  // Live countdown timer
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const drawDate = getNextDrawDate();
      const timeLeft = drawDate.getTime() - now.getTime();

      // Check if it's draw day (last day of month) and between 6 AM and 12 AM
      const isDrawDay = now.getDate() === new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
      const currentHour = now.getHours();
      const isDrawTimeWindow = isDrawDay && currentHour >= 6 && currentHour < 24;

      if (timeLeft <= 0 && isDrawTimeWindow) {
        // Draw time!
        setIsDrawTime(true);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setIsDrawTime(false);
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        setCountdown({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleCheckTicket = () => {
    if (!isDrawTime) {
      setCheckResult('❌ Ticket checking is only available during draw time (last day of month, 8:00 PM)');
      return;
    }

    if (ticketNumber.trim()) {
      // Simulate ticket checking
      const isWinner = Math.random() > 0.8; // 20% chance to win for demo
      setCheckResult(isWinner ? '🎉 Congratulations! You Win!' : '😔 Not a Winner. Try again!');
    } else {
      setCheckResult('Please enter a ticket number');
    }
  };

  // Static winners data
  const winners = [
    { name: "Sarah Johnson", prize: "$50,000", country: "United States", avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=FFD700&color=fff&size=64" },
    { name: "Ahmed Hassan", prize: "$25,000", country: "Egypt", avatar: "https://ui-avatars.com/api/?name=Ahmed+Hassan&background=FFD700&color=fff&size=64" },
    { name: "Maria Garcia", prize: "$15,000", country: "Spain", avatar: "https://ui-avatars.com/api/?name=Maria+Garcia&background=FFD700&color=fff&size=64" },
    { name: "David Chen", prize: "$10,000", country: "Canada", avatar: "https://ui-avatars.com/api/?name=David+Chen&background=FFD700&color=fff&size=64" },
    { name: "Fatima Al-Zahra", prize: "$5,000", country: "Saudi Arabia", avatar: "https://ui-avatars.com/api/?name=Fatima+Al-Zahra&background=FFD700&color=fff&size=64" }
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #FFF8DC 0%, #FFE4B5 50%, #FFDAB9 100%)' }}>
      {/* Header with Logout */}
      <header className="w-full flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-900">LuckDraw-pro</h1>
        <button 
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Logout
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-2 py-8">
        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Monthly Lottery</h1>
          <div className="text-xl text-gray-800 mb-2">Next Draw: <span className="font-bold text-yellow-700">{getNextDrawDate().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })} from 6:00 AM to 12:00 AM</span></div>
        </div>

        {/* Two Cards Layout - Same as Landing Page */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mb-8">
          {/* Lottery Purchase Card - Same as Landing Page */}
          <div className="flex flex-col justify-between bg-white/90 rounded-2xl shadow-2xl p-8 w-full max-w-md min-h-[340px] mx-auto transform hover:scale-105 transition-all duration-300" style={{ 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 215, 0, 0.1)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,220,0.9) 100%)'
          }}>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-700">🎯 Lottery Purchase</h2>
              <p className="text-gray-600 mb-4">Join our monthly lottery! For just $10, you could win amazing prizes ranging from $100 to $50,000!</p>
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
          <div className="bg-white/90 rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto transform hover:scale-105 transition-all duration-300" style={{ 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 215, 0, 0.1)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,220,0.9) 100%)'
          }}>
            <h2 className="text-2xl font-bold mb-4 text-yellow-700 text-center">🏆 Winners Showcase</h2>
            <p className="text-gray-600 mb-6 text-center">See our recent lucky winners and their amazing prizes. Your name could be next on this list!</p>
            <div className="space-y-3 overflow-hidden h-32 relative">
              <div className="winners-scroll">
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Sarah+Johnson&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Sarah Johnson</div>
                    <div className="text-sm text-green-600 font-bold">$50,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">👑</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Ahmed+Hassan&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Ahmed Hassan</div>
                    <div className="text-sm text-green-600 font-bold">$25,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">🥈</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Maria+Garcia&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Maria Garcia</div>
                    <div className="text-sm text-green-600 font-bold">$15,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">🥉</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=David+Chen&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">David Chen</div>
                    <div className="text-sm text-green-600 font-bold">$10,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">💎</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Fatima+Al-Zahra&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Fatima Al-Zahra</div>
                    <div className="text-sm text-green-600 font-bold">$5,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">⭐</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=John+Smith&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">John Smith</div>
                    <div className="text-sm text-green-600 font-bold">$3,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">🎯</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Lisa+Wang&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Lisa Wang</div>
                    <div className="text-sm text-green-600 font-bold">$2,500</div>
                  </div>
                  <div className="text-yellow-500 text-lg">🎪</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Carlos+Rodriguez&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Carlos Rodriguez</div>
                    <div className="text-sm text-green-600 font-bold">$2,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">🎨</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Emma+Wilson&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Emma Wilson</div>
                    <div className="text-sm text-green-600 font-bold">$1,500</div>
                  </div>
                  <div className="text-yellow-500 text-lg">🎭</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Mohammed+Ali&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Mohammed Ali</div>
                    <div className="text-sm text-green-600 font-bold">$1,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">🎪</div>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Sarah+Johnson&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Sarah Johnson</div>
                    <div className="text-sm text-green-600 font-bold">$50,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">👑</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Ahmed+Hassan&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Ahmed Hassan</div>
                    <div className="text-sm text-green-600 font-bold">$25,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">🥈</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Maria+Garcia&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Maria Garcia</div>
                    <div className="text-sm text-green-600 font-bold">$15,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">🥉</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=David+Chen&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">David Chen</div>
                    <div className="text-sm text-green-600 font-bold">$10,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">💎</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Fatima+Al-Zahra&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Fatima Al-Zahra</div>
                    <div className="text-sm text-green-600 font-bold">$5,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">⭐</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=John+Smith&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">John Smith</div>
                    <div className="text-sm text-green-600 font-bold">$3,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">🎯</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Lisa+Wang&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Lisa Wang</div>
                    <div className="text-sm text-green-600 font-bold">$2,500</div>
                  </div>
                  <div className="text-yellow-500 text-lg">🎪</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Carlos+Rodriguez&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Carlos Rodriguez</div>
                    <div className="text-sm text-green-600 font-bold">$2,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">🎨</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Emma+Wilson&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Emma Wilson</div>
                    <div className="text-sm text-green-600 font-bold">$1,500</div>
                  </div>
                  <div className="text-yellow-500 text-lg">🎭</div>
                </div>
                <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Mohammed+Ali&background=FFD700&color=fff&size=32" alt="Winner" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Mohammed Ali</div>
                    <div className="text-sm text-green-600 font-bold">$1,000</div>
                  </div>
                  <div className="text-yellow-500 text-lg">🎪</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Check Card with Live Countdown - Combined */}
        <div className="w-full max-w-5xl mb-8">
          <div className="bg-white/90 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300" style={{ 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 215, 0, 0.1)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,220,0.9) 100%)'
          }}>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6 text-yellow-700">🎫 Check Ticket & Live Countdown</h2>
              
              {/* Live Countdown Timer */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 text-gray-800">
                  {isDrawTime ? '🎉 DRAW TIME IS NOW! 🎉' : '⏰ Time Until Next Draw'}
                </h3>
                <div className="grid grid-cols-4 gap-3 max-w-md mx-auto mb-4">
                  <div className={`text-white rounded-lg p-3 text-center ${isDrawTime ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}>
                    <div className="text-xl font-bold">{countdown.days.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Days</div>
                  </div>
                  <div className={`text-white rounded-lg p-3 text-center ${isDrawTime ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}>
                    <div className="text-xl font-bold">{countdown.hours.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Hours</div>
                  </div>
                  <div className={`text-white rounded-lg p-3 text-center ${isDrawTime ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}>
                    <div className="text-xl font-bold">{countdown.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Minutes</div>
                  </div>
                  <div className={`text-white rounded-lg p-3 text-center ${isDrawTime ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}>
                    <div className="text-xl font-bold">{countdown.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Seconds</div>
                  </div>
                </div>
                <p className={`text-sm ${isDrawTime ? 'text-green-600 font-bold' : 'text-gray-600'}`}>
                  {isDrawTime ? '🎯 Ticket checking is now OPEN! Check your tickets!' : 'Next draw window: 6:00 AM - 12:00 AM'}
                </p>
              </div>

              {/* Ticket Check */}
              <div className="max-w-md mx-auto space-y-4">
                <h3 className="text-lg font-bold text-gray-800">Check Your Ticket</h3>
                <input
                  type="text"
                  placeholder="Enter Your Ticket Number"
                  value={ticketNumber}
                  onChange={(e) => setTicketNumber(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent ${
                    isDrawTime 
                      ? 'border-green-300 focus:ring-green-500' 
                      : 'border-gray-300 focus:ring-yellow-500'
                  }`}
                  disabled={!isDrawTime}
                />
                <button
                  onClick={handleCheckTicket}
                  className={`w-full font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-200 ${
                    isDrawTime
                      ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                      : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  }`}
                  disabled={!isDrawTime}
                >
                  {isDrawTime ? 'Check My Ticket' : 'Ticket Checking Closed'}
                </button>
                {checkResult && (
                  <div className={`text-center p-2 rounded-lg text-sm ${
                    checkResult.includes('Win') ? 'bg-green-100 text-green-800' : 
                    checkResult.includes('Not a Winner') ? 'bg-red-100 text-red-800' : 
                    checkResult.includes('Closed') ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {checkResult}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="w-full max-w-5xl mb-8">
          <div className="bg-white/90 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300" style={{ 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 215, 0, 0.1)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,220,0.9) 100%)'
          }}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-yellow-700 mb-4">🎯 How It Works</h2>
              <p className="text-gray-600 text-lg">Simple steps to join and win big prizes!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Buy Tickets</h3>
                <p className="text-gray-600">Purchase your lottery tickets for just $10 each. You can buy multiple tickets to increase your chances of winning!</p>
                <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>📧 Email + 📱 WhatsApp:</strong> After each purchase, you'll receive your unique ticket number via email and WhatsApp message. Keep it safe for checking results!
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Wait for Draw</h3>
                <p className="text-gray-600">Monthly draws are held on the last day of each month from 6:00 AM to 12:00 AM. Watch the live countdown timer for the next draw!</p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Check & Win</h3>
                <p className="text-gray-600">During draw time (last day of month, 6:00 AM - 12:00 AM), use your unique ticket number to check if you're a winner. Prizes range from $100 to $50,000!</p>
                <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800">
                    <strong>🎫 Use Your Ticket:</strong> Enter the unique ticket number you received via email/WhatsApp to check your results during draw time!
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">🎁 Prize Structure</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Grand Prize: $50,000 (1 winner)</li>
                  <li>• Mega Prize: $10,000 (2 winners)</li>
                  <li>• Big Prize: $1,000 (5 winners)</li>
                  <li>• Lucky Prize: $500 (10 winners)</li>
                  <li>• Small Prize: $100 (50 winners)</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">✅ Why Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Secure & transparent draws</li>
                  <li>• Instant prize payments</li>
                  <li>• 24/7 customer support</li>
                  <li>• Mobile-friendly platform</li>
                  <li>• Live countdown timer</li>
                  <li>• Email & WhatsApp notifications</li>
                  <li>• Unique ticket numbers for each purchase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Main App Component with Router and Auth Context
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData: any) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const authContextValue: AuthContextType = {
    isAuthenticated,
    login,
    logout,
    user
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/lottery" element={<LotteryPage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
