import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import SmartGateHero from '@/components/smart-gate/SmartGateHero';
import GatePillars from '@/components/smart-gate/GatePillars';
import GateDashboard from '@/components/smart-gate/GateDashboard';
import DigitalPass from '@/components/smart-gate/DigitalPass';
import GateModuleMaterials from '@/components/smart-gate/GateModuleMaterials';
import GateModuleVehicles from '@/components/smart-gate/GateModuleVehicles';
import GateModuleContractors from '@/components/smart-gate/GateModuleContractors';
import GateRoles from '@/components/smart-gate/GateRoles';
import GateIndustries from '@/components/smart-gate/GateIndustries';
import PageCta from '@/components/shared/PageCta';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Smart Gate Visitor and Gate Management Software',
  description:
    'Velantra Smart Gate digitizes visitor registration, approvals, secure gate access, digital passes, vehicle tracking, material movement, and contractor entry.',
  path: '/smart-gate',
  keywords: [
    'Smart Gate',
    'visitor management system',
    'gate pass software',
    'vehicle tracking',
    'material inward outward',
    'contractor management',
  ],
  image: '/smart-gate%20bg.png',
});

export default function Page() {
  return (
    <div data-body-class="product-v3 gate-page smart-gate-refresh antialiased overflow-x-hidden">
      <ScrollProgress />
      <Header active="smart-gate" />
      <main>
        <SmartGateHero />
        <GatePillars />
        <GateDashboard />
        <DigitalPass />
        <GateModuleMaterials />
        <GateModuleVehicles />
        <GateModuleContractors />
        <GateRoles />
        <GateIndustries />
        <PageCta variant="smart-gate" />
      </main>
      <Footer />
    </div>
  );
}
