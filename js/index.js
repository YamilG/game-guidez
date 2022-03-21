// setup materialize components
document.addEventListener('DOMContentLoaded', () => {
  const modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  const items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});

// setup links
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

// setup guides
const guideList = document.querySelector('.guides');

const setupGuides = data => {
  if (Object.entries(data).length != 0) {
    let html = '';

    data.forEach(doc => {
      // console.log(doc.data());
      const guide = doc.data();
      const li = `
    <li>
      <div class="collapsible-header grey lighten-4">${guide.title}</div>
      <div class="collapsible-body white">${guide.content}</div>
    </li>
    `;

      html += li;
    });

    guideList.innerHTML = html;
  } else {
    guideList.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
  }
};
