
import { Router } from 'express';

const router = Router();

// Simple in-memory storage for A/B test data
// In production, you'd use a database
const abTestData: Record<string, { 
  variants: Record<string, { 
    impressions: number, 
    conversions: Record<string, number> 
  }> 
}> = {};

// Initialize test data
function initializeTestIfNeeded(testId: string, variantId: string) {
  if (!abTestData[testId]) {
    abTestData[testId] = { variants: {} };
  }
  
  if (!abTestData[testId].variants[variantId]) {
    abTestData[testId].variants[variantId] = { 
      impressions: 0,
      conversions: {}
    };
  }
}

// Track impression
router.post('/impression', (req, res) => {
  const { testId, variantId } = req.body;
  
  if (!testId || variantId === undefined) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  initializeTestIfNeeded(testId, variantId);
  abTestData[testId].variants[variantId].impressions++;
  
  return res.json({ success: true });
});

// Track conversion
router.post('/conversion', (req, res) => {
  const { testId, variantId, action } = req.body;
  
  if (!testId || variantId === undefined || !action) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  initializeTestIfNeeded(testId, variantId);
  
  if (!abTestData[testId].variants[variantId].conversions[action]) {
    abTestData[testId].variants[variantId].conversions[action] = 0;
  }
  
  abTestData[testId].variants[variantId].conversions[action]++;
  
  return res.json({ success: true });
});

// Get test results
router.get('/results/:testId', (req, res) => {
  const { testId } = req.params;
  
  if (!abTestData[testId]) {
    return res.status(404).json({ error: 'Test not found' });
  }
  
  return res.json(abTestData[testId]);
});

export default router;
