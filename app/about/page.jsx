import History from '@/components/about/history';
import OurGarden from '@/components/about/our-garden';
import Profile from '@/components/about/profile';
import Teams from '@/components/about/teams';

export default function Page() {
  return (
    <main>
      <Profile />
      <History />
      <OurGarden />
      <Teams />
    </main>
  );
}
