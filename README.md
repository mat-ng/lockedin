# Lockedin API

The Lockedin API to manage the lock state.

This service tracks whether the lock is locked and whether it is triggered.

## API Response Format
All endpoints return a JSON object representing the current state of the lock:
```json
{
  "id": 1,
  "is_locked": boolean,
  "is_triggered": boolean
}
```

## API Endpoints
| Endpoint | Method | Action |
| :--- | :--- | :--- |
| `/lock` | `GET` | Get lock state |
| `/lock` | `POST` | Lock lock |
| `/unlock` | `POST` | Unlock lock |
| `/trigger` | `POST` | Trigger lock |
| `/untrigger` | `POST` | Untrigger lock |
