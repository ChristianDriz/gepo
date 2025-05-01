
// import { getData } from '../lib/queries'
import FamilyTreeSection from './_components/Sections/FamilyTreeSection';
import FavoriteSection from './_components/Sections/FavoriteSection';
import GallerySection from './_components/Sections/GallerySection';
import ObituarySection from './_components/Sections/ObituarySection';
import PersonalInfoSection from './_components/Sections/PersonalInfoSection';
import TimelineSection from './_components/Sections/TimelineSection';
import { Navigation, PersonalInfo, Obituary, Favorites, Category, Timeline } from '../lib/constants'

export default async function Home() {
    
    // const { personalInfos, familyTrees } = await getData();

    // console.log(Navigation);

    return (
        <>
            <PersonalInfoSection personalInfo={PersonalInfo} id={Navigation[0].link} />
            <ObituarySection obituary={Obituary} id={Navigation[1].link} />
            <FavoriteSection favorites={Favorites} id={Navigation[2].link} /> 
            <TimelineSection timeline={Timeline} id={Navigation[3].link}/>
            {/* <GallerySection categories={Category}/>
            <FamilyTreeSection familyTrees={familyTrees}/> */}
            
        </>
    );
}