"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Trophy, 
  Image as ImageIcon, 
  Users, 
  LayoutDashboard, 
  LogOut, 
  Plus,
  Trash2,
  Edit,
  X,
  Upload,
  Loader2
} from "lucide-react";
import { uploadImage } from "@/app/actions/upload";
import { addWinner, addGalleryItem, getWinners, getGallery, deleteItem } from "@/app/actions/firestore";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("winners");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<any[]>([]);
  const [formData, setFormData] = useState<any>({ name: "", category: "", year: "", description: "" });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [notification, setNotification] = useState<{type: "success" | "error", message: string} | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = activeTab === "winners" ? await getWinners() : await getGallery();
      setItems(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    router.push("/admin/login");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let imageUrl = "";
      if (selectedFile) {
        const uploadFormData = new FormData();
        uploadFormData.append("file", selectedFile);
        const result: any = await uploadImage(uploadFormData);
        imageUrl = result.secure_url;
      }

      if (activeTab === "winners") {
        await addWinner({ ...formData, imageUrl });
      } else {
        await addGalleryItem({ imageUrl, ...formData });
      }

      setIsModalOpen(false);
      setFormData({ name: "", category: "", year: "", description: "" });
      setSelectedFile(null);
      setNotification({ type: "success", message: "Item successfully saved!" });
      fetchData();
      
      // Auto-hide notification
      setTimeout(() => setNotification(null), 5000);
    } catch (err) {
      console.error(err);
      setNotification({ type: "error", message: (err as Error).message || "Failed to save item." });
      setTimeout(() => setNotification(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    try {
      await deleteItem(activeTab, id);
      setNotification({ type: "success", message: "Item deleted successfully." });
      setTimeout(() => setNotification(null), 5000);
      fetchData();
    } catch (err) {
      console.error(err);
      setNotification({ type: "error", message: "Failed to delete item." });
      setTimeout(() => setNotification(null), 5000);
    }
  };

  const tabs = [
    { id: "dashboard", label: "Overview", icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: "winners", label: "Winners", icon: <Trophy className="w-5 h-5" /> },
    { id: "gallery", label: "Gallery", icon: <ImageIcon className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-[#030303] flex overflow-hidden">
      {/* Sidebar - Same as before */}
      <aside className="w-64 border-r border-white/5 bg-black/20 flex flex-col pt-8">
        <div className="px-6 mb-10 flex items-center space-x-3">
          <div className="w-8 h-8 bg-gold rounded flex items-center justify-center">
            <Trophy className="text-[#030303] w-5 h-5" />
          </div>
          <span className="font-bold text-white tracking-tighter">WINSHA ADMIN</span>
        </div>

        <nav className="flex-grow px-4 space-y-2 mt-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeTab === tab.id 
                  ? "bg-gold text-[#030303] font-bold shadow-[0_4px_20px_-5px_rgba(212,175,55,0.4)]" 
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              {tab.icon}
              <span className="tracking-wide">{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 font-bold rounded-xl transition-all border border-red-500/20 shadow-[0_4px_20px_-5px_rgba(239,68,68,0.2)]"
          >
            <LogOut className="w-5 h-5" />
            <span className="uppercase tracking-widest text-xs">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-10 overflow-y-auto relative">
        {/* Notification Toast */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`absolute top-10 right-10 z-50 px-6 py-4 rounded-xl shadow-lg border backdrop-blur-md flex items-center space-x-3 ${
                notification.type === "success" 
                  ? "bg-green-500/10 border-green-500/20 text-green-400" 
                  : "bg-red-500/10 border-red-500/20 text-red-400"
              }`}
            >
              <span>{notification.message}</span>
              <button onClick={() => setNotification(null)} className="opacity-50 hover:opacity-100 transition-opacity">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <header className="flex items-center justify-between mb-10 bg-white/5 p-6 rounded-2xl border border-white/5">
          <div>
            <h1 className="text-3xl font-bold text-white capitalize flex items-center space-x-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-white">
                {activeTab} Management
              </span>
            </h1>
            <p className="text-white/60 mt-1">Manage your website content and media assets.</p>
          </div>
          {(activeTab === "winners" || activeTab === "gallery") && (
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-gold text-[#030303] font-bold rounded-xl flex items-center space-x-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              <Plus className="w-5 h-5" />
              <span>Add New</span>
            </button>
          )}
        </header>

        {isLoading ? (
          <div className="flex items-center justify-center h-64 text-gold">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div key={item.id} className="glass-card p-6 flex flex-col group relative">
                <div className="aspect-video bg-white/5 rounded-xl mb-4 overflow-hidden relative">
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-20">
                      <ImageIcon className="w-10 h-10" />
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-all">
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="p-3 bg-red-500/20 rounded-xl hover:bg-red-500/40 text-red-400 transition-colors"
                    >
                      <Trash2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <h3 className="font-bold text-white text-lg mt-2">{item.name || "Untitled"}</h3>
                <p className="text-gold text-sm font-medium mt-1">
                  {item.category} • {item.year}
                </p>
                {item.description && (
                  <p className="text-white/60 text-xs mt-3 line-clamp-2 leading-relaxed">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Upload Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card w-full max-w-2xl p-8 relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold text-white mb-8">Add New {activeTab === "winners" ? "Winner" : "Gallery Item"}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gold/80">Title / Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-gold/50 outline-none"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gold/80">Category</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-gold/50 outline-none"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gold/80">Year</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-gold/50 outline-none"
                      value={formData.year}
                      onChange={(e) => setFormData({...formData, year: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gold/80">Media Upload</label>
                    <div className="relative group overflow-hidden bg-white/5 border border-white/10 border-dashed rounded-xl h-[58px] flex items-center justify-center">
                      {selectedFile ? (
                        <span className="text-gold text-sm truncate px-4">{selectedFile.name}</span>
                      ) : (
                        <span className="text-white/40 text-sm flex items-center space-x-2">
                          <Upload className="w-4 h-4" />
                          <span>Select Image</span>
                        </span>
                      )}
                      <input 
                        type="file" 
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gold/80">Description</label>
                  <textarea 
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-gold/50 outline-none min-h-[100px]"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                <button 
                  disabled={isLoading}
                  className="w-full py-4 bg-gold text-[#030303] font-bold rounded-xl flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Plus className="w-5 h-5" />
                      <span>Save Item</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
