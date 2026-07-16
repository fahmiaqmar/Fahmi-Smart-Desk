let records = JSON.parse(localStorage.getItem("records")) || [];

function addRecord() {
  const date = document.getElementById("date").value;
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const note = document.getElementById("note").value;

  if (!title || !note) {
    alert("Sila isi tajuk dan nota");
    return;
  }

  records.push({ date, title, category, note });
  localStorage.setItem("records", JSON.stringify(records));

  document.getElementById("title").value = "";
  document.getElementById("note").value = "";

  displayRecords();
}

function displayRecords() {
  const table = document.getElementById("recordTable");
  const search = document.getElementById("search").value.toLowerCase();

  table.innerHTML = "";

  records.forEach((r, index) => {
    if (
      r.title.toLowerCase().includes(search) ||
      r.category.toLowerCase().includes(search) ||
      r.note.toLowerCase().includes(search)
    ) {
      table.innerHTML += `
        <tr>
          <td>${r.date}</td>
          <td>${r.title}</td>
          <td>${r.category}</td>
          <td>${r.note}</td>
          <td>
            <button class="delete-btn" onclick="deleteRecord(${index})">Padam</button>
          </td>
        </tr>
      `;
    }
  });
}

function deleteRecord(index) {
  records.splice(index, 1);
  localStorage.setItem("records", JSON.stringify(records));
  displayRecords();
}

displayRecords();
