# Your Bot Army

## Project Description
Your Bot Army is a React-based application where users can manage a collection of bots. Users can:
- View all available bots.
- Enlist bots into their army.
- Remove bots from their army.
- Permanently discharge bots (deleting them from the backend and UI).

This project showcases state management, CRUD operations, and component-based architecture in React.

---

## Features
1. **View All Bots:**
   - Displays all bots available in the system.

2. **Enlist Bots:**
   - Add bots to "Your Army".

3. **Remove Bots from Army:**
   - Remove bots from the army without deleting them from the backend.

4. **Discharge Bots:**
   - Permanently delete a bot from the backend and UI.

---

## Tech Stack
- **Frontend:** React (JavaScript, JSX)
- **Backend:** JSON Server (for mock API)
- **Styling:** CSS

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn
- JSON Server (for the backend mock API)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd your-bot-army
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the JSON Server:
   ```bash
   npx json-server --watch db.json --port 8001
   ```
   The backend will be running at `http://localhost:8001`.

4. Start the React application:
   ```bash
   npm start
   ```

5. Open the application in your browser at `http://localhost:3000`.

---

## File Structure
```
.
├── src
│   ├── components
│   │   ├── BotCard.js       # Displays individual bot details
│   │   ├── BotCollection.js # Displays all available bots
│   │   ├── YourBotArmy.js   # Manages bots in the user's army
│   │   └── App.js           # Main application file
│   ├── styles
│   │   └── App.css          # Application styling
│   └── index.js             # Entry point
├── db.json                  # Mock database for JSON Server
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

---

## Usage Instructions
1. Start the application by following the setup instructions.
2. Explore the "All Bots" section to view all available bots.
3. Click "Enlist" to add a bot to your army.
4. Navigate to the "Your Army" section to manage enlisted bots.
5. Use the "Remove" button to remove bots from your army.
6. Use the "Discharge" button to permanently delete a bot.

---

## API Endpoints (JSON Server)
- **GET /bots**: Retrieve all bots.
- **DELETE /bots/:id**: Delete a specific bot by ID.

---

## Contributions
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

## Acknowledgments
- JSON Server for providing a mock API.
- React for its component-based architecture.

---

### Author
Melody

Feel free to reach out with any questions or feedback!

