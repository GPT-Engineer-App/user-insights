import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Index = () => {
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  const fetchUserInfo = async () => {
    setError(null);
    setUserInfo(null);
    try {
      if (!userId) {
        throw new Error("User ID cannot be empty");
      }

      // Mock data for demonstration purposes
      const mockData = {
        id: userId,
        username: "MockUser",
        discriminator: "1234",
        avatar: "mock-avatar-url",
      };

      setUserInfo(mockData);
    } catch (err) {
      console.error("Error fetching user info:", err);
      setError(err.message);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Discord User Lookup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Enter Discord User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <Button onClick={fetchUserInfo}>Lookup</Button>
        </CardContent>
      </Card>
      {error && (
        <Alert>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {userInfo && (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>User Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>ID:</strong> {userInfo.id}</p>
            <p><strong>Username:</strong> {userInfo.username}</p>
            <p><strong>Discriminator:</strong> {userInfo.discriminator}</p>
            <p><strong>Avatar:</strong> <img src={`https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar}.png`} alt="Avatar" /></p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Index;