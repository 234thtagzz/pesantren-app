import { ProfileHero } from "../components/profile-hero";
import { ProfilePengasuh } from "../components/profile-pengasuh";

export function ProfileView() {
  return (
    <main className="min-h-screen bg-brand-bgLight text-slate-800 pb-16">
      <ProfileHero />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        <ProfilePengasuh />
      </div>
    </main>
  );
}