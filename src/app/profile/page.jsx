"use client";

import { UserInfo } from "@/components/userinfo/UserInfo";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5">
        <Avatar className="h-24 w-24 rounded-full overflow-hidden border shadow">
          <Avatar.Image
            src={user?.image || ""}
            alt={user?.name || "User"}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <Avatar.Fallback className="text-lg font-semibold">
            {user?.name?.charAt(0) || "U"}
          </Avatar.Fallback>
        </Avatar>

        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>

        <UserInfo />
      </Card>
    </div>
  );
};

export default ProfilePage;
