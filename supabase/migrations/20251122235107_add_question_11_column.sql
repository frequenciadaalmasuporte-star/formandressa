/*
  # Add question_11 column to leads table

  1. Changes
    - Add `question_11` column to store answer about investment willingness
    - Column stores the user's response to whether they're willing to invest and work with Andressa
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'question_11'
  ) THEN
    ALTER TABLE leads ADD COLUMN question_11 text DEFAULT '';
  END IF;
END $$;