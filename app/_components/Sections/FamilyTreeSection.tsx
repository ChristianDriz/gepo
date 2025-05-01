import { FamilyTreeProp } from "@/lib/interfaces";
import ProfileCard from "../ui/ProfileCard";

export default function FamilyTreeSection({ familyTree, id } :  FamilyTreeProp ) {

    const parent = familyTree[0];
    const spouse = parent.spouse;

    const childrenWithGrandchildren = parent.children?.map((child) => ({
        child,
        grandchildren: child.children,
    }));
    // console.log(childrenWithGrandchildren);

    return (
        <section id={id} className="max-w-7xl mx-auto my-10 p-3 md:p-4 ">
            <h2 className="mb-4 capitalize">{id}</h2>
            <div className="flex flex-col items-start gap-4 overflow-x-auto custom-scrollbar">
                <div className="flex justify-center space-x-4  w-full" >
                    <ProfileCard 
                        name={parent.name}
                        gender={parent.gender}
                        role={parent.role}
                        birthdate={parent.birthdate}
                        status={parent.status}
                        profile_photo={parent.profile_photo}
                    />
                    {spouse && (
                    <ProfileCard 
                        name={spouse.name}
                        gender={spouse.gender}
                        role={spouse.role}
                        birthdate={spouse.birthdate}
                        status={spouse.status}
                        profile_photo={spouse.profile_photo}
                    />
                    )}
                    
                </div>
                <div className="flex justify-center gap-4 ">
                    {childrenWithGrandchildren?.map((family, index) => (
                    <div key={index} className=" flex flex-col items-center gap-4">
                        {/* child and spouse */}
                        <div className="flex gap-6">
                            <ProfileCard 
                                name={family.child.name}
                                gender={family.child.gender}
                                role={family.child.role}
                                birthdate={family.child.birthdate}
                                status={family.child.status}
                                profile_photo={family.child.profile_photo}
                            />
                            {family.child.spouse && (
                            <ProfileCard 
                                name={family.child.spouse.name}
                                gender={family.child.spouse.gender}
                                role={family.child.spouse.role}
                                birthdate={family.child.spouse.birthdate}
                                status={family.child.spouse.status}
                                profile_photo={family.child.spouse.profile_photo}
                            />
                            )}
                        </div>

                        {/* grandchild */}
                        <div className="flex justify-center gap-4  ">
                            {family.grandchildren?.map((grandchild, i) => (
                                <ProfileCard
                                    key={`${index}-${i}`}
                                    name={grandchild.name}
                                    gender={grandchild.gender}
                                    role={grandchild.role}
                                    birthdate={grandchild.birthdate}
                                    status={grandchild.status}
                                    profile_photo={grandchild.profile_photo}
                                />
                            ))}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
       
    )
}
