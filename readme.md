# Podcast Manager

## 📖 Description

**Podcast Manager** is a Node.js application built with TypeScript for creating and managing an API to centralize different types of video podcasts categorized by themes. Think of it as a "Netflix for Podcasts," where users can explore and filter podcast episodes with ease.

## 🎯 Domain

- **Focus**: Video Podcasts


## 🚀 Features

- **List Podcast Episodes**: Browse podcasts grouped into categories such as *Healthy*, *Fitness*, *Mindset*, and *Humor*.
- **Filter Episodes by Podcast Name**: Quickly find episodes from a specific podcast.


## 🔍 How It Works

### List Podcast Episodes by Category

- **Endpoint**: `GET /api/list`
- **Description**: Returns a list of all podcast episodes organized into categories.
- **Response**:
  ```json
  [
      {
          "podcastName": "flow",
          "episode": "Ramon DINO foi surpreendido e PERDEU O TÍTULO",
          "videoid": "CUdQTF-yueg",
          "categorias": ["healthy", "bodybuilder", "sport"]
      },
      {
          "podcastName": "flow",
          "episode": "GUTO GALAMBA - Flow #366",
          "videoid": "ymJ0K76DeU4",
          "categorias": ["healthy", "bodybuilder"]
      }
  ]
  ```

### Filter Episodes by Podcast Name

- **Endpoint**: `GET /api/episode?p={podcastName}`
- **Description**: Returns a filtered list of podcast episodes based on the provided podcast name.
- **Query Parameter**:
  - `p` (string): The name of the podcast to filter episodes by.
- **Example Request**:
  ```
  GET /api/episode?p=flow
  ```
- **Response**:
  Same as above, but filtered to only include episodes matching the podcast name.

## 🛠️ Technologies Used

- **Node.js**: Backend framework.
- **TypeScript**: Type-safe language for scalability and maintainability.
- **fs** (File System): For reading and handling JSON files as a database.
- **Path**: Managing file paths dynamically.

## 📂 Folder Structure

```
podcast-manager/
├── src/
│   ├── controllers/
│   │   └── podcastController.ts  # Handles API logic
│   ├── models/
│   │   └── podcastModel.ts       # Podcast type definitions
│   ├── repositories/
│   │   └── podcast.json          # Local JSON data file
│   ├── routes/
│   │   └── podcastRoutes.ts      # API routes
│   └── index.ts                  # Entry point for the server
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 How to Run Locally

### Prerequisites

- Node.js installed (v16 or higher recommended)
- TypeScript installed globally (`npm install -g typescript`)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/vinirecoaro/PodcastManager-NodeJS.git
   cd podcast-manager
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile TypeScript to JavaScript and start server:

   ```bash
   npm run start:dist
   ```

5. Access the API at:

   ```
   http://localhost:3636
   ```

## 🌐 API Endpoints

| Method | Endpoint                         | Description                     |
| ------ | -------------------------------- | ------------------------------- |
| `GET`  | `/api/list`                      | Retrieve all podcast episodes   |
| `GET`  | `/api/episode?p={podcastName}`   | Filter episodes by podcast name |


