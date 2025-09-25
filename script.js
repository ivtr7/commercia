// ComercIA - JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
        // Inicializar Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

    // Header scroll effect
    const header = document.getElementById('header');
    let isScrolled = false;

    function handleScroll() {
        const scrollY = window.scrollY;
        const shouldBeScrolled = scrollY > 50;
        
        if (shouldBeScrolled !== isScrolled) {
            isScrolled = shouldBeScrolled;
            if (isScrolled) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Smooth scrolling for navigation links
    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Add click handlers to navigation buttons
    document.querySelectorAll('[data-section]').forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            scrollToSection(sectionId);
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.differential-card, .module-card, .stat-card, .feature-card, .benefit-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Animated statistics counter
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '%';
        }, 16);
    }

    // Observe statistics for counter animation
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statValue = entry.target.querySelector('.stat-value');
                const target = parseInt(statValue.getAttribute('data-target'));
                if (target && !statValue.classList.contains('animated')) {
                    statValue.classList.add('animated');
                    animateCounter(statValue, target);
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-card').forEach(card => {
        statObserver.observe(card);
    });

    // Chart bars animation
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.chart-bar');
                bars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.opacity = '1';
                        bar.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.3 });

    const chartContainer = document.querySelector('.chart-container');
    if (chartContainer) {
        chartObserver.observe(chartContainer);
    }

    // Parallax effect for background elements
    function handleParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-bg-element, .markets-bg-element, .formula-bg-element, .connectivity-bg-element, .demand-bg-element, .cta-bg-element');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    window.addEventListener('scroll', handleParallax);

    // Floating animation for specific elements
    function addFloatingAnimation() {
        const floatingElements = document.querySelectorAll('.floating-element, .chart-floating, .cta-particle');
        floatingElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.5}s`;
        });
    }

    addFloatingAnimation();

    // Connection lines animation
    function animateConnectionLines() {
        const paths = document.querySelectorAll('.connection-path');
        paths.forEach((path, index) => {
            path.style.animationDelay = `${index * 0.5}s`;
        });
    }

    animateConnectionLines();

    // Data particles animation
    function animateDataParticles() {
        const particles = document.querySelectorAll('.data-particle');
        particles.forEach((particle, index) => {
            particle.style.animationDelay = `${index * 0.5}s`;
        });
    }

    animateDataParticles();

    // Morphing background animation
    function animateMorphingBackground() {
        const morphElements = document.querySelectorAll('.connectivity-bg-3');
        morphElements.forEach(element => {
            element.style.animation = 'morph 8s ease-in-out infinite';
        });
    }

    animateMorphingBackground();

    // Pulse glow animation for hub
    function animatePulseGlow() {
        const hubIcon = document.querySelector('.hub-icon');
        if (hubIcon) {
            hubIcon.style.animation = 'pulse-glow 3s ease-in-out infinite';
        }
    }

    animatePulseGlow();

    // Hover effects for interactive elements
    function addHoverEffects() {
        // Differential cards
        document.querySelectorAll('.differential-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02) perspective(1000px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) perspective(1000px)';
            });
        });

        // Module cards
        document.querySelectorAll('.module-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.module-icon');
                if (icon) {
                    icon.style.transform = 'rotate(3deg) scale(1.1)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.module-icon');
                if (icon) {
                    icon.style.transform = 'rotate(0deg) scale(1)';
                }
            });
        });

        // Connection nodes
        document.querySelectorAll('.connection-node').forEach(node => {
            node.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                const icon = this.querySelector('.node-icon');
                if (icon) {
                    icon.style.color = 'hsl(185, 100%, 65%)';
                }
            });
            
            node.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                const icon = this.querySelector('.node-icon');
                if (icon) {
                    icon.style.color = 'hsl(222, 84%, 58%)';
                }
            });
        });

        // Feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.feature-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.feature-icon');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                }
            });
        });

        // Image containers
        document.querySelectorAll('.image-container').forEach(container => {
            container.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                const glow = this.querySelector('.image-glow');
                if (glow) {
                    glow.style.opacity = '0.3';
                }
            });
            
            container.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                const glow = this.querySelector('.image-glow');
                if (glow) {
                    glow.style.opacity = '0.2';
                }
            });
        });
    }

    addHoverEffects();

    // CTA button effects
    function addCTAEffects() {
        document.querySelectorAll('.cta-btn, .nav-btn, .contact-btn').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }

    addCTAEffects();

    // Scroll indicator animation
    function animateScrollIndicator() {
        const scrollIcon = document.querySelector('.scroll-icon');
        if (scrollIcon) {
            scrollIcon.style.animation = 'bounce-arrow 2s ease-in-out infinite';
        }
    }

    animateScrollIndicator();

    // Formula visual animation
    function animateFormulaVisual() {
        const formulaVisual = document.querySelector('.formula-visual');
        if (formulaVisual) {
            const cards = formulaVisual.querySelectorAll('.formula-card');
            const operators = formulaVisual.querySelectorAll('.formula-operator');
            
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.2}s`;
            });
            
            operators.forEach((operator, index) => {
                operator.style.animationDelay = `${(index + 1) * 0.2 + 0.4}s`;
            });
        }
    }

    animateFormulaVisual();

    // Benefits list animation
    function animateBenefitsList() {
        const benefitItems = document.querySelectorAll('.benefit-item');
        benefitItems.forEach((item, index) => {
            item.style.animationDelay = `${0.4 + index * 0.1}s`;
        });
    }

    animateBenefitsList();

    // Formula steps animation
    function animateFormulaSteps() {
        const steps = document.querySelectorAll('.formula-step');
        steps.forEach((step, index) => {
            step.style.animationDelay = `${0.6 + index * 0.1}s`;
        });
    }

    animateFormulaSteps();

    // Trust indicators animation
    function animateTrustIndicators() {
        const trustItems = document.querySelectorAll('.trust-item');
        trustItems.forEach((item, index) => {
            item.style.animationDelay = `${0.9 + index * 0.1}s`;
        });
    }

    animateTrustIndicators();

    // Initialize all animations
    function initializeAnimations() {
        // Add initial animation classes for non-hero elements
        const animatedElements = document.querySelectorAll('.differential-card, .module-card, .stat-card, .feature-card, .benefit-item, .formula-step, .trust-item');
        animatedElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
        });

        // Observe elements for animation
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.transition = 'all 0.7s ease-out';
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            animationObserver.observe(el);
        });

        // Trigger hero animations immediately
        const heroElements = document.querySelectorAll('.hero-title, .hero-description, .cta-btn');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 300);
        });
    }

    initializeAnimations();

    // Mobile menu toggle (if needed)
    function initMobileMenu() {
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });
        }
    }

    initMobileMenu();

    // Performance optimization: Throttle scroll events
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply throttling to scroll events
    const throttledScrollHandler = throttle(() => {
        handleScroll();
        handleParallax();
    }, 16);

    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', throttledScrollHandler);

    // Lazy loading for images
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    initLazyLoading();

    // Error handling for missing elements
    function handleMissingElements() {
        const requiredElements = [
            '.hero-title',
            '.section-title',
            '.differential-card',
            '.module-card',
            '.stat-card'
        ];

        requiredElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            if (elements.length === 0) {
                console.warn(`Element not found: ${selector}`);
            }
        });
    }

    handleMissingElements();

    // Initialize all functionality
    console.log('ComercIA website initialized successfully');
});

// Utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Export functions for potential external use
window.ComercIA = {
    scrollToSection: function(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    },
    
    animateCounter: function(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '%';
        }, 16);
    }
};

// Chat Bubble Functionality
(function() {
    // Sistema de respostas locais (sem dependências externas)
    const RESPONSES = {
        greetings: [
            'Oi! Tudo bem? Sou o Ícaro da ComercIA. Como posso te ajudar hoje?',
            'E aí! Tudo certo? Sou o Ícaro da ComercIA. O que você gostaria de saber?',
            'Oi! Sou o Ícaro da ComercIA. Como posso te ajudar?',
            'E aí! Tudo bem? Sou o Ícaro da ComercIA. Em que posso ajudar?',
            'Olá! Sou o Ícaro da ComercIA. Como posso te ajudar hoje?',
            'Oi! Tudo tranquilo? Sou o Ícaro da ComercIA. O que você gostaria de saber?'
        ],
        name: [
            'Sou o Ícaro, consultor da ComercIA. Prazer!',
            'Ícaro, consultor da ComercIA. Como posso te ajudar?',
            'Meu nome é Ícaro, da ComercIA. O que você gostaria de saber?'
        ],
        howItWorks: [
            'A ComercIA integra seu WhatsApp ao ERP em 1 hora, automatizando agendamentos, pedidos e notificações via IA. Quer ver um exemplo prático?',
            'Conectamos seu WhatsApp ao ERP de forma rápida e prática, automatizando atendimento e controle de pedidos. Interessado em saber mais?',
            'Nossa solução conecta WhatsApp + ERP via IA, implementação em 1 hora, 100% automatizado. Que tipo de ERP você usa?'
        ],
        softzaw: [
            'Perfeito! Com o SoftZaw, você automatiza agendamentos e controle de pedidos pelo WhatsApp em 1 hora. Já usou alguma ferramenta de automação?',
            'Ótimo! O SoftZaw é excelente. A gente consegue integrar ele ao WhatsApp e automatizar tudo via IA. Quer ver como funciona na prática?',
            'Bacana! SoftZaw é uma ótima escolha. A gente automatiza seus agendamentos e pedidos pelo WhatsApp em minutos. Interessado em uma demonstração?'
        ],
        general: [
            'A ComercIA é um SaaS que conecta WhatsApp + ERP via IA. Módulos: Agendamentos, Controle de Pedidos, Notificadores. Implementação em 1 hora!',
            'Nossa solução foca em pequenos negócios brasileiros, automatizando o atendimento pelo WhatsApp integrado ao seu ERP. Quer saber mais?',
            'A ComercIA leva inovação para onde os aplicativos tradicionais não chegam, conectando WhatsApp ao ERP de forma inteligente. Interessado?'
        ]
    };

    // Elementos do chat
    const chatBubble = document.getElementById('chat-bubble');
    const chatContainer = document.getElementById('chat-container');
    const chatClose = document.getElementById('chat-close');
    const newChatBtn = document.getElementById('new-chat');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');

    // Estado do chat
    let isOpen = false;
    let isLoading = false;
    let conversationHistory = [];

    // Funções para gerenciar histórico
    function saveConversation() {
        localStorage.setItem('comercia-chat-history', JSON.stringify(conversationHistory));
    }

    function loadConversation() {
        const saved = localStorage.getItem('comercia-chat-history');
        if (saved) {
            conversationHistory = JSON.parse(saved);
            // Limitar histórico a 20 mensagens para não sobrecarregar
            if (conversationHistory.length > 20) {
                conversationHistory = conversationHistory.slice(-20);
            }
        }
    }

    function addToHistory(role, content) {
        conversationHistory.push({ role, content, timestamp: Date.now() });
        saveConversation();
    }

    // Função removida - não mais necessária com sistema local

    // Toggle do chat bubble
    if (chatBubble) {
        chatBubble.addEventListener('click', () => {
            isOpen = !isOpen;
            if (isOpen) {
                chatContainer.classList.add('open');
                chatInput.focus();
            } else {
                chatContainer.classList.remove('open');
            }
        });
    }

    // Fechar chat
    if (chatClose) {
        chatClose.addEventListener('click', () => {
            isOpen = false;
            chatContainer.classList.remove('open');
        });
    }

    // Nova conversa
    if (newChatBtn) {
        newChatBtn.addEventListener('click', () => {
            // Limpar histórico
            conversationHistory = [];
            saveConversation();
            
            // Limpar mensagens na tela
            chatMessages.innerHTML = '';
            
            // Adicionar mensagem inicial variada
            const initialMessages = [
                'Oi! Tudo bem? Sou o Ícaro da ComercIA. Como posso te ajudar hoje?',
                'E aí! Tudo certo? Sou o Ícaro da ComercIA. O que você gostaria de saber?',
                'Oi! Sou o Ícaro da ComercIA. Como posso te ajudar?',
                'E aí! Tudo bem? Sou o Ícaro da ComercIA. Em que posso ajudar?',
                'Olá! Sou o Ícaro da ComercIA. Como posso te ajudar hoje?',
                'Oi! Tudo tranquilo? Sou o Ícaro da ComercIA. O que você gostaria de saber?'
            ];
            const randomMessage = initialMessages[Math.floor(Math.random() * initialMessages.length)];
            addMessage(randomMessage, 'bot');
        });
    }

    // Enviar mensagem
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message || isLoading) return;

        // Adicionar mensagem do usuário
        addMessage(message, 'user');
        chatInput.value = '';

        // Enviar para IA
        sendToAI(message);
    }

    // Event listeners
    if (chatSend) {
        chatSend.addEventListener('click', sendMessage);
    }
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Adicionar mensagem ao chat
    function addMessage(text, sender) {
        // Salvar no histórico
        addToHistory(sender, text);
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        if (sender === 'bot') {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <img src="./assets/comercia-logo.jpg" alt="Ícaro" onerror="this.style.display='none'">
                </div>
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        }

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Adicionar indicador de digitação
    function addTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <img src="./assets/comercia-logo.jpg" alt="Ícaro" onerror="this.style.display='none'">
            </div>
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Remover indicador de digitação
    function removeTypingIndicator() {
        const typing = document.getElementById('typing-indicator');
        if (typing) {
            typing.remove();
        }
    }

    // Sistema de respostas inteligentes locais
    function getSmartResponse(message) {
        const msg = message.toLowerCase();
        const msgCount = conversationHistory.filter(m => m.role === 'user').length;
        
        // Detectar tipo de mensagem
        if (msg.includes('nome') || msg.includes('chamo') || msg.includes('sou')) {
            return getRandomResponse(RESPONSES.name);
        }
        
        if (msg.includes('como funciona') || msg.includes('funciona') || msg.includes('como')) {
            return getRandomResponse(RESPONSES.howItWorks);
        }
        
        if (msg.includes('softzaw') || msg.includes('soft zaw')) {
            return getRandomResponse(RESPONSES.softzaw);
        }
        
        if (msg.includes('oi') || msg.includes('olá') || msg.includes('ola') || msgCount === 0) {
            return getRandomResponse(RESPONSES.greetings);
        }
        
        // Resposta geral baseada no contexto
        return getRandomResponse(RESPONSES.general);
    }
    
    function getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Simular envio de mensagem (sem API externa)
    function sendToAI(message) {
        isLoading = true;
        addTypingIndicator();

        // Simular delay de resposta
        setTimeout(() => {
            const response = getSmartResponse(message);
            removeTypingIndicator();
            addMessage(response, 'bot');
            isLoading = false;
        }, 1000 + Math.random() * 1000); // 1-2 segundos de delay
    }

    // Inicializar chat
    function initializeChat() {
        // Carregar histórico salvo
        loadConversation();
        
        // Se não há histórico, adicionar mensagem inicial variada
        if (conversationHistory.length === 0) {
            const initialMessages = [
                'Oi! Tudo bem? Sou o Ícaro da ComercIA. Como posso te ajudar hoje?',
                'E aí! Tudo certo? Sou o Ícaro da ComercIA. O que você gostaria de saber?',
                'Oi! Sou o Ícaro da ComercIA. Como posso te ajudar?',
                'E aí! Tudo bem? Sou o Ícaro da ComercIA. Em que posso ajudar?'
            ];
            const randomMessage = initialMessages[Math.floor(Math.random() * initialMessages.length)];
            addMessage(randomMessage, 'bot');
        } else {
            // Recarregar mensagens do histórico
            chatMessages.innerHTML = '';
            conversationHistory.forEach(msg => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${msg.role}-message`;
                
                    if (msg.role === 'bot') {
                        messageDiv.innerHTML = `
                            <div class="message-avatar">
                                <img src="./assets/comercia-logo.jpg" alt="Ícaro" onerror="this.style.display='none'">
                            </div>
                            <div class="message-content">
                                <p>${msg.content}</p>
                            </div>
                        `;
                    } else {
                    messageDiv.innerHTML = `
                        <div class="message-content">
                            <p>${msg.content}</p>
                        </div>
                    `;
                }
                
                chatMessages.appendChild(messageDiv);
            });
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // Inicializar chat quando a página carregar
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM loaded, initializing chat...');
        
        // Inicializar Lucide icons no chat
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        // Inicialização simples e direta
        setTimeout(() => {
            if (chatBubble && chatContainer && chatMessages) {
                console.log('Chat elements found, initializing...');
                initializeChat();
                
                // Garantir que o bubble esteja visível
                chatBubble.style.display = 'flex';
                chatBubble.style.visibility = 'visible';
                chatBubble.style.opacity = '1';
                chatBubble.style.position = 'fixed';
                chatBubble.style.zIndex = '1000';
                
                console.log('Chat initialized successfully!');
            } else {
                console.error('Chat elements not found!');
            }
        }, 500);
    });
})();
