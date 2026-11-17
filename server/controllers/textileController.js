import { Textile } from '../models/Textile.js';
import { initialTextiles } from '../seed/seedData.js';
import { getIsConnected } from '../config/db.js';

// In-memory fallback storage
let memoryTextiles = [...initialTextiles].map((item, index) => ({
  ...item,
  _id: `mem_tex_${index + 1}`,
  createdAt: new Date().toISOString()
}));

export const getTextiles = async (req, res) => {
  try {
    const { material, color, pattern, application, sort, search, featured } = req.query;

    if (getIsConnected()) {
      let query = {};

      if (material) {
        const materials = material.split(',').map(m => m.trim());
        query.material = { $in: materials.map(m => new RegExp(`^${m}$`, 'i')) };
      }

      if (color) {
        const colors = color.split(',').map(c => c.trim());
        query.color = { $in: colors.map(c => new RegExp(`^${c}$`, 'i')) };
      }

      if (pattern) {
        const patterns = pattern.split(',').map(p => p.trim());
        query.pattern = { $in: patterns.map(p => new RegExp(`^${p}$`, 'i')) };
      }

      if (application) {
        const applications = application.split(',').map(a => a.trim());
        query.application = { $in: applications.map(a => new RegExp(`^${a}$`, 'i')) };
      }

      if (featured === 'true') {
        query.isFeatured = true;
      }

      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { material: { $regex: search, $options: 'i' } },
          { composition: { $regex: search, $options: 'i' } }
        ];
      }

      let sortOptions = { createdAt: -1 };
      if (sort === 'gsm-desc') {
        sortOptions = { gsm: -1 };
      } else if (sort === 'gsm-asc') {
        sortOptions = { gsm: 1 };
      } else if (sort === 'alpha') {
        sortOptions = { name: 1 };
      } else if (sort === 'newest') {
        sortOptions = { isNewArrival: -1, createdAt: -1 };
      }

      const textiles = await Textile.find(query).sort(sortOptions);
      return res.json({ success: true, count: textiles.length, data: textiles });
    }

    // In-Memory Fallback
    let filtered = [...memoryTextiles];

    if (material) {
      const materials = material.toLowerCase().split(',').map(m => m.trim());
      filtered = filtered.filter(t => materials.includes(t.material.toLowerCase()));
    }

    if (color) {
      const colors = color.toLowerCase().split(',').map(c => c.trim());
      filtered = filtered.filter(t => colors.includes(t.color.toLowerCase()));
    }

    if (pattern) {
      const patterns = pattern.toLowerCase().split(',').map(p => p.trim());
      filtered = filtered.filter(t => patterns.includes(t.pattern.toLowerCase()));
    }

    if (application) {
      const apps = application.toLowerCase().split(',').map(a => a.trim());
      filtered = filtered.filter(t => apps.includes(t.application.toLowerCase()));
    }

    if (featured === 'true') {
      filtered = filtered.filter(t => t.isFeatured);
    }

    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(s) ||
        t.description.toLowerCase().includes(s) ||
        t.material.toLowerCase().includes(s)
      );
    }

    if (sort === 'gsm-desc') {
      filtered.sort((a, b) => b.gsm - a.gsm);
    } else if (sort === 'gsm-asc') {
      filtered.sort((a, b) => a.gsm - b.gsm);
    } else if (sort === 'alpha') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      filtered.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
    }

    return res.json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTextileById = async (req, res) => {
  try {
    const { id } = req.params;

    if (getIsConnected()) {
      const textile = await Textile.findById(id);
      if (!textile) {
        return res.status(404).json({ success: false, message: 'Textile not found' });
      }
      return res.json({ success: true, data: textile });
    }

    const textile = memoryTextiles.find(t => t._id === id);
    if (!textile) {
      return res.status(404).json({ success: false, message: 'Textile not found' });
    }
    return res.json({ success: true, data: textile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createTextile = async (req, res) => {
  try {
    const { name, subtitle, material, color, pattern, application, gsm, composition, width, stockStatus, careInstructions, description, image, isNewArrival, isFeatured } = req.body;

    if (!name || !material || !color || !pattern || !application || !gsm || !description || !image) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    if (getIsConnected()) {
      const newTextile = await Textile.create(req.body);
      return res.status(201).json({ success: true, data: newTextile, message: 'Textile created successfully' });
    }

    const newTextile = {
      ...req.body,
      _id: `mem_tex_${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    memoryTextiles.unshift(newTextile);
    return res.status(201).json({ success: true, data: newTextile, message: 'Textile created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteTextile = async (req, res) => {
  try {
    const { id } = req.params;

    if (getIsConnected()) {
      await Textile.findByIdAndDelete(id);
      return res.json({ success: true, message: 'Textile deleted' });
    }

    memoryTextiles = memoryTextiles.filter(t => t._id !== id);
    return res.json({ success: true, message: 'Textile deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
