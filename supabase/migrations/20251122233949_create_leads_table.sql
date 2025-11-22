/*
  # Create leads table

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `whatsapp` (text) - WhatsApp number with area code
      - `email` (text) - Primary email address
      - `question_1` (text) - Answer to question 1 (emotional pain)
      - `question_2` (text) - Answer to question 2 (scarcity cycles)
      - `question_3` (text) - Answer to question 3 (energy drain)
      - `question_4` (text) - Answer to question 4 (self-connection)
      - `question_5` (text) - Answer to question 5 (potential scale)
      - `question_6` (text) - Answer to question 6 (universe delivery)
      - `question_7` (text) - Answer to question 7 (fighting alone)
      - `question_8` (text) - Answer to question 8 (main intention)
      - `question_9` (text) - Answer to question 9 (emotional/financial secret)
      - `question_10` (text) - Answer to question 10 (readiness for guided phase)
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `leads` table
    - Add policy for service role to insert data (for form submissions)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  whatsapp text NOT NULL,
  email text NOT NULL,
  question_1 text DEFAULT '',
  question_2 text DEFAULT '',
  question_3 text DEFAULT '',
  question_4 text DEFAULT '',
  question_5 text DEFAULT '',
  question_6 text DEFAULT '',
  question_7 text DEFAULT '',
  question_8 text DEFAULT '',
  question_9 text DEFAULT '',
  question_10 text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);