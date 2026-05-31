// --- MOCK DATABASE ---
const students = [
  {
    id: 1,
    name: "Sophia Lee",
    rollNumber: "A2026-01",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300&h=300",
    status: "unmarked"
  },
  {
    id: 2,
    name: "Marcus Chen",
    rollNumber: "A2026-02",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300&h=300",
    status: "unmarked"
  },
  {
    id: 3,
    name: "Emily Taylor",
    rollNumber: "A2026-03",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300",
    status: "unmarked"
  },
  {
    id: 4,
    name: "Liam Johnson",
    rollNumber: "A2026-04",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
    status: "unmarked"
  },
  {
    id: 5,
    name: "Olivia Martinez",
    rollNumber: "A2026-05",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300",
    status: "unmarked"
  }
];

// --- DATE SELECTION & STORAGE DATABASE ---
let selectedDate = new Date().toISOString().split('T')[0]; // Default to today

// Persistent data object mapping date -> studentId -> status
const attendanceDb = {};

// Initialize mock attendance database with some past logs to compute rates
function initAttendanceDatabase() {
  // Pre-populate last 3 days with mock data for realistic rate calculations
  const pastDates = ["2026-05-28", "2026-05-29", "2026-05-30"];
  const mockHistories = [
    { 1: "present", 2: "present", 3: "present", 4: "absent",  5: "present" }, // Day 1
    { 1: "present", 2: "absent",  3: "present", 4: "absent",  5: "present" }, // Day 2
    { 1: "absent",  2: "present", 3: "present", 4: "present", 5: "absent" }  // Day 3
  ];

  pastDates.forEach((date, index) => {
    attendanceDb[date] = mockHistories[index];
  });
}

function initAttendanceForDate(date) {
  if (!attendanceDb[date]) {
    attendanceDb[date] = {};
    students.forEach(s => {
      attendanceDb[date][s.id] = "unmarked";
    });
  }
}

function getStudentStatusForDate(studentId, date) {
  initAttendanceForDate(date);
  return attendanceDb[date][studentId] || "unmarked";
}

function setStudentStatusForDate(studentId, status, date) {
  initAttendanceForDate(date);
  attendanceDb[date][studentId] = status;
}

function syncStudentsStatusWithSelectedDate() {
  students.forEach(s => {
    s.status = getStudentStatusForDate(s.id, selectedDate);
  });
}

// Active index for flashcard progression
let currentCardIndex = 0;

// --- DOM ELEMENT REFERENCES ---
const statTotal = document.getElementById("stat-total");
const statPresent = document.getElementById("stat-present");
const statAbsent = document.getElementById("stat-absent");

const rosterBody = document.getElementById("roster-grid-body");

const deckProgressText = document.getElementById("deck-progress-text");
const flashcardBox = document.getElementById("flashcard-card-box");
const btnCardPresent = document.getElementById("btn-card-present");
const btnCardAbsent = document.getElementById("btn-card-absent");
const deckResetBtn = document.getElementById("deck-reset-btn");

const completionBox = document.getElementById("completion-box");
const compPresentTxt = document.getElementById("comp-present-txt");
const compAbsentTxt = document.getElementById("comp-absent-txt");
const btnCompletionClose = document.getElementById("btn-completion-close");

// --- VIEW SWITCHING NAVIGATION ---
function initTabs() {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetTab = link.getAttribute("data-tab");

      // Set active link class
      tabLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Show/hide views
      tabPanels.forEach(panel => {
        if (panel.id === `${targetTab}-view`) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });

      // Special re-renders when swapping tabs
      if (targetTab === "dashboard") {
        renderRosterList();
      } else if (targetTab === "flashcards") {
        renderFlashcardDeck();
      }
    });
  });
}

// --- DASHBOARD STATISTICS SYNC ---
function updateDashboardStats() {
  const total = students.length;
  const present = students.filter(s => s.status === "present").length;
  const absent = students.filter(s => s.status === "absent").length;

  statTotal.innerText = total;
  statPresent.innerText = present;
  statAbsent.innerText = absent;
}

