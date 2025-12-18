// Delhi Capitals Players Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Player Data for 2025 Squad
    const players = [
        {
            id: 1,
            name: "Rishabh Pant",
            role: "Captain & Wicket-Keeper",
            type: "wk",
            imageColor: "#004C93",
            matches: 98,
            runs: 2838,
            wickets: 0,
            highScore: 128,
            country: "India",
            price: "₹16 Cr"
        },
        {
            id: 2,
            name: "David Warner",
            role: "Vice-Captain & Batsman",
            type: "batsman",
            imageColor: "#EF1C23",
            matches: 176,
            runs: 6397,
            wickets: 0,
            highScore: 126,
            country: "Australia",
            price: "₹6.25 Cr"
        },
        {
            id: 3,
            name: "Prithvi Shaw",
            role: "Batsman",
            type: "batsman",
            imageColor: "#003366",
            matches: 71,
            runs: 1694,
            wickets: 0,
            highScore: 99,
            country: "India",
            price: "₹7.5 Cr"
        },
        {
            id: 4,
            name: "Axar Patel",
            role: "All-Rounder",
            type: "allrounder",
            imageColor: "#004C93",
            matches: 136,
            runs: 1335,
            wickets: 111,
            highScore: 52,
            country: "India",
            price: "₹9 Cr"
        },
        {
            id: 5,
            name: "Anrich Nortje",
            role: "Bowler",
            type: "bowler",
            imageColor: "#EF1C23",
            matches: 40,
            runs: 42,
            wickets: 53,
            bestBowling: "4/10",
            country: "South Africa",
            price: "₹6.5 Cr"
        },
        {
            id: 6,
            name: "Mitchell Marsh",
            role: "All-Rounder",
            type: "allrounder",
            imageColor: "#003366",
            matches: 32,
            runs: 628,
            wickets: 20,
            highScore: 89,
            country: "Australia",
            price: "₹6.5 Cr"
        },
        {
            id: 7,
            name: "Kuldeep Yadav",
            role: "Bowler",
            type: "bowler",
            imageColor: "#004C93",
            matches: 69,
            runs: 85,
            wickets: 74,
            bestBowling: "4/20",
            country: "India",
            price: "₹2 Cr"
        },
        {
            id: 8,
            name: "Lungi Ngidi",
            role: "Bowler",
            type: "bowler",
            imageColor: "#EF1C23",
            matches: 14,
            runs: 12,
            wickets: 25,
            bestBowling: "4/10",
            country: "South Africa",
            price: "₹50 L"
        },
        {
            id: 9,
            name: "Yash Dhull",
            role: "Batsman",
            type: "batsman",
            imageColor: "#003366",
            matches: 8,
            runs: 156,
            wickets: 0,
            highScore: 46,
            country: "India",
            price: "₹50 L"
        },
        {
            id: 10,
            name: "Khaleel Ahmed",
            role: "Bowler",
            type: "bowler",
            imageColor: "#004C93",
            matches: 44,
            runs: 25,
            wickets: 48,
            bestBowling: "3/13",
            country: "India",
            price: "₹5.25 Cr"
        },
        {
            id: 11,
            name: "Praveen Dubey",
            role: "Bowler",
            type: "bowler",
            imageColor: "#EF1C23",
            matches: 5,
            runs: 8,
            wickets: 3,
            bestBowling: "2/19",
            country: "India",
            price: "₹50 L"
        },
        {
            id: 12,
            name: "Ripal Patel",
            role: "All-Rounder",
            type: "allrounder",
            imageColor: "#003366",
            matches: 6,
            runs: 84,
            wickets: 2,
            highScore: 23,
            country: "India",
            price: "₹20 L"
        },
        {
            id: 13,
            name: "Sarfaraz Khan",
            role: "Batsman",
            type: "batsman",
            imageColor: "#004C93",
            matches: 41,
            runs: 532,
            wickets: 0,
            highScore: 67,
            country: "India",
            price: "₹20 L"
        },
        {
            id: 14,
            name: "Vicky Ostwal",
            role: "Bowler",
            type: "bowler",
            imageColor: "#EF1C23",
            matches: 5,
            runs: 12,
            wickets: 7,
            bestBowling: "3/11",
            country: "India",
            price: "₹20 L"
        },
        {
            id: 15,
            name: "Abishek Porel",
            role: "Wicket-Keeper",
            type: "wk",
            imageColor: "#003366",
            matches: 4,
            runs: 33,
            wickets: 0,
            highScore: 20,
            country: "India",
            price: "₹20 L"
        },
        {
            id: 16,
            name: "Ishan Porel",
            role: "Bowler",
            type: "bowler",
            imageColor: "#004C93",
            matches: 6,
            runs: 8,
            wickets: 5,
            bestBowling: "2/24",
            country: "India",
            price: "₹25 L"
        },
        {
            id: 17,
            name: "Lalit Yadav",
            role: "All-Rounder",
            type: "allrounder",
            imageColor: "#EF1C23",
            matches: 19,
            runs: 213,
            wickets: 9,
            highScore: 48,
            country: "India",
            price: "₹65 L"
        },
        {
            id: 18,
            name: "Mustafizur Rahman",
            role: "Bowler",
            type: "bowler",
            imageColor: "#003366",
            matches: 77,
            runs: 34,
            wickets: 96,
            bestBowling: "5/22",
            country: "Bangladesh",
            price: "₹2 Cr"
        },
        {
            id: 19,
            name: "Rovman Powell",
            role: "All-Rounder",
            type: "allrounder",
            imageColor: "#004C93",
            matches: 14,
            runs: 250,
            wickets: 0,
            highScore: 67,
            country: "West Indies",
            price: "₹2.8 Cr"
        },
        {
            id: 20,
            name: "Chetan Sakariya",
            role: "Bowler",
            type: "bowler",
            imageColor: "#EF1C23",
            matches: 19,
            runs: 22,
            wickets: 19,
            bestBowling: "3/31",
            country: "India",
            price: "₹4.2 Cr"
        }
    ];
    
    // Generate player cards
    const playersContainer = document.getElementById('playersContainer');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    function renderPlayers(filter = 'all') {
        playersContainer.innerHTML = '';
        
        const filteredPlayers = filter === 'all' 
            ? players 
            : players.filter(player => player.type === filter);
        
        filteredPlayers.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.className = 'player-card';
            playerCard.setAttribute('data-type', player.type);
            
            // Get initials for player image
            const initials = player.name.split(' ').map(n => n[0]).join('');
            
            // Determine which stats to show based on player type
            let statsHTML = '';
            if (player.type === 'batsman' || player.type === 'wk') {
                statsHTML = `
                    <div class="stat-item">
                        <div class="stat-value">${player.matches}</div>
                        <div class="stat-label">Matches</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${player.runs}</div>
                        <div class="stat-label">Runs</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${player.highScore}</div>
                        <div class="stat-label">Best</div>
                    </div>
                `;
            } else if (player.type === 'bowler') {
                statsHTML = `
                    <div class="stat-item">
                        <div class="stat-value">${player.matches}</div>
                        <div class="stat-label">Matches</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${player.wickets}</div>
                        <div class="stat-label">Wickets</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${player.bestBowling}</div>
                        <div class="stat-label">Best</div>
                    </div>
                `;
            } else if (player.type === 'allrounder') {
                statsHTML = `
                    <div class="stat-item">
                        <div class="stat-value">${player.matches}</div>
                        <div class="stat-label">Matches</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${player.runs}</div>
                        <div class="stat-label">Runs</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${player.wickets}</div>
                        <div class="stat-label">Wickets</div>
                    </div>
                `;
            }
            
            playerCard.innerHTML = `
                <div class="player-img" style="background-color: ${player.imageColor};">
                    ${initials}
                </div>
                <div class="player-info">
                    <h3 class="player-name">${player.name}</h3>
                    <div class="player-role">${player.role}</div>
                    <div class="player-country">${player.country} • ${player.price}</div>
                    <div class="player-stats">
                        ${statsHTML}
                    </div>
                </div>
            `;
            
            playersContainer.appendChild(playerCard);
        });
    }
    
    // Initialize players
    renderPlayers();
    
    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Render filtered players
            renderPlayers(button.getAttribute('data-filter'));
        });
    });
    
    // Add country flags to player cards
    function addCountryFlags() {
        const countryElements = document.querySelectorAll('.player-country');
        countryElements.forEach(element => {
            const country = element.textContent.split('•')[0].trim();
            let flag = '🏴';
            
            if (country === 'India') flag = '🇮🇳';
            else if (country === 'Australia') flag = '🇦🇺';
            else if (country === 'South Africa') flag = '🇿🇦';
            else if (country === 'Bangladesh') flag = '🇧🇩';
            else if (country === 'West Indies') flag = '🇯🇲';
            
            element.innerHTML = `${flag} ${country} • ${element.textContent.split('•')[1]}`;
        });
    }
    
    // Initialize country flags
    setTimeout(addCountryFlags, 100);
});