import Image from 'next/image';
import { styled, css } from '@pigment-css/react';
import Stack from '@pigment-css/react/Stack';
import styles from './page.module.css';

declare global {
  namespace React {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface HTMLAttributes<T> {
      sx?: any;
    }
  }
}

const visuallyHidden = css({
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
});

const Main = styled.main(({ theme }) => ({
  color: theme.vars['foreground-rgb'],
  background: `linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb))`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '6rem',
  minHeight: '100vh',
  ...theme.applyStyles('dark', {
    color: 'yellow',
  }),
}));

const Description = styled.div({
  display: 'inherit',
  justifyContent: 'inherit',
  alignItems: 'inherit',
  fontSize: '0.85rem',
  maxWidth: 'var(--max-width)',
  width: '100%',
  zIndex: 2,
  fontFamily: 'var(--font-mono)',
  '& a': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
  },
  '& p': {
    position: 'relative',
    margin: 0,
    padding: '1rem',
    backgroundColor: 'rgba(var(--callout-rgb), 0.5)',
    border: '1px solid rgba(var(--callout-border-rgb), 0.3)',
    borderRadius: 'var(--border-radius)',
  },
  '@media (max-width: 700px)': {
    fontSize: '0.8rem',
    '& a': {
      padding: '1rem',
    },
    '& p, & div': {
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      width: '100%',
    },
    '& p': {
      alignItems: 'center',
      inset: '0 0 auto',
      padding: '2rem 1rem 1.4rem',
      borderRadius: '0',
      border: 'none',
      borderBottom: '1px solid rgba(var(--callout-border-rgb), 0.25)',
      background: `linear-gradient(
  to bottom,
  rgba(var(--background-start-rgb), 1),
  rgba(var(--callout-rgb), 0.5)
)`,
      backgroundClip: 'padding-box',
      backdropFilter: 'blur(24px)',
    },
    '& div': {
      alignItems: 'flex-end',
      pointerEvents: 'none',
      inset: 'auto 0 0',
      padding: '2rem',
      height: '200px',
      background: `linear-gradient(to bottom, transparent 0%, rgb(var(--background-end-rgb)) 40%)`,
      zIndex: 1,
    },
  },
});

export default function Home() {
  return (
    <Main>
      <div className={visuallyHidden}>I am invisible</div>
      <Description
        sx={{
          '&::before': {
            content: '"🚀"',
            display: 'inline-block',
            border: '1px solid',
          },
        }}
      >
        <Stack spacing={{ xs: 2, md: 3 }}>
          <div>Item1</div>
          <div>Item1</div>
          <div>Item1</div>
        </Stack>
        <p sx={{ boxShadow: '0 0 4px 0 rgba(0 0 0 / 0.12)' }}>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </Description>

      <div
        className={styles.center}
        sx={{
          border: '1px solid',
        }}
      >
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
        </a>
      </div>
    </Main>
  );
}
