document.addEventListener("DOMContentLoaded", () => {
    // Fetch the JSON data and display it
    fetch('./players.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const leaderboardTable = document.querySelector('.leaderboard-table tbody');
            leaderboardTable.innerHTML = ''; // Clear existing table content
            
            data.players.forEach(player => {
                const row = `
                    <tr>
                        <td>${player.rank}</td>
                        <td>${player.name}</td>
                        <td>${player.score}</td>
                        <td>${player.winPercentage}</td>
                        <td>${player.kda}</td>
                        <td>${player.tp}</td>
                    </tr>
                `;
                leaderboardTable.innerHTML += row;
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});