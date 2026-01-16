import { useState } from "react";
import { X } from "lucide-react";

export function SwapRequestCard({ user, currentUserSkills, onClose, onSendRequest }) {
  const [selectedOfferedSkills, setSelectedOfferedSkills] = useState([]);
  const [selectedRequestedSkills, setSelectedRequestedSkills] = useState([]);

  const toggleOfferedSkill = (Skill) => {
    setSelectedOfferedSkills((prev) =>
      prev.includes(Skill) ? prev.filter((s) => s !== Skill) : [...prev, Skill]
    );
  };

  const toogleRequestedSkill = (Skill) => {
    setSelectedRequestedSkills((prev) =>
      prev.includes(Skill) ? prev.filter(s !== Skill) : [...prev, Skill]
    );
  };

  const handleSendRequest = () => {
    if (selectedOfferedSkills.length === 0 || selectedRequestedSkills === 0) {
      alert(
        "Please select at least  one skill to offer and one skill to request"
      );
      return;
    }
    onSendRequest({
      skillsToRequest: selectedRequestedSkills,
      skillsToOffered: selectedOfferedSkills,
    });
  };
  return <div>
    
  </div>;
}