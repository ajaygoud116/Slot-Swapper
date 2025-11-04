# Slot-Swapper
This is a small full-stack project I made where users can create events, make them swappable, and exchange their time slots with others. It includes authentication, a calendar/dashboard, a marketplace, and a notifications system — all connected dynamically.

## Features

#Authentication
- Login and Register pages with simple forms.
- Uses AuthContext to store the logged-in user and token.
- After logging in, user is redirected to the dashboard.
- Protected routes — can’t access any main page without logging in.

# Dashboard
- Users can create events by filling a simple form.
- Each event has a status → BUSY, SWAPPABLE, or SWAP_PENDING.
- You can toggle the event status by clicking a button (like “Make Swappable”).
- When the status changes, the page updates instantly without refresh.

# Marketplace
- Fetches and displays all available swappable slots from other users.
- Each slot has a “Request Swap” button.
- When clicked, a small popup/modal appears where the user can choose one of their own   swappable slots to offer.
- Sends swap request to backend API.

# Notification
Has two main sections:
-   Incoming Requests → swaps other users sent you.
-   Outgoing Requests → swaps you have sent to others.
- Each incoming request has Accept or Reject buttons.
- Once a swap is accepted, both users’ events update automatically to reflect the swap.

# State Management
- State updates dynamically using React Hooks — no page reloads are needed.
