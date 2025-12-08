import React from 'react'
import { hosts } from './Home'

const TopHosts = () => {
  return (
    <div>

         {/* Top-Rated Hosts (Our Speakers style) */}
          <section className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Top-Rated Hosts</h2>
              <a href="/hosts" className="text-sm text-sky-600 hover:underline">See all hosts</a>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {hosts.map((h) => (
                <div key={h.id} className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50">
                  <img src={h.avatar} alt={h.name} className="w-20 h-20 rounded-full object-cover" />
                  <div className="mt-3 font-semibold">{h.name}</div>
                  <div className="text-sm text-gray-500">{h.events} events • {h.rating}★</div>
                  <a href={`/hosts/${h.id}`} className="mt-3 inline-block text-sm text-sky-600 hover:underline">View profile</a>
                </div>
              ))}
            </div>
          </section>
    </div>
  )
}

export default TopHosts