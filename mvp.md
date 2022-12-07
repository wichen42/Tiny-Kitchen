Tiny Order

Backend

Functional Requirements:
- Place an Order (POST) - HP
- See a list of all Orders (GET) - K
- Mark order as complete (PATCH) - K
- Cancel an Order (DELETE) - Both

Other: 
- Edit a live order (PATCH)
- Kitchen vs Hungry People (Users)
- Reviews and Comments
- Menu
- Kitchen Inventory
- Error Handling (Required)
- Visual Design

Non-Functional Requirements: 
- Low Latency (<= 200ms)
- Available (See Something)
- REliable (eg. Persistance)


Frontend

All we need:
- Path - https://tinykitchen.dev/orders (POST, PATCH, GET, DELETE)
- Data Structure - {items: string(256), isComplete: bool, name: string(256), address: string(256)}
- Javascript/TypeScript - Make these API calls via HTTP


Components

App:
- OrderForm
- Orders
- Order