export const translations = {
  en: {
    // Navigation
    language: "Language",
    
    // Hero Section
    hero: {
      title: "A Necklace That",
      titleHighlight: "Keeps You Safe",
      subtitle: "Elegant, discreet, and connected — built to protect you when it matters most.",
      ctaButton: "Discover Discreta",
      scrollHint: "Scroll"
    },
    
    // Mission Section
    mission: {
      title: "Our Mission",
      content: {
        line1: "Your safety is our priority.",
        line2: "Born in Montréal, this idea came to life with one clear purpose — to help women feel safe without sacrificing elegance.",
        line3: "Designed by an engineer who believes protection should feel natural, effortless, and beautiful, this necklace combines technology and design in one discreet piece you can wear every day.",
        line4: "Whether you're walking to your car, showing a home, or coming back late at night, two discreet touches silently send an alert — sharing your live location with those who can help.",
        line5: "No phone. No noise. Just peace of mind.",
        line6: "Confidence. Safety. Style.",
        line7: "All in one timeless piece."
      }
    },
    
    // Product Section
    product: {
      title: "Meet Discreta",
      subtitle: "Crafted with precision, designed for protection",
      placeholder: "3D Model Coming Soon",
      interactiveView: "Interactive 360° view",
      features: {
        connectivity: {
          title: "Smart Connectivity",
          description: "Instant emergency alerts"
        },
        design: {
          title: "Elegant Design",
          description: "Premium materials with timeless aesthetics"
        },
        protection: {
          title: "Always Protected",
          description: "7-day battery life with rapid charging"
        }
      }
    },
    
    // Waitlist Section
    waitlist: {
      title: "Be the first to know",
      subtitle: "Join our waitlist for exclusive early access and special launch pricing.",
      emailPlaceholder: "Enter your email",
      submitButton: "Join Waitlist",
      submitting: "Joining...",
      successTitle: "You're on the list!",
      successMessage: "We'll keep you updated on our launch and exclusive early-bird offers.",
      disclaimer: "No spam, just updates. Unsubscribe anytime.",
      errors: {
        required: "Email is required",
        invalid: "Please enter a valid email address",
        network: "Network error. Please try again.",
        server: "Something went wrong. Please try again."
      }
    },
    
    // Footer
    footer: {
      brandName: "Velyne",
      tagline: "Making safety beautiful, one necklace at a time.",
      copyright: "© 2024 Velyne. All rights reserved. | Privacy Policy | Terms of Service"
    }
  },
  
  fr: {
    // Navigation
    language: "Langue",
    
    // Hero Section
    hero: {
      title: "Un Collier Qui",
      titleHighlight: "Vous Protège",
      subtitle: "Élégant, discret et connecté — conçu pour vous protéger quand cela compte le plus.",
      ctaButton: "Découvrir Discreta",
      scrollHint: "Défiler"
    },
    
    // Mission Section
    mission: {
      title: "Notre Mission",
      content: {
        line1: "Votre sécurité est notre priorité.",
        line2: "Né à Montréal, cette idée a pris vie avec un objectif clair — aider les femmes à se sentir en sécurité sans sacrifier l'élégance.",
        line3: "Conçu par un ingénieur qui croit que la protection devrait être naturelle, sans effort et belle, ce collier combine technologie et design en une pièce discrète que vous pouvez porter tous les jours.",
        line4: "Que vous marchiez vers votre voiture, fassiez visiter une maison ou rentriez tard le soir, deux touches discrètes envoient silencieusement une alerte — partageant votre localisation en temps réel avec ceux qui peuvent vous aider.",
        line5: "Pas de téléphone. Pas de bruit. Juste la tranquillité d'esprit.",
        line6: "Confiance. Sécurité. Style.",
        line7: "Tout en une pièce intemporelle."
      }
    },
    
    // Product Section
    product: {
      title: "Rencontrez Discreta",
      subtitle: "Fabriqué avec précision, conçu pour la protection",
      placeholder: "Modèle 3D Bientôt Disponible",
      interactiveView: "Vue interactive 360°",
      features: {
        connectivity: {
          title: "Connectivité Intelligente",
          description: "Alertes d'urgence instantanées"
        },
        design: {
          title: "Design Élégant",
          description: "Matériaux premium avec une esthétique intemporelle"
        },
        protection: {
          title: "Toujours Protégé",
          description: "Batterie de 7 jours avec charge rapide"
        }
      }
    },
    
    // Waitlist Section
    waitlist: {
      title: "Soyez les premiers informés",
      subtitle: "Rejoignez notre liste d'attente pour un accès exclusif anticipé et des prix de lancement spéciaux.",
      emailPlaceholder: "Entrez votre email",
      submitButton: "Rejoindre la Liste",
      submitting: "Inscription...",
      successTitle: "Vous êtes sur la liste !",
      successMessage: "Nous vous tiendrons au courant de notre lancement et des offres exclusives.",
      disclaimer: "Pas de spam, seulement des mises à jour. Désabonnez-vous à tout moment.",
      errors: {
        required: "L'email est requis",
        invalid: "Veuillez entrer une adresse email valide",
        network: "Erreur réseau. Veuillez réessayer.",
        server: "Quelque chose s'est mal passé. Veuillez réessayer."
      }
    },
    
    // Footer
    footer: {
      brandName: "Velyne",
      tagline: "Rendre la sécurité belle, un collier à la fois.",
      copyright: "© 2024 Velyne. Tous droits réservés. | Politique de Confidentialité | Conditions d'Utilisation"
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations['en'];