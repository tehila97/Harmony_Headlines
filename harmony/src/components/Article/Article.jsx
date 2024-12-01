import React from "react";

export default function Article (props) {
    return (
        <div className="article">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        </div>
    );
}




// import React from "react";

// export default function Article (news) {
//     return (
//         <>
//         <h1> article description: </h1>
//             <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                 when an unknown printer took a galley of type and scrambled it to make a type
//                 specimen book. It has survived not only five centuries, but also the leap into
//             </p>
//         </>
//     )
// }