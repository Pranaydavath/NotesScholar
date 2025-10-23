# NotesScholar 🎓📝

**Notes made easy for college students.**

## About The Project

NotesScholar is a web application designed specifically for college students (initially focused on VNRVJIET) to provide a centralized and easily accessible repository for lecture notes and PDF materials. Finding reliable and organized notes, especially during exam periods, can be a significant challenge for students. This project aims to solve that problem by bringing together notes for various subjects across different engineering branches into one convenient platform.

Built with basic web technologies and powered by Firebase, NotesScholar offers a simple interface for students to quickly find and access the resources they need.

## Features ✨

* **Centralized Notes:** Access lecture notes and PDFs for various engineering branches (CSE, ECE, IT, EEE, EIE, Civil, Mech, CSD, AIML, IOT, Auto, CSBS, CYS).
* **Google Sign-In:** Secure and easy login using Google accounts powered by Firebase Authentication.
* **Organized by Branch:** Notes are grouped by department using a clear card-based interface.
* **Direct Google Drive Access:** Each branch card links directly to a Google Drive folder containing the relevant notes.
* **Contribution Link:** Allows users to contribute their notes via a Google Form.

## Technology Stack 💻

* **Frontend:** HTML, CSS, JavaScript
* **Backend & Services:**
    * Firebase Authentication (Google Sign-In)
    * Firebase Realtime Database (User info storage)
    * Firebase Hosting
* **External Storage:** Google Drive (for hosting the notes PDFs/files)

## Project Structure Overview

The user interface (`mainpage.html`) primarily uses HTML `<section>` tags to group content and displays each branch as a card. These cards contain an image and a button linking to the respective Google Drive folder. User authentication is handled via `script.js` interacting with Firebase Auth.

## Challenges Faced

One of the main challenges during the development was not just technical, but also logistical. Collecting comprehensive notes required communicating with class coordinators across multiple departments and explaining the value proposition of the project to encourage contributions.

## Contributing 🤝

Have notes you want to share? Use the "Contribute" link on the website! Your contributions help make this resource better for everyone.

## License

*(You can add license information here if you choose one, e.g., MIT License)*
