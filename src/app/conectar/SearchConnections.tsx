"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useUserDataContext } from "@/contexts/UserDataContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchConnections() {
  const { userData } = useUserDataContext();

  const [search, setSearch] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("search", search);
  };

  useEffect(() => {
    // if (!userData) {
    //   router.push("/login");
    // }
    console.log("userData", userData);
  });

  return (
    <section className="w-full min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Procurar Conexões</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Procure por seus familiares e médicos para se conectar
          </p>
        </div>
        <div className="w-full space-y-4">
          <form onSubmit={handleSearch}>
            <div className="w-full max-w-[400px] mx-auto rounded-lg border">
              <div className="flex h-10 items-center p-2">
                <Button type="submit" size="sm">
                  <Search className="h-4 w-4 mr-2.5 opacity-50" />
                </Button>

                <Input
                  className="flex-1 appearance-none outline-none border-none bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Search users"
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// export default function Component() {
//   return (
//     <div className="flex flex-col w-full min-h-screen">
//       <div className="grid min-h-screen px-4 space-y-4 text-center lg:px-10 place-content-center">
//         <div className="space-y-2">
//           <h1 className="text-3xl font-bold">Find Users</h1>
//           <p className="text-gray-500 dark:text-gray-400">Search for other users to connect with for support</p>
//         </div>
//         <div className="w-full space-y-4">
//           <div className="w-full max-w-[400px] mx-auto rounded-lg border">
//             <div className="flex h-10 items-center p-2">
//               <SearchIcon className="h-4 w-4 mr-2.5 opacity-50" />
//               <Input
//                 className="flex-1 appearance-none outline-none border-none bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
//                 placeholder="Search users"
//                 type="text"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex-1 overflow-hidden max-w-7xl mx-auto">
//         <div className="border-t border-b divide-y divide-gray-200 dark:divide-gray-800">
//           <div className="flex items-center p-4 space-x-4">
//             <img
//               alt="Avatar"
//               className="rounded-full"
//               height="48"
//               src="/placeholder.svg"
//               style={{
//                 aspectRatio: "48/48",
//                 objectFit: "cover",
//               }}
//               width="48"
//             />
//             <div className="flex-1 grid gap-1">
//               <div className="font-semibold">Alice Smith</div>
//               <div className="text-sm text-gray-500 dark:text-gray-400">@alice.smith</div>
//             </div>
//             <Button size="sm">Add as Friend</Button>
//           </div>
//           <div className="flex items-center p-4 space-x-4">
//             <img
//               alt="Avatar"
//               className="rounded-full"
//               height="48"
//               src="/placeholder.svg"
//               style={{
//                 aspectRatio: "48/48",
//                 objectFit: "cover",
//               }}
//               width="48"
//             />
//             <div className="flex-1 grid gap-1">
//               <div className="font-semibold">Bob Johnson</div>
//               <div className="text-sm text-gray-500 dark:text-gray-400">@bob.johnson</div>
//             </div>
//             <Button size="sm">Add as Friend</Button>
//           </div>
//           <div className="flex items-center p-4 space-x-4">
//             <img
//               alt="Avatar"
//               className="rounded-full"
//               height="48"
//               src="/placeholder.svg"
//               style={{
//                 aspectRatio: "48/48",
//                 objectFit: "cover",
//               }}
//               width="48"
//             />
//             <div className="flex-1 grid gap-1">
//               <div className="font-semibold">Eve Williams</div>
//               <div className="text-sm text-gray-500 dark:text-gray-400">@eve.williams</div>
//             </div>
//             <Button size="sm">Add as Friend</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
