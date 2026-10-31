-- ==========================================
-- V1: Initial database schema
-- API Security Assessment Portal
-- ==========================================

-- 1. Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,

    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100),

    enabled BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 2. Roles table
CREATE TABLE roles (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    name VARCHAR(50) NOT NULL UNIQUE,

    description VARCHAR(255)
);

-- 3. User-role mapping table
CREATE TABLE user_roles (
    user_id UUID NOT NULL,
    role_id BIGINT NOT NULL,

    PRIMARY KEY (user_id, role_id),

    CONSTRAINT fk_user_roles_user
        FOREIGN KEY (user_id)
        REFERENCES users(id),

    CONSTRAINT fk_user_roles_role
        FOREIGN KEY (role_id)
        REFERENCES roles(id)
);

-- 4. Insert default application roles
INSERT INTO roles (name, description)
VALUES
    ('REQUESTOR', 'Submits API security assessment requests'),
    ('ASSESSOR', 'Performs API security assessments'),
    ('APPROVER', 'Reviews and approves assessment outcomes'),
    ('ADMIN', 'Manages application configuration and users');
