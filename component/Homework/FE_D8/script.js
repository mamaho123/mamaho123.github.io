function addContent2() {
	const tbx_2 = document.getElementById("tbx_2")
	const result2 = document.getElementById("result2")
	result2.innerHTML += `<h3>${tbx_2.value}</h3>`
	tbx_2.value = ""
	tbx_2.focus()
}

function addTask() {
  let taskInput = document.getElementById("taskInput").value;

  if (taskInput.trim() !== "") {
      let table = document.getElementById("myTB1");
      let newRow = table.insertRow(table.rows.length);

      let cell1 = newRow.insertCell(0);
      let cell2 = newRow.insertCell(1);
      let cell3 = newRow.insertCell(2);
      let cell4 = newRow.insertCell(3);

      cell1.innerHTML = table.rows.length - 1;
      cell2.innerHTML = getCurrentDate();
      cell3.innerHTML = taskInput;

      let checkBtn = document.createElement("button");
      checkBtn.innerHTML = "Check";
      checkBtn.setAttribute("onclick", "toggleCheck(this)");
      checkBtn.setAttribute("class", "btn2");
      checkBtn.setAttribute("style", "padding: 3px 10px");
      cell4.appendChild(checkBtn);

      let deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Delete";
      deleteBtn.setAttribute("onclick", "deleteItem(this)");
      deleteBtn.setAttribute("class", "btn3");
      deleteBtn.setAttribute("style", "padding: 3px 10px; margin-left: 3px;");
      cell4.appendChild(deleteBtn);

      document.getElementById("taskInput").value = "";
  }
}

function toggleCheck(btn) {
  let row = btn.parentNode.parentNode;
  row.classList.toggle("checked");
}

function deleteItem(btn) {
  let row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function getCurrentDate() {
  let today = new Date();
  let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return today.toLocaleDateString('en-US', options);
}

