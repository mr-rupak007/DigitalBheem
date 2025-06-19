function showBookingForm() {
  document.getElementById("homeSection").style.display = "none";
  const bookingSection = document.getElementById("bookingSection");
  bookingSection.style.display = "block";
  bookingSection.scrollIntoView({ behavior: "smooth" });
}

function closeForm() {
  document.getElementById("bookingSection").style.display = "none";
  document.getElementById("homeSection").style.display = "flex";
}

function calculateCost() {
  const days = parseInt(document.getElementById("days").value);
  const persons = parseInt(document.getElementById("persons").value);
  const advance = parseInt(document.getElementById("advance").value);
  const roomType = document.getElementById("roomType").value;
  const ac = document.getElementById("ac").checked;
  const locker = document.getElementById("locker").checked;

  if (isNaN(days) || days <= 0 || isNaN(persons) || persons <= 0 || isNaN(advance)) {
    alert("Please enter valid non-negative values.");
    return;
  }

  let roomRate = roomType === "Delux" ? 2000 : 4000;
  let roomCost = roomRate * days;

  let amenityCost = 0;
  if (ac) amenityCost += 1000 * days;
  if (locker) amenityCost += 300 * days;

  let extraPersonCost = persons > 2 ? (persons - 2) * 1000 * days : 0;

  let totalCost = roomCost + amenityCost + extraPersonCost;
  let balance = totalCost - advance;

  document.getElementById("totalCost").innerText = totalCost;
  document.getElementById("balance").innerText = balance;

  document.getElementById("calcMessage").style.display = "block";
  document.getElementById("bookBtn").style.display = "inline-block";
  document.getElementById("finalMessage").style.display = "none";
}

function bookNow() {
  document.getElementById("calcMessage").style.display = "none";
  document.getElementById("bookBtn").style.display = "none";
  document.getElementById("finalMessage").style.display = "block";
  document.getElementById("bookingForm").reset();
}
