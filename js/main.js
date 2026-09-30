/**
 * BIRD'S NEST - LUXURY INTERACTION & CONVERSION ENGINE
 * Enhanced with Interactive Product Variants, Hallmark Motion Orchestration,
 * Scroll-Reveal Animations, Gift Occasion Selector, and Frictionless Ordering.
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.BRAND_DATA;

  // Selected variant state map per product
  const selectedVariants = {};
  data.products.forEach(p => {
    if (p.variants && p.variants.length > 0) {
      selectedVariants[p.id] = p.variants[0];
    }
  });

  // =========================================================================
  // 1. DYNAMIC INITIALIZATION
  // =========================================================================
  populateBrandInfo(data);
  renderProducts(data.products, 'all');
  renderUSPs(data.usp);
  renderProcess(data.process);
  renderUsage(data.usageGuide);
  renderGifts(data.giftGroups);
  renderFAQs(data.faq);
  renderCommitments(data.commitments);
  setupProductSelectDropdown(data.products);
  initScrollReveal();
  initHeroProductSlider();

  // =========================================================================
  // 2. HEADER SCROLL & NAVIGATION
  // =========================================================================
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 35) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    trackActiveNav();
  }, { passive: true });

  // Mobile Drawer
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeDrawer();
    });
  }
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // =========================================================================
  // 3. PRODUCT FILTERING & INTERACTIVE VARIANTS
  // =========================================================================
  const filterTabs = document.querySelectorAll('.filter-tab-btn');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-category');
      renderProducts(data.products, cat);
    });
  });

  window.selectVariant = function(productId, variantCode) {
    const product = data.products.find(p => p.id === productId);
    if (!product || !product.variants) return;
    const variant = product.variants.find(v => v.code === variantCode);
    if (!variant) return;

    selectedVariants[productId] = variant;
    
    // Update card UI in-place with smooth transition
    const card = document.getElementById(`card-${productId}`);
    if (card) {
      // Update active chip
      card.querySelectorAll('.variant-chip').forEach(chip => {
        if (chip.getAttribute('data-code') === variantCode) {
          chip.classList.add('active');
        } else {
          chip.classList.remove('active');
        }
      });

      // Update perk & spec
      const perkEl = card.querySelector('.variant-perk-note');
      if (perkEl) {
        perkEl.innerHTML = `<span style="color: #D4AF37;">★</span> ${variant.perk}`;
      }

      const priceVal = card.querySelector('.product-price-value');
      if (priceVal) {
        priceVal.textContent = variant.price;
      }
    }
  };

  // Product Detail Quick-View Modal
  const productModal = document.getElementById('productModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');

  function openProductModal(productId) {
    const product = data.products.find(p => p.id === productId);
    if (!product) return;
    const currentVariant = selectedVariants[productId] || (product.variants ? product.variants[0] : null);

    modalBody.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start;">
        <div style="background: #140104; border-radius: 14px; overflow: hidden; border: 1.5px solid rgba(212, 175, 55, 0.4); box-shadow: 0 16px 40px rgba(0,0,0,0.5);">
          <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto;">
        </div>
        <div>
          <div class="pill-badge pill-badge-gold" style="margin-bottom: 12px;">${product.badge || 'CAO CẤP'}</div>
          <h3 style="font-family: var(--font-serif); font-size: 26px; font-weight: 700; color: var(--c-burgundy-900); margin-bottom: 4px;">${product.name}</h3>
          <p style="font-size: 13.5px; color: var(--c-gold-700); font-weight: 700; margin-bottom: 16px;">${product.subtitle}</p>

          ${product.variants ? `
            <div style="margin-bottom: 18px;">
              <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--c-ink-muted); margin-bottom: 8px;">Tùy chọn quy cách:</div>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                ${product.variants.map(v => `
                  <button type="button" class="variant-chip ${currentVariant && currentVariant.code === v.code ? 'active' : ''}" 
                    onclick="window.selectVariantInModal('${product.id}', '${v.code}')" style="padding: 7px 14px; font-size: 12.5px;">
                    ${v.label}
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <div id="modalVariantDetail" style="background: var(--c-rice-paper); padding: 14px 18px; border-radius: 8px; border-left: 3px solid var(--c-gold-500); margin-bottom: 20px;">
            <div style="font-size: 11px; text-transform: uppercase; color: var(--c-ink-muted); letter-spacing: 0.6px;">Quy cách & Đặc quyền đi kèm:</div>
            <div style="font-size: 14px; font-weight: 700; color: var(--c-burgundy-900); margin-top: 2px;">${currentVariant ? currentVariant.spec : ''}</div>
            <div style="font-size: 12.5px; color: #27AE60; font-weight: 600; margin-top: 4px;">✓ ${currentVariant ? currentVariant.perk : ''}</div>
          </div>

          <p style="font-size: 14.5px; color: var(--c-ink-secondary); line-height: 1.7; margin-bottom: 22px;">
            ${product.fullDesc}
          </p>

          <div style="margin-bottom: 24px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--c-burgundy-900); margin-bottom: 8px;">Đặc điểm nổi bật:</div>
            <ul style="display: flex; flex-direction: column; gap: 6px; font-size: 13.5px; color: var(--c-ink-secondary);">
              ${product.highlights.map(h => `<li style="display: flex; align-items: center; gap: 8px;">
                <span style="color: var(--c-gold-600); font-weight: 800;">✓</span> ${h}
              </li>`).join('')}
            </ul>
          </div>

          <div style="display: flex; gap: 12px;">
            <button class="btn btn-primary" onclick="window.selectProductAndOrder('${product.id}')" style="flex: 1;">
              ĐẶT MUA NGAY
            </button>
            <a href="${data.contact.zaloUrl}" target="_blank" rel="noopener" class="btn btn-secondary" style="color: var(--c-burgundy-900); border-color: var(--c-burgundy-700);">
              TƯ VẤN ZALO
            </a>
          </div>
        </div>
      </div>
    `;

    productModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  window.selectVariantInModal = function(productId, variantCode) {
    window.selectVariant(productId, variantCode);
    openProductModal(productId);
  };

  function closeProductModal() {
    productModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  window.openProductModal = openProductModal;

  window.selectProductAndOrder = function(productId) {
    closeProductModal();
    const product = data.products.find(p => p.id === productId);
    const variant = selectedVariants[productId];
    const select = document.getElementById('orderProductSelect');
    const quantityInput = document.getElementById('orderQuantity');

    if (select && product) {
      select.value = product.name;
    }
    if (quantityInput && variant) {
      quantityInput.value = `1 x ${variant.label} (${variant.spec})`;
    }

    const orderSection = document.getElementById('contact');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
      // Visual feedback highlight on order form
      const formCard = document.querySelector('.order-form-card');
      if (formCard) {
        formCard.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.6)';
        setTimeout(() => {
          formCard.style.boxShadow = '';
        }, 1500);
      }
    }
  };

  // =========================================================================
  // 4. GIFT OCCASION SELECTOR
  // =========================================================================
  function renderGifts(giftList) {
    const container = document.getElementById('giftGroupsContainer');
    if (!container) return;

    container.innerHTML = giftList.map((g, idx) => `
      <button type="button" class="gift-pill-btn ${idx === 0 ? 'active' : ''}" onclick="window.selectGiftOccasion('${g.id}')">
        ${g.title}
      </button>
    `).join('');
  }

  window.selectGiftOccasion = function(giftId) {
    const gift = data.giftGroups.find(g => g.id === giftId);
    if (!gift) return;

    document.querySelectorAll('.gift-pill-btn').forEach(btn => {
      if (btn.textContent.trim() === gift.title) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Auto set in order form note
    const noteEl = document.getElementById('orderNote');
    if (noteEl) {
      noteEl.value = `Nhu cầu: ${gift.title} (${gift.tag}) - ${gift.desc}`;
    }

    showToast(`Đã chọn: ${gift.title}`, `BIRD'S NEST sẽ chuẩn bị mẫu thiệp và quy cách đóng gói phù hợp cho ${gift.title.toLowerCase()}.`);
  };

  // =========================================================================
  // 5. FAQ ACCORDION INTERACTIVITY (HALLMARK SMOOTH GRID)
  // =========================================================================
  function renderFAQs(faqList) {
    const container = document.getElementById('faqAccordionList');
    if (!container) return;

    container.innerHTML = faqList.map((item, index) => `
      <div class="faq-item" id="faq-item-${index}">
        <button class="faq-question-btn" type="button" aria-expanded="false" onclick="window.toggleFaq(${index})">
          <span>${item.q}</span>
          <div class="faq-toggle-icon">
            <svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
          </div>
        </button>
        <div class="faq-answer-panel" id="faq-panel-${index}">
          <div class="faq-answer-content-inner">
            <div class="faq-answer-content">
              ${item.a}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  window.toggleFaq = function(index) {
    const item = document.getElementById(`faq-item-${index}`);
    const btn = item.querySelector('.faq-question-btn');
    const isOpen = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
  };

  // =========================================================================
  // 6. GALLERY & LIGHTBOX
  // =========================================================================
  const galleryItems = [
    { src: 'images/gallery/gallery-1.jpg', title: 'Yến Chưng Tươi Sợi Nguyên Bản', cat: 'Sản phẩm · Sợi yến nở đều' },
    { src: 'images/gallery/gallery-2.jpg', title: 'Hộp Quà Đỏ Burgundy Sang Trọng', cat: 'Bao bì · Quai dây vàng champagne' },
    { src: 'images/gallery/gallery-3.jpg', title: 'Tổ Yến Tinh Chế Thượng Hạng', cat: 'Tổ yến · Tai yến dày dặn lót lụa' },
    { src: 'images/gallery/gallery-4.jpg', title: 'Chén Sứ Chưng Đường Phèn', cat: 'Sản phẩm · Vị ngọt thanh tự nhiên' },
    { src: 'images/gallery/gallery-5.jpg', title: 'Đóng Gói Chỉn Chu Từng Chi Tiết', cat: 'Đóng gói · Nơ ruy băng vàng kim' },
    { src: 'images/gallery/gallery-6.jpg', title: 'Túi Quà Biếu Đối Tác & Người Thân', cat: 'Bộ quà tặng · Trao gửi yêu thương' }
  ];

  let currentGalleryIndex = 0;
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  window.openLightbox = function(index) {
    currentGalleryIndex = index;
    updateLightbox();
    lightboxModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function updateLightbox() {
    const item = galleryItems[currentGalleryIndex];
    if (!item) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxCaption.textContent = `${item.title} — ${item.cat}`;
  }

  function closeLightbox() {
    lightboxModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
      updateLightbox();
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
      updateLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
      if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
    }
  });

  // =========================================================================
  // 7. ORDER FORM PROCESSING (NETLIFY EMAIL + GOOGLE SHEETS) & TOAST
  // =========================================================================
  const orderForm = document.getElementById('quickOrderForm');
  const toastNotice = document.getElementById('toastNotice');
  const submitBtn = document.getElementById('orderSubmitBtn');
  const submitText = document.getElementById('orderSubmitText');

  if (orderForm) {
    orderForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('orderName').value.trim();
      const phone = document.getElementById('orderPhone').value.trim();
      const product = document.getElementById('orderProductSelect').value;
      const quantity = document.getElementById('orderQuantity').value.trim();
      const note = document.getElementById('orderNote').value.trim();

      if (!name || !phone) {
        showToast('Vui lòng điền thông tin', 'Họ tên và số điện thoại là bắt buộc để BIRD\'S NEST liên hệ.');
        return;
      }

      // Visual loading state
      if (submitBtn) submitBtn.disabled = true;
      if (submitText) submitText.textContent = 'ĐANG GỬI THÔNG TIN...';

      const timestamp = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
      const orderPayload = {
        timestamp,
        name,
        phone,
        product: product || 'Tư vấn tổng hợp',
        quantity: quantity || '1',
        note: note || 'Không có ghi chú'
      };

      // 1. Post to Netlify Forms (triggers automated email to shop owner)
      try {
        const formData = new FormData(orderForm);
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        }).catch(err => console.log('Netlify form notice:', err));
      } catch (err) {
        console.log('Netlify dispatch notice:', err);
      }

      // 2. Post to Google Sheets Webhook (if configured in data.orderConfig)
      if (data.orderConfig && data.orderConfig.googleSheetWebhookUrl) {
        const sheetUrl = data.orderConfig.googleSheetWebhookUrl.trim();
        if (sheetUrl && sheetUrl.startsWith('http')) {
          try {
            fetch(sheetUrl, {
              method: 'POST',
              mode: 'no-cors',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(orderPayload)
            }).catch(err => console.log('Google Sheets sync notice:', err));
          } catch (err) {
            console.log('Google Sheets dispatch notice:', err);
          }
        }
      }

      // Restore button state & show toast
      setTimeout(() => {
        if (submitBtn) submitBtn.disabled = false;
        if (submitText) submitText.textContent = 'GỬI YÊU CẦU ĐẶT HÀNG NGAY';

        showToast(
          'Tiếp nhận yêu cầu thành công!',
          `Cảm ơn quý khách ${name}. Thông tin đơn hàng đã được gửi đến chuyên viên tư vấn BIRD'S NEST. Chúng tôi sẽ liên hệ qua SĐT ${phone} để xác nhận đơn ngay.`
        );

        orderForm.reset();
      }, 600);
    });
  }

  function showToast(title, desc) {
    const tTitle = document.getElementById('toastTitle');
    const tDesc = document.getElementById('toastDesc');
    if (tTitle) tTitle.textContent = title;
    if (tDesc) tDesc.textContent = desc;

    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 6000);
  }

  window.showToast = showToast;

  // =========================================================================
  // 8. SCROLL REVEAL (ORCHESTRATED MOTION OBSERVER)
  // =========================================================================
  function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
  }

  // =========================================================================
  // HERO INTERACTIVE PRODUCT SLIDER (CAROUSEL)
  // =========================================================================
  function initHeroProductSlider() {
    const slider = document.getElementById('heroProductSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero-slide');
    const dots = slider.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('heroSliderPrev');
    const nextBtn = document.getElementById('heroSliderNext');
    const currentNumEl = document.getElementById('heroSlideCurrent');
    const totalNumEl = document.getElementById('heroSlideTotal');

    if (!slides.length) return;

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoPlayTimer = null;
    let isPaused = false;

    if (totalNumEl) {
      totalNumEl.textContent = String(totalSlides).padStart(2, '0');
    }

    function updateSlider(newIndex) {
      // Normalize index (wrap around smoothly)
      currentIndex = (newIndex + totalSlides) % totalSlides;

      // Update slide active classes
      slides.forEach((slide, idx) => {
        if (idx === currentIndex) {
          slide.classList.add('active');
          slide.setAttribute('aria-hidden', 'false');
        } else {
          slide.classList.remove('active');
          slide.setAttribute('aria-hidden', 'true');
        }
      });

      // Update dots active classes
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
          dot.setAttribute('aria-current', 'true');
        } else {
          dot.classList.remove('active');
          dot.removeAttribute('aria-current');
        }
      });

      // Update counter text (01, 02...)
      if (currentNumEl) {
        currentNumEl.textContent = String(currentIndex + 1).padStart(2, '0');
      }
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(() => {
        if (!isPaused) {
          updateSlider(currentIndex + 1);
        }
      }, 3200);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    // Previous / Next button events
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        updateSlider(currentIndex - 1);
        startAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        updateSlider(currentIndex + 1);
        startAutoPlay();
      });
    }

    // Dot indicators click events
    dots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const targetIdx = parseInt(dot.getAttribute('data-slide'), 10);
        if (!isNaN(targetIdx)) {
          updateSlider(targetIdx);
          startAutoPlay();
        }
      });
    });

    // Pause on hover
    slider.addEventListener('mouseenter', () => {
      isPaused = true;
    });

    slider.addEventListener('mouseleave', () => {
      isPaused = false;
    });

    // Touch Swipe Gesture for Mobile Devices
    let touchStartX = 0;
    let touchStartY = 0;

    slider.addEventListener('touchstart', (e) => {
      isPaused = true;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
      isPaused = false;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          updateSlider(currentIndex + 1);
        } else {
          updateSlider(currentIndex - 1);
        }
        startAutoPlay();
      }
    }, { passive: true });

    // Keyboard Arrow navigation
    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        updateSlider(currentIndex - 1);
        startAutoPlay();
      } else if (e.key === 'ArrowRight') {
        updateSlider(currentIndex + 1);
        startAutoPlay();
      }
    });

    // Initial setup
    updateSlider(0);
    startAutoPlay();
  }

  // =========================================================================
  // 9. HELPER RENDERERS
  // =========================================================================
  function populateBrandInfo(d) {
    const heroTitle = document.getElementById('heroBrandSlogan');
    if (heroTitle) {
      heroTitle.innerHTML = `TINH HOA TỪ THIÊN NHIÊN <span class="hero-title-highlight">– TRAO TRỌN SỨC KHỎE</span>`;
    }

    if (d.contact) {
      // Hero Direct Zalo Button
      const heroZaloBtn = document.getElementById('heroZaloBtn');
      if (heroZaloBtn && d.contact.zaloUrl) {
        heroZaloBtn.href = d.contact.zaloUrl;
      }

      // Order Section Direct Zalo Button
      const orderSectionZaloBtn = document.getElementById('orderSectionZaloBtn');
      if (orderSectionZaloBtn && d.contact.zaloUrl) {
        orderSectionZaloBtn.href = d.contact.zaloUrl;
      }
      // Header Hotline
      const hotlineLink = document.getElementById('hotlineLink');
      if (hotlineLink) {
        hotlineLink.href = d.contact.hotlineTel || '#';
        const txt = hotlineLink.querySelector('.hotline-text');
        if (txt) txt.textContent = d.contact.hotline;
      }

      // Mobile Sticky Bar
      const mobileCallBtn = document.getElementById('mobileCallBtn');
      if (mobileCallBtn) mobileCallBtn.href = d.contact.hotlineTel || '#';

      const mobileZaloBtn = document.getElementById('mobileZaloBtn');
      if (mobileZaloBtn) mobileZaloBtn.href = d.contact.zaloUrl || '#';

      // Floating Trigger
      const floatingZaloBtn = document.getElementById('floatingZaloBtn');
      if (floatingZaloBtn) floatingZaloBtn.href = d.contact.zaloUrl || '#';

      // Section 14: Contact Info Details
      const contactAddressVal = document.getElementById('contactAddressVal');
      if (contactAddressVal) contactAddressVal.textContent = d.contact.address;

      const contactAddressNote = document.getElementById('contactAddressNote');
      if (contactAddressNote && d.contact.addressNote) contactAddressNote.textContent = d.contact.addressNote;

      const contactHotlineVal = document.getElementById('contactHotlineVal');
      if (contactHotlineVal) {
        contactHotlineVal.href = d.contact.hotlineTel || '#';
        contactHotlineVal.textContent = d.contact.hotline;
      }

      const contactZaloVal = document.getElementById('contactZaloVal');
      if (contactZaloVal) {
        contactZaloVal.href = d.contact.zaloUrl || '#';
        contactZaloVal.textContent = d.contact.zalo;
      }

      const contactFacebookVal = document.getElementById('contactFacebookVal');
      if (contactFacebookVal) {
        contactFacebookVal.href = d.contact.facebookUrl || '#';
        contactFacebookVal.textContent = d.contact.facebook;
      }

      const contactTiktokVal = document.getElementById('contactTiktokVal');
      if (contactTiktokVal) {
        contactTiktokVal.href = d.contact.tiktokUrl || '#';
        contactTiktokVal.textContent = d.contact.tiktok;
      }

      const contactEmailVal = document.getElementById('contactEmailVal');
      if (contactEmailVal) {
        contactEmailVal.href = d.contact.emailMailto || '#';
        contactEmailVal.textContent = d.contact.email;
      }

      const contactHoursVal = document.getElementById('contactHoursVal');
      if (contactHoursVal) contactHoursVal.textContent = d.contact.workingHours;

      // Section 16: Footer Contact
      const footerAddress = document.getElementById('footerAddress');
      if (footerAddress) footerAddress.textContent = `Địa chỉ: ${d.contact.address}`;

      const footerHotline = document.getElementById('footerHotline');
      if (footerHotline) {
        footerHotline.href = d.contact.hotlineTel || '#';
        footerHotline.textContent = d.contact.hotline;
      }

      const footerEmail = document.getElementById('footerEmail');
      if (footerEmail) {
        footerEmail.href = d.contact.emailMailto || '#';
        footerEmail.textContent = d.contact.email;
      }

      const footerFacebookBtn = document.getElementById('footerFacebookBtn');
      if (footerFacebookBtn) footerFacebookBtn.href = d.contact.facebookUrl || '#';

      const footerZaloBtn = document.getElementById('footerZaloBtn');
      if (footerZaloBtn) footerZaloBtn.href = d.contact.zaloUrl || '#';

      const footerTiktokBtn = document.getElementById('footerTiktokBtn');
      if (footerTiktokBtn) footerTiktokBtn.href = d.contact.tiktokUrl || '#';
    }
  }

  function renderProducts(products, category) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const filtered = category === 'all' 
      ? products 
      : products.filter(p => p.category === category);

    grid.innerHTML = filtered.map(p => {
      const activeVariant = selectedVariants[p.id] || (p.variants ? p.variants[0] : null);

      return `
        <article class="product-card scroll-reveal" id="card-${p.id}">
          <div class="product-thumb-wrap">
            <img src="${p.image}" alt="${p.name}" class="product-thumb-img" loading="lazy">
            <div class="product-badge-overlay">${p.badge || 'Cao cấp'}</div>
          </div>
          <div class="product-body">
            <h3 class="product-name">${p.name}</h3>
            <div class="product-subtitle-tag">${p.subtitle}</div>

            ${p.variants && p.variants.length > 0 ? `
              <div class="variant-chips-container">
                ${p.variants.map(v => `
                  <button type="button" class="variant-chip ${activeVariant && activeVariant.code === v.code ? 'active' : ''}" 
                    data-code="${v.code}" onclick="window.selectVariant('${p.id}', '${v.code}')">
                    ${v.label}
                  </button>
                `).join('')}
              </div>
            ` : ''}

            ${activeVariant && activeVariant.perk ? `
              <div class="variant-perk-note">
                <span style="color: #D4AF37;">★</span> ${activeVariant.perk}
              </div>
            ` : ''}

            <p style="font-size: 13.5px; color: var(--c-ink-secondary); line-height: 1.6; margin-bottom: 16px; flex: 1;">
              ${p.shortDesc}
            </p>
            
            <div class="product-price-box">
              <span class="product-price-label">Giá niêm yết</span>
              <span class="product-price-value">${activeVariant ? activeVariant.price : p.variants[0].price}</span>
            </div>

            <div class="product-actions-grid">
              <button class="btn btn-secondary btn-sm" onclick="window.openProductModal('${p.id}')">
                CHI TIẾT
              </button>
              <button class="btn btn-burgundy btn-sm" onclick="window.selectProductAndOrder('${p.id}')">
                MUA NGAY
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    initScrollReveal();
  }

  function renderUSPs(usps) {
    const grid = document.getElementById('uspBentoGrid');
    if (!grid) return;

    const iconMap = {
      selection: `<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
      packaging: `<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>`,
      gift: `<svg viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.65-.5-.65C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76V14h2V8.76L15.38 12 17 10.83 14.92 8H20v6z"/></svg>`,
      consultation: `<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>`,
      care: `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
      delivery: `<svg viewBox="0 0 24 24"><path d="M20 8h-3V4H1v13h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`
    };

    grid.innerHTML = usps.map(u => `
      <div class="usp-card ${u.featured ? 'featured-card' : ''} scroll-reveal">
        <div class="usp-icon-wrap">
          ${iconMap[u.icon] || iconMap.selection}
        </div>
        <h3 class="usp-title">${u.title}</h3>
        <p class="usp-desc">${u.desc}</p>
      </div>
    `).join('');
  }

  function renderProcess(processSteps) {
    const track = document.getElementById('processTimelineTrack');
    if (!track) return;

    track.innerHTML = processSteps.map(step => `
      <div class="timeline-step scroll-reveal">
        <div class="timeline-node">
          <span class="timeline-step-num">${step.step}</span>
        </div>
        <h4 class="timeline-title">${step.title}</h4>
        <div class="timeline-placeholder">${step.placeholderText}</div>
        <p class="timeline-desc">${step.note}</p>
      </div>
    `).join('');
  }

  function renderUsage(guideList) {
    const grid = document.getElementById('usageGrid');
    if (!grid) return;

    const iconMap = {
      sparkles: `<svg viewBox="0 0 24 24"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>`,
      flame: `<svg viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>`,
      shield: `<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>`,
      clock: `<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`
    };

    grid.innerHTML = guideList.map(g => `
      <div class="usage-card scroll-reveal">
        <div class="usage-icon-box">
          ${iconMap[g.icon] || iconMap.sparkles}
        </div>
        <h4 class="usage-title">${g.title}</h4>
        <div class="usage-placeholder">${g.placeholder}</div>
        <p class="usage-preview">${g.preview}</p>
      </div>
    `).join('');
  }

  function renderCommitments(commits) {
    const grid = document.getElementById('commitmentsGrid');
    if (!grid) return;

    grid.innerHTML = commits.map(c => `
      <div class="commitment-item scroll-reveal">
        <div class="commit-check-icon">
          <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <span class="commit-text">${c.text}</span>
      </div>
    `).join('');
  }

  function setupProductSelectDropdown(products) {
    const select = document.getElementById('orderProductSelect');
    if (!select) return;

    select.innerHTML = `
      <option value="">-- Chọn sản phẩm quan tâm --</option>
      ${products.map(p => `<option value="${p.name}">${p.name} - ${p.subtitle}</option>`).join('')}
      <option value="Tư vấn tổng hợp">Cần tư vấn chọn sản phẩm phù hợp theo thể trạng</option>
      <option value="Quà tặng doanh nghiệp">Đặt hàng quà tặng doanh nghiệp theo yêu cầu riêng</option>
    `;
  }

  function trackActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  }
});
