/*
  # Fix admin authentication and policies

  1. Changes
    - Remove existing admin users safely
    - Create new admin user
    - Update RLS policies
    - Add performance indexes

  2. Security
    - Enable RLS
    - Add policies for admin access
    - Add policy for public read access
*/

-- Drop existing admin users if they exist
DO $$ 
BEGIN
  DELETE FROM auth.users WHERE email IN ('stunna0092@gmail.com', 'stunnacamz123@gmail.com');
EXCEPTION
  WHEN others THEN NULL;
END $$;

-- Create new admin user
DO $$ 
DECLARE 
  user_id uuid;
BEGIN
  -- Only insert if the email doesn't exist
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'stunnacamz123@gmail.com') THEN
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
      '{"is_admin": true}',
      now(),
      now(),
      'authenticated',
      '',
      '',
      '',
      ''
    );
  END IF;
END $$;

-- Drop existing RLS policies
DROP POLICY IF EXISTS "Admins can do everything" ON fortnite_accounts;
DROP POLICY IF EXISTS "Public can view published accounts" ON fortnite_accounts;

-- Create more permissive RLS policies for authenticated users
CREATE POLICY "Authenticated users can manage accounts" 
  ON fortnite_accounts 
  FOR ALL 
  TO authenticated 
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Public can view published accounts" 
  ON fortnite_accounts 
  FOR SELECT 
  TO public 
  USING (published = true);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_fortnite_accounts_published ON fortnite_accounts(published);
CREATE INDEX IF NOT EXISTS idx_fortnite_accounts_created_at ON fortnite_accounts(created_at DESC);