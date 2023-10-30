const config = {
  APPWRITE_URL: String(import.meta.env.VITE_APP_APPWRITE_URL),
  APPWRITE_PROJECT_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  APPWRITE_DB_ID: String(import.meta.env.VITE_APPWRITE_DB_ID),
  APPWRITE_COLLECTION_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  APPWRITE_BUCKET_ID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default config;
