
import React from 'react';
import { Music2 } from 'lucide-react';

const MixesContent: React.FC = () => {
  const mixes = [
    {
      id: 'MIX-001',
      title: 'Subterranean Frequencies',
      artist: 'Void Protocol',
      duration: '74:23',
      date: '2023-12-02',
      tags: ['Dub Techno', 'Ambient', 'Industrial']
    },
    {
      id: 'MIX-002',
      title: 'Reverberant Spaces',
      artist: 'Glass Structures',
      duration: '63:14',
      date: '2023-10-15',
      tags: ['Atmospheric', 'Techno', 'Experimental']
    },
    {
      id: 'MIX-003',
      title: 'Nocturnal Transmissions',
      artist: 'Signal Path',
      duration: '58:47',
      date: '2023-09-01',
      tags: ['IDM', 'Breakbeat', 'Electro']
    },
    {
      id: 'MIX-004',
      title: 'Modular Explorations',
      artist: 'Frequency Modulator',
      duration: '67:32',
      date: '2023-07-22',
      tags: ['Experimental', 'Ambient', 'Noise']
    }
  ];

  return (
    <div className="max-h-[calc(100vh-16rem)] overflow-hidden">
      <h2 className="text-2xl font-display tracking-wider text-primary mb-6">_DJ MIXES</h2>
      
      <div className="space-y-4">
        {mixes.map((mix) => (
          <div key={mix.id} className="border border-border p-4 hover:border-primary transition-colors duration-150">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="mr-4 border border-border p-2">
                  <Music2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg text-secondary font-display tracking-wider">{mix.title}</h3>
                  <div className="text-sm">{mix.artist}</div>
                </div>
              </div>
              <div className="text-xs border border-muted px-2 py-1">
                {mix.duration}
              </div>
            </div>
            
            <div className="mt-3 flex justify-between items-center text-xs">
              <div className="flex gap-2">
                {mix.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 border border-border">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-muted-foreground">
                {new Date(mix.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-xs text-muted-foreground mt-6">
        ALL MIXES AVAILABLE FOR STREAMING AT SOUNDCLOUD.COM/INTERLINKED-RECORDS
      </div>
    </div>
  );
};

export default MixesContent;
