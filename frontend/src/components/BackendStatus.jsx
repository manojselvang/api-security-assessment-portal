
import { useEffect, useState } from 'react';
import { getBackendHealth } from '../services/healthService';

function BackendStatus() {
  const [status, setStatus] = useState('Checking...');
  const [details, setDetails] = useState('');

  useEffect(() => {
    let active = true;

    const checkBackend = async () => {
      try {
        const data = await getBackendHealth();

        if (active) {
          setStatus(data.status);
          setDetails(data.application);
        }
      } catch (error) {
        if (active) {
          setStatus('DOWN');
          setDetails('Backend connection failed');
        }

        console.error('Backend health check failed:', error);
      }
    };

    checkBackend();

    return () => {
      active = false;
    };
  }, []);

  const isUp = status === 'UP';

  return (
    <div
      className="backend-status"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '13px'
      }}
    >
      <span
        style={{
          width: '9px',
          height: '9px',
          borderRadius: '50%',
          backgroundColor: isUp ? '#22c55e' : '#ef4444'
        }}
      />

      <span>
        Backend: <strong>{status}</strong>
      </span>

      {details && <span>({details})</span>}
    </div>
  );
}

export default BackendStatus;
