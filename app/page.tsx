
import { getPersonalInfo, getData } from '../lib/queries'
import Navbar from './_components/Navbar';
import FamilyTreeSection from './_components/Sections/FamilyTreeSection';
import FavoriteSection from './_components/Sections/FavoriteSection';
import GallerySection from './_components/Sections/GallerySection';
import ObituarySection from './_components/Sections/ObituarySection';
import PersonalInfoSection from './_components/Sections/PersonalInfoSection';
import TimelineSection from './_components/Sections/TimelineSection';

export default async function Home() {

    const { personalInfos } = await getPersonalInfo();
    const { obituaries, favorites, timelines, galleries, familyTrees } = await getData();

    return (
        <>
            <PersonalInfoSection personalInfos={personalInfos}/>
            <Navbar 
                obituaries={obituaries}
                favorites={favorites}
                timelines={timelines}
                galleries={galleries}
                familyTrees={familyTrees}
            />
            <>
                <ObituarySection obituaries={obituaries}/>
                <FavoriteSection favorites={favorites}/>
                <TimelineSection timelines={timelines}/>
                <GallerySection galleries={galleries}/>
                <FamilyTreeSection familyTrees={familyTrees}/>
            </>
        </>
    );
}