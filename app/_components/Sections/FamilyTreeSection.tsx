import { FamilyTreeProp } from "@/lib/interfaces";
import ProfileCard from "../ui/ProfileCard";
import SectionTitle from "../ui/SectionTitle";

export default function FamilyTreeSection({ familyTree, id } :  FamilyTreeProp ) {

    const parent = familyTree[0];
    const spouse = parent.spouse;

    return (
        <section id={id} className="max-w-7xl mx-auto pt-8 pb-40 px-3 md:px-4 ">
            <SectionTitle title={id}/>
            <div className="flex gap-16 overflow-x-auto overflow-y-hidden relative ">
                {/* parents */}
                <div className="flex flex-col items-center justify-center">
                    <ProfileCard 
                        name={parent.name}
                        gender={parent.gender}
                        role={parent.role}
                        birthdate={parent.birthdate}
                        isAlive={parent.isAlive}
                        profile_photo={parent.profile_photo}
                    />
                    <span className={`w-px h-20 bg-gray-300 relative before:content-[''] before:absolute before:h-px before:w-[156px] before:top-1/2 before:bg-gray-300`}/>
                    {spouse && (
                    <ProfileCard 
                        name={spouse.name}
                        gender={spouse.gender}
                        role={spouse.role}
                        birthdate={spouse.birthdate}
                        isAlive={spouse.isAlive}
                        profile_photo={spouse.profile_photo}
                    />
                    )}              
                </div>
                {/* child and spouse */}
                <div className="flex flex-col justify-center gap-9 relative before:content-[''] before:absolute before:-left-8 before:h-[calc(100%-96px)] before:w-px before:bg-gray-300">
                    {parent.children?.map((child, index) => (     
                    <div className="flex items-center" key={index} >
                        <ProfileCard 
                            name={child.name}
                            gender={child.gender}
                            role={child.role}
                            birthdate={child.birthdate}
                            isAlive={child.isAlive}
                            profile_photo={child.profile_photo}
                        />  
                        
                        {child.spouse && (
                        <>
                            <span className={`relative w-6 h-px bg-gray-300 ${child.children?.length ? `after:content-[''] after:absolute after:left-1/2 after:w-px after:h-16.5 after:bg-gray-300 
                                before:content-[''] before:absolute before:top-16.5 before:left-3 before:h-px before:w-[280px] before:bg-gray-300` : ""}`}/>
                            <ProfileCard 
                                name={child.spouse.name}
                                gender={child.spouse.gender}
                                role={child.spouse.role}
                                birthdate={child.spouse.birthdate}
                                isAlive={child.spouse.isAlive}
                                profile_photo={child.spouse.profile_photo}
                            />
                        </>
                        )}
                        
                    </div>
                ))}
                </div>
                {/* grandchildren */}     
                <div className="flex flex-col gap-2 ">
                {parent.children?.map((child, index) => (
                    <div key={index} className="flex flex-col gap-2 relative before:content-[''] before:absolute before:-left-8 before:h-[calc(100%-96px)] before:w-px before:mt-12 before:bg-gray-300">      
                    {child.children?.map((grandchild, i) => (
                        <ProfileCard
                            key={`${index}-${i}`} 
                            name={grandchild.name}
                            gender={grandchild.gender}
                            role={grandchild.role}
                            birthdate={grandchild.birthdate}
                            isAlive={grandchild.isAlive}
                            profile_photo={grandchild.profile_photo}
                        />
                    ))}
                    </div>
                ))}
                </div>
            </div>
        </section>
       
    )
}
