'use client';

import React, { useState, useEffect } from 'react';
import { Upload, FileText, CheckCircle2, AlertCircle, Loader2, Trash2, Edit3, Eye, ShieldCheck, DollarSign, Tag, RefreshCw, Lock } from 'lucide-react';
import { CATEGORIES, PdfMarketplaceItem } from '@/lib/pdfMarketplace';

export default function AdminPdfMarketplace() {
  const [adminSecret, setAdminSecret] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');

  // Upload Form State
  const [file, setFile] = useState<File | null>(null);
  const [previewImageFile, setPreviewImageFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<string>('Bridal Neck');
  const [priceInr, setPriceInr] = useState<number>(49);
  const [isFreeForVip, setIsFreeForVip] = useState(true);
  const [tags, setTags] = useState('bridal, tracing, modern');
  const [formKey, setFormKey] = useState(0);

  // Statuses
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgressMsg, setUploadProgressMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // List State
  const [items, setItems] = useState<PdfMarketplaceItem[]>([]);
  const [isLoadingItems, setIsLoadingItems] = useState(false);

  // Check saved secret in localStorage
  useEffect(() => {
    const savedSecret = localStorage.getItem('aari_admin_secret');
    if (savedSecret) {
      setAdminSecret(savedSecret);
      verifySecret(savedSecret);
    }
  }, []);

  const verifySecret = async (secretToTest: string) => {
    setIsLoadingItems(true);
    setAuthError('');
    try {
      const res = await fetch('/api/admin/pdf/manage', {
        headers: { 'x-admin-secret': secretToTest },
      });
      if (res.ok) {
        const data = await res.json();
        setIsAuthenticated(true);
        localStorage.setItem('aari_admin_secret', secretToTest);
        setItems(data.items || []);
      } else {
        setIsAuthenticated(false);
        setAuthError('Invalid Admin Secret Key. Access Denied.');
      }
    } catch (err) {
      setAuthError('Connection error verifying secret');
    } finally {
      setIsLoadingItems(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminSecret) return;
    verifySecret(adminSecret);
  };

  const handleLogout = () => {
    localStorage.removeItem('aari_admin_secret');
    setAdminSecret('');
    setIsAuthenticated(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      if (selected.type !== 'application/pdf') {
        setErrorMsg('Please select a valid PDF file (.pdf)');
        return;
      }
      setFile(selected);
      setErrorMsg('');
      if (!title) {
        // Auto format title from file name
        const cleanName = selected.name.replace(/\.pdf$/i, '').replace(/[-_]+/g, ' ');
        setTitle(cleanName.charAt(0).toUpperCase() + cleanName.slice(1));
      }
    }
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) {
      setErrorMsg('PDF File and Title are required');
      return;
    }

    setIsUploading(true);
    setErrorMsg('');
    setSuccessMsg('');
    setUploadProgressMsg('1/3 Uploading original PDF file...');

    try {
      const formData = new FormData();
      formData.append('file', file);
      if (previewImageFile) {
        formData.append('preview_image', previewImageFile);
      }
      formData.append('title', title);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('price_inr', priceInr.toString());
      formData.append('is_free_for_vip', isFreeForVip ? 'true' : 'false');
      formData.append('tags', tags);

      setUploadProgressMsg('2/3 Injecting automatic watermark with pdf-lib...');

      const res = await fetch('/api/admin/pdf/process', {
        method: 'POST',
        headers: {
          'x-admin-secret': adminSecret,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      setUploadProgressMsg('3/3 Saving listing to Marketplace!');
      setSuccessMsg(`Success! "${title}" is watermarked and listed at ₹${priceInr}.`);
      
      // Reset form fields completely
      setFile(null);
      setPreviewImageFile(null);
      setTitle('');
      setDescription('');
      setFormKey((prev) => prev + 1);
      
      // Refresh items list in table immediately
      await verifySecret(adminSecret);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to upload & watermark PDF');
    } finally {
      setIsUploading(false);
      setUploadProgressMsg('');
    }
  };

  const handleTogglePublished = async (item: PdfMarketplaceItem) => {
    try {
      const res = await fetch('/api/admin/pdf/manage', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-secret': adminSecret,
        },
        body: JSON.stringify({
          id: item.id,
          is_published: !item.is_published,
        }),
      });
      if (res.ok) {
        verifySecret(adminSecret);
      }
    } catch (err) {
      console.error('Error toggling status:', err);
    }
  };

  const handleDeleteItem = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}" from the marketplace?`)) return;

    try {
      const res = await fetch(`/api/admin/pdf/manage?id=${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-secret': adminSecret,
        },
      });
      if (res.ok) {
        verifySecret(adminSecret);
      }
    } catch (err) {
      console.error('Error deleting item:', err);
    }
  };

  // If not authenticated, show secret entry screen
  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem',
        background: 'radial-gradient(circle at top, rgba(212, 175, 55, 0.15), transparent 70%)'
      }}>
        <div style={{
          maxWidth: '420px', width: '100%', padding: '2.5rem', borderRadius: '16px',
          background: 'rgba(20, 16, 32, 0.85)', backdropFilter: 'blur(16px)',
          border: '1px solid rgba(212, 175, 55, 0.3)', boxShadow: '0 20px 50px rgba(0,0,0,0.6)', textAlign: 'center'
        }}>
          <ShieldCheck size={44} style={{ color: '#D4AF37', margin: '0 auto 1rem' }} />
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F3E8FF', marginBottom: '0.5rem' }}>
            Admin Portal Access
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#9CA3AF', marginBottom: '1.5rem' }}>
            Enter your Admin Secret Key to manage the PDF Marketplace
          </p>

          {authError && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#f87171', padding: '0.75rem', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '1rem'
            }}>
              {authError}
            </div>
          )}

          <form onSubmit={handleLoginSubmit}>
            <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#D4AF37' }} />
              <input
                type="password"
                placeholder="Enter Admin Secret Key"
                value={adminSecret}
                onChange={(e) => setAdminSecret(e.target.value)}
                style={{
                  width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(212, 175, 55, 0.3)',
                  color: '#FFF', fontSize: '0.95rem', outline: 'none'
                }}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoadingItems}
              style={{
                width: '100%', padding: '0.85rem', borderRadius: '8px', background: 'linear-gradient(135deg, #D4AF37, #AA771C)',
                border: 'none', color: '#000', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
              }}
            >
              {isLoadingItems ? <Loader2 className="animate-spin" size={18} /> : <span>Authenticate & Access</span>}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', color: '#E5E7EB' }}>
      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, background: 'linear-gradient(135deg, #FFF, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            PDF Marketplace Admin Portal
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#9CA3AF' }}>
            Upload PDFs, set prices, and let the engine automatically inject watermarks
          </p>
        </div>
        <button
          onClick={handleLogout}
          style={{
            background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#f87171', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem'
          }}
        >
          Lock / Logout
        </button>
      </div>

      {/* Grid: Left Upload Form, Right Stats & Listings */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
        
        {/* Upload Form Card */}
        <div style={{
          background: 'rgba(20, 16, 32, 0.75)', borderRadius: '16px', border: '1px solid rgba(212, 175, 55, 0.25)',
          padding: '1.75rem', backdropFilter: 'blur(12px)', height: 'fit-content'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: '#D4AF37' }}>
            <Upload size={22} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', margin: 0 }}>
              Upload & Watermark PDF
            </h2>
          </div>

          {errorMsg && (
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#f87171', padding: '0.75rem', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <AlertCircle size={16} />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div style={{ background: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34, 197, 94, 0.3)', color: '#86efac', padding: '0.75rem', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleUploadSubmit}>
            {/* File Input Zone */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.4rem' }}>
                Select Clean PDF File *
              </label>
              <input
                key={`pdf-file-${formKey}`}
                type="file"
                accept=".pdf,application/pdf"
                onChange={handleFileChange}
                disabled={isUploading}
                style={{
                  width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.04)',
                  border: '1px dashed rgba(212, 175, 55, 0.4)', color: '#FFF', fontSize: '0.85rem', cursor: 'pointer'
                }}
              />
              {file && (
                <div style={{ marginTop: '0.4rem', fontSize: '0.8rem', color: '#86efac', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <FileText size={14} />
                  <span>Selected PDF: {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)</span>
                </div>
              )}
            </div>

            {/* Optional Cover/Preview Image */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.4rem' }}>
                Preview Thumbnail Image <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 400 }}>(Optional Cover Image PNG/JPG)</span>
              </label>
              <input
                key={`preview-file-${formKey}`}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setPreviewImageFile(e.target.files[0]);
                  }
                }}
                disabled={isUploading}
                style={{
                  width: '100%', padding: '0.55rem', borderRadius: '8px', background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)', color: '#FFF', fontSize: '0.8rem', cursor: 'pointer'
                }}
              />
              {previewImageFile && (
                <div style={{ marginTop: '0.3rem', fontSize: '0.78rem', color: '#FCD34D' }}>
                  ✓ Cover Image Selected: {previewImageFile.name}
                </div>
              )}
            </div>

            {/* Title */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.4rem' }}>
                Design Title *
              </label>
              <input
                type="text"
                placeholder="e.g. Royal Bridal Peacock Neck Trace Pattern"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={isUploading}
                required
                style={{
                  width: '100%', padding: '0.65rem 0.8rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)', color: '#FFF', fontSize: '0.9rem'
                }}
              />
            </div>

            {/* Category & Price Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.4rem' }}>
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  disabled={isUploading}
                  style={{
                    width: '100%', padding: '0.65rem 0.8rem', borderRadius: '8px', background: '#1A1625',
                    border: '1px solid rgba(255,255,255,0.15)', color: '#FFF', fontSize: '0.85rem'
                  }}
                >
                  {CATEGORIES.filter(c => c !== 'All Designs').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.4rem' }}>
                  Price (₹ INR)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={priceInr}
                  onChange={(e) => setPriceInr(Number(e.target.value))}
                  disabled={isUploading}
                  style={{
                    width: '100%', padding: '0.65rem 0.8rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.15)', color: '#FFF', fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>

            {/* Description */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.4rem' }}>
                Description
              </label>
              <textarea
                placeholder="High resolution printable tracing paper layout for Aari blouse embroidery..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={isUploading}
                rows={3}
                style={{
                  width: '100%', padding: '0.65rem 0.8rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)', color: '#FFF', fontSize: '0.85rem', resize: 'vertical'
                }}
              />
            </div>

            {/* VIP Checkbox */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.85rem', color: '#F3E8FF' }}>
                <input
                  type="checkbox"
                  checked={isFreeForVip}
                  onChange={(e) => setIsFreeForVip(e.target.checked)}
                  disabled={isUploading}
                  style={{ accentColor: '#D4AF37', width: '16px', height: '16px' }}
                />
                <span>Include Free for Active VIP Subscribers</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isUploading}
              style={{
                width: '100%', padding: '0.85rem', borderRadius: '8px', background: 'linear-gradient(135deg, #D4AF37, #AA771C)',
                border: 'none', color: '#000', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
              }}
            >
              {isUploading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  <span>{uploadProgressMsg || 'Watermarking & Saving...'}</span>
                </>
              ) : (
                <>
                  <Upload size={18} />
                  <span>Upload & Inject Watermark</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Catalog Table Card */}
        <div style={{
          background: 'rgba(20, 16, 32, 0.75)', borderRadius: '16px', border: '1px solid rgba(212, 175, 55, 0.25)',
          padding: '1.75rem', backdropFilter: 'blur(12px)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', margin: 0 }}>
              Live Marketplace Listings ({items.length})
            </h2>
            <button
              onClick={() => verifySecret(adminSecret)}
              style={{ background: 'transparent', border: 'none', color: '#D4AF37', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem' }}
            >
              <RefreshCw size={14} />
              <span>Refresh</span>
            </button>
          </div>

          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#9CA3AF' }}>
              <FileText size={36} style={{ opacity: 0.4, margin: '0 auto 0.5rem' }} />
              <p>No PDFs uploaded yet. Use the form on the left to add your first PDF design listing.</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: '#D4AF37' }}>
                    <th style={{ padding: '0.6rem 0.5rem' }}>Item</th>
                    <th style={{ padding: '0.6rem 0.5rem' }}>Category</th>
                    <th style={{ padding: '0.6rem 0.5rem' }}>Price</th>
                    <th style={{ padding: '0.6rem 0.5rem' }}>VIP</th>
                    <th style={{ padding: '0.6rem 0.5rem' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <td style={{ padding: '0.75rem 0.5rem', fontWeight: 600, color: '#FFF' }}>
                        <div>{item.title}</div>
                        <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>Pages: {item.page_count}</div>
                      </td>
                      <td style={{ padding: '0.75rem 0.5rem', color: '#D1D5DB' }}>
                        {item.category}
                      </td>
                      <td style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: '#86efac' }}>
                        ₹{item.price_inr}
                      </td>
                      <td style={{ padding: '0.75rem 0.5rem' }}>
                        {item.is_free_for_vip ? (
                          <span style={{ background: 'rgba(212, 175, 55, 0.2)', color: '#D4AF37', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>FREE</span>
                        ) : (
                          <span style={{ color: '#9CA3AF', fontSize: '0.75rem' }}>Paid</span>
                        )}
                      </td>
                      <td style={{ padding: '0.75rem 0.5rem' }}>
                        <div style={{ display: 'flex', gap: '0.4rem' }}>
                          <button
                            onClick={() => handleTogglePublished(item)}
                            title={item.is_published ? 'Unpublish' : 'Publish'}
                            style={{
                              background: item.is_published ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                              border: 'none', color: item.is_published ? '#86efac' : '#f87171',
                              padding: '0.3rem 0.5rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.75rem'
                            }}
                          >
                            {item.is_published ? 'Live' : 'Draft'}
                          </button>
                          <button
                            onClick={() => handleDeleteItem(item.id, item.title)}
                            title="Delete"
                            style={{ background: 'rgba(239, 68, 68, 0.2)', border: 'none', color: '#f87171', padding: '0.3rem 0.5rem', borderRadius: '4px', cursor: 'pointer' }}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
