import { FamilyTreeProp } from "@/lib/interfaces";
import ProfileCard from "../ui/ProfileCard";

export default function FamilyTreeSection({ familyTree, id } :  FamilyTreeProp ) {

    const parent = familyTree[0];
    const spouse = parent.spouse;

    // const children = parent.children?.map((child) => ({
    //     child,
    //     grandchildren: child.children,
    // }));

    console.log(parent.children)
    return (
        <section id={id} className="max-w-7xl mx-auto my-10 p-3 md:p-4 ">
            <h2 className="mb-4 capitalize">{id}</h2>
            <div className="flex flex-col items-start gap-20 overflow-x-auto custom-scrollbar relative ">
                {/* parents */}
                <div className="flex justify-center items-center w-full">
                    <ProfileCard 
                        name={parent.name}
                        gender={parent.gender}
                        role={parent.role}
                        birthdate={parent.birthdate}
                        isAlive={parent.isAlive}
                        profile_photo={parent.profile_photo}
                    />
                    <span className={`w-20 h-px bg-gray-300 relative before:content-[''] before:absolute before:w-px before:h-[117px] before:left-1/2 before:bg-gray-300`}/>
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
                <div className="flex justify-center gap-10 relative before:content-[''] before:absolute before:-top-10 before:w-[calc(100%-128px)] before:h-px before:bg-gray-300">
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
                            <span className={`relative w-8 h-px bg-gray-300 ${child.children?.length ? "after:content-[''] after:absolute after:left-1/2 after:w-px after:h-[117px] after:bg-gray-300" : ""}`}/>
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
                <div className="w-full flex justify-evenly gap-28 ">
                {parent.children?.map((child, index) => (
                    <div key={index} className="flex gap-4 relative before:content-[''] before:absolute before:-top-10 before:w-[calc(100%-128px)] before:ml-16 before:h-px before:bg-gray-300">      
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
