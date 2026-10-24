-- Remove the contact row created while diagnosing the production homepage error.
DELETE FROM "Message"
WHERE id = 'cmvmlyd1x0000148dt33bnfew'
  AND email = 'a@b.co';
