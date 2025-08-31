"use client";

import { useState } from "react";
import { Button } from "@ui-kit/button";
import axios from "axios";

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  mobile: string;
}

interface CatalogueApiResponse {
  catalogueUrl: string;
}

// API client configuration (same as hamper-api.ts)
const API_BASE_URL = "https://admin.shubhhampers.com/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default function CatalogueModal({ isOpen, onClose }: CatalogueModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!formData.mobile.trim()) {
      setError("Mobile number is required");
      return false;
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    // Basic mobile validation (Indian format)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(formData.mobile.replace(/\D/g, ""))) {
      setError("Please enter a valid 10-digit mobile number");
      return false;
    }
    return true;
  };

  const downloadFile = (url: string, filename: string = "catalogue.pdf") => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await apiClient.post<CatalogueApiResponse>("/catalogue/download", {
        name: formData.name.trim(),
        email: formData.email.trim(),
        mobile: formData.mobile.trim()
      });

      setIsSubmitted(true);
      // Download the catalogue file
      if (response.data.catalogueUrl) {
        downloadFile(response.data.catalogueUrl);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("Network error. Please check your connection and try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      email: "",
      mobile: ""
    });
    setIsSubmitted(false);
    setIsLoading(false);
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full mx-4 shadow-2xl border border-brand-gold/20 relative overflow-hidden">
        {/* Golden accent gradient */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold via-brand-amber to-brand-brown" />

        <div className="p-8">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">📋</div>
                <h2 className="text-2xl font-bold text-brand-dark mb-2">Download Our Catalogue</h2>
                <p className="text-gray-600">
                  Fill in your details below to instantly download our complete hamper catalogue.
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm flex items-center gap-2">
                    <span>⚠️</span>
                    {error}
                  </p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={e => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-brand-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all duration-200"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={e => handleInputChange("email", e.target.value)}
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-3 border border-brand-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all duration-200"
                    required
                  />
                </div>

                {/* Mobile Field */}
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-brand-dark mb-2"
                  >
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    value={formData.mobile}
                    onChange={e => handleInputChange("mobile", e.target.value)}
                    placeholder="9876543210"
                    className="w-full px-4 py-3 border border-brand-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all duration-200"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">10-digit mobile number without +91</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  <Button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 bg-white text-brand-brown border border-brand-gold/30 hover:bg-brand-light/20 px-4 py-3 rounded-lg font-medium transition-all duration-200"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-gradient-to-r from-brand-gold to-brand-amber text-white hover:from-brand-amber hover:to-brand-gold px-4 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      "Download Catalogue"
                    )}
                  </Button>
                </div>
              </form>

              {/* Trust indicators */}
              <div className="mt-6 pt-4 border-t border-brand-gold/20">
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <span>🔒</span>
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📱</span>
                    <span>No Spam</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⚡</span>
                    <span>Instant Download</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-brand-dark mb-4">
                  Catalogue Downloaded Successfully!
                </h2>
                <div className="bg-gradient-to-br from-brand-gold/10 to-brand-amber/10 rounded-xl p-6 border border-brand-gold/20 mb-6">
                  <p className="text-gray-700 mb-3">
                    Thank you for your interest! Your catalogue download has started automatically.
                  </p>
                  <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-brand-gold/20">
                    <p className="font-semibold text-brand-brown">📄 Catalogue.pdf</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    If the download didn&apos;t start automatically, please check your downloads
                    folder or try again.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleClose}
                    className="w-full bg-gradient-to-r from-brand-gold to-brand-amber text-white hover:from-brand-amber hover:to-brand-gold px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Continue Browsing
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Need immediate assistance?</p>
                    <button
                      onClick={() => window.open("https://wa.me/919685847274", "_blank")}
                      className="text-brand-brown hover:text-brand-dark font-medium text-sm border-b border-brand-gold/30 hover:border-brand-gold transition-colors"
                    >
                      💬 WhatsApp us at +91 96858 47274
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
