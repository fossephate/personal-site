import React from "react";

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-gray-100 rounded-md">
        <div className="rounded-t-md bg-gray-300">
          <a
            onClick={() => {
              location.href = "/dj/";
            }}
          >
            <img src="/assets/dj.png" className="rounded-md mx-auto max-h-44" />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a
            onClick={() => {
              location.href = "/dj/";
            }}
            className="hover:underline"
          >
            <h2 className="text-lg font-bold text-gray-600">Democratic DJ</h2>
          </a>
          <p className="text-sm text-gray-600">
            A webapp to create the most fire 🔥 playlist for your next party.
          </p>
        </div>
      </div>
      <div className="bg-gray-100 rounded-md">
        <div className="rounded-t-md bg-gray-300">
          <a href="https://github.com/fwd/nautilus">
            <img src="/assets/nautilus-banner.png" className="rounded-t-md" />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a href="https://github.com/fwd/nautilus" className="hover:underline">
            <h2 className="text-lg font-bold text-gray-600">Nautilus</h2>
          </a>
          <p className="text-sm text-gray-600">
            A Nano wallet for iOS and Android packed with features and nano.to
            integration.
          </p>
        </div>
      </div>
      <div className="bg-gray-100 rounded-md">
        <div className="rounded-t-md bg-gray-300">
          <a href="https://github.com/fossephate/JoyCon-Driver">
            <img
              src="https://i.imgur.com/ihK9WNf.png"
              className="mx-auto max-h-44"
            />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a
            href="https://github.com/fossephate/JoyCon-Driver"
            className="hover:underline"
          >
            <h2 className="text-lg font-bold text-gray-600">JoyCon-Driver</h2>
          </a>
          <p className="text-sm text-gray-600">
            It lets you use your Nintendo Switch's Joy-Cons on your PC! The
            first of it's kind and I did a lot of the RE that made it possible.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-md">
        <div className="rounded-t-md bg-gray-300">
          <a href="https://remotegames.io">
            <img
              src="https://via.placeholder.com/640x360"
              className="rounded-t-md mx-auto max-h-44"
            />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a href="https://remotegames.io" className="hover:underline">
            <h2 className="text-lg font-bold text-gray-600">Remote Games</h2>
          </a>
          <p className="text-sm text-gray-600">
            Like google's stadia mashed with the defunct rabb.it service,
            because how else was I going to play smash on my laptop in class?
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-md">
        <div className="rounded-t-md bg-gray-300">
          <a href="https://www.reddit.com/r/ipod/comments/p7as70/finally_finished_modding_my_7th_gen_classic_with/">
            <img
              src="/assets/ipod.png"
              className="rounded-md mx-auto max-h-44"
            />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a
            href="https://www.reddit.com/r/ipod/comments/p7as70/finally_finished_modding_my_7th_gen_classic_with/"
            className="hover:underline"
          >
            <h2 className="text-lg font-bold text-gray-600">
              World's Best iPod Classic
            </h2>
          </a>
          <p className="text-sm text-gray-600">
            Packed with USB-C, 1TB of flash storage, Bluetooth 5.0 and more!
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-md">
        <div className="rounded-t-md bg-gray-300">
          <a href="/party/">
            <img
              src="https://via.placeholder.com/640x360"
              className="rounded-t-md mx-auto max-h-44"
            />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a href="/party/" className="hover:underline">
            <h2 className="text-lg font-bold text-gray-600">Party Planner</h2>
          </a>
          <p className="text-sm text-gray-600">
            A Party Planning disaster solver.
          </p>
        </div>
      </div>
    </div>
  );
}
