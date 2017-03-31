import React from 'react';
import GeneralRequirementsList from './GeneralRequirementsList';
import MajorRequirementsList from './MajorRequirementsList';

// This component is for displaying a student's plan of study.
// It will have a block of general requirements and a block of
// major-specific requirements
const PlanOfStudy = () => (
  <div>
    <p>Plan of Study</p>
    <p>General Requirements</p>
    <GeneralRequirementsList
      requirements={[
        'Modeling and Simulation of the Physical World',
        'Linearity I',
        'Linearity II',
        'Probability and Statistics',
        'Biology Foundation',
        'Chemistry/Materials Science',
        'Physics Foundation',
        'Introduction to Sensors, Instrumentation, and Measurement',
        'Principles of Engineering',
        'Engineering Capstone',
        'Design Nature',
        'User-Oriented Collaborative Design',
        'Design Depth',
        'AHS Foundation',
        'AHS or Entrepreneurship Depth of Study',
        'Olin Self Study',
      ]}
    />
    <p>Major Requirements</p>
    <MajorRequirementsList
      requirements={[
        'Mechanical Engineering Math',
        'Mechanics of Solids and Structures',
        'Dynamics',
        'Thermodynamics',
        'Transport Phenomena',
        'Mechanical Design',
        'Mechanical Engineering Elective',
      ]}
    />
  </div>
);

export default PlanOfStudy;
