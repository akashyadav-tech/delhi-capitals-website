// Delhi Capitals Schedule Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Match Data for IPL 2025
    const upcomingMatches = [
        {
            id: 1,
            date: "March 23, 2025",
            day: "Sunday",
            team1: "Delhi Capitals",
            team2: "Mumbai Indians",
            venue: "Arun Jaitley Stadium, Delhi",
            time: "7:30 PM IST",
            type: "upcoming"
        },
        {
            id: 2,
            date: "March 27, 2025",
            day: "Thursday",
            team1: "Delhi Capitals",
            team2: "Rajasthan Royals",
            venue: "Sawai Mansingh Stadium, Jaipur",
            time: "7:30 PM IST",
            type: "upcoming"
        },
        {
            id: 3,
            date: "March 30, 2025",
            day: "Sunday",
            team1: "Delhi Capitals",
            team2: "Punjab Kings",
            venue: "Arun Jaitley Stadium, Delhi",
            time: "3:30 PM IST",
            type: "upcoming"
        },
        {
            id: 4,
            date: "April 2, 2025",
            day: "Wednesday",
            team1: "Delhi Capitals",
            team2: "Kolkata Knight Riders",
            venue: "Eden Gardens, Kolkata",
            time: "7:30 PM IST",
            type: "upcoming"
        },
        {
            id: 5,
            date: "April 5, 2025",
            day: "Saturday",
            team1: "Delhi Capitals",
            team2: "Royal Challengers Bangalore",
            venue: "M. Chinnaswamy Stadium, Bengaluru",
            time: "7:30 PM IST",
            type: "upcoming"
        }
    ];
    
    const previousResults = [
        {
            id: 1,
            date: "March 15, 2025",
            day: "Saturday",
            team1: "Delhi Capitals",
            team2: "Sunrisers Hyderabad",
            result: "DC won by 24 runs",
            score: "DC 189/6 (20) - SRH 165/8 (20)",
            type: "completed",
            playerOfMatch: "David Warner"
        },
        {
            id: 2,
            date: "March 12, 2025",
            day: "Wednesday",
            team1: "Delhi Capitals",
            team2: "Chennai Super Kings",
            result: "CSK won by 5 wickets",
            score: "DC 168/7 (20) - CSK 172/5 (19.1)",
            type: "completed",
            playerOfMatch: "Ruturaj Gaikwad"
        },
        {
            id: 3,
            date: "March 8, 2025",
            day: "Saturday",
            team1: "Delhi Capitals",
            team2: "Gujarat Titans",
            result: "DC won by 7 wickets",
            score: "GT 158/9 (20) - DC 162/3 (18.2)",
            type: "completed",
            playerOfMatch: "Axar Patel"
        },
        {
            id: 4,
            date: "March 5, 2025",
            day: "Wednesday",
            team1: "Delhi Capitals",
            team2: "Lucknow Super Giants",
            result: "LSG won by 3 runs",
            score: "LSG 182/6 (20) - DC 179/8 (20)",
            type: "completed",
            playerOfMatch: "KL Rahul"
        }
    ];
    
    const fullSchedule = [
        {
            id: 1,
            date: "March 23, 2025",
            day: "Sunday",
            team1: "Delhi Capitals",
            team2: "Mumbai Indians",
            venue: "Arun Jaitley Stadium, Delhi",
            time: "7:30 PM IST",
            type: "upcoming"
        },
        {
            id: 2,
            date: "March 27, 2025",
            day: "Thursday",
            team1: "Delhi Capitals",
            team2: "Rajasthan Royals",
            venue: "Sawai Mansingh Stadium, Jaipur",
            time: "7:30 PM IST",
            type: "upcoming"
        },
        {
            id: 3,
            date: "March 30, 2025",
            day: "Sunday",
            team1: "Delhi Capitals",
            team2: "Punjab Kings",
            venue: "Arun Jaitley Stadium, Delhi",
            time: "3:30 PM IST",
            type: "upcoming"
        },
        {
            id: 4,
            date: "April 2, 2025",
            day: "Wednesday",
            team1: "Delhi Capitals",
            team2: "Kolkata Knight Riders",
            venue: "Eden Gardens, Kolkata",
            time: "7:30 PM IST",
            type: "upcoming"
        },
        {
            id: 5,
            date: "April 5, 2025",
            day: "Saturday",
            team1: "Delhi Capitals",
            team2: "Royal Challengers Bangalore",
            venue: "M. Chinnaswamy Stadium, Bengaluru",
            time: "7:30 PM IST",
            type: "upcoming"
        },
        {
            id: 6,
            date: "April 9, 2025",
            day: "Wednesday",
            team1: "Delhi Capitals",
            team2: "Sunrisers Hyderabad",
            venue: "Rajiv Gandhi Stadium, Hyderabad",
            time: "7:30 PM IST",
            type: "upcoming"
        },
        {
            id: 7,
            date: "April 12, 2025",
            day: "Saturday",
            team1: "Delhi Capitals",
            team2: "Chennai Super Kings",
            venue: "MA Chidambaram Stadium, Chennai",
            time: "7:30 PM IST",
            type: "upcoming"
        },
        {
            id: 8,
            date: "April 15, 2025",
            day: "Tuesday",
            team1: "Delhi Capitals",
            team2: "Gujarat Titans",
            venue: "Arun Jaitley Stadium, Delhi",
            time: "7:30 PM IST",
            type: "upcoming"
        },
        {
            id: 9,
            date: "April 18, 2025",
            day: "Friday",
            team1: "Delhi Capitals",
            team2: "Lucknow Super Giants",
            venue: "Arun Jaitley Stadium, Delhi",
            time: "7:30 PM IST",
            type: "upcoming"
        },
        {
            id: 10,
            date: "April 22, 2025",
            day: "Tuesday",
            team1: "Delhi Capitals",
            team2: "Mumbai Indians",
            venue: "Wankhede Stadium, Mumbai",
            time: "7:30 PM IST",
            type: "upcoming"
        },
        {
            id: 11,
            date: "April 25, 2025",
            day: "Friday",
            team1: "Delhi Capitals",
            team2: "Rajasthan Royals",
            venue: "Arun Jaitley Stadium, Delhi",
            time: "7:30 PM IST",
            type: "upcoming"
        },
        {
            id: 12,
            date: "April 28, 2025",
            day: "Monday",
            team1: "Delhi Capitals",
            team2: "Punjab Kings",
            venue: "PCA Stadium, Mohali",
            time: "7:30 PM IST",
            type: "upcoming"
        },
        {
            id: 13,
            date: "May 2, 2025",
            day: "Friday",
            team1: "Delhi Capitals",
            team2: "Kolkata Knight Riders",
            venue: "Arun Jaitley Stadium, Delhi",
            time: "7:30 PM IST",
            type: "upcoming"
        },
        {
            id: 14,
            date: "May 6, 2025",
            day: "Tuesday",
            team1: "Delhi Capitals",
            team2: "Royal Challengers Bangalore",
            venue: "Arun Jaitley Stadium, Delhi",
            time: "7:30 PM IST",
            type: "upcoming"
        }
    ];
    
    // Generate match cards
    const upcomingMatchesContainer = document.getElementById('upcoming-matches');
    const previousResultsContainer = document.getElementById('previous-results');
    const fullScheduleContainer = document.getElementById('full-schedule');
    const matchTabs = document.querySelectorAll('.match-tab');
    
    function renderMatches() {
        // Render upcoming matches
        upcomingMatchesContainer.innerHTML = '';
        upcomingMatches.forEach(match => {
            const matchCard = document.createElement('div');
            matchCard.className = 'match-card';
            matchCard.innerHTML = `
                <div class="match-teams-schedule">
                    <div class="team-logo-small" style="background-color: var(--dc-blue);">DC</div>
                    <div class="team-name">${match.team1}</div>
                    <div style="font-weight: 600; color: var(--dc-red);">VS</div>
                    <div class="team-name">${match.team2}</div>
                    <div class="team-logo-small" style="background-color: #E04F16;">${match.team2.split(' ').map(word => word[0]).join('')}</div>
                </div>
                <div class="match-details-schedule">
                    <div class="match-date">${match.date} (${match.day})</div>
                    <div>${match.venue}</div>
                    <div style="font-weight: 600; color: var(--dc-blue);">${match.time}</div>
                </div>
                <div class="match-actions">
                    <button class="btn-secondary set-reminder" data-match="${match.id}">Set Reminder</button>
                    <button class="btn-primary buy-tickets" data-match="${match.id}">Buy Tickets</button>
                </div>
            `;
            upcomingMatchesContainer.appendChild(matchCard);
        });
        
        // Render previous results
        previousResultsContainer.innerHTML = '';
        previousResults.forEach(match => {
            const matchCard = document.createElement('div');
            matchCard.className = 'match-card';
            
            // Determine result color
            let resultColor = var(--dc-red);
            let resultClass = "loss";
            if (match.result.includes("DC won")) {
                resultColor = "#2E7D32";
                resultClass = "win";
            }
            
            matchCard.innerHTML = `
                <div class="match-teams-schedule">
                    <div class="team-logo-small" style="background-color: var(--dc-blue);">DC</div>
                    <div class="team-name">${match.team1}</div>
                    <div style="font-weight: 600; color: var(--dc-red);">VS</div>
                    <div class="team-name">${match.team2}</div>
                    <div class="team-logo-small" style="background-color: #E04F16;">${match.team2.split(' ').map(word => word[0]).join('')}</div>
                </div>
                <div class="match-details-schedule">
                    <div class="match-date">${match.date} (${match.day})</div>
                    <div class="match-result ${resultClass}" style="color: ${resultColor}; font-weight: 700;">${match.result}</div>
                    <div>${match.score}</div>
                    <div style="font-size: 0.9rem; color: var(--dc-dark-gray);">Player of the Match: ${match.playerOfMatch}</div>
                </div>
                <div class="match-actions">
                    <button class="btn-secondary highlight-btn" data-match="${match.id}">Highlights</button>
                    <button class="btn-primary scorecard-btn" data-match="${match.id}">Scorecard</button>
                </div>
            `;
            previousResultsContainer.appendChild(matchCard);
        });
        
        // Render full schedule
        fullScheduleContainer.innerHTML = '';
        fullSchedule.forEach(match => {
            const matchCard = document.createElement('div');
            matchCard.className = 'match-card';
            
            // Determine if it's home or away
            const isHome = match.venue.includes("Delhi");
            const venueType = isHome ? "Home" : "Away";
            const venueColor = isHome ? var(--dc-blue) : var(--dc-red);
            
            matchCard.innerHTML = `
                <div class="match-teams-schedule">
                    <div class="team-logo-small" style="background-color: var(--dc-blue);">DC</div>
                    <div class="team-name">${match.team1}</div>
                    <div style="font-weight: 600; color: var(--dc-red);">VS</div>
                    <div class="team-name">${match.team2}</div>
                    <div class="team-logo-small" style="background-color: #E04F16;">${match.team2.split(' ').map(word => word[0]).join('')}</div>
                </div>
                <div class="match-details-schedule">
                    <div class="match-date">${match.date} (${match.day})</div>
                    <div style="font-weight: 600; color: ${venueColor};">${venueType} • ${match.venue}</div>
                    <div>${match.time}</div>
                </div>
                <div class="match-actions">
                    <span class="match-number">Match ${match.id}</span>
                    <button class="btn-secondary" data-match="${match.id}">Details</button>
                </div>
            `;
            fullScheduleContainer.appendChild(matchCard);
        });
        
        // Add event listeners to buttons
        addMatchButtonListeners();
    }
    
    // Initialize matches
    renderMatches();
    
    // Add event listeners to match tabs
    matchTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            matchTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all match lists
            document.querySelectorAll('.match-list').forEach(list => {
                list.classList.remove('active');
            });
            
            // Show selected match list
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(`${tabId}-matches`).classList.add('active');
        });
    });
    
    // Add button listeners
    function addMatchButtonListeners() {
        // Set reminder buttons
        document.querySelectorAll('.set-reminder').forEach(button => {
            button.addEventListener('click', function() {
                const matchId = this.getAttribute('data-match');
                const match = upcomingMatches.find(m => m.id == matchId);
                alert(`Reminder set for ${match.team1} vs ${match.team2} on ${match.date} at ${match.time}`);
            });
        });
        
        // Buy tickets buttons
        document.querySelectorAll('.buy-tickets').forEach(button => {
            button.addEventListener('click', function() {
                const matchId = this.getAttribute('data-match');
                const match = upcomingMatches.find(m => m.id == matchId);
                alert(`Redirecting to ticket purchase for ${match.team1} vs ${match.team2}`);
            });
        });
        
        // Highlight buttons
        document.querySelectorAll('.highlight-btn').forEach(button => {
            button.addEventListener('click', function() {
                const matchId = this.getAttribute('data-match');
                alert(`Playing highlights for Match ${matchId}`);
            });
        });
        
        // Scorecard buttons
        document.querySelectorAll('.scorecard-btn').forEach(button => {
            button.addEventListener('click', function() {
                const matchId = this.getAttribute('data-match');
                alert(`Showing detailed scorecard for Match ${matchId}`);
            });
        });
    }
    
    // Add countdown timer to next match
    function updateNextMatchCountdown() {
        const nextMatchDate = new Date('March 23, 2025 19:30:00').getTime();
        const now = new Date().getTime();
        const timeRemaining = nextMatchDate - now;
        
        if (timeRemaining > 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            
            const countdownElement = document.createElement('div');
            countdownElement.className = 'countdown-banner';
            countdownElement.innerHTML = `
                <div style="background-color: var(--dc-red); color: white; padding: 10px; border-radius: 5px; text-align: center; margin: 20px 0;">
                    <strong>Next Match:</strong> DC vs MI • ${days}d ${hours}h ${minutes}m to go
                </div>
            `;
            
            // Insert countdown after the schedule container
            const scheduleContainer = document.querySelector('.schedule-container');
            if (scheduleContainer && !document.querySelector('.countdown-banner')) {
                scheduleContainer.parentNode.insertBefore(countdownElement, scheduleContainer.nextSibling);
            }
        }
    }
    
    // Initialize countdown
    updateNextMatchCountdown();
    // Update countdown every minute
    setInterval(updateNextMatchCountdown, 60000);
});