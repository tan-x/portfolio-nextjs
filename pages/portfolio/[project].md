import ProjectLayout from '../../components/ProjectLayout';
import { getAllProjIds, getProjData } from '../../lib/projects';

export default function Project({projData}) {
	return <ProjectLayout>...</ProjectLayout>;
}

export async function getStaticPaths() {
	// Return a list of possible value for id
	const paths = getAllProjIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
    const projData = getProjData(params.id)
    return {
      props: {
        projData
      }
    }
  }
