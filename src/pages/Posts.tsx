import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, deleteDoc, doc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { useFirebase } from '../context/FirebaseContext';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Send, MessageSquare, Heart, Share2, User } from 'lucide-react';

interface Post {
  id: string;
  authorId: string;
  authorName: string;
  authorPhoto?: string;
  content: string;
  createdAt: any;
  likes: number;
}

export default function Posts() {
  const { user, profile, login } = useFirebase();
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Post[];
      setPosts(postsData);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'posts');
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newPost.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'posts'), {
        authorId: user.uid,
        authorName: profile?.displayName || user.displayName || 'Anonymous',
        authorPhoto: profile?.photoURL || user.photoURL || '',
        content: newPost.trim(),
        createdAt: serverTimestamp(),
        likes: 0
      });
      setNewPost('');
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'posts');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (postId: string) => {
    try {
      await deleteDoc(doc(db, 'posts', postId));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `posts/${postId}`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <header className="mb-12">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Community Feed</h1>
        <p className="text-slate-400 text-lg">Connect with other innovators and share your thoughts.</p>
      </header>

      {user ? (
        <form onSubmit={handleSubmit} className="glass-card p-6 mb-12 border border-white/5">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center overflow-hidden border border-white/10">
              {user.photoURL ? (
                <img src={user.photoURL} alt={user.displayName || ''} className="w-full h-full object-cover" />
              ) : (
                <User className="w-6 h-6 text-indigo-400" />
              )}
            </div>
            <div className="flex-grow">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full bg-transparent border-none focus:ring-0 text-lg resize-none placeholder:text-slate-600"
                rows={3}
              />
              <div className="flex justify-end mt-4 pt-4 border-t border-white/5">
                <button
                  type="submit"
                  disabled={!newPost.trim() || isSubmitting}
                  className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2"
                >
                  {isSubmitting ? 'Posting...' : (
                    <>
                      Post <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className="glass-card p-12 text-center mb-12 border border-white/5">
          <MessageSquare className="w-12 h-12 text-indigo-400 mx-auto mb-4 opacity-50" />
          <h2 className="text-2xl font-semibold mb-2">Join the conversation</h2>
          <p className="text-slate-400 mb-6">Sign in to share your thoughts and interact with the community.</p>
          <button
            onClick={login}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-slate-200 transition-all"
          >
            Sign in with Google
          </button>
        </div>
      )}

      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card p-6 border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border border-white/5">
                    {post.authorPhoto ? (
                      <img src={post.authorPhoto} alt={post.authorName} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-100">{post.authorName}</h3>
                    <p className="text-xs text-slate-500">
                      {post.createdAt?.toDate ? post.createdAt.toDate().toLocaleDateString() : 'Just now'}
                    </p>
                  </div>
                </div>
                {user?.uid === post.authorId && (
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-slate-600 hover:text-red-400 p-2 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-6 whitespace-pre-wrap">
                {post.content}
              </p>

              <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                <button className="flex items-center gap-2 text-slate-500 hover:text-pink-400 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm">Reply</span>
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-emerald-400 transition-colors ml-auto">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
