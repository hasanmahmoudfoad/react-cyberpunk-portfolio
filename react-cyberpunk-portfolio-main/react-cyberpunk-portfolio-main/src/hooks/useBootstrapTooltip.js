import { useEffect } from 'react';

export const useBootstrapTooltip = (ref) => {
  useEffect(() => {
    if (ref.current) {
      // Import Bootstrap's Tooltip class
      const { Tooltip } = require('bootstrap');
      
      // Get all tooltip elements
      const tooltipElements = ref.current.querySelectorAll('[data-bs-toggle="tooltip"]');
      
      // Initialize each tooltip
      tooltipElements.forEach(tooltipElement => {
        new Tooltip(tooltipElement);
      });
    }
  }, [ref]);
};
