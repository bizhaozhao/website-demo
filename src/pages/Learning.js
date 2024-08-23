import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"

function Learning() {
  return (
    <div className="learning">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          date="Sep, 2023"
          iconStyle={{ background: "#3e497a", color: "#fff"}}
        >
          <h3 className="vertical-timeline-element-title">
          Learning about C# Classes, Interfaces and OOP(Object-oriented programming)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">

          </h4>
          <p>

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          date="Oct, 2023"
          iconStyle={{ background: "#3e497a", color: "#fff"}}
        >
          <h3 className="vertical-timeline-element-title">
          Foundational C# with Microsoft Certificate
          </h3>
          <img>
          
          </img>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          date="Nov, 2023"
          iconStyle={{ background: "#3e497a", color: "#fff"}}
        >
          <h3 className="vertical-timeline-element-title">
          Learning Entity Framework
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          date="Dec, 2023"
          iconStyle={{ background: "#3e497a", color: "#fff"}}
        >
          <h3 className="vertical-timeline-element-title">
          Learning about ASP.NET MVC 5
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          date="Dec, 2023"
          iconStyle={{ background: "#3e497a", color: "#fff"}}
        >
          <h3 className="vertical-timeline-element-title">
          Learning LINQ with C#
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          date="Jan - Mar, 2024"
          iconStyle={{ background: "#3e497a", color: "#fff"}}
        >
          <h3 className="vertical-timeline-element-title">
          AWS Learning and Exam (DVA-C02 AWS Certified Developer Associate)
          </h3>
          <img>
          
          </img>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          date="Aug - Currently, 2024"
          iconStyle={{ background: "#3e497a", color: "#fff"}}
        >
          <h3 className="vertical-timeline-element-title">
          Learning DevOps with Samual
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Learning