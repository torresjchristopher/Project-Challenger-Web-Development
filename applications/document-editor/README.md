# Task 2: Collaborative Document Editor

Real-time collaborative text editor with live cursors, version history, and CRDT-based conflict resolution.

## Overview

A Google Docs-like collaborative editor featuring:
- Real-time synchronization using Socket.io
- CRDT (Yjs) for conflict-free collaboration
- Live cursor/presence awareness
- Version history and undo/redo
- Document sharing with permissions
- Rich text formatting
- TypeScript throughout

## Features

✅ **Real-Time Collaboration**
- Multiple users editing simultaneously
- Live cursor tracking
- User presence indicators
- Automatic conflict resolution (CRDT)

✅ **Rich Text Support**
- Bold, italic, underline
- Lists and headings
- Code blocks
- Inline comments

✅ **Version Control**
- Full edit history
- Revert to previous versions
- Diff visualization
- Automatic backups

✅ **Sharing & Permissions**
- Public/private documents
- Share links with access levels
- Role-based permissions (view, edit, admin)
- Real-time permission updates

## Tech Stack

- **Frontend**: React 18, TypeScript, Yjs, Socket.io, TipTap/Monaco
- **Backend**: Node.js, Express, Socket.io, Yjs, PostgreSQL, Redis
- **Real-time**: CRDT for conflict resolution

## Getting Started

```bash
cd backend && npm install && npm run dev
cd frontend && npm install && npm run dev
```

## Key Features

- Multi-user real-time editing
- Live cursor tracking
- Version history with rollback
- Document sharing with permissions
- Rich text formatting
- Automatic conflict resolution

## Metrics

- **Type**: Full-stack Application
- **Difficulty**: Advanced
- **Est. LOC**: 6,000+

Part of **Project Challenger 1: Web Development**
