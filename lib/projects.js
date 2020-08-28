import fs from 'fs'
import path from 'path'

export function getAllProjIds() {
    const fileNames = fs.readdirSync('projects');
    
    console.log(fileNames)

	// Returns an array that looks like this:
	// [
	//   {
	//     params: {
	//       id: 'ssg-ssr'
	//     }
	//   },
	//   {
	//     params: {
	//       id: 'pre-rendering'
	//     }
	//   }
	// ]
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ''),
			},
		};
	});
}

export function getProjData(id) {
	const fullPath = path.join('projects', `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	// Use gray-matter to parse the post metadata section
	// const matterResult = matter(fileContents);

	// Combine the data with the id
	return {
		id,
		// ...matterResult.data,
	};
}
