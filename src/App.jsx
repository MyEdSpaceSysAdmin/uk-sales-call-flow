import React, { useState } from 'react';
import UKSalesCallFlow from './components/UKSalesCallFlow';
import USSalesCallFlow from './components/USSalesCallFlow';

const FLOWS = [
  { id: 'uk-sales', label: '🇬🇧 UK Sales', region: 'uk', viewMode: 'sales' },
  { id: 'uk-trial', label: '🇬🇧 UK Trial', region: 'uk', viewMode: 'trial' },
  { id: 'us-sales', label: '🇺🇸 US Sales', region: 'us', viewMode: null },
];

const BAR_HEIGHT = 40;

export default function App() {
  const [activeFlow, setActiveFlow] = useState('uk-sales');
  const current = FLOWS.find((f) => f.id === activeFlow);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Flow selector bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: BAR_HEIGHT,
        background: '#0a0f1e',
        display: 'flex',
        alignItems: 'center',
        zIndex: 300,
        borderBottom: '2px solid #3533ff',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', fontWeight: '700', padding: '0 14px', letterSpacing: '1px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
          FLOW:
        </span>
        {FLOWS.map((flow) => (
          <button
            key={flow.id}
            onClick={() => setActiveFlow(flow.id)}
            style={{
              padding: '0 18px',
              height: '100%',
              background: activeFlow === flow.id ? '#3533ff' : 'transparent',
              color: activeFlow === flow.id ? '#ffffff' : 'rgba(255,255,255,0.5)',
              border: 'none',
              borderRight: '1px solid rgba(255,255,255,0.08)',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '700',
              fontSize: '11px',
              letterSpacing: '0.5px',
              transition: 'background 0.15s',
            }}
          >
            {flow.label}
          </button>
        ))}
      </div>

      {/* Offset content below fixed bar */}
      <div style={{ paddingTop: BAR_HEIGHT }}>
        {current.region === 'us' ? (
          <USSalesCallFlow topOffset={BAR_HEIGHT} />
        ) : (
          <UKSalesCallFlow viewMode={current.viewMode} topOffset={BAR_HEIGHT} />
        )}
      </div>
    </div>
  );
}
