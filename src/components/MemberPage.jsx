import React from 'react';
import { useParams } from 'react-router-dom';

export default function MemberPage() {
  const { name } = useParams();

  const memberInfo = {
    'kilian-lechner': { role: 'Sänger', description: 'Kilian ist der charismatische Frontmann von Toxic City.' },
    'sebastian-gandler': { role: 'Schlagzeuger', description: 'Sebastian sorgt für den treibenden Rhythmus der Band.' },
    'david-fischer': { role: 'Pianist', description: 'David verleiht den Songs von Toxic City eine einzigartige Note.' },
    'felix-aschaber': { role: 'Gitarrist', description: 'Felix begeistert mit seinen energiegeladenen Gitarrenriffs.' },
    'nico-achorner': { role: 'Gitarrist', description: 'Nico komplettiert den kraftvollen Sound von Toxic City.' },
  };

  const member = memberInfo[name.toLowerCase().replace(' ', '-')] || { role: 'Mitglied', description: 'Information nicht verfügbar.' };

  return (
    <div className="flex-grow bg-[#e0dcd7] p-8">
      <h1 className="font-marker text-6xl mb-4">{name}</h1>
      <h2 className="text-2xl font-mono mb-2">{member.role}</h2>
      <p className="text-xl font-mono">{member.description}</p>
    </div>
  );
}
