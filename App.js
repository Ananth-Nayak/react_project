const heading=React.createElement("h1",{
    id:"title1"
},"Heading1");
const heading2=React.createElement("h2",{
    id:"title2"
},"Heading2");

const container=React.createElement("div",{
    id:"container"
},[heading,heading2]);

const root=ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
root.render(container);
//render modifies dom
//it will override if any content already present in the root element