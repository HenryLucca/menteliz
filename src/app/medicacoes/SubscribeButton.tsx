"use client";
import { Button } from "@/components/ui/button";
import { useUserDataContext } from "@/contexts/UserDataContext";

export default function SubscribeButton() {
  const { userData } = useUserDataContext();

  const handleSubscribe = async () => {
    if ("serviceWorker" in navigator === false) {
      return;
    }

    Notification.requestPermission().then((permission) => {
      if (permission !== "granted") {
        return;
      }
    });

    navigator.serviceWorker
      .register("/service-worker.js")
      .then(async (serviceWorker) => {
        let subscription = await serviceWorker.pushManager?.getSubscription();
        if (!subscription) {
          const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
          subscription = await serviceWorker.pushManager.subscribe({
            applicationServerKey: publicKey,
            userVisibleOnly: true,
          });
        }
        console.log(subscription);
        await fetch("/api/notifications/push", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subscription,
            userData,
          }),
        });
      });
  };

  return <Button onClick={handleSubscribe}>Inscrever</Button>;
}
