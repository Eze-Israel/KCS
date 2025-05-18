
export interface LoginPayload {
    username: string;
    password: string;
  }
  
  export const mockLogin = async ({ username, password }: LoginPayload): Promise<{ token: string }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "2345" && password === "password") {
          resolve({ token: "mock-token-123" });
        } else {
          reject(new Error("Incorrect username or password"));
        }
      }, 1000);
    });
  };
  