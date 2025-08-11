document.addEventListener('DOMContentLoaded', function() {
    const golfLeaderboard = [
        { name: 'Player 1', score: -10 },
        { name: 'Player 2', score: -8 },
        // Add more players here
    ];

    const poolLeaderboard = [
        { name: 'Participant 1', points: 300 },
        { name: 'Participant 2', points: 280 },
        // Add more participants here
    ];

    function updateLeaderboard(listId, data, scoreType) {
        const list = document.getElementById(listId);
        list.innerHTML = ''; // Clear list

        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name}: ${item[scoreType]}`;
            list.appendChild(li);
        });
    }

    updateLeaderboard('golf-list', golfLeaderboard, 'score');
    updateLeaderboard('pool-list', poolLeaderboard, 'points');
});
