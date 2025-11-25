"use client";

import { useState, useEffect } from "react";
import { 
  Plus, 
  Edit, 
  Trash2, 
  X, 
  Save,
  User,
  Briefcase,
  FileText,
  Loader2
} from "lucide-react";

interface TeamMember {
  id: string;
  Name: string;
  Designation: string;
  Description: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function TeamManagement() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [formData, setFormData] = useState({
    Name: "",
    Designation: "",
    Description: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  // Fetch all team members
  const fetchMembers = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/management");
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error("Error fetching members:", error);
      alert("Failed to load team members");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const openModal = (member?: TeamMember) => {
    if (member) {
      setEditingMember(member);
      setFormData({
        Name: member.Name,
        Designation: member.Designation,
        Description: member.Description
      });
    } else {
      setEditingMember(null);
      setFormData({ Name: "", Designation: "", Description: "" });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingMember(null);
    setFormData({ Name: "", Designation: "", Description: "" });
    setSubmitting(false);
  };

  const handleSubmit = async () => {
    if (!formData.Name.trim() || !formData.Designation.trim()) {
      alert("Name and Designation are required");
      return;
    }

    setSubmitting(true);
    try {
      if (editingMember) {
        const response = await fetch(`/api/management?id=${editingMember.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          await fetchMembers();
          closeModal();
          alert("Team member updated successfully!");
        } else throw new Error("Update failed");
      } else {
        const response = await fetch("/api/management", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          await fetchMembers();
          closeModal();
          alert("Team member added successfully!");
        } else throw new Error("Create failed");
      }
    } catch (error) {
      console.error("Error saving member:", error);
      alert("Failed to save team member");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!deleteConfirm) {
      setDeleteConfirm(id);
      return;
    }

    try {
      const response = await fetch(`/api/management?id=${id}`, { method: "DELETE" });
      if (response.ok) {
        await fetchMembers();
        alert("Team member deleted successfully!");
      } else throw new Error("Delete failed");
    } catch (error) {
      console.error("Error deleting member:", error);
      alert("Failed to delete team member");
    } finally {
      setDeleteConfirm(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-0 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Team Management</h1>
              <p className="text-slate-600 mt-1">Manage your leadership and team members</p>
            </div>
            <button
              onClick={() => openModal()}
              className="flex items-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-blue px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Plus size={20} />
              Add Team Member
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <Loader2 className="animate-spin text-blue-600" size={48} />
          </div>
        ) : members.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-16 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue to-yellow rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="text-blue" size={40} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No team members yet</h3>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              Start building your team by adding leadership and key members
            </p>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Plus size={20} />
              Add Your First Member
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {members.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-16 h-16 bg-yellow rounded-2xl flex items-center justify-center text-blue font-bold text-2xl shadow-lg">
                      {member.Name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => openModal(member)}
                        className="p-2.5 text-slate-500 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(member.id)}
                        className={`p-2.5 rounded-xl transition-all ${
                          deleteConfirm === member.id
                            ? "bg-red-500 text-blue shadow-md"
                            : "text-slate-500 hover:bg-red-50 hover:text-red-600"
                        }`}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.Name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">{member.Designation}</p>
                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                    {member.Description || "No description provided."}
                  </p>
                </div>

                {deleteConfirm === member.id && (
                  <div className="bg-red-50 border-t border-red-200 px-6 py-4">
                    <p className="text-sm text-red-800 font-medium mb-3">
                      Permanently delete this member?
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setDeleteConfirm(null)}
                        className="text-sm text-slate-600 hover:text-slate-800 font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleDelete(member.id)}
                        className="text-sm font-medium text-red-600 hover:text-red-700"
                      >
                        Yes, Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Slide-over Modal */}
        {modalOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity h-full"
              onClick={closeModal}
            />
            <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-yellow px-6 py-5 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-blue">
                  {editingMember ? "Edit Member" : "Add New Member"}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 text-blue hover:bg-white/20 rounded-xl transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Form Body */}
              <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                    <User size={18} className="text-blue-600" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.Name}
                    onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                    <Briefcase size={18} className="text-yellow" />
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.Designation}
                    onChange={(e) => setFormData({ ...formData, Designation: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                    placeholder="CEO & Founder"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                    <FileText size={18} className="text-blue-600" />
                    Description
                  </label>
                  <textarea
                    value={formData.Description}
                    onChange={(e) => setFormData({ ...formData, Description: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all resize-none"
                    placeholder="Brief professional bio..."
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-5 border-t border-slate-200 bg-slate-50/80 backdrop-blur">
                <div className="flex justify-end gap-3">
                  <button
                    onClick={closeModal}
                    disabled={submitting}
                    className="px-6 py-3 text-slate-700 font-medium hover:bg-slate-200 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="flex items-center gap-2.5 px-7 py-3 bg-gradient-to-r from-blue-600 to-yellow text-blue font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-blue-700 hover:to-yellow transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save size={20} />
                        {editingMember ? "Update" : "Add"} Member
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}