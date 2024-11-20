import axios from "axios";

// Axiosの設定
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // Laravel APIのエンドポイント
  withCredentials: true, // Cookieを使用して認証を管理
});

// ログインAPI
export const login = async (email, password) => {
  const response = await axiosInstance.post("/login", {
    email,
    password,
  });
  return response.data;
};

// 他のAPI通信関数もここに追加可能
