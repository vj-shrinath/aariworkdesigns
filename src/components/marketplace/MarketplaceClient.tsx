'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter, Sparkles, Crown, Download, Eye, ShieldCheck, CheckCircle2, Lock, ArrowRight, ShoppingBag, X, FileText, Star } from 'lucide-react';
import { CATEGORIES, PdfMarketplaceItem, getMarketplacePdfs } from '@/lib/pdfMarketplace';
import { useSubscription } from '@/context/SubscriptionContext';
import styles from './MarketplaceClient.module.css';

interface MarketplaceClientProps {
  initialItems?: PdfMarketplaceItem[];
  locale?: string;
}

export default function MarketplaceClient({ initialItems = [], locale = 'en' }: MarketplaceClientProps) {
  const { isSubscribed, openModal: openSubModal, user } = useSubscription();

  const [items, setItems] = useState<PdfMarketplaceItem[]>(initialItems);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Designs');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Active Tab: 'catalog' | 'my-purchases'
  const [activeTab, setActiveTab] = useState<'catalog' | 'my-purchases'>('catalog');


  // Track loading and broken image URLs
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Single Item Checkout & Product Detail State
  const [selectedProduct, setSelectedProduct] = useState<PdfMarketplaceItem | null>(null);
  const [checkoutItem, setCheckoutItem] = useState<PdfMarketplaceItem | null>(null);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState(user?.email || '');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [isProcessingPay, setIsProcessingPay] = useState(false);
  const [payError, setPayError] = useState('');

  // Fetch Items on Category or Search change
  const isInitialMount = React.useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      // We already have initialItems from SSR for "All Designs" and empty search
      if (selectedCategory === 'All Designs' && !searchQuery && initialItems.length > 0) return; 
    }

    async function loadData() {
      setLoading(true);
      const data = await getMarketplacePdfs(selectedCategory, searchQuery);
      setItems(data);
      setLoading(false);
    }
    loadData();
  }, [selectedCategory, searchQuery]);

  // Pre-fill saved user details
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBuyerName(localStorage.getItem('aari_saved_name') || '');
      setBuyerEmail(user?.email || localStorage.getItem('aari_saved_email') || '');
      setBuyerPhone(localStorage.getItem('aari_saved_phone') || '');
    }
  }, [user]);

  const handleSinglePurchaseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutItem || !buyerName || !buyerEmail || !buyerPhone) {
      setPayError('Please fill in all customer details');
      return;
    }
    setIsProcessingPay(true);
    setPayError('');

    try {
      const res = await fetch('/api/payu/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          itemType: 'pdf_single',
          pdfId: checkoutItem.id,
          amount: checkoutItem.price_inr,
          title: checkoutItem.title,
          customerName: buyerName,
          customerEmail: buyerEmail,
          customerPhone: buyerPhone.replace(/\D/g, ''),
          userId: user?.id,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Payment initiation failed');

      localStorage.setItem('aari_saved_name', buyerName);
      localStorage.setItem('aari_saved_email', buyerEmail);
      localStorage.setItem('aari_saved_phone', buyerPhone);

      if (data.mockRedirectUrl) {
        window.location.href = data.mockRedirectUrl;
        return;
      }

      // Submit POST form to PayU gateway
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = data.action;
      form.target = '_top';
      form.style.display = 'none';
      for (const key in data) {
        if (key !== 'action' && data[key] !== undefined && data[key] !== null) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = String(data[key]);
          form.appendChild(input);
        }
      }
      document.body.appendChild(form);
      form.submit();
    } catch (err: any) {
      setPayError(err.message || 'Payment initiation failed. Please try again.');
      setIsProcessingPay(false);
    }
  };

  const handleDownloadPdf = (item: PdfMarketplaceItem, isClean: boolean = false) => {
    const downloadUrl = `/api/pdf/download?pdfId=${item.id}&email=${encodeURIComponent(buyerEmail || user?.email || '')}&userId=${user?.id || ''}${isClean ? '&type=clean' : '&type=watermarked'}`;
    window.open(downloadUrl, '_blank');
  };

  return (
    <div className={styles.container}>
      {/* Header Toolbar */}
      <div className={styles.headerToolbar}>
        <div className={styles.headerHeading}>
          <h1 className={`${styles.toolbarTitle} text-gradient`}>
            PDF Market
          </h1>
        </div>

        {/* Search Bar */}
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search tracing patterns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        {/* Tabs Bar */}
        <div className={styles.tabNav}>
          <button
            className={`${styles.tabBtn} ${activeTab === 'catalog' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('catalog')}
          >
            <ShoppingBag size={16} />
            <span>Design Catalog</span>
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'my-purchases' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('my-purchases')}
          >
            <FileText size={16} />
            <span>My Purchased PDFs</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'catalog' && (
        <>
          {/* Category Filter Pills */}
          <div className={styles.categoryBar}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.categoryPill} ${selectedCategory === cat ? styles.categoryPillActive : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          {loading ? (
            <div className={styles.loadingGrid}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={styles.skeletonCard} />
              ))}
            </div>
          ) : items.length === 0 ? (
            <div className={styles.emptyState}>
              <FileText size={48} className={styles.emptyIcon} />
              <h3>No PDF designs found</h3>
              <p>Try searching for a different keyword or selecting another category.</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {items.map((item) => {
                const canDownloadClean = isSubscribed && item.is_free_for_vip;
                const hasValidPreviewImg = item.preview_images && item.preview_images.length > 0 && !failedImages[item.id];

                return (
                  <div key={item.id} className={styles.card}>
                    {/* Thumbnail Preview Area */}
                    <div 
                      className={styles.thumbArea} 
                      onClick={(e) => { e.stopPropagation(); setSelectedProduct(item); }}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className={styles.pdfOverlayBadge}>
                        <FileText size={12} />
                        <span>PDF</span>
                      </div>
                      {hasValidPreviewImg ? (
                        <>
                          {!loadedImages[item.id] && (
                            <div className={`${styles.thumbGraphic} ${styles.imageLoadingSkeleton}`}>
                              <div className={styles.pdfIconWrapper}>
                                <div className={styles.pdfRipple} />
                                <div className={styles.pdfRipple2} />
                                <svg className={styles.pdfSvgIcon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect x="10" y="4" width="36" height="48" rx="4" fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5"/>
                                  <path d="M38 4v12h10" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" strokeLinejoin="round"/>
                                  <path d="M38 4l10 12" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" strokeLinejoin="round"/>
                                  <rect x="6" y="28" width="32" height="18" rx="3" fill="rgba(212,175,55,0.5)"/>
                                  <text x="22" y="41" textAnchor="middle" fill="#0F0C1B" fontSize="8" fontWeight="800" fontFamily="Arial">PDF</text>
                                </svg>
                              </div>
                            </div>
                          )}
                          <img
                            src={`/api/pdf/preview?id=${item.id}`}
                            alt={item.title}
                            className={styles.cardPreviewImg}
                            style={{ opacity: loadedImages[item.id] ? 1 : 0, position: loadedImages[item.id] ? 'relative' : 'absolute', width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.4s ease-in' }}
                            onLoad={() => setLoadedImages((prev) => ({ ...prev, [item.id]: true }))}
                            onError={() => setFailedImages((prev) => ({ ...prev, [item.id]: true }))}
                          />
                        </>
                      ) : (
                        <div className={styles.thumbGraphic}>
                          <div className={styles.pdfIconWrapper}>
                            <div className={styles.pdfRipple} />
                            <div className={styles.pdfRipple2} />
                            <svg className={styles.pdfSvgIcon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="10" y="4" width="36" height="48" rx="4" fill="rgba(212,175,55,0.12)" stroke="rgba(212,175,55,0.6)" strokeWidth="1.5"/>
                              <path d="M38 4v12h10" stroke="rgba(212,175,55,0.6)" strokeWidth="1.5" strokeLinejoin="round"/>
                              <path d="M38 4l10 12" stroke="rgba(212,175,55,0.6)" strokeWidth="1.5" strokeLinejoin="round"/>
                              <rect x="6" y="28" width="32" height="18" rx="3" fill="rgba(212,175,55,0.85)"/>
                              <text x="22" y="41" textAnchor="middle" fill="#0F0C1B" fontSize="8" fontWeight="800" fontFamily="Arial">PDF</text>
                              <line x1="16" y1="21" x2="36" y2="21" stroke="rgba(212,175,55,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
                              <line x1="16" y1="25" x2="30" y2="25" stroke="rgba(212,175,55,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle} title={item.title}>{item.title}</h3>



                      <div className={styles.actionRow}>
                        <div className={styles.priceContainer}>
                          <span className={styles.currency}>₹</span>
                          <span className={styles.priceAmount}>{item.price_inr}</span>
                        </div>

                        <button 
                          className={styles.gridBuyBtn} 
                          onClick={(e) => { e.stopPropagation(); setSelectedProduct(item); }}
                        >
                          <FileText size={14} /> Get PDF
                        </button>
                      </div>

                      <div className={styles.storeRow}>
                        <span className={styles.storeIcon}>🛍️</span>
                        <span className={styles.storeName}>Aari Work Designs</span>
                      </div>

                      <div className={styles.deliveryText}>
                        PDF delivery {item.is_free_for_vip ? '• ★ VIP Free' : ''}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}

      {/* Purchased PDFs Tab */}
      {activeTab === 'my-purchases' && (
        <div className={styles.purchasesContainer}>
          <h2 className={styles.purchasesTitle}>My PDF Purchases & VIP Access</h2>
          <p className={styles.purchasesSubtitle}>
            {user
              ? `Logged in as ${user.email}. All your unlocked PDF tracing sheets are listed below.`
              : 'Enter your email below to find your purchased clean PDFs.'}
          </p>

          {!user && (
            <div className={styles.emailLookupBox}>
              <input
                type="email"
                placeholder="Enter email address used for purchase"
                value={buyerEmail}
                onChange={(e) => setBuyerEmail(e.target.value)}
                className={styles.lookupInput}
              />
              <button
                className={styles.lookupBtn}
                onClick={() => {
                  /* re-trigger lookup */
                }}
              >
                <span>Find My Orders</span>
              </button>
            </div>
          )}

          <div className={styles.vipBanner}>
            <Crown size={28} className={styles.goldIcon} />
            <div>
              <h4>Want Unlimited Access to ALL PDFs?</h4>
              <p>Upgrade to Aari VIP Subscription for ₹499/year to download every single PDF design without watermarks.</p>
            </div>
            <button className={styles.vipUpgradeBtn} onClick={openSubModal}>
              <span>Get VIP Pass</span>
            </button>
          </div>
        </div>
      )}


      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedProduct(null)}>
          <div className={styles.productModal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedProduct(null)}>
              <X size={20} />
            </button>

            <div className={styles.productModalGrid}>
              
              {/* Left Column: Image */}
              <div className={styles.productModalImageCol}>
                <div className={styles.productModalImageFrame}>
                  {selectedProduct.preview_images && selectedProduct.preview_images.length > 0 && !failedImages[selectedProduct.id] ? (
                    <img
                      src={`/api/pdf/preview?id=${selectedProduct.id}`}
                      alt={selectedProduct.title}
                      className={styles.productModalImg}
                      onError={() => setFailedImages((prev) => ({ ...prev, [selectedProduct.id]: true }))}
                    />
                  ) : (
                    <div className={styles.productModalFallbackImg}>
                      <div className={styles.graphicPattern} />
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Information */}
              <div className={styles.productModalInfoCol}>
                <div className={styles.productModalHeader}>
                  <h2 className={styles.productModalTitle}>{selectedProduct.title}</h2>
                  <div className={styles.productModalBadges}>
                    <span className={styles.categoryBadge}>{selectedProduct.category}</span>
                    {selectedProduct.is_free_for_vip && (
                      <span className={styles.vipBadge}><Crown size={12}/> VIP Free</span>
                    )}
                  </div>
                </div>

                <div className={styles.productModalContent}>
                  <p className={styles.productModalDesc}>
                    {selectedProduct.description || "High-resolution Aari embroidery tracing pattern. Instantly available to download as a print-ready PDF."}
                  </p>
                  
                  <ul className={styles.productModalFeatures}>
                    <li><CheckCircle2 size={14} color="#86efac" /> Original vector tracing</li>
                    <li><CheckCircle2 size={14} color="#86efac" /> Ready for standard print</li>
                    <li><CheckCircle2 size={14} color="#86efac" /> Lifetime unlimited access</li>
                  </ul>
                  
                  <div className={styles.productModalActions}>
                {isSubscribed && selectedProduct.is_free_for_vip ? (
                  <button 
                    className={styles.vipDownloadBtnFull} 
                    onClick={() => { setSelectedProduct(null); handleDownloadPdf(selectedProduct, true); }}
                  >
                    <Crown size={18} />
                    Download Free (VIP)
                  </button>
                ) : (
                  <>
                    <button 
                      className={styles.buyBtnFull} 
                      onClick={() => { setSelectedProduct(null); setCheckoutItem(selectedProduct); }}
                    >
                      <ShoppingBag size={18} />
                      Buy for ₹{selectedProduct.price_inr}
                    </button>

                    {selectedProduct.is_free_for_vip && (
                      <div className={styles.vipPromoBox}>
                        <div className={styles.vipPromoText}>
                          <strong>Get this pattern for FREE!</strong>
                          <span>Subscribe to Aari Work Designs VIP for ₹199/mo to unlock this and all other designs automatically.</span>
                        </div>
                        <button className={styles.vipPromoBtn} onClick={openSubModal}>
                          Join VIP
                        </button>
                      </div>
                    )}
                  </>
                )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {checkoutItem && (
        <div className={styles.modalBackdrop} onClick={() => setCheckoutItem(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setCheckoutItem(null)}>
              <X size={20} />
            </button>

            <div className={styles.modalHeader}>
              <ShoppingBag size={28} className="text-gradient" />
              <h3>Checkout: {checkoutItem.title}</h3>
              <p>Instant digital download without watermarks after payment</p>
            </div>

            {payError && (
              <div className={styles.errorBox}>{payError}</div>
            )}

            <form onSubmit={handleSinglePurchaseSubmit}>
              <div className={styles.orderSummaryBox}>
                <div className={styles.summaryRow}>
                  <span>Item:</span>
                  <strong>{checkoutItem.title}</strong>
                </div>
                <div className={styles.summaryRow}>
                  <span>Format:</span>
                  <span>Print-Ready Clean PDF ({checkoutItem.page_count} Pages)</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                  <span>Total Amount:</span>
                  <span className={styles.totalPrice}>₹{checkoutItem.price_inr}</span>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Full Name *</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className={styles.inputField}
                  required
                  disabled={isProcessingPay}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Email Address (PDF download link will be sent here) *</label>
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  className={styles.inputField}
                  required
                  disabled={isProcessingPay}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Mobile Number (for PayU verification) *</label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={buyerPhone}
                  onChange={(e) => setBuyerPhone(e.target.value)}
                  className={styles.inputField}
                  required
                  disabled={isProcessingPay}
                />
              </div>

              <button
                type="submit"
                className={styles.submitPayBtn}
                disabled={isProcessingPay}
              >
                {isProcessingPay ? (
                  <span>Redirecting to PayU Secure Checkout...</span>
                ) : (
                  <>
                    <ShieldCheck size={18} />
                    <span>Pay ₹{checkoutItem.price_inr} via Secure PayU</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
