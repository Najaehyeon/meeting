import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kkzhsaqigwpuzgvszvuz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtremhzYXFpZ3dwdXpndnN6dnV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NTE4NTMsImV4cCI6MjA3NTEyNzg1M30.2_EvGzGXY9dPZrvh4hphWdMYv2miSs0oEBgY8-TVnJQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);