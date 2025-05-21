
// Cursor personalizado
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});

// Links que ativam o efeito hover no cursor
const hoverLinks = document.querySelectorAll('a, button, .menu-item, .gallery-item, .tab-btn, .social-link');

hoverLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.style.width = '60px';
        cursor.style.height = '60px';
        cursor.style.backgroundColor = 'rgba(255, 107, 107, 0.2)';
    });
    
    link.addEventListener('mouseout', () => {
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        cursor.style.backgroundColor = 'rgba(255, 107, 107, 0.3)';
    });
});

// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    });
});

// Header scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Menu ativo conforme scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Tabs do menu
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class de todos os botões e painéis
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Adiciona active class ao botão clicado
        btn.classList.add('active');
        
        // Mostra o painel correspondente
        const panelId = btn.getAttribute('data-tab');
        document.getElementById(panelId).classList.add('active');
    });
});

const cakesData = {
    classic: [
        {
            id: 1,
            name: 'Bombom de morango/uva',
            price: 'R$ 10,00',
            description: 'Doce de morango ou de uva com chocolate e creme.',
            image: 'bombom.jpeg'
        },
        {
            id: 2,
            name: 'Bolo de Cenoura',
            price: 'R$ 12,00',
            description: 'Massa de cenoura com recheio de brigadeiro e cobertura de chocolate.',
            image: 'cenoura.jpeg'
        },
        {
            id: 3,
            name: 'Torta Salgada',
            price: 'R$ 12,00',
            description: 'Deliciosa torta salgada de um jeito que vc nunca provou.',
            image: 'torta.jpeg'
        },
        // {
        //     id: 4,
        //     name: 'Empadão',
        //     price: 'R$ 130,00',
        //     description: 'Melhor empadão que você vai provar.',
        //     image: 'cake-4.jpg'
        // }
    ],            
};

// Dados da galeria
const galleryData = [
    { id: 1, image: 'Bombom.jpeg', alt: 'Bombom de morango ou uva' },
    { id: 2, image: 'bolocenoura.jpeg', alt: 'Bolo de cenoura' },
    { id: 3, image: 'cenoura.jpeg', alt: 'Bolo cenoura' },
    { id: 4, image: 'torta.jpeg', alt: 'torta salgada' },
    { id: 5, image: 'empada.jpeg', alt: 'Empadão' },
    { id: 6, image: 'boms.jpeg', alt: 'Bombom' }
];

// Dados dos depoimentos
const testimonialsData = [
    {
        id: 1,
        rating: 5,
        text: "O bolo do Dani Artesanal é Perfeito em sabor e apresentação!",
        name: "Mariana Costa",
        role: "Noiva",
    },
    {
        id: 2,
        rating: 5,
        text: "Nunca comi um bolo tão delicioso! Todos os convidados elogiaram e querem saber onde comprei.",
        name: "Carlos Eduardo",
        role: "Aniversariante",
    },
    {
        id: 3,
        rating: 4,
        text: "A apresentação foi impecável e o sabor surpreendente. Superou todas as expectativas!",
        name: "Fernanda Lima",
        role: "Cliente Corporativo",
    },
    {
        id: 4,
        rating: 5,
        text: "Minha filha adorou o bolo temático! A atenção aos detalhes foi incrível.",
        name: "Roberto Almeida",
        role: "Pai",
    }
];

// Função para renderizar os bolos no menu
function renderCakes(category) {
    const menuGrid = document.querySelector(`#${category} .menu-grid`);
    menuGrid.innerHTML = '';
    
    cakesData[category].forEach(cake => {
        const cakeItem = document.createElement('div');
        cakeItem.className = 'menu-item';
        cakeItem.innerHTML = `
            <img src="assets/${cake.image}" alt="${cake.name}" class="menu-img">
            <div class="menu-details">
                <h3 class="menu-title">${cake.name}</h3>
                <span class="menu-price">${cake.price}</span>
                <p class="menu-desc">${cake.description}</p>
                <button class="btn btn-primary order-btn" data-id="${cake.id}">
                    <span>Encomendar</span>
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        `;
        menuGrid.appendChild(cakeItem);
    });
}

