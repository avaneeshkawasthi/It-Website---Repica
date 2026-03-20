import { useState } from 'react';
import { useFirebase } from '../context/FirebaseContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { motion } from 'motion/react';
import { User, Mail, Calendar, Edit3, Save, X, LogOut } from 'lucide-react';

export default function Profile() {
  const { user, profile, logout, loading } = useFirebase();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(profile?.displayName || '');
  const [bio, setBio] = useState(profile?.bio || '');
  const [isSaving, setIsSaving] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <User className="w-16 h-16 text-slate-700 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
          <p className="text-slate-400 mb-8">Please sign in to view your profile and manage your account settings.</p>
        </div>
      </div>
    );
  }

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, {
        displayName,
        bio
      });
      setIsEditing(false);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${user.uid}`);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="relative mb-12">
        <div className="h-48 w-full rounded-3xl bg-gradient-to-r from-indigo-600/20 to-emerald-600/20 border border-white/5" />
        <div className="absolute -bottom-12 left-8 flex items-end gap-6">
          <div className="w-32 h-32 rounded-3xl bg-slate-900 border-4 border-[#020617] overflow-hidden shadow-2xl">
            {user.photoURL ? (
              <img src={user.photoURL} alt={user.displayName || ''} className="w-full h-full object-cover" />
            ) : (
              <User className="w-full h-full p-8 text-slate-700" />
            )}
          </div>
          <div className="pb-4">
            <h1 className="text-4xl font-bold text-white mb-1">{profile?.displayName || user.displayName}</h1>
            <p className="text-slate-400 flex items-center gap-2">
              <Mail className="w-4 h-4" /> {user.email}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div className="md:col-span-2 space-y-8">
          <section className="glass-card p-8 border border-white/5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <User className="w-5 h-5 text-indigo-400" /> About Me
              </h2>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                >
                  <Edit3 className="w-4 h-4" /> Edit Profile
                </button>
              ) : (
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="text-sm text-slate-400 hover:text-slate-300 flex items-center gap-1 transition-colors"
                  >
                    <X className="w-4 h-4" /> Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors font-semibold"
                  >
                    <Save className="w-4 h-4" /> {isSaving ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              )}
            </div>

            {isEditing ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Display Name</label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Bio</label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed">
                  {profile?.bio || "No bio added yet. Click edit to tell the community about yourself."}
                </p>
              </div>
            )}
          </section>
        </div>

        <div className="space-y-8">
          <section className="glass-card p-6 border border-white/5">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Account Stats</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Joined
                </span>
                <span className="text-sm font-medium">
                  {profile?.createdAt?.toDate ? profile.createdAt.toDate().toLocaleDateString() : 'Recently'}
                </span>
              </div>
            </div>
          </section>

          <button
            onClick={logout}
            className="w-full glass-card p-4 border border-red-500/10 hover:bg-red-500/5 text-red-400 transition-all flex items-center justify-center gap-2 font-semibold"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
