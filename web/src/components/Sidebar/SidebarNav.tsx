import { Stack } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack
      spacing="12"
      alignItems="flex-start"
    >
      <NavSection title="GERAL">
        <NavLink title="Dashboard" href="/dashboard" icon={RiDashboardLine} />
        <NavLink title="Usuários" href="/users" icon={RiContactsLine} />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink title="Formulários" href="/users/create" icon={RiInputMethodLine} />
        <NavLink title="Automação" href="/automation" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  );
}