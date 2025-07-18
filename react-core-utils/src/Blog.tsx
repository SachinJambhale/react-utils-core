import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppAppBar from './BlogComponents/AppAppBar';
import MainContent from './BlogComponents/MainContent';
import Latest from './BlogComponents/Latest';
import Footer from './BlogComponents/Footer';
import AppTheme from './shared-theme/AppTheme';

export default function Blog(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <MainContent />
        <Latest />
      </Container>
      <Footer />
    </AppTheme>
  );
}
