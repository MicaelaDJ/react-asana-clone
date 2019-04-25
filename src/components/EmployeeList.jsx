import React from "react";
import Employee from "./Employee";
import dustinPhoto from "../assets/images/dustin.jpg";
import justinPhoto from "../assets/images/justin.jpg";
import annaPhoto from "../assets/images/anna.jpg";
import prashantPhoto from "../assets/images/prashant.jpg"

function EmployeeList() {

    const leadershipTeam = [
        {
            name: "Dustin Moskovitz",
            title: "CEO and co-founder",
            bio: "Meet Dustin. As CEO, he’s as dedicated to creating a product that helps teams collaborate effortlessly as he is to crafting a culture where Asanas can thrive and do the best work of their careers. Before that, he co-founded Facebook, where he was a key technical leader, working first as CTO and then as VP of Engineering.",
            image: dustinPhoto
        },

        {
            name: "Justin Rosenstein",
            title: "Co-founder",
            bio: "As Asana’s co-founder and vision leader, Justin (known internally as JR) devotes his time to exploring how technology enables teams to work more productively, and to making Asana a radically inclusive, positive workplace. Before launching Asana he worked at Facebook and Google and is responsible for co-creating Facebook’s Like button, Facebook Pages, Gmail Chat, and Google Drive.",
            image: justinPhoto
        },

        {
            name: "Anna Binder",
            title: "People Operations",
            bio: "Anna has spent most of her career working in people operations human resources at technology start-ups, connecting people programs to business objectives and values. As head of people operations at Asana, she leads the company’s efforts in recruiting, total rewards, diversity and inclusion, learning, development, and employee engagement. Before joining Asana, Anna worked in similar roles at MuleSoft, Readyforce, and IronPort Systems.",
            image: annaPhoto
        },

        {
            name: "Prashant Pandey",
            title: "Engineering",
            bio: "As head of engineering, Prashant leads Asana’s growing engineering organization towards high velocity, sustainability, and quality. Before joining Asana, Prashant started and led the Bay Area team building Amazon DynamoDB, a fully managed NoSQL database service. He also led engineering for mobile advertising start-up Vdopia and worked on storage systems at IBM Research.",
            image: prashantPhoto
        },
    ]
  return (
    <div>
        <style jsx>{`
             h1 {
                 text-align: center;
             }
             .employeeBlock {
                 position: relative;
                 text-align: center;
             }
             
            `}
            </style>
        <div className="pageTop">
            <h1>
                Our Leadership Team
            </h1>
        </div>
        <div className="employeeBlock">
        {leadershipTeam.map((leader, index) =>
            <Employee name = {leader.name}
            title= {leader.title}
            bio= {leader.bio}
            image= {leader.image}
            key={index}/>
            )}
        </div>
    </div>
    
  );
}

export default EmployeeList;