import { FamilyTreeProp } from "@/lib/interfaces";
import React from "react";


export default function FamilyTreeSection({ familyTrees } : { familyTrees: FamilyTreeProp[]} ) {

    console.log(familyTrees);
    return (
        <div className="flex flex-col items-center gap-5">
            {/* Row 1: Parents */}
            <div className="flex flex-wrap justify-center gap-2">
                <div className="member">{familyTrees[0].name}</div>
                <div className="member">{familyTrees[0].spouse[0]?.name}</div>
            </div>

            {/* Row 2: Children + Spouses */}
            <div className="flex flex-wrap justify-center gap-2">
                {familyTrees[0].children.map((child, index) => (
                <React.Fragment key={index}>
                    <div className="member child">{child.name}</div>
                    <div className="member spouse">{child.spouse[0]?.name || ''}</div>
                </React.Fragment>
                ))}
            </div>

            {/* Row 3: Grandchildren */}
            <div className="family-row grandchildren">
                {familyTrees[0].children.map((child, index) => (
                <div key={index} className="grandchild-group">
                    {child.children.map((grandchild, i) => (
                    <div className="member grandchild" key={i}>
                        {grandchild.name}
                    </div>
                    ))}
                </div>
                ))}
            </div>
        </div>
    )
}
