const express = require('express');
const router = express.Router();

// Middlewares
const authMiddleware = require('../middleware/auth');
const upload = require('../middleware/upload');

// Controllers
const projectController = require('../controllers/projectController');
const experienceController = require('../controllers/experienceController');
const skillController = require('../controllers/skillController');
const blogController = require('../controllers/blogController');
const contactController = require('../controllers/contactController');
const settingsController = require('../controllers/settingsController');
const seoController = require('../controllers/seoController');

// ==========================================
// PUBLIC ENDPOINTS
// ==========================================

// Projects
router.get('/projects', projectController.getAllProjects);
router.get('/projects/:idOrSlug', projectController.getProjectByIdOrSlug);

// Experiences
router.get('/experiences', experienceController.getAllExperiences);

// Skills
router.get('/skills', skillController.getAllSkills);

// Blogs
router.get('/blogs', blogController.getAllBlogs);
router.get('/blogs/:slug', blogController.getBlogBySlug);

// Contact messages submit
router.post('/contacts', contactController.createContactMessage);

// Branding settings & SEO metadata
router.get('/settings', settingsController.getSettings);
router.get('/seo', seoController.getSEO);

// ==========================================
// PROTECTED CMS ADMIN ENDPOINTS
// ==========================================

// Projects CRUD
router.post('/projects', authMiddleware, upload.single('file'), projectController.createProject);
router.put('/projects/:id', authMiddleware, upload.single('file'), projectController.updateProject);
router.delete('/projects/:id', authMiddleware, projectController.deleteProject);

// Experiences CRUD
router.post('/experiences', authMiddleware, experienceController.createExperience);
router.put('/experiences/:id', authMiddleware, experienceController.updateExperience);
router.delete('/experiences/:id', authMiddleware, experienceController.deleteExperience);

// Skills CRUD
router.post('/skills', authMiddleware, skillController.createSkill);
router.put('/skills/:id', authMiddleware, skillController.updateSkill);
router.delete('/skills/:id', authMiddleware, skillController.deleteSkill);

// Blogs CRUD
router.post('/blogs', authMiddleware, upload.single('file'), blogController.createBlog);
router.put('/blogs/:id', authMiddleware, upload.single('file'), blogController.updateBlog);
router.delete('/blogs/:id', authMiddleware, blogController.deleteBlog);

// Contacts Inboxes CRUD
router.get('/contacts', authMiddleware, contactController.getAllMessages);
router.put('/contacts/:id', authMiddleware, contactController.updateMessageStatus);
router.delete('/contacts/:id', authMiddleware, contactController.deleteMessage);

// Branding settings & SEO metadata CRUD
router.put('/settings', authMiddleware, upload.fields([
  { name: 'profileImage', maxCount: 1 },
  { name: 'resumePdf', maxCount: 1 }
]), settingsController.updateSettings);

router.put('/seo', authMiddleware, upload.single('file'), seoController.updateSEO);

module.exports = router;
