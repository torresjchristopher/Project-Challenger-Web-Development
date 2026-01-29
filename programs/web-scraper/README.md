# Task 3: Web Scraper CLI

Production-grade command-line web scraper with data transformation, job queuing, and database persistence.

## Overview

A professional web scraping tool featuring:
- Headless browser automation (Puppeteer)
- CSS/XPath selectors
- Data validation and transformation
- Job queue for batch processing
- Rate limiting and proxy support
- Database persistence
- Error handling and retry logic
- Schedule support (cron jobs)

## Features

✅ **Core Scraping**
- Headless browser automation
- JavaScript rendering support
- Cookie/session handling
- User-agent rotation
- Proxy support

✅ **Data Processing**
- CSS/XPath selectors
- JSON/CSV extraction
- Data validation with Joi
- Custom transformers
- Duplicate detection

✅ **Production Ready**
- Job queue (Bull)
- Rate limiting
- Retry mechanisms
- Error logging
- Scheduled tasks

✅ **CLI Commands**
```bash
scraper scrape <url> [--selector] [--format]
scraper schedule <url> [--cron]
scraper list-jobs
scraper export [--format] [--output]
scraper validate <file>
```

## Tech Stack

- **Core**: Node.js, Puppeteer, TypeScript
- **Queue**: Bull (Redis-backed)
- **Database**: PostgreSQL
- **Validation**: Joi
- **CLI**: Commander.js

## Installation

```bash
npm install -g @your-org/web-scraper
# or
scraper --version
```

## Usage

```bash
# Basic scraping
scraper scrape https://example.com --selector "h1, p"

# With transformation
scraper scrape https://example.com --output data.json --transform custom.js

# Schedule recurring
scraper schedule https://example.com --cron "0 0 * * *"

# Export all results
scraper export --format csv --output results.csv
```

## Metrics

- **Type**: CLI Program
- **Difficulty**: Intermediate
- **Real-world**: Fully functional, downloadable tool
- **Est. LOC**: 3,500+

Part of **Project Challenger 1: Web Development**
