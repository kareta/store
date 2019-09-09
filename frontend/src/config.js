let baseUrl = '';

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://localhost:3001/api';
} else {
  baseUrl = 'http://localhost:3001/api';
}

export const API_URL = baseUrl;