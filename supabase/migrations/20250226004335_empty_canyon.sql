/*
  # Create storage bucket for account images

  1. New Storage
    - Create 'account-images' bucket for storing Fortnite account images
  
  2. Security
    - Enable public access to view images
    - Allow authenticated users to upload images
*/

-- Create a new public bucket for account images
INSERT INTO storage.buckets (id, name, public)
VALUES ('account-images', 'account-images', true);

-- Allow public access to view images
CREATE POLICY "Public can view account images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'account-images');

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'account-images'
  AND owner = auth.uid()
);

-- Allow authenticated users to delete their own images
CREATE POLICY "Users can delete own images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'account-images' AND owner = auth.uid());