// API service to connect to backend instead of direct database connection
const API_BASE_URL = 'http://localhost:3001/api';

// Fetch chat histories for a specific user
export const fetchUserChatHistories = async (userEmail: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat-histories/${encodeURIComponent(userEmail)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user chat histories:', error);
    throw error;
  }
};

// Fetch chat histories (admin only)
export const fetchChatHistories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat-histories`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching chat histories:', error);
    throw error;
  }
};

// Fetch document metadata
export const fetchDocumentMetadata = async () => {
  try {
    // This would be implemented when we have the full backend
    return [];
  } catch (error) {
    console.error('Error fetching document metadata:', error);
    throw error;
  }
};

// Fetch document rows by dataset ID
export const fetchDocumentRows = async (datasetId: string) => {
  try {
    // This would be implemented when we have the full backend
    return [];
  } catch (error) {
    console.error('Error fetching document rows:', error);
    throw error;
  }
};

// Fetch document embeddings
export const fetchDocumentEmbeddings = async () => {
  try {
    // This would be implemented when we have the full backend
    return [];
  } catch (error) {
    console.error('Error fetching document embeddings:', error);
    throw error;
  }
};

// Get dashboard statistics
export const fetchDashboardStats = async () => {
  try {
    // This would be implemented when we have the full backend
    return {
      documentMetadataCount: 0,
      documentRowsCount: 0,
      documentEmbeddingsCount: 0,
      chatHistoriesCount: 0
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    throw error;
  }
};