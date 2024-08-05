let anchorBtns = Array.from(document.querySelectorAll('.mdn-link'));
let parents = Array.from(document.querySelectorAll(".parent"));
let children = Array.from(document.querySelectorAll(".child"))
let parentText = Array.from(document.querySelectorAll(".parent-text"));

let childDiv = children.filter(e => e.tagName === 'DIV');
let pDiv = children.filter(e => e.tagName === 'P');
let bDiv = children.filter(e => e.tagName === 'BUTTON');

let attrChild = Array.from(document.querySelectorAll("[honk]"));

function display(target) {
    console.log(target.textContent);
    parents.forEach((div) => {
        div.classList.remove("select-parent");
        div.classList.remove("first");
    })
    let count = 0;
    parentText.forEach((span) => {
        span.textContent = `Parent ${++count}`;
    })
    children.forEach((div) => { 
        div.classList.remove("select-child");
        div.textContent = `Child ${++count > 4 ? count = 1 : count}`;
    });
    switch(target.textContent) {
        case "Type":
            bDiv.forEach((div) => {
                div.classList.add("select-child")
            });
            bDiv.forEach((span) => span.textContent = 'Selected All Buttons!')
            return
        case "ID/Class":
            parents.forEach((div) => {
                div.classList.add("select-parent")
            });
            parentText.forEach((span) => span.textContent = 'Parent Class Reporting For Duty!')
            return
        case "Chaining Selector":
            bDiv.forEach((div) => {
                div.classList.add("select-child")
            });
            bDiv.forEach((span) => span.textContent = 'Buttons (Me), Paragraph Elements Styles Applied Together!')
            pDiv.forEach((div) => {
                div.classList.add("select-child")
            });
            pDiv.forEach((span) => span.textContent = 'Buttons, Paragraph (Me) Elements Styles Applied Together!')
            return
        case "Descendant Combinator":
            parentText.forEach((span) => span.textContent = 'I Am The Ancestral Div With Class Parent!')
            bDiv.forEach((div) => {
                div.classList.add("select-child")
            });
            bDiv.forEach((span) => span.textContent = 'All Button Descendants Selected! [Depth Of Nesting Is Irrelevant]')
            return
        case "General Sibling Selector":
            childDiv[0].textContent = 'I Am The Reference Child 1'
            childDiv[1].textContent = 'All Siblings Of Child 1 Selected!'
            pDiv[0].textContent = 'All Siblings Of Child 1 Selected!'
            bDiv[0].textContent = 'All Siblings Of Child 1 Selected!'
            childDiv[0].classList.add("select-child")
            childDiv[1].classList.add("select-child")
            pDiv[0].classList.add("select-child")
            bDiv[0].classList.add("select-child")
            return
        case "Adjacent Sibling Selector":
            childDiv[0].textContent = 'I Am The Reference Child 1'
            childDiv[1].textContent = 'First/Adjacent Sibling Of Child 1 Selected!'
            childDiv[0].classList.add("select-child")
            childDiv[1].classList.add("select-child")
            return
        case "Child Selector":
            parentText[1].textContent = 'I Am The Reference Parent 2'
            childDiv[2].textContent = 'Direct Children Of Parent 2 Selected!'
            childDiv[3].textContent = 'Direct Children Of Parent 2 Selected!'
            pDiv[1].textContent = 'Direct Children Of Parent 2 Selected!'
            bDiv[1].textContent = 'Direct Children Of Parent 2 Selected!'
            parents[1].classList.add("select-parent")
            childDiv[2].classList.add("select-child")
            childDiv[3].classList.add("select-child")
            pDiv[1].classList.add("select-child")
            bDiv[1].classList.add("select-child")
            return
    case "Attribute Selector":
            attrChild.forEach((e) => {
                e.textContent = 'I Have An Attribute Called Honk'
                e.classList.add("select-child")
            })
            return
    case "Attribute Pattern Selector":
            attrChild.forEach((e) => {
                if (e.tagName === 'P') {
                    e.textContent = 'My Honk Value Is Se7en';
                    return
                }
                e.textContent = 'My Honk Attribute Value Is La La Land'
                e.classList.add("select-child")
            })
            return
    case "User-Action Pseudo Selector":
        parents.forEach((div) => {
            div.classList.add("select-parent")
        });
        children.forEach((div) => {
            div.classList.add("select-child")
            div.textContent = "This Is The Hover Action You've Been Using, But There Are More!"
        });
        parentText.forEach(e => e.textContent = "This Is The Hover Action You've Been Using, But There Are More!")
        return
    case "Structural Child Selector":
            childDiv[0].classList.add("select-child");
            childDiv[0].textContent = "Every First Div Child Is Selected! You Can Select Last Or Specific Position Also"
            childDiv[2].classList.add("select-child")
            childDiv[2].textContent = "Every First Child Is Selected! You Can Select Last Or Specific Position Also"
            childDiv[4].classList.add("select-child")
            childDiv[4].textContent = "Every First Child Is Selected! You Can Select Last Or Specific Position Also"
            return
    case "Structural Type Of Selector":
         parents[0].classList.add("select-parent")
            parentText[0].textContent = "Every First Div Is Selected! You Can Select Last Or Specific Position Also"
            childDiv[0].classList.add("select-child");
            childDiv[0].textContent = "Every First Div Is Selected! You Can Select Last Or Specific Position Also"
            childDiv[2].classList.add("select-child")
            childDiv[2].textContent = "Every First Div Is Selected! You Can Select Last Or Specific Position Also"
            childDiv[4].classList.add("select-child")
            childDiv[4].textContent = "Every First Div Is Selected! You Can Select Last Or Specific Position Also"
            return
    case "Nth Child Selector":
            childDiv[1].classList.add("select-child");
            childDiv[1].textContent = "All Even Children Selected!"
            childDiv[3].classList.add("select-child");
            childDiv[3].textContent = "All Even Children Selected!"
            childDiv[5].classList.add("select-child");
            childDiv[5].textContent = "All Even Children Selected!"
            bDiv.forEach((div) => {
                div.classList.add("select-child")
                bDiv.forEach((span) => span.textContent = 'All Even Children Selected!')
            })
            return
        case "Nth Type Selector":
            childDiv[1].classList.add("select-child");
            childDiv[1].textContent = "All Even Div Selected!"
            childDiv[3].classList.add("select-child");
            childDiv[3].textContent = "All Even Div Selected!"
            childDiv[5].classList.add("select-child");
            childDiv[5].textContent = "All Even Div Selected!"
            parents[1].classList.add("select-parent");
            parentText[1].textContent = "All Even Div Selected!"
            parents[3].classList.add("select-parent");
            parentText[3].textContent = "All Even Div Selected!"
            return
        case "Empty":
            parentText[3].textContent = "All Parent-Class Div's Without Children Selected. Even Text Is Considered A Child So We Cleared All Text From This Div First"
            parents[3].classList.add("select-parent")
            return
        case "Negation Pseudo Selector":
            parents.forEach((e, index) => {
                if (index === 3) return
                e.classList.add("select-parent")
            })
            parentText.forEach((e, index) => {
                if (index === 3) return
                e.textContent = "All Non Empty Parent-Class Div's Selected! Even Text Is Considered A Child So We Cleared All Text From Parent 4 First."
            })
            return
        case "Typography Pseudo Element":
            parentText.forEach((e, index) => {
                e.textContent = "We Can Select Specific Letters Or Lines. We Are Selecting The First Line Here & Changing It's Color!"
            })
            parents.forEach((e, index) => {
                e.classList.add("first")
            })
            return
        case "Content Generating Pseudo Element":
            let text = parentText[0].textContent
            parentText[0].textContent = `Add Content Before Specific Elements (Span Here) -> ${text}`
            parents[0].classList.add("select-parent")
            return
    }
}

anchorBtns.forEach((btn) => btn.addEventListener('mouseover', (e) => display(e.target)))


