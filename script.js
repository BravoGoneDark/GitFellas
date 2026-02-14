tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'inter': ['Inter', 'sans-serif'],
                    },
                    colors: {
                        'accent': '#2563eb',
                        'accent-dark': '#1e40af',
                    },
                }
            }
        }

// Add this script at the bottom of your court-minimal-platform.html file, before </body>


// Store venue data
const venueData = {
    venue1: {
        name: "Urban Sports Arena",
        location: "Andheri West",
        sport: "Football",
        details: "7v7",
        price: 2200
    },
    venue2: {
        name: "Ace Badminton Club",
        location: "Powai",
        sport: "Badminton",
        details: "6 Courts",
        price: 850
    },
    venue3: {
        name: "Prime Badminton Club",
        location: "Bandra",
        sport: "Badminton",
        details: "4 Courts",
        price: 1100
    },
    venue4: {
        name: "Victory Sports Hub",
        location: "Worli",
        sport: "Multi-sport",
        details: "Indoor",
        price: 1800
    },
    venue5: {
        name: "Elite Cricket Nets",
        location: "Kandivali",
        sport: "Cricket",
        details: "6 Nets",
        price: 600
    },
    venue6: {
        name: "Smash Volleyball Arena",
        location: "Goregaon",
        sport: "Volleyball",
        details: "Sand court",
        price: 1400
    },
    venue7: {
        name: "Victory football ground",
        location: "Bandra",
        sport: "Football",
        details: "11v11",
        price: 3500
    }
};

const playerData = {
    player1: {
        name: "Rahul Kumar",
        initials: "RK",
        position: "Forward",
        level: "Intermediate",
        rating: "4.7",
        gradient: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    player2: {
        name: "Priya Shah",
        initials: "PS",
        position: "Singles",
        level: "Advanced",
        rating: "4.9",
        gradient: "bg-gradient-to-br from-pink-400 to-purple-600"
    },
    player3: {
        name: "Aditya Mehta",
        initials: "AM",
        position: "All-court",
        level: "Expert",
        rating: "4.8",
        gradient: "bg-gradient-to-br from-orange-400 to-red-600"
    },
    player4: {
        name: "Nisha Kapoor",
        initials: "NK",
        position: "Midfielder",
        level: "Pro",
        rating: "4.9",
        gradient: "bg-gradient-to-br from-green-400 to-teal-600"
    }
};

function invitePlayer(playerId) {
    const player = playerData[playerId];
    sessionStorage.setItem('selectedPlayer', JSON.stringify(player));
    window.location.href = 'invite-player.html';
}
// Function to pass venue data to booking page
function bookNow(venueId) {
    const venue = venueData[venueId];
    // Store in sessionStorage
    sessionStorage.setItem('selectedVenue', JSON.stringify(venue));
    // Navigate to booking page
    window.location.href = 'booking.html';
}


const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');
const selectedText = document.getElementById('selected-text');
const dropdownArrow = document.getElementById('dropdown-arrow');
const options = document.querySelectorAll('.option');

// Toggle dropdown
dropdownButton.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('hidden');
    dropdownArrow.classList.toggle('rotate-180');
});

// Handle option selection
options.forEach(option => {
    option.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        selectedText.textContent = value;
        dropdownMenu.classList.add('hidden');
        dropdownArrow.classList.remove('rotate-180');
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
        dropdownArrow.classList.remove('rotate-180');
    }
});

// Category button toggle
const categoryButtons = document.querySelectorAll('.category-btn');

categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active state from all buttons
        categoryButtons.forEach(btn => {
            btn.classList.remove('bg-gray-900');
            btn.classList.add('bg-transparent', 'border-2', 'border-white');
            btn.classList.remove('text-white');
            btn.classList.add('text-white');
        });
        
        // Add active state to clicked button
        this.classList.remove('bg-transparent', 'border-2', 'border-white');
        this.classList.add('bg-gray-900');
        this.classList.remove('hover:bg-white', 'hover:text-black');
        this.classList.add('text-white');
    });
});
const dateButtons = document.querySelectorAll('.date-btn');
dateButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active state from all buttons
        dateButtons.forEach(btn => {
            btn.classList.remove('bg-emerald-500');
            btn.classList.add('bg-transparent', 'border-2', 'border-white');
            btn.classList.add('text-black');
        });
        
        // Add active state to clicked button
        this.classList.remove('hover:border-gray-900', );
        this.classList.add('bg-emerald-500');
    
        this.classList.add('text-black');
    });
});

// Category button navigation - ADD THIS TO YOUR EXISTING SCRIPT
const categoryActions = document.querySelectorAll('.category-btn');

categoryActions.forEach(button => {
    button.addEventListener('click', function() {
        const sport = this.textContent.trim();
        
        // Redirect to specific sport pages
        if (sport === 'Football') {
            window.location.href = 'football.html';
            return;
        }
        if (sport === 'Badminton') {
            window.location.href = 'badminton.html';
            return;
        }
        if (sport === 'Cricket') {
            window.location.href = 'cricket.html';
            return;
        }
        
        // Otherwise, just toggle the active state for "All sports"
        categoryActions.forEach(btn => {
            btn.classList.remove('bg-gray-900');
            btn.classList.add('bg-transparent', 'border-2', 'border-white');
        });
        
        this.classList.remove('bg-transparent', 'border-2', 'border-white');
        this.classList.add('bg-gray-900');
    });
});