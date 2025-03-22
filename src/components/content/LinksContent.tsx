
import React from 'react';
import { Link } from 'lucide-react';

const LinksContent: React.FC = () => {
  const links = [
    {
      category: 'MUSIC PLATFORMS',
      items: [
        { label: 'BANDCAMP', url: 'https://interlinked-records.bandcamp.com' },
        { label: 'SOUNDCLOUD', url: 'https://soundcloud.com/interlinked-records' },
        { label: 'RESIDENT ADVISOR', url: 'https://ra.co/labels/interlinked' }
      ]
    },
    {
      category: 'DISTRIBUTION',
      items: [
        { label: 'HARDWAX', url: 'https://hardwax.com' },
        { label: 'BOOMKAT', url: 'https://boomkat.com' },
        { label: 'JUNO RECORDS', url: 'https://junorecords.com' }
      ]
    },
    {
      category: 'AFFILIATED COLLECTIVES',
      items: [
        { label: 'DEEP SPACE TRANSMISSIONS', url: 'https://deepspacetransmissions.net' },
        { label: 'CONCRETE FREQUENCY', url: 'https://concretefrequency.org' },
        { label: 'MODULAR RESEARCH LAB', url: 'https://modularresearchlab.com' }
      ]
    },
    {
      category: 'RADIO SHOWS',
      items: [
        { label: 'RINSE FM', url: 'https://rinse.fm' },
        { label: 'NTS RADIO', url: 'https://nts.live' },
        { label: 'THE WIRE', url: 'https://thewire.co.uk' }
      ]
    }
  ];

  return (
    <div className="max-h-[calc(100vh-16rem)] overflow-hidden">
      <h2 className="text-2xl font-display tracking-wider text-primary mb-6">_LINKS</h2>
      
      <div className="grid grid-cols-2 gap-6">
        {links.map((category, index) => (
          <div key={index} className="border border-border p-4">
            <h3 className="text-sm text-secondary font-display tracking-wider mb-3">{category.category}</h3>
            
            <ul className="space-y-3">
              {category.items.map((item, idx) => (
                <li key={idx} className="group">
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-xs hover:text-primary transition-colors duration-150"
                  >
                    <Link className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="border border-border p-4 mt-6">
        <h3 className="text-sm text-secondary font-display tracking-wider mb-3">CONTACT</h3>
        <div className="text-xs space-y-2">
          <p>GENERAL: INFO@INTERLINKED-RECORDS.NET</p>
          <p>DEMOS: DEMOS@INTERLINKED-RECORDS.NET</p>
          <p>PRESS: PRESS@INTERLINKED-RECORDS.NET</p>
        </div>
      </div>
    </div>
  );
};

export default LinksContent;
