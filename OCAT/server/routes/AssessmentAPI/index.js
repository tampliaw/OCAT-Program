const router = require(`express`).Router();
const { AssessmentService } = require(`../../libs`);

router.post(`/submit`, (req, res, next) => {
  try {
    const { formatted_assessment } = req.body;
    AssessmentService.submit(formatted_assessment);
  } catch (error) {
    next(error);
  }
});

router.get(`/list`, async (req, res, next) => {
  try {
    const assessments = await AssessmentService.getList();
    console.log(assessments);
    res.json(assessments);

  } catch (error) {
    next(error);
  }
});

exports.router = router;
exports.path = `/api/assessment`;
