import React from 'react';

export default function MainPage() {
  return (
    <div className="flex-grow bg-[#e0dcd7]">
      <main className="mt-20 mx-20 ">
        <h1 className="font-marker text-8xl mb-4 underline-offset-8 underline ml-10">Toxic City</h1>
        <div className="relative">
          <img
            src="/src/assets/images/Band.jpg"
            alt="Bild von Toxic City"
            className="float-right w-[680px] rounded-xl shadow-2xl ml-10 mr-20 max-md:mr-4 my-12"
          />
          <p className="text-2xl font-mono font-medium">
            <br />
            <br />
            Toxic City ist eine energiegeladene Rockband aus Kitzbühel mit fünf talentierten Mitgliedern: Sänger Kilian Lechner, Pianist David Fischer, Schlagzeuger Sebastian Gandler sowie den Gitarristen Felix Aschaber und Nico Achorner. Die Band begeistert ihr Publikum mit Klassikern wie Highway
            to Hell und T.N.T., die sie mit Leidenschaft und kraftvollem Sound performen. Ihr vielseitiges Talent und ihre mitreißende Bühnenpräsenz machen sie zu einem Highlight der lokalen Musikszene. Neben Covers arbeiten sie auch an eigenen Stücken, die ihren unverwechselbaren Stil
            widerspiegeln. Ob auf kleinen Bühnen oder bei Open-Air-Events – ein Muss für Fans von guter Live-Musik!
          </p>
        </div>
      </main>
    </div>
  );
}
