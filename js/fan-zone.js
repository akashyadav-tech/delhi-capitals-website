// Delhi Capitals Fan Zone JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Poll functionality
    const pollOptions = document.querySelectorAll('.poll-option');
    const submitVoteBtn = document.getElementById('submitVote');
    const voteCounts = {
        1: 142,
        2: 98,
        3: 65,
        4: 28
    };
    
    let selectedOption = null;
    let hasVoted = localStorage.getItem('dcPollVoted') === 'true';
    
    // Initialize vote bars
    updateVoteBars();
    
    // Handle poll option selection
    pollOptions.forEach(option => {
        option.addEventListener('click', () => {
            if (hasVoted) {
                alert('You have already voted in this poll!');
                return;
            }
            
            // Remove selected class from all options
            pollOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selected class to clicked option
            option.classList.add('selected');
            selectedOption = option.getAttribute('data-option');
        });
    });
    
    // Handle vote submission
    submitVoteBtn.addEventListener('click', () => {
        if (hasVoted) {
            alert('You have already voted in this poll!');
            return;
        }
        
        if (!selectedOption) {
            alert('Please select an option before voting!');
            return;
        }
        
        // Update vote count
        voteCounts[selectedOption]++;
        
        // Update UI
        document.getElementById(`votes${selectedOption}`).textContent = voteCounts[selectedOption];
        updateTotalVotes();
        updateVoteBars();
        
        // Mark as voted
        hasVoted = true;
        localStorage.setItem('dcPollVoted', 'true');
        
        // Show thank you message
        alert('Thank you for voting! Your vote has been recorded.');
        
        // Reset selection
        pollOptions.forEach(opt => opt.classList.remove('selected'));
        selectedOption = null;
        
        // Update poll note
        document.querySelector('.poll-note').innerHTML = `
            <i class="fas fa-check-circle" style="color: #2E7D32;"></i> 
            Thank you for voting! You can vote again next week.
        `;
    });
    
    function updateTotalVotes() {
        const total = Object.values(voteCounts).reduce((a, b) => a + b, 0);
        document.getElementById('totalVotes').textContent = total;
    }
    
    function updateVoteBars() {
        const total = Object.values(voteCounts).reduce((a, b) => a + b, 0);
        
        pollOptions.forEach(option => {
            const optionNum = option.getAttribute('data-option');
            const votes = voteCounts[optionNum];
            const percentage = total > 0 ? (votes / total) * 100 : 0;
            
            // Update or create vote bar
            let voteBar = option.querySelector('.vote-bar');
            if (!voteBar) {
                voteBar = document.createElement('div');
                voteBar.className = 'vote-bar';
                voteBar.setAttribute('data-option', optionNum);
                option.appendChild(voteBar);
            }
            
            voteBar.style.cssText = `
                width: ${percentage}%;
                height: 5px;
                background-color: var(--dc-blue);
                border-radius: 3px;
                margin-top: 5px;
                transition: width 0.5s ease;
            `;
            
            // Add percentage label
            let percentageLabel = option.querySelector('.vote-percentage');
            if (!percentageLabel) {
                percentageLabel = document.createElement('div');
                percentageLabel.className = 'vote-percentage';
                option.appendChild(percentageLabel);
            }
            
            percentageLabel.textContent = `${percentage.toFixed(1)}%`;
            percentageLabel.style.cssText = `
                font-size: 0.8rem;
                color: var(--dc-dark-gray);
                margin-top: 3px;
            `;
        });
    }
    
    // Comments functionality
    const commentsContainer = document.getElementById('commentsContainer');
    const submitCommentBtn = document.getElementById('submitComment');
    const loadMoreCommentsBtn = document.getElementById('loadMoreComments');
    const charCount = document.getElementById('charCount');
    const commentText = document.getElementById('commentText');
    
    // Sample comments data
    const sampleComments = [
        {
            id: 1,
            author: "Rahul Sharma",
            date: "March 20, 2025",
            text: "Great performance in the last match! Axar Patel's all-round performance was exceptional. The way he controlled the middle overs with both bat and ball was brilliant. #YehHaiNayiDilli",
            likes: 24,
            replies: 3
        },
        {
            id: 2,
            author: "Priya Mehta",
            date: "March 19, 2025",
            text: "Can't wait for the next home game at Arun Jaitley Stadium! The atmosphere is always electric. The sea of blue and red in the stands gives me goosebumps every time. #DCFan",
            likes: 18,
            replies: 2
        },
        {
            id: 3,
            author: "Amit Kumar",
            date: "March 18, 2025",
            text: "Our bowling attack looks solid this season with Nortje and Mustafizur. Hope we lift the trophy this year! The way Nortje was bowling those yorkers was a treat to watch.",
            likes: 31,
            replies: 5
        },
        {
            id: 4,
            author: "Neha Gupta",
            date: "March 17, 2025",
            text: "David Warner's consistency is amazing. He's proving to be worth every penny! That cover drive in the last match was pure class. Hope he gets the Orange Cap this season.",
            likes: 42,
            replies: 7
        },
        {
            id: 5,
            author: "Vikram Singh",
            date: "March 16, 2025",
            text: "Rishabh Pant's captaincy has improved so much. His field placements and bowling changes were spot on in the last game. Welcome back, captain!",
            likes: 56,
            replies: 9
        }
    ];
    
    let displayedComments = 3;
    
    // Character counter for comment text
    commentText.addEventListener('input', function() {
        const remaining = 500 - this.value.length;
        charCount.textContent = `${remaining} characters remaining`;
        charCount.style.color = remaining < 50 ? 'var(--dc-red)' : 'var(--dc-dark-gray)';
    });
    
    // Render comments
    function renderComments() {
        commentsContainer.innerHTML = '';
        
        const commentsToShow = sampleComments.slice(0, displayedComments);
        
        commentsToShow.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <div class="comment-header">
                    <div class="comment-author">${comment.author}</div>
                    <div class="comment-date">${comment.date}</div>
                </div>
                <div class="comment-text">${comment.text}</div>
                <div class="comment-actions">
                    <button class="like-btn" data-comment="${comment.id}">
                        <i class="far fa-thumbs-up"></i> Like (${comment.likes})
                    </button>
                    <button class="reply-btn" data-comment="${comment.id}">
                        <i class="far fa-comment"></i> Reply (${comment.replies})
                    </button>
                    <button class="share-btn" data-comment="${comment.id}">
                        <i class="fas fa-share"></i> Share
                    </button>
                </div>
            `;
            commentsContainer.appendChild(commentElement);
        });
        
        // Update load more button visibility
        if (sampleComments.length <= displayedComments) {
            loadMoreCommentsBtn.style.display = 'none';
        } else {
            loadMoreCommentsBtn.style.display = 'inline-block';
        }
        
        // Add event listeners to comment buttons
        addCommentButtonListeners();
    }
    
    // Initialize comments
    renderComments();
    
    // Load more comments
    loadMoreCommentsBtn.addEventListener('click', () => {
        displayedComments += 3;
        renderComments();
    });
    
    // Submit new comment
    submitCommentBtn.addEventListener('click', () => {
        const authorInput = document.getElementById('commentAuthor');
        const textInput = document.getElementById('commentText');
        
        const author = authorInput.value.trim();
        const text = textInput.value.trim();
        
        if (!author || !text) {
            alert('Please enter both your name and comment!');
            return;
        }
        
        if (text.length > 500) {
            alert('Comment must be 500 characters or less!');
            return;
        }
        
        // Create new comment object
        const newComment = {
            id: sampleComments.length + 1,
            author: author,
            date: getCurrentDate(),
            text: text,
            likes: 0,
            replies: 0
        };
        
        // Add to beginning of comments array
        sampleComments.unshift(newComment);
        
        // Reset displayed comments count
        displayedComments = 3;
        
        // Re-render comments
        renderComments();
        
        // Clear input fields
        authorInput.value = '';
        textInput.value = '';
        charCount.textContent = '500 characters remaining';
        charCount.style.color = 'var(--dc-dark-gray)';
        
        // Show success message
        showNotification('Comment posted successfully!');
    });
    
    // Add event listeners to comment action buttons
    function addCommentButtonListeners() {
        // Like buttons
        document.querySelectorAll('.like-btn').forEach(button => {
            button.addEventListener('click', function() {
                const commentId = this.getAttribute('data-comment');
                const comment = sampleComments.find(c => c.id == commentId);
                
                if (comment) {
                    comment.likes++;
                    renderComments();
                    showNotification('Comment liked!');
                }
            });
        });
        
        // Reply buttons (placeholder functionality)
        document.querySelectorAll('.reply-btn').forEach(button => {
            button.addEventListener('click', function() {
                const commentId = this.getAttribute('data-comment');
                const comment = sampleComments.find(c => c.id == commentId);
                
                if (comment) {
                    alert(`Replying to ${comment.author}'s comment. In a full implementation, this would open a reply form.`);
                }
            });
        });
        
        // Share buttons
        document.querySelectorAll('.share-btn').forEach(button => {
            button.addEventListener('click', function() {
                const commentId = this.getAttribute('data-comment');
                const comment = sampleComments.find(c => c.id == commentId);
                
                if (comment) {
                    const shareText = `Check out this comment about Delhi Capitals: "${comment.text.substring(0, 100)}..."`;
                    alert(`Share this comment: ${shareText}`);
                }
            });
        });
    }
    
    // Helper function to get current date
    function getCurrentDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return now.toLocaleDateString('en-US', options);
    }
    
    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--dc-blue);
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
        
        // Add CSS animations
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Add CSS for fan gallery and challenges
    const fanZoneStyles = document.createElement('style');
    fanZoneStyles.textContent = `
        .fan-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        
        .gallery-item {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: var(--shadow);
        }
        
        .fan-caption {
            padding: 15px;
        }
        
        .fan-caption div {
            font-size: 0.9rem;
            color: var(--dc-dark-gray);
            margin-top: 5px;
        }
        
        .challenges-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .challenge-card {
            background-color: white;
            border-radius: 10px;
            padding: 25px;
            text-align: center;
            box-shadow: var(--shadow);
        }
        
        .challenge-icon {
            font-size: 2.5rem;
            color: var(--dc-red);
            margin-bottom: 15px;
        }
        
        .challenge-card h3 {
            margin-bottom: 15px;
        }
        
        .challenge-card p {
            margin-bottom: 20px;
        }
        
        .comment-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        
        .comment-actions {
            display: flex;
            gap: 15px;
            margin-top: 15px;
        }
        
        .comment-actions button {
            background: none;
            border: none;
            color: var(--dc-blue);
            cursor: pointer;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .comment-actions button:hover {
            color: var(--dc-dark-blue);
        }
        
        .poll-total {
            margin-top: 15px;
            font-weight: 600;
            color: var(--dc-dark-blue);
            text-align: center;
        }
        
        @media (max-width: 768px) {
            .comment-header {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .comment-actions {
                flex-wrap: wrap;
            }
        }
    `;
    document.head.appendChild(fanZoneStyles);
    
    // Initialize comment character counter
    charCount.textContent = '500 characters remaining';
});