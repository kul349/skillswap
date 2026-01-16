
"use client"
import { Search } from "lucide-react";
import { useState } from "react";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const mockUsers = [
    {
      id: 1,
      name: "Sarah Johnson",
      skillsOffered: ["React", "TypeScript", "UI/UX Design"],
      skillsWanted: ["Python", "Data Science"],
    },
    {
      id: 2,
      name: "Michael Chen",
      skillsOffered: ["Python", "Machine Learning", "Data Science"],
      skillsWanted: ["React", "Web Development"],
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      skillsOffered: ["Graphic Design", "Figma", "Illustration"],
      skillsWanted: ["Video Editing", "Motion Graphics"],
    },
    {
      id: 4,
      name: "James Wilson",
      skillsOffered: ["Node.js", "MongoDB", "Backend Development"],
      skillsWanted: ["DevOps", "AWS"],
    },
    {
      id: 5,
      name: "Aisha Patel",
      skillsOffered: ["Photography", "Photoshop", "Lightroom"],
      skillsWanted: ["Graphic Design", "Branding"],
    },
    {
      id: 6,
      name: "David Kim",
      skillsOffered: ["Java", "Spring Boot", "Microservices"],
      skillsWanted: ["Kotlin", "Android Development"],
    },
    {
      id: 7,
      name: "Lisa Anderson",
      skillsOffered: ["Content Writing", "Copywriting", "SEO"],
      skillsWanted: ["Social Media Marketing", "Email Marketing"],
    },
    {
      id: 8,
      name: "Carlos Martinez",
      skillsOffered: ["Video Editing", "After Effects", "Motion Graphics"],
      skillsWanted: ["3D Modeling", "Blender"],
    },
    {
      id: 9,
      name: "Nina Kowalski",
      skillsOffered: ["iOS Development", "Swift", "SwiftUI"],
      skillsWanted: ["Flutter", "Cross-platform Development"],
    },
  ];

  // Current user's skills for the modal
  const currentUserSkills = ["JavaScript", "React", "CSS", "HTML", "Git"];
  const handleSendRequest = (data) => {
    console.log("swap request sent:", {
      to: selectedUser?.name,
      offering: data.skillsToOffer,
      requesting: data.skillsToRequest,
    });
    alert(`swap request sent to ${selectedUser?.name}`);
    setSelectedUser(null);
  };
  // Filter users based on search query
  const filteredUsers = mockUsers.filter((user) => {
    const query = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) ||
      user.skillsOffered.some((skill) => skill.toLowerCase().includes(query)) ||
      user.skillsWanted.some((skill) => skill.toLowerCase().includes(query))
    );
  });

 
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* search section */}
        <div className="mb-8">
          <div className="relative max-w-2xl ">
            <Search className="absolute  left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search users by name or skills..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
        {/* result */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            showing{" "}
            <span className="font-semibold text-gray-900 ">
              {filteredUsers.length}
            </span> users
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            filteredUsers.map((user)=>(
              
            ))
          }
        </div>
      </main>
    </div>
  );
}
