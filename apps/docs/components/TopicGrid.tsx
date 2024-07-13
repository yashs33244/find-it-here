// components/TopicGrid.js
import TopicCard from './TopicCard';

const topics = [
  { topic: 'Food', href: '/topics', bgColor: 'bg-[#ff6b6b]', darkBgColor: 'bg-[#ff4d4d]', gradientFrom: 'from-[#ff6b6b]', gradientTo: 'to-[#ffa500]' },
  { topic: 'Web Tech', href: '#', bgColor: 'bg-[#ffa500]', darkBgColor: 'bg-[#ff8c00]', gradientFrom: 'from-[#ffa500]', gradientTo: 'to-[#9370db]' },
  { topic: 'ML', href: '#', bgColor: 'bg-[#9370db]', darkBgColor: 'bg-[#8b5cf6]', gradientFrom: 'from-[#9370db]', gradientTo: 'to-[#87ceeb]' },
  { topic: 'Gaming', href: '#', bgColor: 'bg-[#87ceeb]', darkBgColor: 'bg-[#6495ed]', gradientFrom: 'from-[#87ceeb]', gradientTo: 'to-[#dda0dd]' },
  { topic: 'Design', href: '#', bgColor: 'bg-[#dda0dd]', darkBgColor: 'bg-[#da70d6]', gradientFrom: 'from-[#dda0dd]', gradientTo: 'to-[#b0c4de]' },
  { topic: 'Music', href: '#', bgColor: 'bg-[#b0c4de]', darkBgColor: 'bg-[#add8e6]', gradientFrom: 'from-[#b0c4de]', gradientTo: 'to-[#f0e68c]' },
  { topic: 'Fitness', href: '#', bgColor: 'bg-[#f0e68c]', darkBgColor: 'bg-[#ffd700]', gradientFrom: 'from-[#f0e68c]', gradientTo: 'to-[#ff6b6b]' },
  { topic: 'Travel', href: '#', bgColor: 'bg-[#ff6b6b]', darkBgColor: 'bg-[#ff4d4d]', gradientFrom: 'from-[#ff6b6b]', gradientTo: 'to-[#ffa500]' },
  { topic: 'Sports', href: '#', bgColor: 'bg-[#ff6b6b]', darkBgColor: 'bg-[#ff4d4d]', gradientFrom: 'from-[#ff6b6b]', gradientTo: 'to-[#ffa500]' },
  { topic: 'Entertainment', href: '#', bgColor: 'bg-[#ffa500]', darkBgColor: 'bg-[#ff8c00]', gradientFrom: 'from-[#ffa500]', gradientTo: 'to-[#9370db]' },
  { topic: 'Education', href: '#', bgColor: 'bg-[#9370db]', darkBgColor: 'bg-[#8b5cf6]', gradientFrom: 'from-[#9370db]', gradientTo: 'to-[#87ceeb]' },
  { topic: 'Business', href: '#', bgColor: 'bg-[#87ceeb]', darkBgColor: 'bg-[#6495ed]', gradientFrom: 'from-[#87ceeb]', gradientTo: 'to-[#dda0dd]' },
];

const TopicGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {topics.map((item, index) => (
        <TopicCard 
          key={index}
          topic={item.topic}
          href={item.href}
          bgColor={item.bgColor}
          darkBgColor={item.darkBgColor}
          gradientFrom={`group-hover:bg-gradient-to-r group-hover:border-[6px] group-hover:${item.gradientFrom}`}
          gradientTo={item.gradientTo}
        />
      ))}
    </div>
  );
};

export default TopicGrid;
