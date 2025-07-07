
import React from 'react';
import { Bell, User } from 'lucide-react';

interface HeaderProps {
  userType: string;
  userName: string;
  alerts?: number;
}

const Header: React.FC<HeaderProps> = ({ userType, userName, alerts = 0 }) => {
  return (
    <header className="pata-header">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center bg-pata-turquesa text-white rounded me-3" 
               style={{ width: '2rem', height: '2rem' }}>
            <span className="fw-bold">🐾</span>
          </div>
          <h4 className="mb-0 fw-bold text-pata-turquesa">Pataforma</h4>
        </div>
        
        <div className="d-flex align-items-center">
          <div className="position-relative me-3">
            <Bell className="text-muted" size={20} />
            {alerts > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                    style={{ fontSize: '0.7rem' }}>
                {alerts}
              </span>
            )}
          </div>
          
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-center bg-secondary text-white rounded-circle me-2"
                 style={{ width: '2rem', height: '2rem' }}>
              <User size={16} />
            </div>
            <div>
              <div className="fw-medium">{userName}</div>
              <small className="text-muted text-capitalize">{userType}</small>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