// --- ROSTER LIST RENDERER ---
function renderRosterList() {
  rosterBody.innerHTML = "";

  // Always align state with selectedDate before rendering
  syncStudentsStatusWithSelectedDate();

  students.forEach(student => {
    const row = document.createElement("div");
    row.className = "student-row";

    row.innerHTML = `
      <div class="row-avatar-cell">
        <img src="${student.avatar}" class="row-avatar" alt="${student.name}" draggable="false">
      </div>
      <div class="row-details">
        <h4>${student.name}</h4>
        <p>Roll Number: ${student.rollNumber}</p>
      </div>
      <div class="row-actions">
        <div class="status-switch">
          <button class="switch-btn unmarked ${student.status === 'unmarked' ? 'active' : ''}" data-status="unmarked">Unm</button>
          <button class="switch-btn absent ${student.status === 'absent' ? 'active' : ''}" data-status="absent">Abs</button>
          <button class="switch-btn present ${student.status === 'present' ? 'active' : ''}" data-status="present">Pres</button>
        </div>
      </div>
    `;

    // Click student info columns to open details popup modal
    const profilePicTrigger = row.querySelector(".row-avatar-cell");
    const profileTextTrigger = row.querySelector(".row-details");
    [profilePicTrigger, profileTextTrigger].forEach(trigger => {
      trigger.addEventListener("click", () => {
        showStudentDetails(student.id);
      });
    });

    // Add click listeners to quick status toggle buttons
    const buttons = row.querySelectorAll(".switch-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedStatus = btn.getAttribute("data-status");
        
        // Update date specific database status
        setStudentStatusForDate(student.id, selectedStatus, selectedDate);
        syncStudentsStatusWithSelectedDate();
        
        // Re-render and sync stats
        renderRosterList();
        updateDashboardStats();
      });
    });

    rosterBody.appendChild(row);
  });
}

// --- FLASHCARD ENGINE ---
function renderFlashcardDeck() {
  const total = students.length;

  // 1. Completion view handler
  if (currentCardIndex >= total) {
    showCompletionScreen();
    return;
  }

  // Display deck details
  completionBox.style.display = "none";
  flashcardBox.style.display = "block";
  document.querySelector(".deck-controls").style.display = "flex";
  deckProgressText.innerText = `Student ${currentCardIndex + 1} of ${total}`;

  const student = students[currentCardIndex];

  // Reset rotation state to show front face
  flashcardBox.classList.remove("flipped");

  // Populate data on front and back
  document.getElementById("card-front-img").src = student.avatar;
  document.getElementById("card-front-name").innerText = student.name;
  
  document.getElementById("card-back-roll").innerText = student.rollNumber;
  
  const statusLabel = document.getElementById("card-back-status");
  statusLabel.innerText = student.status;
  statusLabel.className = `status-tag ${student.status}`;

  // Apply slide-in animation
  flashcardBox.className = "flashcard-container card-slide-in";
}

// Answer card handler (Triggers animation, updates state, and advances index)
function handleCardAction(status) {
  const total = students.length;
  if (currentCardIndex >= total) return;

  const student = students[currentCardIndex];
  
  // Save status to date-specific database
  setStudentStatusForDate(student.id, status, selectedDate);
  syncStudentsStatusWithSelectedDate();

  // Apply CSS transition animation classes
  flashcardBox.className = "flashcard-container"; // clear current animation
  void flashcardBox.offsetWidth; // Force DOM repaint
  
  const animationClass = status === "present" ? "card-slide-right" : "card-slide-left";
  flashcardBox.classList.add(animationClass);

  // Sync dashboard background values immediately
  updateDashboardStats();

  // Wait for the slide transition to complete (350ms)
  setTimeout(() => {
    currentCardIndex++;
    renderFlashcardDeck();
  }, 350);
}

// Complete deck summary panel
function showCompletionScreen() {
  flashcardBox.style.display = "none";
  document.querySelector(".deck-controls").style.display = "none";
  deckProgressText.innerText = "Check-In Completed";

  const presentCount = students.filter(s => s.status === "present").length;
  const absentCount = students.filter(s => s.status === "absent").length;

  compPresentTxt.innerText = presentCount;
  compAbsentTxt.innerText = absentCount;
  
  completionBox.style.display = "block";
}

