const workoutForm = document.getElementById('workoutForm');
const historyList = document.getElementById('historyList');
let entryCount = 0;

workoutForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const workoutType = document.getElementById('workoutType').value;
    const duration = document.getElementById('duration').value;
    const calories = document.getElementById('calories').value;
    const notes = document.getElementById('notes').value;

    entryCount++;
    const historyItem = document.createElement('li');
    historyItem.innerHTML = `
        <span>${entryCount}. ${workoutType} - ${duration} min - ${calories} kcal ${notes ? `- Notes: ${notes}` : ''}</span>
        <button class="remove-btn" onclick="removeEntry(this)">Remove</button>
    `;

    historyList.appendChild(historyItem);

    workoutForm.reset();
});

function removeEntry(button) {
    const listItem = button.closest('li');
    listItem.remove();
    entryCount--;
    updateHistoryNumbers();
}

function updateHistoryNumbers() {
    const items = historyList.querySelectorAll('li');
    entryCount = 0;
    items.forEach((item, index) => {
        entryCount++;
        item.querySelector('span').textContent = `${entryCount}. ${item.querySelector('span').textContent.split('. ')[1]}`;
    });
}
