"use client";

import { useState, useEffect } from "react";

interface Address {
  id: string;
  officeName: string;
  officeAddress: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface AddressFormData {
  officeName: string;
  officeAddress: string;
  phone: string;
  email: string;
}

export default function AddressPage() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [formData, setFormData] = useState<AddressFormData>({
    officeName: "",
    officeAddress: "",
    phone: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSlideFormOpen, setIsSlideFormOpen] = useState(false);

  // Fetch all addresses
  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/address");
      const result = await response.json();

      if (result.success) {
        setAddresses(result.data || []);
      } else {
        setError("Failed to fetch addresses");
      }
    } catch (err) {
      setError("Failed to fetch addresses");
      console.log("error occurred", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      officeName: "",
      officeAddress: "",
      phone: "",
      email: "",
    });
    setEditingAddress(null);
    setError("");
    setSuccess("");
    setIsSlideFormOpen(false);
  };

  // Open slide form for creating new address
  const openCreateForm = () => {
    resetForm();
    setIsSlideFormOpen(true);
  };

  // Open slide form for editing address
  const openEditForm = (address: Address) => {
    setFormData({
      officeName: address.officeName,
      officeAddress: address.officeAddress,
      phone: address.phone,
      email: address.email,
    });
    setEditingAddress(address);
    setIsSlideFormOpen(true);
  };

  // Create new address
  const handleCreateAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess("Address created successfully!");
        resetForm();
        fetchAddresses();
      } else {
        setError(result.error || "Failed to create address");
      }
    } catch (err) {
      setError("Failed to create address");
      console.log("error occurred", err);
    }
  };

  // Update address
  const handleUpdateAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!editingAddress) return;

    try {
      const response = await fetch(`/api/address?id=${editingAddress.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess("Address updated successfully!");
        resetForm();
        fetchAddresses();
      } else {
        setError(result.error || "Failed to update address");
      }
    } catch (err) {
      setError("Failed to update address");
      console.error("error occurred", err);
    }
  };

  // Delete address
  const handleDeleteAddress = async (id: string) => {
    if (!confirm("Are you sure you want to delete this address?")) {
      return;
    }

    try {
      const response = await fetch(`/api/address?id=${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.success) {
        setSuccess("Address deleted successfully!");
        fetchAddresses();
      } else {
        setError(result.error || "Failed to delete address");
      }
    } catch (err) {
      setError("Failed to delete address");
      console.error("error occurred", err);
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="grid gap-6">
              {[1, 2].map((n) => (
                <div key={n} className="bg-white p-6 rounded-lg shadow">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-autof">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div className=" ">
            <h1 className="text-3xl font-bold text-gray-900">
              Office Addresses
            </h1>
            <p className="text-gray-600 mt-2">
              Manage your office locations and contact information
            </p>
          </div>
          <div className="mb-6">
            <button
              onClick={openCreateForm}
              className="bg-blue hover:bg-blue text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Add New Address
            </button>
          </div>
        </div>

        {/* Success/Error Messages */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800">{success}</p>
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Add Address Button */}

        {/* Addresses Grid */}
        <div className="grid gap-6">
          {addresses.length === 0 ? (
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-gray-500 text-lg">
                No addresses found. Add your first office address.
              </p>
            </div>
          ) : (
            addresses.map((address) => (
              <div
                key={address.id}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {address.officeName}
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => openEditForm(address)}
                      className="text-blue hover:text-blue-800 font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteAddress(address.id)}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Address
                    </label>
                    <p className="text-gray-900 whitespace-pre-line">
                      {address.officeAddress}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Phone
                      </label>
                      <p className="text-gray-900 whitespace-pre-line">
                        {address.phone}
                      </p>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Email
                      </label>
                      <p className="text-gray-900">{address.email}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Created: {formatDate(address.createdAt)}</span>
                      <span>Updated: {formatDate(address.updatedAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Slide-in Form */}
        <div
          className={`fixed inset-0 z-50 overflow-hidden ${
            isSlideFormOpen ? "block" : "hidden"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={resetForm}
          ></div>

          {/* Slide Panel */}
          <div
            className={`absolute inset-y-0 right-0 max-w-lg w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              isSlideFormOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingAddress ? "Edit Address" : "Add New Address"}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Form */}
              <div className="flex-1 overflow-y-auto">
                <form
                  onSubmit={
                    editingAddress ? handleUpdateAddress : handleCreateAddress
                  }
                  className="p-6"
                >
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="officeName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Office Name *
                      </label>
                      <input
                        type="text"
                        id="officeName"
                        name="officeName"
                        value={formData.officeName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., UAE Office"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="officeAddress"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Office Address *
                      </label>
                      <textarea
                        id="officeAddress"
                        name="officeAddress"
                        value={formData.officeAddress}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter full office address..."
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., 971 50 2056381"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., contact@company.com"
                      />
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="flex space-x-3 mt-8 pt-6 border-t border-gray">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="flex-1 px-4 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-3 bg-blue text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      {editingAddress ? "Update Address" : "Create Address"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
