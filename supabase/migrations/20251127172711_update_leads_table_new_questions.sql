/*
  # Update leads table with new columns for questions 10-17

  1. Changes
    - Add `name` column for lead's full name
    - Add `question_10` through `question_17` columns for new questions
    - Updated questions include: recurring dreams, group journey experience, therapeutic follow-up, spiritual tradition, transformation timeline, internal voice, readiness for guided phase, and investment willingness
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'name'
  ) THEN
    ALTER TABLE leads ADD COLUMN name text DEFAULT '';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'question_10'
  ) THEN
    ALTER TABLE leads ADD COLUMN question_10 text DEFAULT '';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'question_11'
  ) THEN
    ALTER TABLE leads ADD COLUMN question_11 text DEFAULT '';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'question_12'
  ) THEN
    ALTER TABLE leads ADD COLUMN question_12 text DEFAULT '';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'question_13'
  ) THEN
    ALTER TABLE leads ADD COLUMN question_13 text DEFAULT '';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'question_14'
  ) THEN
    ALTER TABLE leads ADD COLUMN question_14 text DEFAULT '';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'question_15'
  ) THEN
    ALTER TABLE leads ADD COLUMN question_15 text DEFAULT '';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'question_16'
  ) THEN
    ALTER TABLE leads ADD COLUMN question_16 text DEFAULT '';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'question_17'
  ) THEN
    ALTER TABLE leads ADD COLUMN question_17 text DEFAULT '';
  END IF;
END $$;