const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals')
      .then((webVitals: any) => {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals;
        if (getCLS) getCLS(onPerfEntry);
        if (getFID) getFID(onPerfEntry);
        if (getFCP) getFCP(onPerfEntry);
        if (getLCP) getLCP(onPerfEntry);
        if (getTTFB) getTTFB(onPerfEntry);
      })
      .catch(err => console.error('Failed to load web-vitals:', err));
  }
};

export default reportWebVitals;
