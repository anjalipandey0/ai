import { SwatchRequest } from '../models/SwatchRequest.js';
import { getIsConnected } from '../config/db.js';

let memorySwatches = [
  {
    _id: 'mem_swatch_1',
    textileName: 'Raw Jute Weave',
    clientName: 'Julian Hayes',
    email: 'julian@bespokefurnishings.com',
    company: 'Bespoke Furnishings',
    shippingAddress: '44 Albemarle Street, Mayfair, London W1S 4JJ, UK',
    notes: 'Requires 2x 20cm cutting sample for board presentation',
    status: 'Processing',
    createdAt: new Date().toISOString()
  }
];

export const getSwatchRequests = async (req, res) => {
  try {
    if (getIsConnected()) {
      const swatches = await SwatchRequest.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: swatches.length, data: swatches });
    }
    return res.json({ success: true, count: memorySwatches.length, data: memorySwatches });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createSwatchRequest = async (req, res) => {
  try {
    const { textileName, clientName, email, company, shippingAddress, notes } = req.body;

    if (!textileName || !clientName || !email || !shippingAddress) {
      return res.status(400).json({
        success: false,
        message: 'Please provide Textile Name, Client Name, Email, and Shipping Address'
      });
    }

    if (getIsConnected()) {
      const request = await SwatchRequest.create({
        textileName,
        clientName,
        email,
        company: company || '',
        shippingAddress,
        notes: notes || ''
      });
      return res.status(201).json({
        success: true,
        data: request,
        message: `Swatch request for ${textileName} has been received. Our atelier will prepare and dispatch your sample portfolio.`
      });
    }

    const newRequest = {
      _id: `mem_swatch_${Date.now()}`,
      textileName,
      clientName,
      email,
      company: company || '',
      shippingAddress,
      notes: notes || '',
      status: 'Pending',
      createdAt: new Date().toISOString()
    };
    memorySwatches.unshift(newRequest);

    return res.status(201).json({
      success: true,
      data: newRequest,
      message: `Swatch request for ${textileName} has been received. Our atelier will prepare and dispatch your sample portfolio.`
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
