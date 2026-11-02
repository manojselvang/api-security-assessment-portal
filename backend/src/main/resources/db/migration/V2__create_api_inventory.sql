CREATE TABLE apis (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(150) NOT NULL,
    description TEXT,

    base_url VARCHAR(500) NOT NULL,
    api_type VARCHAR(50) NOT NULL,

    owner VARCHAR(150),
    environment VARCHAR(50) NOT NULL,

    authentication_type VARCHAR(50),
    data_classification VARCHAR(50),
    criticality VARCHAR(30) NOT NULL,

    status VARCHAR(30) NOT NULL DEFAULT 'ACTIVE',

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_apis_name ON apis(name);
CREATE INDEX idx_apis_status ON apis(status);
CREATE INDEX idx_apis_criticality ON apis(criticality);