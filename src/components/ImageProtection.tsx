'use client';

import { useEffect } from 'react';

/**
 * ImageProtection — globally disables:
 *  • right-click context menu on images
 *  • drag-to-save on images
 *  • Ctrl+S / Ctrl+Shift+S save shortcuts
 *  • long-press save on mobile (via touch events)
 *
 * Does NOT affect non-image elements or keyboard navigation.
 */
export default function ImageProtection() {
  useEffect(() => {
    // ── Prevent right-click on images ──
    const blockContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.closest('[data-protected-image]')) {
        e.preventDefault();
        return false;
      }
    };

    // ── Prevent drag-to-save on images ──
    const blockDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // ── Prevent Ctrl+S / Ctrl+Shift+S ──
    const blockSaveShortcut = (e: KeyboardEvent) => {
      const isSave = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's';
      if (isSave) {
        e.preventDefault();
        return false;
      }
    };

    // ── Prevent long-press save on iOS/Android ──
    const blockTouchContextMenu = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.closest('[data-protected-image]')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', blockContextMenu);
    document.addEventListener('dragstart', blockDragStart);
    document.addEventListener('keydown', blockSaveShortcut);
    document.addEventListener('touchstart', blockTouchContextMenu, { passive: false });

    return () => {
      document.removeEventListener('contextmenu', blockContextMenu);
      document.removeEventListener('dragstart', blockDragStart);
      document.removeEventListener('keydown', blockSaveShortcut);
      document.removeEventListener('touchstart', blockTouchContextMenu);
    };
  }, []);

  return null;
}
