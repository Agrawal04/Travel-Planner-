const places = {
    mahakaleshwar: {
      title: "Shree Mahakaleshwar Mandir",
      description:
        "Located in Ujjain, this temple is one of the twelve Jyotirlingas dedicated to Lord Shiva.",
      additionalParagraph:
        "The temple attracts millions of devotees every year during Mahashivratri. It is famous for the Bhasma Aarti performed early in the morning.",
      location: "Ujjain, Madhya Pradesh, India",
      history:
        "The temple dates back to ancient times and has undergone renovations during the Maratha era.",
      visitingHours: "4:00 AM - 11:00 PM",
      entryFee: "Free",
    },
    khajuraho: {
      title: "Khajuraho Temple",
      description:
        "The Khajuraho Temples are a UNESCO World Heritage Site, famous for their stunning architecture.",
      additionalParagraph:
        "The temples were rediscovered in the 19th century and have become one of India's most visited tourist destinations.",
      location: "Khajuraho, Madhya Pradesh, India",
      history:
        "Built between 950-1050 AD by the Chandela dynasty, these temples are known for their intricate carvings.",
      visitingHours: "6:00 AM - 6:00 PM",
      entryFee: "INR 40 for Indian citizens, INR 600 for foreigners",
    },
  };
  
  

  const modal = document.getElementById("detailsModal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close-btn");
  

  document.querySelectorAll(".details-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const placeKey = button.getAttribute("data-place");
      const place = places[placeKey];
  
      if (place) {
        modalTitle.textContent = place.title;
        modalDescription.textContent = place.description;
        modal.style.display = "flex";
      }
    });
  });
  
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
 
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  
  