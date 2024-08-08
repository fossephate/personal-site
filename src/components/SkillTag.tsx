import React from 'react';

interface SkillTagProps {
  skill: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => (
  <span className="inline-block bg-blue-200 rounded-full px-2 py-1 text-xs font-semibold text-black mr-2 mb-2">
    {skill}
  </span>
);

interface SkillTagsProps {
  skills: string[];
}

const SkillTags: React.FC<SkillTagsProps> = ({ skills }) => (
  <div className="flex flex-wrap">
    {skills.map((skill, index) => (
      <SkillTag key={index} skill={skill} />
    ))}
  </div>
);

export default SkillTags;
