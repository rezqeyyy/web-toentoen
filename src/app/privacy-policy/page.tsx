// src/app/privacy-policy/page.tsx

import type { Metadata } from 'next';
import { PrivacyPolicyContent } from '@/components/privacy-policy/PrivacyPolicyContent';
import { PRIVACY_POLICY_META } from '@/constants/privacy-policy';

export const metadata: Metadata = {
  title: `${PRIVACY_POLICY_META.title} | Toentoen`,
  description:
    'Pelajari bagaimana Toentoen mengumpulkan, menggunakan, dan melindungi data pribadi Anda sesuai dengan peraturan perundang-undangan yang berlaku di Indonesia.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}

