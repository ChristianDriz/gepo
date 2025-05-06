
import { getData } from '../lib/queries'
import { Navigation, PersonalInfo, Obituary, Favorites, Timeline, FamilyTree } from '../lib/constants'
import PersonalInfoSection from './_components/Sections/PersonalInfoSection';
import ObituarySection from './_components/Sections/ObituarySection';
import FavoriteSection from './_components/Sections/FavoriteSection';
import TimelineSection from './_components/Sections/TimelineSection';
import GallerySection from './_components/Sections/GallerySection';
import FamilyTreeSection from './_components/Sections/FamilyTreeSection';


export default async function Home() {
    
    const { galleries } = await getData();

    return (
        <>
            <PersonalInfoSection personalInfo={PersonalInfo} id={Navigation[0].link} />
            <ObituarySection obituary={Obituary} id={Navigation[1].link} />
            <FavoriteSection favorites={Favorites} id={Navigation[2].link} /> 
            <TimelineSection timeline={Timeline} id={Navigation[3].link}/>
            <GallerySection galleries={galleries} id={Navigation[4].link}/>
            <FamilyTreeSection familyTree={FamilyTree} id={Navigation[5].link}/>       
        </>
    );
}