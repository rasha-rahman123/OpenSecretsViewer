const API_KEY = 'DEMO_KEY'; // replace with your OpenFEC API key
const API_URL = `https://api.open.fec.gov/v1/schedules/schedule_a/?sort=-contribution_receipt_date&per_page=20&two_year_transaction_period=2024&api_key=${API_KEY}`;

const eventsDiv = document.getElementById('events');
const template = document.getElementById('event-template');
const seen = new Set();

async function fetchDonations() {
  try {
    const resp = await fetch(API_URL);
    if (!resp.ok) throw new Error('API request failed');
    const data = await resp.json();
    data.results.forEach(item => {
      const id = item.transaction_id;
      if (id && !seen.has(id)) {
        seen.add(id);
        const node = template.content.cloneNode(true);
        node.querySelector('.name').textContent = item.contributor_name || 'Unknown';
        node.querySelector('.amount').textContent = `$${item.contribution_receipt_amount}`;
        node.querySelector('.recipient').textContent = item.recipient_name || 'Unknown';
        eventsDiv.prepend(node);
      }
    });
  } catch (err) {
    console.error(err);
  }
}

fetchDonations();
setInterval(fetchDonations, 30000);
