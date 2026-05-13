Drop raw study files here with filenames that include a subject hint and a type hint.

Examples:
- `cs601_notes_unit1.pdf`
- `cn_assignment_2.pdf`
- `graphic_mock_paper_1.pdf`
- `pm_slides_sprint_review.pptx`

On push, the GitHub Action `Organize Resource Uploads` will:
1. detect the subject and resource type from the filename,
2. rename the file into a cleaner slug,
3. move it into `assets/resources/<subject>/<type>/`,
4. rebuild `js/resource-library.js` so the Resources page shows it automatically.
