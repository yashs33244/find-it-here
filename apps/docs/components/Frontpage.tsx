// pages/index.js or any other page
import TopicGrid from '../components/TopicGrid';

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh dark:bg-background-dark">
      <main className="flex-1 py-8 px-4 md:px-6 lg:px-8 dark:bg-background-dark">
        <TopicGrid />
      </main>
    </div>
  );
}
