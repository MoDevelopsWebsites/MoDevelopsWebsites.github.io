-- Drop existing admin user if exists
DO $$ 
BEGIN
  DELETE FROM auth.users WHERE email IN ('stunna0092@gmail.com', 'stunnacamz123@gmail.com');
EXCEPTION
  WHEN others THEN NULL;
END $$;

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
) ON CONFLICT (email) DO NOTHING;

-- Drop existing RLS policies if they exist
DROP POLICY IF EXISTS "Admins can do everything" ON fortnite_accounts;
DROP POLICY IF EXISTS "Public can view published accounts" ON fortnite_accounts;

-- Create new RLS policies
CREATE POLICY "Admins can do everything" 
  ON fortnite_accounts 
  FOR ALL 
  TO authenticated 
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE email = 'stunnacamz123@gmail.com'
  ))
  WITH CHECK (auth.uid() IN (
    SELECT id FROM auth.users WHERE email = 'stunnacamz123@gmail.com'
  ));

CREATE POLICY "Public can view published accounts" 
  ON fortnite_accounts 
  FOR SELECT 
  TO public 
  USING (published = true);