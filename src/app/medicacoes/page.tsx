"use client";
import { useEffect } from "react";

export default function MedicationsPage() {
  useEffect(() => {
    if ("serviceWorker" in navigator === false) {
      return;
    }

    // request permission for notifications

    Notification.requestPermission().then((permission) => {
      if (permission !== "granted") {
        return;
      }
    });

    // register service worker and subscribe to push notifications

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

        // await fetch("/api/notifications/push", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     subscription,
        //   }),
        // });
      });
  }, []);

  return (
    <>
      <main>
        <h1>Medicações</h1>
      </main>
    </>
  );
}