// Função para renderizar a galeria
function renderGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.innerHTML = '';
    
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="assets/${item.image}" alt="${item.alt}" class="gallery-img">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Função para renderizar os depoimentos
function renderTestimonials() {
    const slider = document.querySelector('.testimonials-slider');
    slider.innerHTML = '';
    
    testimonialsData.forEach(testimonial => {
        const testimonialItem = document.createElement('div');
        testimonialItem.className = 'testimonial';
        
        let stars = '';
        for (let i = 0; i < testimonial.rating; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        testimonialItem.innerHTML = `
            <div class="testimonial-content">
                <div class="rating">
                    ${stars}
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="client-info">
                    <div>
                        <h4>${testimonial.name}</h4>
                        <span>${testimonial.role}</span>
                    </div>
                </div>
            </div>
        `;
        slider.appendChild(testimonialItem);
    });
}

// Função para inicializar o lightbox da galeria
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    // const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('.gallery-img');
            const imgSrc = img.getAttribute('src');
            const imgAlt = img.getAttribute('alt');
            
            // lightbox.innerHTML = `
            //     <div class="lightbox-content" target="blank">
            //         <img src="${imgSrc}" alt="${imgAlt}">
            //         <span class="close-lightbox">&times;</span>
            //     </div>
            // `;
            
            lightbox.style.display = 'flex';
            
            // Fechar lightbox
            const closeBtn = lightbox.querySelector('.close-lightbox');
            closeBtn.addEventListener('click', () => {
                lightbox.style.display = 'none';
            });
        });
    });
    
    // Fechar ao clicar fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}

// Função para animar elementos quando aparecem na tela
function animateOnScroll() {
    const elements = document.querySelectorAll('.menu-item, .gallery-item, .testimonial, .info-item, .form-group');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
}

// Função para enviar o formulário
function handleFormSubmit() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simular envio
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado!';
            
            // Resetar formulário
            setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Mostrar mensagem de sucesso
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            }, 1500);
        }, 2000);
    });
}

// Função para enviar newsletter
function handleNewsletter() {
    const form = document.querySelector('.newsletter-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const input = form.querySelector('.newsletter-input');
        const btn = form.querySelector('.newsletter-btn');
        const originalIcon = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i>';
            input.value = '';
            
            setTimeout(() => {
                btn.innerHTML = originalIcon;
                alert('Obrigado por assinar nossa newsletter!');
            }, 1500);
        }, 2000);
    });
}

// Função para lidar com botões de encomenda
function handleOrderButtons() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.order-btn')) {
            const btn = e.target.closest('.order-btn');
            const cakeId = btn.getAttribute('data-id');
            const cake = getAllCakes().find(c => c.id == cakeId);
            
            // Simular processo de encomenda
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Pedido enviado!';
                
                // Rolar até a seção de contato
                setTimeout(() => {
                    document.querySelector('#contact').scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Mostrar mensagem com detalhes do bolo
                    alert(`Você está encomendando o ${cake.name} (${cake.price}). Entre em contato para finalizar seu pedido!`);
                }, 500);
            }, 1500);
        }
    });
}

// Função auxiliar para obter todos os bolos
function getAllCakes() {
    return cakesData.classic;
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar conteúdo
    renderCakes('classic');
    renderGallery();
    renderTestimonials();
    
    // Inicializar funcionalidades
    initLightbox();
    animateOnScroll();
    handleFormSubmit();
    handleNewsletter();
    handleOrderButtons();
    
    // Configurar o primeiro tab como ativo por padrão
    document.querySelector('.tab-btn.active').click();
});

// Efeito de máquina de escrever no título
function typeWriterEffect() {
    const heroTitle = document.querySelector('.hero-title');
    const lines = heroTitle.querySelectorAll('.title-line');
    let lineIndex = 0;
    
    function typeLine(line) {
        const text = line.textContent;
        line.textContent = '';
        line.style.visibility = 'visible';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                line.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                lineIndex++;
                
                if (lineIndex < lines.length) {
                    setTimeout(() => typeLine(lines[lineIndex]), 500);
                }
            }
        }, 100);
    }
    
    // Iniciar o efeito no primeiro load
    typeLine(lines[lineIndex]);
}

// Chamar o efeito após o carregamento
window.addEventListener('load', typeWriterEffect);