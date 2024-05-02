import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolOutline } from "react-icons/io5";
import { BsSuitcaseLgFill } from "react-icons/bs";
import "./Timeline.css";
import { Link } from "react-router-dom";

const Timeline = () => {
  return (
    <>
      <h2 className="exp-heading" style={{ textAlign: "center" }}>
        Education & Experience
      </h2>
      <div className="experience">
        <VerticalTimeline lineColor="red">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Month-Year - Month-Year"
            iconStyle={{ background: "black", color: "#fff" }}
            icon={<IoSchoolOutline />}
          >
            <h3 className="vertical-timeline-element-title">
              Higher Secondary School Name, Place - Chennai, Tamilnadu
            </h3>
            <p className="timeline-sub"> High School</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Month-Year - Month-Year"
            iconStyle={{ background: "black", color: "#fff" }}
            icon={<IoSchoolOutline />}
          >
            <h3 className="vertical-timeline-element-title">
               College Name, Place - Chennai, Tamilnadu
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Bachelor's Degree - B.E
            </h4>

            <p className="timeline-sub">
              Computer Science Engineering
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Month-Year - Month-Year"
            iconStyle={{ background: "black", color: "#fff" }}
            icon={<IoSchoolOutline />}
          >
            <h3 className="vertical-timeline-element-title">
               Course Name - Learned & Trained by Institue Name
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Chennai, Tamilnadu
            </h4>
            <p className="timeline-sub">Full Stack Developing.</p>

          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Month-Year to Month-Year"
            iconStyle={{ background: "black", color: "#e9d35b" }}
            icon={<BsSuitcaseLgFill />}
          >
            <h4>Work : IT / Non IT : </h4>
            <h3 className="vertical-timeline-element-title">
            Your Role - Company Name 
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Chennai, Tamilnadu
            </h4>
            <p className="timeline-sub">
             Roles & Responsiblities
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            style={{marginBottom:"70px"}}
            className="vertical-timeline-element--work"
            date="Month-Year to At Present"
            iconStyle={{ background: "black", color: "#e9d35b" }}
            icon={<BsSuitcaseLgFill />}
          >
            <h3 className="vertical-timeline-element-title">
              Your Role -  Company Name
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Chennai, Tamilnadu
            </h4>
            <p className="timeline-sub">
              Roles and Responsiblities
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Timeline;
