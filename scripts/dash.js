// Sample JavaScript to dynamically generate content (you may use real data from the backend)

// Sample data (replace with actual data from the backend)
const courseSchedule = [
    { day: "Monday", course: "Course 1", time: "9:00 AM - 10:30 AM" },
    { day: "Tuesday", course: "Course 2", time: "11:00 AM - 12:30 PM" },
    // Add more course schedule data
  ];
  
  const upcomingAssignments = [
    { course: "Course 1", assignment: "Assignment 1", dueDate: "2023-08-15" },
    { course: "Course 2", assignment: "Assignment 3", dueDate: "2023-08-20" },
    // Add more upcoming assignments data
  ];
  
  const importantAnnouncements = [
    "Announcement 1",
    "Announcement 2",
    // Add more announcements
  ];
  
  const upcomingEvents = [
    { event: "Event 1", date: "2023-08-10", time: "2:00 PM" },
    { event: "Event 2", date: "2023-08-15", time: "3:30 PM" },
    // Add more upcoming events data
  ];
  
  // Generate course schedule
  const scheduleTable = document.querySelector(".schedule-table");
  courseSchedule.forEach((course) => {
    const scheduleEntry = document.createElement("p");
    scheduleEntry.textContent = `${course.day}: ${course.course} - ${course.time}`;
    scheduleTable.appendChild(scheduleEntry);
  });
  
  // Generate upcoming assignments
  const upcomingAssignmentsList = document.querySelector(".upcoming-assignments ul");
  upcomingAssignments.forEach((assignment) => {
    const assignmentItem = document.createElement("li");
    assignmentItem.textContent = `${assignment.course}: ${assignment.assignment} - Due Date: ${assignment.dueDate}`;
    upcomingAssignmentsList.appendChild(assignmentItem);
  });
  
  // Generate
  