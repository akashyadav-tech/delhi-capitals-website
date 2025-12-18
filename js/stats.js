// Delhi Capitals Statistics Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Statistics Data
    const allTimeScorers = [
        { name: "Shikhar Dhawan", runs: 2517, matches: 85, avg: 34.79, sr: 124.81 },
        { name: "Rishabh Pant", runs: 2838, matches: 98, avg: 34.61, sr: 147.97 },
        { name: "Virender Sehwag", runs: 2174, matches: 79, avg: 29.38, sr: 162.66 },
        { name: "David Warner", runs: 401, matches: 11, avg: 44.55, sr: 134.45 },
        { name: "Prithvi Shaw", runs: 1694, matches: 71, avg: 24.91, sr: 149.09 }
    ];
    
    const battingAverages = [
        { name: "David Warner", avg: 44.55, runs: 401, matches: 11 },
        { name: "Shikhar Dhawan", avg: 34.79, runs: 2517, matches: 85 },
        { name: "Rishabh Pant", avg: 34.61, runs: 2838, matches: 98 },
        { name: "JP Duminy", avg: 34.18, runs: 1025, matches: 33 },
        { name: "Quinton de Kock", avg: 33.11, runs: 496, matches: 16 }
    ];
    
    const strikeRates = [
        { name: "Virender Sehwag", sr: 162.66, runs: 2174, matches: 79 },
        { name: "Rishabh Pant", sr: 147.97, runs: 2838, matches: 98 },
        { name: "Glenn Maxwell", sr: 145.37, runs: 552, matches: 21 },
        { name: "Prithvi Shaw", sr: 149.09, runs: 1694, matches: 71 },
        { name: "Chris Morris", sr: 157.85, runs: 336, matches: 21 }
    ];
    
    const allTimeWickets = [
        { name: "Amit Mishra", wickets: 98, matches: 66, avg: 22.95, econ: 7.38 },
        { name: "Kagiso Rabada", wickets: 76, matches: 50, avg: 20.52, econ: 8.21 },
        { name: "Mohammed Shami", wickets: 40, matches: 40, avg: 33.47, econ: 8.65 },
        { name: "Axar Patel", wickets: 40, matches: 44, avg: 33.45, econ: 7.44 },
        { name: "Anrich Nortje", wickets: 53, matches: 40, avg: 22.94, econ: 7.65 }
    ];
    
    const bowlingAverages = [
        { name: "Kagiso Rabada", avg: 20.52, wickets: 76, matches: 50 },
        { name: "Anrich Nortje", avg: 22.94, wickets: 53, matches: 40 },
        { name: "Amit Mishra", avg: 22.95, wickets: 98, matches: 66 },
        { name: "Chris Morris", avg: 23.21, wickets: 34, matches: 21 },
        { name: "Ashish Nehra", avg: 25.25, wickets: 40, matches: 25 }
    ];
    
    const economyRates = [
        { name: "Axar Patel", econ: 7.44, wickets: 40, matches: 44 },
        { name: "Amit Mishra", econ: 7.38, wickets: 98, matches: 66 },
        { name: "Shahbaz Nadeem", econ: 7.54, wickets: 31, matches: 24 },
        { name: "Sunil Narine", econ: 7.65, wickets: 9, matches: 8 },
        { name: "Anrich Nortje", econ: 7.65, wickets: 53, matches: 40 }
    ];
    
    // Stats navigation
    const statsButtons = document.querySelectorAll('.filter-btn[data-stats]');
    const statsSections = {
        'overall': document.getElementById('overall-stats'),
        'batting': document.getElementById('batting-stats'),
        'bowling': document.getElementById('bowling-stats'),
        'records': document.getElementById('records-stats'),
        'season': document.getElementById('season-stats')
    };
    
    // Initialize stats display
    function renderStats() {
        // Render batting stats
        renderBattingStats();
        
        // Render bowling stats
        renderBowlingStats();
        
        // Render season performance chart
        renderSeasonChart();
    }
    
    function renderBattingStats() {
        // All-time scorers
        const allTimeScorersContainer = document.getElementById('all-time-scorers');
        if (allTimeScorersContainer) {
            allTimeScorersContainer.innerHTML = '';
            allTimeScorers.forEach(player => {
                const row = document.createElement('div');
                row.className = 'stat-item-row';
                row.innerHTML = `
                    <div>
                        <div>${player.name}</div>
                        <div style="font-size: 0.8rem; color: #666;">${player.matches} matches</div>
                    </div>
                    <div style="text-align: right;">
                        <div class="stat-value">${player.runs}</div>
                        <div style="font-size: 0.8rem; color: #666;">Avg: ${player.avg} | SR: ${player.sr}</div>
                    </div>
                `;
                allTimeScorersContainer.appendChild(row);
            });
        }
        
        // Batting averages
        const battingAveragesContainer = document.getElementById('batting-averages');
        if (battingAveragesContainer) {
            battingAveragesContainer.innerHTML = '';
            battingAverages.forEach(player => {
                const row = document.createElement('div');
                row.className = 'stat-item-row';
                row.innerHTML = `
                    <div>
                        <div>${player.name}</div>
                        <div style="font-size: 0.8rem; color: #666;">${player.runs} runs</div>
                    </div>
                    <div style="text-align: right;">
                        <div class="stat-value">${player.avg}</div>
                        <div style="font-size: 0.8rem; color: #666;">${player.matches} matches</div>
                    </div>
                `;
                battingAveragesContainer.appendChild(row);
            });
        }
        
        // Strike rates
        const strikeRatesContainer = document.getElementById('strike-rates');
        if (strikeRatesContainer) {
            strikeRatesContainer.innerHTML = '';
            strikeRates.forEach(player => {
                const row = document.createElement('div');
                row.className = 'stat-item-row';
                row.innerHTML = `
                    <div>
                        <div>${player.name}</div>
                        <div style="font-size: 0.8rem; color: #666;">${player.runs} runs</div>
                    </div>
                    <div style="text-align: right;">
                        <div class="stat-value">${player.sr}</div>
                        <div style="font-size: 0.8rem; color: #666;">${player.matches} matches</div>
                    </div>
                `;
                strikeRatesContainer.appendChild(row);
            });
        }
    }
    
    function renderBowlingStats() {
        // All-time wicket takers
        const allTimeWicketsContainer = document.getElementById('all-time-wickets');
        if (allTimeWicketsContainer) {
            allTimeWicketsContainer.innerHTML = '';
            allTimeWickets.forEach(player => {
                const row = document.createElement('div');
                row.className = 'stat-item-row';
                row.innerHTML = `
                    <div>
                        <div>${player.name}</div>
                        <div style="font-size: 0.8rem; color: #666;">${player.matches} matches</div>
                    </div>
                    <div style="text-align: right;">
                        <div class="stat-value">${player.wickets}</div>
                        <div style="font-size: 0.8rem; color: #666;">Avg: ${player.avg} | Econ: ${player.econ}</div>
                    </div>
                `;
                allTimeWicketsContainer.appendChild(row);
            });
        }
        
        // Bowling averages
        const bowlingAveragesContainer = document.getElementById('bowling-averages');
        if (bowlingAveragesContainer) {
            bowlingAveragesContainer.innerHTML = '';
            bowlingAverages.forEach(player => {
                const row = document.createElement('div');
                row.className = 'stat-item-row';
                row.innerHTML = `
                    <div>
                        <div>${player.name}</div>
                        <div style="font-size: 0.8rem; color: #666;">${player.wickets} wickets</div>
                    </div>
                    <div style="text-align: right;">
                        <div class="stat-value">${player.avg}</div>
                        <div style="font-size: 0.8rem; color: #666;">${player.matches} matches</div>
                    </div>
                `;
                bowlingAveragesContainer.appendChild(row);
            });
        }
        
        // Economy rates
        const economyRatesContainer = document.getElementById('economy-rates');
        if (economyRatesContainer) {
            economyRatesContainer.innerHTML = '';
            economyRates.forEach(player => {
                const row = document.createElement('div');
                row.className = 'stat-item-row';
                row.innerHTML = `
                    <div>
                        <div>${player.name}</div>
                        <div style="font-size: 0.8rem; color: #666;">${player.wickets} wickets</div>
                    </div>
                    <div style="text-align: right;">
                        <div class="stat-value">${player.econ}</div>
                        <div style="font-size: 0.8rem; color: #666;">${player.matches} matches</div>
                    </div>
                `;
                economyRatesContainer.appendChild(row);
            });
        }
    }
    
    function renderSeasonChart() {
        const seasonPerformanceContainer = document.getElementById('season-performance');
        if (!seasonPerformanceContainer) return;
        
        // Season performance data
        const seasons = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];
        const wins = [5, 9, 8, 10, 7, 9, 7, 2]; // Sample data
        const positions = [8, 3, 2, 1, 5, 4, 9, 0]; // 0 for current season
        
        let chartHTML = '';
        
        // Find max wins for scaling
        const maxWins = Math.max(...wins);
        
        seasons.forEach((season, index) => {
            const winPercentage = (wins[index] / 14) * 100; // Assuming 14 matches per season
            const barHeight = (wins[index] / maxWins) * 100;
            const position = positions[index];
            
            let positionText = '';
            let barColor = '';
            
            if (position === 0) {
                positionText = 'Ongoing';
                barColor = 'var(--dc-blue)';
            } else if (position <= 4) {
                positionText = `${position}${getOrdinal(position)}`;
                barColor = '#2E7D32'; // Green for playoffs
            } else {
                positionText = `${position}${getOrdinal(position)}`;
                barColor = 'var(--dc-red)';
            }
            
            chartHTML += `
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                    <div class="chart-bar" style="height: ${barHeight}%; background-color: ${barColor};">
                        <div style="position: absolute; top: -25px; width: 100%; text-align: center; font-weight: 600;">${wins[index]}</div>
                    </div>
                    <div class="chart-label">${season}</div>
                    <div style="font-size: 0.8rem; margin-top: 5px;">${positionText}</div>
                    <div style="font-size: 0.7rem; color: #666;">${winPercentage.toFixed(1)}%</div>
                </div>
            `;
        });
        
        seasonPerformanceContainer.innerHTML = chartHTML;
    }
    
    function getOrdinal(n) {
        if (n === 0) return '';
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    }
    
    // Initialize stats
    renderStats();
    
    // Add event listeners to stats navigation buttons
    statsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const statsType = button.getAttribute('data-stats');
            
            // Remove active class from all buttons
            statsButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Hide all stats sections
            Object.values(statsSections).forEach(section => {
                if (section) section.style.display = 'none';
            });
            
            // Show selected stats section
            if (statsSections[statsType]) {
                statsSections[statsType].style.display = 'block';
            }
            
            // If clicking on records or season, show placeholder
            if (statsType === 'records' || statsType === 'season') {
                showPlaceholderStats(statsType);
            }
        });
    });
    
    function showPlaceholderStats(type) {
        // Create placeholder sections if they don't exist
        if (type === 'records' && !document.getElementById('records-stats')) {
            const recordsSection = document.createElement('section');
            recordsSection.id = 'records-stats';
            recordsSection.className = 'section-dark';
            recordsSection.innerHTML = `
                <div class="container">
                    <h2 class="section-title">Team Records</h2>
                    <div class="stats-container">
                        <div class="stat-box">
                            <h3>Milestone Records</h3>
                            <div class="stat-item-row">
                                <span>Fastest Century</span>
                                <span class="stat-value">Rishabh Pant (49 balls)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Fastest Fifty</span>
                                <span class="stat-value">Chris Morris (17 balls)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Most Runs in a Season</span>
                                <span class="stat-value">Shikhar Dhawan (618 runs)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Most Wickets in a Season</span>
                                <span class="stat-value">Kagiso Rabada (30 wickets)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Highest Partnership</span>
                                <span class="stat-value">Dhawan & Shaw (185 runs)</span>
                            </div>
                        </div>
                        
                        <div class="stat-box">
                            <h3>Award Records</h3>
                            <div class="stat-item-row">
                                <span>Orange Cap Winners</span>
                                <span class="stat-value">1 (Shikhar Dhawan)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Purple Cap Winners</span>
                                <span class="stat-value">1 (Kagiso Rabada)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>MVP Awards</span>
                                <span class="stat-value">3</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Fair Play Awards</span>
                                <span class="stat-value">2</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Emerging Player Awards</span>
                                <span class="stat-value">4</span>
                            </div>
                        </div>
                        
                        <div class="stat-box">
                            <h3>Special Achievements</h3>
                            <div class="stat-item-row">
                                <span>Hat-tricks</span>
                                <span class="stat-value">2</span>
                            </div>
                            <div class="stat-item-row">
                                <span>4-wicket hauls</span>
                                <span class="stat-value">12</span>
                            </div>
                            <div class="stat-item-row">
                                <span>5-wicket hauls</span>
                                <span class="stat-value">0</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Super Over Wins</span>
                                <span class="stat-value">3</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Last Ball Finishes</span>
                                <span class="stat-value">7</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Insert after bowling stats section
            const bowlingStats = document.getElementById('bowling-stats');
            if (bowlingStats) {
                bowlingStats.parentNode.insertBefore(recordsSection, bowlingStats.nextSibling);
            }
            
            statsSections['records'] = recordsSection;
        }
        
        if (type === 'season' && !document.getElementById('season-stats')) {
            const seasonSection = document.createElement('section');
            seasonSection.id = 'season-stats';
            seasonSection.innerHTML = `
                <div class="container">
                    <h2 class="section-title">Season 2025 Statistics</h2>
                    <div class="stats-container">
                        <div class="stat-box">
                            <h3>Current Season Overview</h3>
                            <div class="stat-item-row">
                                <span>Matches Played</span>
                                <span class="stat-value">4</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Matches Won</span>
                                <span class="stat-value">2</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Matches Lost</span>
                                <span class="stat-value">2</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Points</span>
                                <span class="stat-value">4</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Net Run Rate</span>
                                <span class="stat-value">+0.325</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Current Position</span>
                                <span class="stat-value">5th</span>
                            </div>
                        </div>
                        
                        <div class="stat-box">
                            <h3>2025 Batting Leaders</h3>
                            <div class="stat-item-row">
                                <span>Top Scorer</span>
                                <span class="stat-value">David Warner (201 runs)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Best Average</span>
                                <span class="stat-value">Rishabh Pant (52.33)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Best Strike Rate</span>
                                <span class="stat-value">Prithvi Shaw (148.75)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Most Sixes</span>
                                <span class="stat-value">Rishabh Pant (9)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Most Fours</span>
                                <span class="stat-value">David Warner (24)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Highest Score</span>
                                <span class="stat-value">David Warner (89*)</span>
                            </div>
                        </div>
                        
                        <div class="stat-box">
                            <h3>2025 Bowling Leaders</h3>
                            <div class="stat-item-row">
                                <span>Top Wicket Taker</span>
                                <span class="stat-value">Anrich Nortje (8 wickets)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Best Average</span>
                                <span class="stat-value">Axar Patel (18.25)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Best Economy</span>
                                <span class="stat-value">Kuldeep Yadav (7.12)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Best Figures</span>
                                <span class="stat-value">Anrich Nortje (3/18)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Most Dot Balls</span>
                                <span class="stat-value">Khaleel Ahmed (42)</span>
                            </div>
                            <div class="stat-item-row">
                                <span>Most Maidens</span>
                                <span class="stat-value">Anrich Nortje (2)</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Insert after records section or at the end
            const recordsStats = document.getElementById('records-stats');
            if (recordsStats) {
                recordsStats.parentNode.insertBefore(seasonSection, recordsStats.nextSibling);
            } else {
                const bowlingStats = document.getElementById('bowling-stats');
                if (bowlingStats) {
                    bowlingStats.parentNode.insertBefore(seasonSection, bowlingStats.nextSibling);
                }
            }
            
            statsSections['season'] = seasonSection;
        }
    }
});