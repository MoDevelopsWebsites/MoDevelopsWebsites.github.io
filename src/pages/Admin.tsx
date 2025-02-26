import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, FileText, DollarSign, Plus, Eye, EyeOff, Trash2, LogOut } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { supabase, type FortniteAccount } from '@/lib/supabase';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [accounts, setAccounts] = useState<FortniteAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [newAccount, setNewAccount] = useState({
    title: '',
    description: '',
    price: '',
    image: ''
  });

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsAuthenticated(true);
        fetchAccounts();
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'stunnacamz123@gmail.com',
        password
      });

      if (error) {
        toast.error('Invalid password');
        return;
      }

      if (data.session) {
        setIsAuthenticated(true);
        toast.success('Successfully logged in!');
        fetchAccounts();
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Failed to log in. Please try again.');
    } finally {
      setLoginLoading(false);
      setPassword('');
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setIsAuthenticated(false);
      setAccounts([]);
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to log out');
    }
  };

  const fetchAccounts = async () => {
    try {
      const { data, error } = await supabase
        .from('fortnite_accounts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAccounts(data || []);
    } catch (error) {
      console.error('Error fetching accounts:', error);
      toast.error('Failed to fetch accounts');
    }
  };

  const handleAddAccount = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const validationErrors = [];
    if (!newAccount.title.trim()) validationErrors.push('Title is required');
    if (!newAccount.description.trim()) validationErrors.push('Description is required');
    if (!newAccount.price || parseFloat(newAccount.price) <= 0) validationErrors.push('Valid price is required');
    if (!newAccount.image.trim()) validationErrors.push('Image URL is required');

    if (validationErrors.length > 0) {
      toast.error(validationErrors.join(', '));
      return;
    }

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error('Please log in again');
        setIsAuthenticated(false);
        return;
      }

      const accountData = {
        title: newAccount.title.trim(),
        description: newAccount.description.trim(),
        price: parseFloat(newAccount.price),
        image: newAccount.image.trim(),
        published: false,
        user_id: session.user.id
      };

      const { data, error } = await supabase
        .from('fortnite_accounts')
        .insert([accountData])
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        toast.error('Failed to add account: ' + error.message);
        return;
      }

      setAccounts([data, ...accounts]);
      setNewAccount({ title: '', description: '', price: '', image: '' });
      toast.success('Account added successfully!');
    } catch (error) {
      console.error('Error adding account:', error);
      toast.error('Failed to add account. Please try again.');
    }
  };

  const handleTogglePublish = async (account: FortniteAccount) => {
    try {
      const { error } = await supabase
        .from('fortnite_accounts')
        .update({ published: !account.published })
        .eq('id', account.id);

      if (error) throw error;

      setAccounts(accounts.map(a => 
        a.id === account.id ? { ...a, published: !a.published } : a
      ));
      
      toast.success(`Account ${account.published ? 'unpublished' : 'published'} successfully!`);
    } catch (error) {
      console.error('Error toggling publish:', error);
      toast.error('Failed to update account');
    }
  };

  const handleRemoveAccount = async (id: string) => {
    try {
      const { error } = await supabase
        .from('fortnite_accounts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setAccounts(accounts.filter(account => account.id !== id));
      toast.success('Account removed successfully!');
    } catch (error) {
      console.error('Error removing account:', error);
      toast.error('Failed to remove account');
    }
  };

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="pt-16 min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <div className="flex justify-center mb-6">
            <Lock className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Enter your password"
                disabled={loginLoading}
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loginLoading}
            >
              {loginLoading ? 'Logging in...' : 'Login'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex justify-between items-center"
        >
          <div>
            <h1 className="text-4xl font-bold mb-4">Account Management</h1>
            <p className="text-muted-foreground">Add and manage Fortnite accounts</p>
          </div>
          <motion.button
            onClick={handleLogout}
            className="flex items-center space-x-2 bg-destructive text-destructive-foreground px-4 py-2 rounded-md hover:bg-destructive/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">Add New Account</h2>
            <form onSubmit={handleAddAccount} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    value={newAccount.title}
                    onChange={(e) => setNewAccount(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full pl-10 pr-4 py-2 rounded-md border focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="e.g., Rare Fortnite Account"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={newAccount.description}
                  onChange={(e) => setNewAccount(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  rows={4}
                  placeholder="Account details, skins, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Price ($)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="number"
                    value={newAccount.price}
                    onChange={(e) => setNewAccount(prev => ({ ...prev, price: e.target.value }))}
                    className="w-full pl-10 pr-4 py-2 rounded-md border focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="29.99"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Image URL</label>
                <input
                  type="url"
                  value={newAccount.image}
                  onChange={(e) => setNewAccount(prev => ({ ...prev, image: e.target.value }))}
                  className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Account
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">Current Stock</h2>
            {accounts.length === 0 ? (
              <p className="text-center text-muted-foreground">No accounts in stock</p>
            ) : (
              accounts.map((account) => (
                <motion.div
                  key={account.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card p-4 rounded-lg shadow flex items-center space-x-4"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold">{account.title}</h3>
                    <p className="text-muted-foreground text-sm">${account.price}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {account.published ? 'Published' : 'Draft'}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <motion.button
                      onClick={() => handleTogglePublish(account)}
                      className={`text-sm px-2 py-1 rounded ${
                        account.published
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {account.published ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </motion.button>
                    <motion.button
                      onClick={() => handleRemoveAccount(account.id)}
                      className="text-sm px-2 py-1 rounded bg-red-100 text-red-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Admin;