// Deck controls event handlers
function initFlashcardEvents() {
  // Present button action
  btnCardPresent.addEventListener("click", () => handleCardAction("present"));

  // Absent button action
  btnCardAbsent.addEventListener("click", () => handleCardAction("absent"));

  // 3D Flipping trigger on card click
  flashcardBox.addEventListener("click", () => {
    flashcardBox.classList.toggle("flipped");
  });

  // Soft reset deck indices
  deckResetBtn.addEventListener("click", () => {
    // Clear all status back to unmarked for the selectedDate
    students.forEach(s => {
      setStudentStatusForDate(s.id, "unmarked", selectedDate);
    });
    syncStudentsStatusWithSelectedDate();
    currentCardIndex = 0;
    
    // Refresh views
    updateDashboardStats();
    renderFlashcardDeck();
  });

  // Completion close button redirects to dashboard view
  btnCompletionClose.addEventListener("click", () => {
    const dashboardTabLink = document.querySelector('.tab-link[data-tab="dashboard"]');
    if (dashboardTabLink) dashboardTabLink.click();
  });
}

// --- STUDENT DETAILS MODAL CONTROLLERS ---
function initDetailsModal() {
  const modal = document.getElementById("details-modal");
  const closeBtn = document.getElementById("close-details-modal");

  // Hide details popup
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // Hide on background wrapper click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}

function showStudentDetails(studentId) {
  const modal = document.getElementById("details-modal");
  const modalBody = document.getElementById("details-modal-body");
  const student = students.find(s => s.id === studentId);
  if (!student) return;

  // Count aggregate data across all recorded dates to calculate presence percentage
  const dates = Object.keys(attendanceDb);
  let totalDays = 0;
  let presentDays = 0;

  dates.forEach(d => {
    const status = getStudentStatusForDate(student.id, d);
    if (status !== "unmarked") {
      totalDays++;
      if (status === "present") presentDays++;
    }
  });

  const rate = totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 100;
  const currentStatus = getStudentStatusForDate(student.id, selectedDate);

  modalBody.innerHTML = `
    <img src="${student.avatar}" class="modal-avatar" alt="${student.name}">
    <h3>${student.name}</h3>
    <p class="modal-roll">${student.rollNumber}</p>
    
    <div class="modal-info-grid">
      <p><strong>Class Section:</strong> <span>Grade 10-A</span></p>
      <p><strong>Advisor Teacher:</strong> <span>Prof. Harrison</span></p>
      <p><strong>Status on ${formatFriendlyDate(selectedDate)}:</strong> <span class="status-tag ${currentStatus}">${currentStatus}</span></p>
      <p><strong>Term Attendance Rate:</strong> <span>${rate}% (${presentDays}/${totalDays} Days)</span></p>
      <p><strong>Enrollment Status:</strong> <span style="color:var(--accent-green); font-weight:600;">Active</span></p>
    </div>
  `;

  modal.classList.add("active");
}

function formatFriendlyDate(dateString) {
  const parts = dateString.split("-");
  if (parts.length !== 3) return dateString;
  const date = new Date(parts[0], parts[1] - 1, parts[2]);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// --- INIT MAIN ENGINE ---
window.addEventListener("DOMContentLoaded", () => {
  // Initialize mock attendance database
  initAttendanceDatabase();
  
  // Set default picker value to selected date (today)
  const dateInput = document.getElementById("attendance-date");
  dateInput.value = selectedDate;
  
  initTabs();
  initFlashcardEvents();
  initDetailsModal();
  
  // Handle Date Input changes
  dateInput.addEventListener("change", (e) => {
    selectedDate = e.target.value;
    syncStudentsStatusWithSelectedDate();
    
    // Refresh active panel
    updateDashboardStats();
    
    const activePanel = document.querySelector(".tab-panel.active");
    if (activePanel.id === "dashboard-view") {
      renderRosterList();
    } else {
      currentCardIndex = 0; // restart deck review for new date
      renderFlashcardDeck();
    }
  });

  // Set initial metrics and lists
  syncStudentsStatusWithSelectedDate();
  updateDashboardStats();
  renderRosterList();
});
