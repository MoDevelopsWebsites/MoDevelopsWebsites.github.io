/*
  # Update Admin Credentials and RLS Policy

  1. Changes
    - Update admin credentials
    - Modify RLS policy to allow admin access without email restriction
    - Drop existing admin user and recreate with new credentials
*/

-- Drop existing admin user
DELETE FROM auth.users WHERE email = 'stunna0092@gmail.com';

-- Create new admin user
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  role,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  gen_random_uuid(),
  '00000000-0000-0000-0000-000000000000',
  'stunnacamz123@gmail.com',
  crypt('stunnacamz0092', gen_salt('bf')),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  now(),
  now(),
  'authenticated',
  '',
  '',
  '',
  ''
);

-- Drop existing RLS policy
DROP POLICY IF EXISTS "Admins can do everything" ON fortnite_accounts;

-- Create new RLS policy without email restriction
CREATE POLICY "Admins can do everything" 
  ON fortnite_accounts 
  FOR ALL 
  TO authenticated 
  USING (true)
  WITH CHECK (true);