# Threads App

## Tech Stack

- **Framework**: Next.js 15 (App Router, React Server Components)
- **Runtime**: React 19
- **Language**: TypeScript 5
- **Database**: PostgreSQL (Prisma ORM 6.17)
- **Authentication**: NextAuth v5 (GitHub OAuth)
- **UI Library**: HeroUI 2.8 + Tailwind CSS v4
- **Animation**: Framer Motion 12
- **Validation**: Zod 4.1

## Architecture

### Server Actions
Located in `src/actions/`:
- `createTopic.ts` - Topic creation with slug generation
- `createPost.ts` - Post creation within topics
- `createComment.ts` - Nested comment creation
- `search.ts` - Full-text search implementation
- `signIn.ts` / `signOut.ts` - Authentication handlers

### Data Model

```
User ─┬─→ Post ───→ Comment (self-referential for nesting)
      │      ↓
      │    Topic
      └─→ Session/Account (NextAuth)
```

**Key Relationships:**
- Users authenticate via GitHub OAuth (NextAuth + Prisma Adapter)
- Topics contain multiple Posts (slug-based routing)
- Posts contain nested Comments (parent-child hierarchy via `parentId`)
- Cascade deletes on User/Post removal

### Routing Structure

```
/                           # Home page with topic list
/topics/[slug]             # Topic page with posts
/topics/[slug]/posts/[id]  # Individual post with comments
/topics/[slug]/posts/new   # Post creation form
/search                     # Search results page
/api/auth/[...nextauth]    # NextAuth endpoints
```

## Database Queries

Optimized queries in `src/utils/db/queries/`:
- **posts.ts**: Post fetching with user/topic/comment aggregation
- **comments.ts**: Recursive comment tree construction

## Component Architecture

- **Server Components**: Pages, data fetching
- **Client Components**: Forms, interactive UI (`'use client'`)
- **Patterns**: Form state management with `useActionState`, optimistic updates

## Environment Variables

```
DATABASE_URL           # PostgreSQL connection string
GITHUB_CLIENT_ID       # OAuth app credentials
GITHUB_CLIENT_SECRET
NEXTAUTH_URL           # Application URL
NEXTAUTH_SECRET        # Session encryption key
```

## Development

```bash
npm install
npx prisma migrate dev  # Run migrations
npm run dev             # Start on http://localhost:3000
```

## Build Configuration

- **Turbopack**: Enabled for dev and build
- **Image Optimization**: GitHub avatars allowed
- **PostCSS**: Tailwind v4 processing
