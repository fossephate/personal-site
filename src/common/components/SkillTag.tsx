import React from 'react';

const SkillTag = ({ skill }) => (
  <span className="inline-block bg-blue-200 rounded-full px-2 py-1 text-xs font-semibold text-black mr-2 mb-2
  ">
    {skill}
  </span>
);

const SkillTags = ({ skills }) => (
  <div className="flex flex-wrap">
    {skills.map((skill, index) => (
      <SkillTag key={index} skill={skill} />
    ))}
  </div>
);

export default SkillTags;