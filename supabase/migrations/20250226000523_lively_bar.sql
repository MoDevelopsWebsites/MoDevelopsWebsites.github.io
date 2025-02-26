/*
  # Create Fortnite accounts table

  1. New Tables
    - `fortnite_accounts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `price` (numeric)
      - `image` (text)
      - `published` (boolean)
      - `created_at` (timestamp)
      - `user_id` (uuid, foreign key to auth.users)

  2. Security
    - Enable RLS on `fortnite_accounts` table
    - Add policies for:
      - Admins can manage all accounts
      - Public users can only read published accounts
*/

CREATE TABLE IF NOT EXISTS fortnite_accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  image text NOT NULL,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

ALTER TABLE fortnite_accounts ENABLE ROW LEVEL SECURITY;

-- Allow admins to do everything
CREATE POLICY "Admins can do everything" 
  ON fortnite_accounts 
  FOR ALL 
  TO authenticated 
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE email = 'stunna0092@gmail.com'
  ))
  WITH CHECK (auth.uid() IN (
    SELECT id FROM auth.users WHERE email = 'stunna0092@gmail.com'
  ));

-- Allow public to read published accounts
CREATE POLICY "Public can view published accounts" 
  ON fortnite_accounts 
  FOR SELECT 
  TO public 
  USING (published = true);