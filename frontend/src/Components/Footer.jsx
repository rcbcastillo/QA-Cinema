import React from 'react';

const Footer = () => {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const title = "Lorem Ipsum";

    const columns = [{
        title: "malik",
        resources: [{
            name: "abdul",
            link: "/item5"
        },{
            name: "Item 6",
            link: "/item6"
        }]
        },{
            title: "Column 3",
            resources: [{
                name: "Item 7",
                link: "/item7"
            },{
                name: "Item 8",
                link: "/item8"
            }]
        }];

        return (
        <footer>
            <h4>{title}</h4>
            <h5>{description}</h5>

            <div>
                {columns.map((column, index) =>{
                    return (
                        <div key={index}>
                            <h2>title: {column.title}</h2>
                            <h2>resources: {column.resources.map((r)=><><h3>{r.name}</h3></>)}</h2>
                            
                        </div>
                    )
                }
                )}
            </div>

        </footer>
        );

    }
export default Footer