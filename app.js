document.addEventListener('DOMContentLoaded', function () {
    const golfLeaderboard = [
        { name: 'Player 1', score: -10 },
        { name: 'Player 2', score: -8 },
        // Add more players here
    ];

    const poolLeaderboard = [
        {
            name: 'Participant 1',
            points: 300,
            selectedPlayers: [
                { name: 'Golf Player 1', score: -4 },
                { name: 'Golf Player 2', score: -3 },
                // Add more players here
            ],
        },
        {
            name: 'Participant 2',
            points: 280,
            selectedPlayers: [
                { name: 'Golf Player 1', score: -5 },
                { name: 'Golf Player 3', score: 0 },
                // Add more players here
            ],
        },
        // Add more participants here
    ];

    function updateLeaderboard(listId, data, scoreType) {
        const list = document.getElementById(listId);
        list.innerHTML = ''; // Clear list

        data.forEach(item => {
            const li = document.createElement('li');
            const expandDiv = document.createElement('div');
            expandDiv.classList.add('expand');

            li.innerHTML = `<span class="golf-icon"></span> ${item.name}: ${item[scoreType]}`;
            list.appendChild(li);

            if (item.selectedPlayers) {
                item.selectedPlayers.forEach(player => {
                    const playerInfo = document.createElement('div');
                    playerInfo.textContent = `${player.name}: ${player.score}`;
                    expandDiv.appendChild(playerInfo);
                });
            }

            li.appendChild(expandDiv);

            li.addEventListener('click', function () {
                const expanded = expandDiv.style.display === 'block';
                document.querySelectorAll('.expand').forEach(item => item.style.display = 'none');
                expandDiv.style.display = expanded ? 'none' : 'block';
            });
        });
    }

    updateLeaderboard('golf-list', golfLeaderboard, 'score');
    updateLeaderboard('pool-list', poolLeaderboard, 'points');
});
