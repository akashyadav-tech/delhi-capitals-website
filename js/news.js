// Delhi Capitals News Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // News Data
    const newsArticles = [
        {
            id: 1,
            title: "Delhi Capitals Announce Final Squad for IPL 2025",
            date: "March 20, 2025",
            category: "team",
            excerpt: "The Delhi Capitals management has finalized the 25-member squad for IPL 2025 after the auction, with some exciting new additions and key retentions.",
            imageColor: "#004C93",
            readTime: "3 min read"
        },
        {
            id: 2,
            title: "Rishabh Pant Fit and Ready to Lead DC in IPL 2025",
            date: "March 18, 2025",
            category: "player",
            excerpt: "After a successful recovery and rehabilitation, captain Rishabh Pant declares himself fully fit and ready to lead Delhi Capitals in the upcoming season.",
            imageColor: "#EF1C23",
            readTime: "4 min read"
        },
        {
            id: 3,
            title: "DC vs SRH: Warner's Brilliant 89* Guides Delhi to Victory",
            date: "March 16, 2025",
            category: "match",
            excerpt: "David Warner's unbeaten 89 off just 52 balls powered Delhi Capitals to a comprehensive 24-run victory over Sunrisers Hyderabad.",
            imageColor: "#003366",
            readTime: "5 min read"
        },
        {
            id: 4,
            title: "Exclusive Interview with Head Coach Ricky Ponting",
            date: "March 14, 2025",
            category: "interview",
            excerpt: "In an exclusive interview, head coach Ricky Ponting discusses the team's strategy, young talent, and expectations for IPL 2025.",
            imageColor: "#004C93",
            readTime: "6 min read"
        },
        {
            id: 5,
            title: "Delhi Capitals Sign New Bowling Coach James Hopes",
            date: "March 12, 2025",
            category: "team",
            excerpt: "The franchise has appointed former Australian all-rounder James Hopes as the new bowling coach for the 2025 season.",
            imageColor: "#EF1C23",
            readTime: "2 min read"
        },
        {
            id: 6,
            title: "Axar Patel: The Unsung Hero of Delhi Capitals",
            date: "March 10, 2025",
            category: "player",
            excerpt: "A deep dive into Axar Patel's consistent performances and why he's become one of DC's most valuable players.",
            imageColor: "#003366",
            readTime: "4 min read"
        },
        {
            id: 7,
            title: "Pre-Season Training Camp Begins in Delhi",
            date: "March 8, 2025",
            category: "team",
            excerpt: "The Delhi Capitals squad has assembled in Delhi for an intensive two-week pre-season training camp ahead of IPL 2025.",
            imageColor: "#004C93",
            readTime: "3 min read"
        },
        {
            id: 8,
            title: "Match Preview: DC vs MI - Season Opener Analysis",
            date: "March 6, 2025",
            category: "match",
            excerpt: "A comprehensive preview of Delhi Capitals' season opener against Mumbai Indians at Arun Jaitley Stadium.",
            imageColor: "#EF1C23",
            readTime: "5 min read"
        },
        {
            id: 9,
            title: "Young Guns: Yash Dhull and Vicky Ostwal Ready for Big Season",
            date: "March 4, 2025",
            category: "player",
            excerpt: "The young Indian talents are preparing for what could be their breakthrough season in the IPL with Delhi Capitals.",
            imageColor: "#003366",
            readTime: "4 min read"
        },
        {
            id: 10,
            title: "DC Unveils New Alternate Jersey for IPL 2025",
            date: "March 2, 2025",
            category: "team",
            excerpt: "Delhi Capitals have launched a new alternate jersey for the 2025 season, featuring a modern design with traditional elements.",
            imageColor: "#004C93",
            readTime: "2 min read"
        }
    ];
    
    // Generate news articles
    const newsContainer = document.getElementById('newsContainer');
    const categoryButtons = document.querySelectorAll('.filter-btn[data-category]');
    const loadMoreButton = document.getElementById('loadMoreNews');
    
    let currentCategory = 'all';
    let displayedArticles = 6;
    
    function renderNews(category = 'all') {
        newsContainer.innerHTML = '';
        
        const filteredArticles = category === 'all' 
            ? newsArticles 
            : newsArticles.filter(article => article.category === category);
        
        const articlesToShow = filteredArticles.slice(0, displayedArticles);
        
        articlesToShow.forEach(article => {
            const newsCard = document.createElement('div');
            newsCard.className = 'news-card';
            newsCard.setAttribute('data-category', article.category);
            
            // Get category label
            let categoryLabel = '';
            let categoryClass = '';
            switch(article.category) {
                case 'match':
                    categoryLabel = 'Match Report';
                    categoryClass = 'match-category';
                    break;
                case 'player':
                    categoryLabel = 'Player News';
                    categoryClass = 'player-category';
                    break;
                case 'team':
                    categoryLabel = 'Team Update';
                    categoryClass = 'team-category';
                    break;
                case 'interview':
                    categoryLabel = 'Interview';
                    categoryClass = 'interview-category';
                    break;
            }
            
            // Get initials for article image
            const initials = article.title.split(' ').slice(0, 2).map(word => word[0]).join('');
            
            newsCard.innerHTML = `
                <div class="news-img" style="background-color: ${article.imageColor}; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">
                    ${initials}
                </div>
                <div class="news-content">
                    <div class="news-category ${categoryClass}">${categoryLabel}</div>
                    <div class="news-date">${article.date} • ${article.readTime}</div>
                    <h3 class="news-title">${article.title}</h3>
                    <p>${article.excerpt}</p>
                    <a href="#" class="read-more" data-article="${article.id}">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            
            newsContainer.appendChild(newsCard);
        });
        
        // Update load more button visibility
        if (filteredArticles.length <= displayedArticles) {
            loadMoreButton.style.display = 'none';
        } else {
            loadMoreButton.style.display = 'inline-block';
        }
        
        // Add event listeners to read more links
        addReadMoreListeners();
    }
    
    // Initialize news
    renderNews();
    
    // Add event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Reset displayed articles count
            displayedArticles = 6;
            currentCategory = category;
            
            // Render filtered news
            renderNews(category);
        });
    });
    
    // Load more news articles
    loadMoreButton.addEventListener('click', () => {
        displayedArticles += 3;
        renderNews(currentCategory);
        
        // Smooth scroll to newly loaded articles
        setTimeout(() => {
            const newArticles = document.querySelectorAll('.news-card');
            if (newArticles.length > 3) {
                newArticles[newArticles.length - 3].scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }
        }, 100);
    });
    
    // Add event listeners to read more links
    function addReadMoreListeners() {
        document.querySelectorAll('.read-more[data-article]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const articleId = this.getAttribute('data-article');
                const article = newsArticles.find(a => a.id == articleId);
                
                if (article) {
                    // In a real application, this would redirect to a full article page
                    // For this demo, we'll show a modal with the article content
                    showArticleModal(article);
                }
            });
        });
    }
    
    // Show article modal
    function showArticleModal(article) {
        // Create modal overlay
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        modalOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            padding: 20px;
        `;
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        modalContent.style.cssText = `
            background-color: white;
            border-radius: 10px;
            max-width: 800px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
        `;
        
        // Get category label
        let categoryLabel = '';
        switch(article.category) {
            case 'match': categoryLabel = 'Match Report'; break;
            case 'player': categoryLabel = 'Player News'; break;
            case 'team': categoryLabel = 'Team Update'; break;
            case 'interview': categoryLabel = 'Interview'; break;
        }
        
        // Create detailed article content
        let detailedContent = '';
        
        switch(article.id) {
            case 1:
                detailedContent = `
                    <p>The Delhi Capitals management has finalized their 25-member squad for the IPL 2025 season after a successful auction. The squad features a perfect blend of experienced international stars and exciting young Indian talent.</p>
                    <p><strong>Key Retentions:</strong> Rishabh Pant, David Warner, Axar Patel, Anrich Nortje, and Prithvi Shaw have been retained as the core of the team.</p>
                    <p><strong>New Additions:</strong> The franchise has added firepower with the acquisition of two international all-rounders and a promising young Indian fast bowler.</p>
                    <p><strong>Squad Balance:</strong> With 13 Indian players and 7 overseas options, the team has excellent balance across all departments.</p>
                    <p>Head coach Ricky Ponting expressed his satisfaction with the squad composition, stating, "We have a balanced side with depth in both batting and bowling. The young Indian talent in our squad is particularly exciting."</p>
                `;
                break;
            case 2:
                detailedContent = `
                    <p>Delhi Capitals captain Rishabh Pant has declared himself fully fit and ready to lead the team in IPL 2025, following an extensive recovery and rehabilitation process.</p>
                    <p><strong>Recovery Journey:</strong> Pant underwent surgery in January 2024 and has spent over a year in rehabilitation. He has been cleared by the medical team for full participation.</p>
                    <p><strong>Training Regimen:</strong> The wicketkeeper-batsman has been training intensively at the National Cricket Academy in Bengaluru, focusing on both batting and wicketkeeping drills.</p>
                    <p><strong>Captain's Statement:</strong> "I'm feeling great and can't wait to get back on the field with the Delhi Capitals. The support from the team management and fans has been incredible throughout this journey," said Pant.</p>
                    <p><strong>Team Morale:</strong> Teammates have expressed their excitement at having their captain back, with David Warner stating, "Rishabh's energy and leadership are crucial for our success this season."</p>
                `;
                break;
            default:
                detailedContent = `
                    <p>This is the full article content for "${article.title}". In a complete website implementation, this would contain the detailed story, interviews, analysis, and multimedia content.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>The Delhi Capitals are preparing for an exciting IPL 2025 season with renewed energy and determination to bring the trophy home to Delhi.</p>
                `;
        }
        
        modalContent.innerHTML = `
            <div style="padding: 30px;">
                <button class="modal-close" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--dc-dark-gray);">&times;</button>
                
                <div style="background-color: ${article.imageColor}; height: 200px; border-radius: 10px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.5rem;">
                    ${article.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                </div>
                
                <div style="margin-bottom: 20px;">
                    <span style="background-color: ${article.category === 'match' ? '#EF1C23' : article.category === 'player' ? '#004C93' : article.category === 'team' ? '#003366' : '#0066CC'}; color: white; padding: 5px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">${categoryLabel}</span>
                    <span style="margin-left: 10px; color: var(--dc-red); font-weight: 600;">${article.date}</span>
                    <span style="margin-left: 10px; color: var(--dc-dark-gray);">${article.readTime}</span>
                </div>
                
                <h2 style="margin-bottom: 20px; color: var(--dc-dark-blue);">${article.title}</h2>
                
                ${detailedContent}
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--dc-gray);">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <strong>Share this article:</strong>
                            <div style="display: flex; gap: 10px; margin-top: 10px;">
                                <a href="#" style="color: var(--dc-blue);"><i class="fab fa-twitter"></i></a>
                                <a href="#" style="color: var(--dc-blue);"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" style="color: var(--dc-blue);"><i class="fab fa-linkedin"></i></a>
                                <a href="#" style="color: var(--dc-blue);"><i class="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <button class="btn-primary" id="closeModal">Close</button>
                    </div>
                </div>
            </div>
        `;
        
        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);
        
        // Prevent scrolling on body when modal is open
        document.body.style.overflow = 'hidden';
        
        // Add event listeners to close buttons
        modalOverlay.querySelector('.modal-close').addEventListener('click', closeModal);
        modalOverlay.querySelector('#closeModal').addEventListener('click', closeModal);
        
        // Close modal when clicking outside content
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
        
        function closeModal() {
            document.body.removeChild(modalOverlay);
            document.body.style.overflow = 'auto';
        }
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const privacyCheck = document.getElementById('privacyCheck');
            
            if (!privacyCheck.checked) {
                alert('Please agree to receive updates and promotional content.');
                return;
            }
            
            // In a real application, you would send this to a server
            alert(`Thank you for subscribing with ${emailInput.value}! You'll receive our newsletter soon.`);
            emailInput.value = '';
            privacyCheck.checked = false;
        });
    }
    
    // Add CSS for news categories
    const style = document.createElement('style');
    style.textContent = `
        .news-category {
            display: inline-block;
            padding: 3px 10px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            margin-bottom: 8px;
        }
        
        .match-category {
            background-color: rgba(239, 28, 35, 0.1);
            color: var(--dc-red);
        }
        
        .player-category {
            background-color: rgba(0, 76, 147, 0.1);
            color: var(--dc-blue);
        }
        
        .team-category {
            background-color: rgba(0, 51, 102, 0.1);
            color: var(--dc-dark-blue);
        }
        
        .interview-category {
            background-color: rgba(0, 102, 204, 0.1);
            color: var(--dc-light-blue);
        }
        
        .featured-story {
            display: flex;
            gap: 40px;
            align-items: center;
        }
        
        .featured-image {
            flex: 1;
        }
        
        .featured-content {
            flex: 1;
        }
        
        @media (max-width: 768px) {
            .featured-story {
                flex-direction: column;
            }
        }
    `;
    document.head.appendChild(style);
});