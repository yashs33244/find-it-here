// components/TopicCard.js
interface TopicCardProps {
    topic: string;
    href: string;
    bgColor: string;
    darkBgColor: string;
    gradientFrom: string;
    gradientTo: string;
    
}

import Link from 'next/link';

const TopicCard = ({ topic, href, bgColor, darkBgColor, gradientFrom, gradientTo }:TopicCardProps) => {
  return (
    <Link href={href} className="group" prefetch={false}>
      <div 
        className={`rounded-lg p-6 flex items-center justify-center h-32 text-white text-3xl font-bold transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 ${bgColor} dark:${darkBgColor} group-hover:${gradientFrom} group-hover:${gradientTo}`}
      >
        {topic}
      </div>
    </Link>
  );
};

export default TopicCard;
